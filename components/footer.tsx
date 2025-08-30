import Link from "next/link"
import { MapPin, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div>
                <span className="text-xl font-bold">TISU</span>
                <span className="text-sm text-muted block">Medical Hub</span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              O'zbekistonning eng yirik xususiy tibbiyot markazi. Bizga eng qimmatli narsa — bu sizning sog'lig'ingiz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted hover:text-primary transition-colors">
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-sm text-muted hover:text-primary transition-colors">
                  Shifokorlar
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted hover:text-primary transition-colors">
                  Biz haqimizda
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Asosiy xizmatlar</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted">Kardiologiya</span>
              </li>
              <li>
                <span className="text-sm text-muted">Nevrologiya</span>
              </li>
              <li>
                <span className="text-sm text-muted">Urologiya</span>
              </li>
              <li>
                <span className="text-sm text-muted">Ginekologiya</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Aloqa</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted">
                  <p>Surxondaryo viloyati, Termiz shahar,</p>
                  <p>Qorliq shaharchasi, Navro'z mahallasi, 65-uy</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+998954120707" className="text-sm text-muted hover:text-primary transition-colors">
                  +998 95 412 07 07
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-primary" />
                <a href="#" className="text-sm text-muted hover:text-primary transition-colors">
                  @tisu_medical_hub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted">© 2024 TISU Medical Hub. Barcha huquqlar himoyalangan.</p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted">JCI akkreditatsiyasi</span>
              <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-primary">JCI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
