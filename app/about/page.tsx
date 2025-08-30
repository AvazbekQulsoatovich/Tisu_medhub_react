import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Globe, Heart, Shield, Users, Target, Eye, CheckCircle, Phone, MapPin, Calendar } from "lucide-react"

export default function AboutPage() {
  const partnerships = [
    { country: "Germaniya", city: "Berlin", hospital: "Charité Universitätsmedizin" },
    { country: "AQSH", city: "Nyu-York", hospital: "Mount Sinai Hospital" },
    { country: "Turkiya", city: "Istanbul", hospital: "Acıbadem Healthcare Group" },
    { country: "Rossiya", city: "Moskva", hospital: "Burdenko Institute" },
    { country: "Fransiya", city: "Parij", hospital: "Hôpital Pitié-Salpêtrière" },
    { country: "Yaponiya", city: "Tokio", hospital: "University of Tokyo Hospital" },
    { country: "Italiya", city: "Milan", hospital: "San Raffaele Hospital" },
    { country: "Shveytsariya", city: "Tsyurix", hospital: "University Hospital Zurich" },
  ]

  const certifications = [
    {
      name: "JCI Akkreditatsiyasi",
      description: "Xalqaro tibbiy standartlar bo'yicha sertifikat",
      year: "2020",
      icon: Award,
    },
    {
      name: "ISO 9001:2015",
      description: "Sifat menejmenti tizimi sertifikati",
      year: "2019",
      icon: Shield,
    },
    {
      name: "Sog'liqni saqlash vazirligi litsenziyasi",
      description: "O'zbekiston Respublikasi rasmiy litsenziyasi",
      year: "2018",
      icon: CheckCircle,
    },
    {
      name: "Xalqaro tibbiy turizm sertifikati",
      description: "Medical Tourism Association a'zoligi",
      year: "2021",
      icon: Globe,
    },
  ]

  const stats = [
    { value: "15+", label: "Yillik tajriba", icon: Calendar },
    { value: "50,000+", label: "Davolangan bemorlar", icon: Users },
    { value: "8", label: "Xalqaro hamkorlik", icon: Globe },
    { value: "24/7", label: "Favqulodda yordam", icon: Heart },
  ]

  const timeline = [
    { year: "2008", event: "TISU Medical Hub tashkil etildi" },
    { year: "2012", event: "Birinchi xalqaro hamkorlik (Germaniya)" },
    { year: "2015", event: "Zamonaviy diagnostika markazi ochildi" },
    { year: "2018", event: "Sog'liqni saqlash vazirligi litsenziyasi olindi" },
    { year: "2020", event: "JCI akkreditatsiyasi olindi" },
    { year: "2022", event: "8-chi xalqaro hamkorlik imzolandi" },
    { year: "2024", event: "50,000-chi bemor davolandi" },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Image and Restructured Layout */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4">Biz haqimizda</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">TISU MedHub haqida</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                O'zbekistonning eng yirik xususiy tibbiyot markazi - 14 yillik tajriba va xalqaro standartlar
              </p>
            </div>
            <div className="relative">
              <img
                src="/bannerSilder.webp"
                alt="TISU Medical Hub zamonaviy klinika interyeri"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Facility Showcase Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bizning imkoniyatlar</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Zamonaviy tibbiy asbob-uskunalar va professional jamoamiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/modern-medical-laboratory-with-advanced-equipment.png"
                alt="Zamonaviy qabul xonasi"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Qabul xonasi</h3>
                <p className="text-sm opacity-90">Zamonaviy va qulay muhit</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/modern-medical-laboratory-with-advanced-equipment.png"
                alt="Zamonaviy laboratoriya"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Laboratoriya</h3>
                <p className="text-sm opacity-90">Yuqori aniqlikdagi tahlillar</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/modern-medical-operating-room-with-surgical-equipm.png"
                alt="Jarrohlik xonasi"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">Jarrohlik xonasi</h3>
                <p className="text-sm opacity-90">Steril va xavfsiz muhit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Quality Policy */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Missiyamiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Har bir bemor uchun eng yuqori sifatli tibbiy xizmat ko'rsatish, zamonaviy texnologiyalar va xalqaro
                  standartlar asosida sog'liqni saqlash va tiklash. Bizning maqsadimiz - har bir insonning sog'lig'ini
                  eng qimmatli boylik sifatida himoya qilish.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Viziyamiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Markaziy Osiyoda eng yetakchi va ishonchli tibbiyot markazi bo'lish, xalqaro darajadagi tibbiy
                  xizmatlar bilan mintaqadagi barcha bemorlarning ehtiyojlarini qondirish va tibbiyot sohasida
                  innovatsiyalarni joriy etishda peshqadam bo'lish.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Sifat siyosati</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  JCI standartlari asosida doimiy sifat nazorati, xodimlarning malakasini oshirish, bemorlar
                  xavfsizligini ta'minlash va tibbiy xizmatlar sifatini doimiy yaxshilash. Har bir jarayon xalqaro
                  standartlarga mos ravishda amalga oshiriladi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Showcase Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bizning jamoa</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Malakali shifokorlar va tibbiy xodimlar jamoasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src="/professional-male-doctor-cardiologist.png"
                  alt="Bosh shifokor"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <h3 className="text-lg font-semibold">Dr. Alisher Karimov</h3>
              <p className="text-sm text-muted-foreground">Bosh shifokor</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src="/professional-female-doctor-neurologist.png"
                  alt="Nevrolog"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <h3 className="text-lg font-semibold">Dr. Nilufar Rahimova</h3>
              <p className="text-sm text-muted-foreground">Nevrolog</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src="/professional-male-doctor-ophthalmologist.png"
                  alt="Ko'z shifokori"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <h3 className="text-lg font-semibold">Dr. Bobur Toshev</h3>
              <p className="text-sm text-muted-foreground">Oftalmolog</p>
            </div>

            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src="/professional-female-doctor-gynecologist.png"
                  alt="Ginekolog"
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <h3 className="text-lg font-semibold">Dr. Madina Yusupova</h3>
              <p className="text-sm text-muted-foreground">Ginekolog</p>
            </div>
          </div>
        </div>
      </section>

      {/* International Partnerships */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Xalqaro hamkorlik</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Dunyoning yetakchi tibbiyot markazlari bilan hamkorlik qilamiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{partnership.country}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{partnership.city}</p>
                  <p className="text-xs text-muted-foreground text-pretty">{partnership.hospital}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Sertifikatlar va akkreditatsiya</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Xalqaro standartlar bo'yicha olingan sertifikatlar va litsenziyalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <Badge variant="secondary">{cert.year}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center text-pretty">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bizning tarixmiz</h2>
            <p className="text-lg text-muted-foreground text-pretty">TISU Medical Hub rivojlanish bosqichlari</p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold">{item.year}</span>
                    <span className="text-muted-foreground">{item.event}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bizga qo'shiling</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
            TISU Medical Hub jamoasiga qo'shiling va sog'liq yo'lida hamkorlik qiling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+998954120707" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +998 95 412 07 07
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Bizni toping
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
