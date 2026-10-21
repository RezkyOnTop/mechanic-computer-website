import Link from 'next/link'
import styles from '@/app/content.module.css'

const nav = [
  ['/services', 'Services'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
] as const

export default function PageShell({
  active,
  children,
}: {
  active: string
  children: React.ReactNode
}) {
  return (
    <div className={styles.page}>
      <header className={styles.top}>
        <Link href="/" className={styles.topBrand} aria-label="Mechanic Computer home">
          <img src="/mechanic-logo-lockup.png" alt="Mechanic Computer" />
        </Link>
        <nav className={styles.topNav} aria-label="Site">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} data-active={active === href ? 'true' : 'false'}>
              {label}
            </Link>
          ))}
          <Link href="/#contact" className={styles.topCta}>
            Start ↗
          </Link>
        </nav>
      </header>

      {children}

      <footer className={styles.bottom}>
        <span>© 2024 Mechanic Computer. Banjarbaru, Indonesia.</span>
        <span>
          <Link href="/privacy">Privacy</Link> · <Link href="/">Home</Link>
        </span>
      </footer>
    </div>
  )
}
