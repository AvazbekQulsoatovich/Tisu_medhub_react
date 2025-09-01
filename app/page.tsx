import React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DetailedSection } from "@/components/detailed-section"
import {
  Heart,
  Clock,
  Users,
  Award,
  ArrowRight,
  Stethoscope,
  Brain,
  Eye,
  Activity,
  Shield,
  Star,
  MapPin,
} from "lucide-react"



export default function HomePage() {
  const stats = [
    { icon: Award, label: "15+ yillik tajriba", value: "15+", description: "Professional tajriba" },
    { icon: Clock, label: "24/7 xizmat", value: "24/7", description: "Tun-kun xizmat" },
    { icon: Stethoscope, label: "57+ davolash yo'nalishlari", value: "57+", description: "Tibbiy yo'nalishlar" },
    { icon: Users, label: "12 xizmat ko'rsatish yo'nalishi", value: "12", description: "Asosiy bo'limlar" },
  ]

  const services = [
    {
      icon: Heart,
      title: "Kardiologiya",
      description: "Yurak va qon tomir kasalliklari bo'yicha to'liq diagnostika va davolash",
    },
    { icon: Brain, title: "Nevrologiya", description: "Asab tizimi kasalliklari va neyrojarrohlik amaliyotlari" },
    {
      icon: Eye,
      title: "Oftalmologiya",
      description: "Ko'z kasalliklari diagnostikasi va zamonaviy davolash usullari",
    },
    { icon: Activity, title: "Reanimatsiya", description: "Intensiv terapiya va reanimatsiya bo'limi 24/7 rejimida" },
    {
      icon: Shield,
      title: "Profilaktika",
      description: "Kasalliklarning oldini olish va sog'liqni saqlash dasturlari",
    },
    { icon: Star, title: "VIP xizmatlar", description: "Yuqori darajadagi individual tibbiy xizmatlar" },
  ]

  const banners = [
    {
      title: "Zamonaviy diagnostika",
      description: "3D Rentgen, UZI, EKG, FGDS va boshqa zamonaviy uskunalar",
      badge: "Texnologiya",
      gradient: "from-primary/20 to-primary/5",
      icon: Activity,
    },
    {
      title: "Malakali shifokorlar",
      description: "Xalqaro tajribaga ega bo'lgan yuqori malakali mutaxassislar",
      badge: "Jamoa",
      gradient: "from-blue-500/20 to-blue-500/5",
      icon: Users,
    },
    {
      title: "JCI sertifikati",
      description: "Xalqaro tibbiy standartlar bo'yicha sertifikatlangan klinika",
      badge: "Sifat",
      gradient: "from-green-500/20 to-green-500/5",
      icon: Award,
    },
  ]

  const detailedServices = [
    {
      title: "Kardiologiya bo'limi",
      summary: "Yurak va qon tomir kasalliklari bo'yicha to'liq diagnostika va davolash xizmatlar",
      details: (
        <div className="space-y-4">
          <p>
            <strong>Diagnostika usullari:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>EKG (Elektrokardiografiya) - yurak faoliyatini tekshirish</li>
            <li>EXO Holter - 24 soatlik yurak monitoringi</li>
            <li>Yurak UZI (Exokardiografiya) - yurak tuzilishini ko'rish</li>
            <li>Stress test - jismoniy yuklanish ostida yurak tekshiruvi</li>
          </ul>
          <p>
            <strong>Davolanadigan kasalliklar:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Yurak ishemik kasalligi</li>
            <li>Arterial gipertenziya</li>
            <li>Yurak aritmiyalari</li>
            <li>Yurak yetishmovchiligi</li>
          </ul>
          <p className="text-primary font-medium">Shifokorlar: Dr. Nematova Gulnora, Dr. Karimov Aziz</p>
        </div>
      ),
    },
    {
      title: "Nevrologiya bo'limi",
      summary: "Asab tizimi kasalliklari va neyrojarrohlik amaliyotlari bo'yicha xizmatlar",
      details: (
        <div className="space-y-4">
          <p>
            <strong>Diagnostika usullari:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>EEG (Elektroensefalografiya) - miya faoliyatini tekshirish</li>
            <li>ENMG (Elektroneyromiyografiya) - asab-mushak tizimi tekshiruvi</li>
            <li>Miya MRI - miya tuzilishini batafsil ko'rish</li>
            <li>Nevrologik testlar va tekshiruvlar</li>
          </ul>
          <p>
            <strong>Davolanadigan kasalliklar:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Insult va uning oqibatlari</li>
            <li>Epilepsiya</li>
            <li>Migren va bosh og'riqlari</li>
            <li>Parkinson kasalligi</li>
            <li>Asab tizimi shikastlanishlari</li>
          </ul>
          <p className="text-primary font-medium">Shifokorlar: Dr. Rahimov Bobur, Dr. Toshev Anvar</p>
        </div>
      ),
    },
    {
      title: "Reanimatsiya bo'limi",
      summary: "Intensiv terapiya va reanimatsiya bo'limi 24/7 rejimida faoliyat yuritadi",
      details: (
        <div className="space-y-4">
          <p>
            <strong>Bo'lim imkoniyatlari:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>16 o'rinli zamonaviy reanimatsiya bo'limi</li>
            <li>Zamonaviy sun'iy nafas olish apparatlari</li>
            <li>Yurak faoliyatini qo'llab-quvvatlash tizimlari</li>
            <li>24/7 monitoring va nazorat</li>
            <li>Favqulodda jarrohlik operatsiyalari</li>
          </ul>
          <p>
            <strong>Xizmatlar:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Og'ir bemorlarni intensiv davolash</li>
            <li>Post-operatsion kuzatuv</li>
            <li>Favqulodda tibbiy yordam</li>
            <li>Reanimatsiya tadbirlari</li>
          </ul>
          <p className="text-primary font-medium">Malakali reanimatolog shifokorlar va hamshiralar jamoasi</p>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
<section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/videos/IMG_9875(4).MP4" type="video/mp4" />
    Sizning browseringiz video tagini qo‘llab-quvvatlamaydi.
  </video>

  {/* Overlay (gradient) — kerak bo‘lsa, gradientni juda engil qilish yoki butunlay olib tashlash */}
  <div className="absolute inset-0 bg-black/20 z-10" />

  {/* Kontent */}
  <div className="relative z-20 text-center text-white max-w-full mx-auto px-4">
    <div className="mb-6">
      <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 bg-white/10 text-white border-white/20">
        O'zbekistonning 1 tibbiyot markazi  
      </Badge>
    </div>

    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
      TISU Medical Hub
    </h1>

    <div className="space-y-4 mb-8">
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-balance text-primary-foreground">
        "Bizga eng qimmatli narsa — bu sizning sog'lig'ingiz" 
      </p>
      <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty">
        O'zbekistonning eng yirik xususiy tibbiyot markazi - zamonaviy texnologiyalar va tajribali shifokorlar bilan
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20"
        >
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
            {stat.value}
          </div>
          <div className="text-xs md:text-sm text-white/80 leading-tight">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
    <div className="animate-ping">
      <ArrowRight className="w-6 h-6 text-white rotate-90" />
    </div>
  </div>
</section>


      {/* Enhanced Banners Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Nima uchun bizni tanlashadi?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Yuqori sifat, zamonaviy texnologiyalar va professional yondashuv
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {banners.map((banner, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className={`absolute inset-0 bg-gradient-to-br ${banner.gradient}`} />
                <CardContent className="relative p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20">{banner.badge}</Badge>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      {React.createElement(banner.icon, { className: "w-6 h-6 text-primary" })}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-balance">{banner.title}</h3>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{banner.description}</p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Batafsil ma'lumot{" "}
                    {React.createElement(ArrowRight, {
                      className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform",
                    })}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Summary with Detailed Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bizning xizmatlarimiz</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              60+ tibbiy yo'nalish bo'yicha professional xizmatlar va zamonaviy davolash usullari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    {React.createElement(service.icon, { className: "w-8 h-8 text-primary" })}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {detailedServices.map((service, index) => (
              <DetailedSection
                key={index}
                title={service.title}
                summary={service.summary}
                details={service.details}
                buttonText="To'liq ma'lumot"
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
            >
              Barcha xizmatlarni ko'rish
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bizning imkoniyatlar</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Zamonaviy tibbiy asbob-uskunalar va professional muhit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/news_banner.webp"
                alt="Zamonaviy qabul xonasi"
                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Qabul xonasi</h3>
                <p className="text-sm opacity-90">Qulay kutish zonasi</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/modern-medical-laboratory-with-advanced-equipment.png"
                alt="Zamonaviy laboratoriya"
                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Laboratoriya</h3>
                <p className="text-sm opacity-90">Aniq tahlillar</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/modern-medical-operating-room-with-surgical-equipm.png"
                alt="Jarrohlik xonasi"
                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Jarrohlik xonasi</h3>
                <p className="text-sm opacity-90">Steril muhit</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/professional-male-doctor-cardiologist.png"
                alt="Professional shifokor"
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <Badge className="bg-primary/80 text-white">Kardiolog</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bizning shifokorlar</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Xalqaro tajribaga ega malakali mutaxassislar jamoasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/professional-male-doctor-cardiologist.png"
                  alt="Kardiolog"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-primary/80 text-white">Kardiolog</Badge>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Dr. Alisher Karimov</h3>
              <p className="text-sm text-muted-foreground">15 yillik tajriba</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/professional-female-doctor-neurologist.png"
                  alt="Nevrolog"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-primary/80 text-white">Nevrolog</Badge>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Dr. Nilufar Rahimova</h3>
              <p className="text-sm text-muted-foreground">12 yillik tajriba</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/professional-male-doctor-ophthalmologist.png"
                  alt="Oftalmolog"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-primary/80 text-white">Oftalmolog</Badge>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Dr. Bobur Toshev</h3>
              <p className="text-sm text-muted-foreground">10 yillik tajriba</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/professional-female-doctor-gynecologist.png"
                  alt="Ginekolog"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-primary/80 text-white">Ginekolog</Badge>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Dr. Madina Yusupova</h3>
              <p className="text-sm text-muted-foreground">8 yillik tajriba</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Zamonaviy uskunalar</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Eng so'nggi tibbiy texnologiyalar va diagnostika uskunalari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="/modern-medical-laboratory-with-advanced-equipment.png"
                  alt="Laboratoriya uskunalari"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-primary/80 text-white mb-2">Laboratoriya</Badge>
                  <h3 className="text-lg font-semibold">Tahlil uskunalari</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-pretty">
                  Qon, siydik va boshqa biologik materiallarni tahlil qilish uchun zamonaviy avtomatik analizatorlar
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="/modern-medical-operating-room-with-surgical-equipm.png"
                  alt="Jarrohlik uskunalari"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-primary/80 text-white mb-2">Jarrohlik</Badge>
                  <h3 className="text-lg font-semibold">Operatsiya uskunalari</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-pretty">
                  Minimal invaziv jarrohlik amaliyotlari uchun laparoskopik va endoskopik uskunalar
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="/modern-medical-laboratory-with-advanced-equipment.png"
                  alt="Diagnostika uskunalari"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-primary/80 text-white mb-2">Diagnostika</Badge>
                  <h3 className="text-lg font-semibold">Tasviriy diagnostika</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-pretty">
                  3D rentgen, UZI, EKG, MRI va boshqa zamonaviy diagnostika uskunalari
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Biz bilan bog'laning</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
              Shifokor konsultatsiyasi, qabulga yozilish yoki favqulodda tibbiy yordam uchun hoziroq qo'ng'iroq qiling
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <a href="tel:+998954120707" className="flex items-center">
                +998 95 412 07 07
              </a>
            </Button>
            <div className="flex items-center text-primary-foreground/80 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              Termiz shahar, Qorliq shaharchasi
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
