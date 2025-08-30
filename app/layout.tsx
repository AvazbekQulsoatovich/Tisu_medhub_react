import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "TISU Medical Hub - O'zbekistonning eng yirik xususiy tibbiyot markazi",
  description:
    "TISU Medical Hub - Bizga eng qimmatli narsa — bu sizning sog'lig'ingiz. 1+ yillik tajriba, 24/7 xizmat, 57+ davolash yo'nalishlari.",
  generator: "v0.app",
  keywords: "TISU Medical Hub, tibbiyot markazi, Uzbekistan, healthcare, medical clinic, Termiz",
  authors: [{ name: "TISU Medical Hub" }],
  openGraph: {
    title: "TISU Medical Hub",
    description: "O'zbekistonning eng yirik xususiy tibbiyot markazi",
    type: "website",
    locale: "uz_UZ",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
