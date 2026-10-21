import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const to = process.env.ENQUIRY_TO || 'hello@mechaniccomputer.co.id'
const from = process.env.ENQUIRY_FROM || 'Mechanic Computer <onboarding@resend.dev>'
const key = process.env.RESEND_API_KEY

type Payload = { name?: string; email?: string; message?: string }

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export async function POST(req: Request) {
  let body: Payload
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid-json' }, { status: 400 })
  }

  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const message = (body.message || '').trim()

  if (name.length < 2 || name.length > 120) {
    return NextResponse.json({ ok: false, error: 'name' }, { status: 422 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 160) {
    return NextResponse.json({ ok: false, error: 'email' }, { status: 422 })
  }
  if (message.length < 10 || message.length > 4000) {
    return NextResponse.json({ ok: false, error: 'message' }, { status: 422 })
  }

  const text = `New project enquiry

Name:  ${name}
Email: ${email}

${message}`

  if (!key) {
    console.log('[enquiry] no RESEND_API_KEY configured', { name, email, chars: message.length })
    return NextResponse.json({ ok: false, error: 'not-configured' }, { status: 503 })
  }

  const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6;color:#0b1b2b">
  <p style="margin:0 0 18px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#5b7691">New project enquiry</p>
  <table style="border-collapse:collapse;font-size:15px">
    <tr><td style="padding:4px 18px 4px 0;color:#5b7691">Name</td><td style="padding:4px 0"><b>${esc(name)}</b></td></tr>
    <tr><td style="padding:4px 18px 4px 0;color:#5b7691">Email</td><td style="padding:4px 0"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
  </table>
  <hr style="border:none;border-top:1px solid #dbe5ee;margin:20px 0" />
  <p style="white-space:pre-wrap;margin:0">${esc(message)}</p>
</div>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Project enquiry — ${name}`,
        text,
        html,
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error('[enquiry] provider rejected', res.status, detail.slice(0, 300))
      return NextResponse.json({ ok: false, error: 'provider' }, { status: 502 })
    }

    const data = (await res.json()) as { id?: string }
    return NextResponse.json({ ok: true, id: data.id ?? null })
  } catch (err) {
    console.error('[enquiry] send failed', err)
    return NextResponse.json({ ok: false, error: 'network' }, { status: 502 })
  }
}
