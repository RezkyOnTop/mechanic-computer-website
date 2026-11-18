# Mechanic Computer — Company Profile

Company profile site for **Mechanic Computer**, an AI & cloud infrastructure services
practice. Static marketing site built with the Next.js App Router: services, process,
technology stack, company profile, contact, and privacy pages.

Live: [mechaniccomputer.biz.id](https://mechaniccomputer.biz.id)

---

## Halaman

| Route | Isi |
| --- | --- |
| `/` | Beranda: hero, empat layanan inti, alur kerja Discover → Build → Operate, tumpukan teknologi, ajakan kontak |
| `/services` | Rincian layanan (AI & intelligent systems, cloud infrastructure, backend & data, DevOps & delivery) |
| `/about` | Profil perusahaan |
| `/contact` | Kontak dan kanal komunikasi |
| `/privacy` | Kebijakan privasi |
| `/sitemap.ts`, `/robots.ts` | Sitemap dan aturan perayapan, dibuat dari route handler |

Metadata Open Graph, kartu Twitter, dan JSON-LD `ProfessionalService` dipasang di
`src/app/layout.tsx` supaya hasil pratinjau tautan konsisten di semua halaman.

## Teknologi

| Bagian | Pilihan |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Bahasa | TypeScript (strict) |
| UI | React 18 · Tailwind CSS 3 · Framer Motion · lucide-react |
| Gaya | CSS Modules untuk komponen besar (`CorporateSite.module.css`), utility Tailwind untuk sisanya |
| Lint | ESLint (`next/core-web-vitals`) |
| Aset | Ikon teknologi SVG di `public/tech` |

## Struktur

```
src/
├── app/
│   ├── layout.tsx            # metadata global, JSON-LD, viewport
│   ├── page.tsx              # beranda → <CorporateSite />
│   ├── about/  services/  contact/  privacy/
│   ├── globals.css  content.module.css
│   ├── sitemap.ts  robots.ts
├── components/
│   ├── CorporateSite.tsx     # komponen utama beranda (client)
│   ├── PageShell.tsx         # kerangka halaman dalam
│   └── CorporateSite.module.css
public/
├── tech/                     # 32 ikon teknologi SVG
├── og-image.png
└── mechanic-logo-lockup.png
```

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
npm start        # jalankan hasil build
npm run lint
```

Node.js 18.18+ (disarankan 20+).

## Catatan

- Seluruh halaman dapat dirender statis; tidak ada basis data atau API internal.
- Alamat surel, nomor, dan alamat kantor di `layout.tsx` (JSON-LD) serta halaman kontak
  adalah data perusahaan sebenarnya — perbarui di satu tempat bila berubah.

## Lisensi

Isi dan merek milik Mechanic Computer. Kode boleh dipelajari; logo dan materi
pemasaran tidak untuk dipakai ulang.
