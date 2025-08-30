import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DetailedSection } from "@/components/detailed-section"
import {
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Stethoscope,
  Activity,
  Zap,
  Microscope,
  Shield,
  Phone,
  ArrowRight,
  Monitor,
  Scan,
  Camera,
  Waves,
} from "lucide-react"

export default function ServicesPage() {
  const medicalServices = [
    {
      category: "Kardiologiya",
      icon: Heart,
      services: [
        "EKG diagnostikasi",
        "Ekokardiografiya",
        "Holter monitoring",
        "Yurak kateterizatsiyasi",
        "Aritmiya davolash",
      ],
    },
    {
      category: "Nevrologiya",
      icon: Brain,
      services: [
        "EEG diagnostikasi",
        "ENMG tekshiruvi",
        "Insult reabilitatsiyasi",
        "Epilepsiya davolash",
        "Migren terapiyasi",
      ],
    },
    {
      category: "Oftalmologiya",
      icon: Eye,
      services: [
        "Ko'z fundusi tekshiruvi",
        "Katarakt operatsiyasi",
        "Glaukoma davolash",
        "Lazer terapiyasi",
        "Ko'z protezlash",
      ],
    },
    {
      category: "Ortopediya",
      icon: Bone,
      services: [
        "Suyak sinigi davolash",
        "Endoprotezlash",
        "Artoskopik operatsiyalar",
        "Umurtqa pog'onasi davolash",
        "Sport jarohatlari",
      ],
    },
    {
      category: "Ginekologiya",
      icon: Baby,
      services: [
        "Homiladorlik kuzatuvi",
        "Tug'ruq yordami",
        "Ginekologik operatsiyalar",
        "Bepushtlik davolash",
        "Onkoginekoliya",
      ],
    },
    {
      category: "Urologiya",
      icon: Stethoscope,
      services: [
        "Buyrak toshlari davolash",
        "Prostatit terapiyasi",
        "Urologik operatsiyalar",
        "Erkaklar salomatligi",
        "Onkourologiya",
      ],
    },
    {
      category: "Gastroenterologiya",
      icon: Activity,
      services: [
        "FGDS diagnostikasi",
        "Oshqozon yarasi davolash",
        "Jigar kasalliklari",
        "Pankreatit terapiyasi",
        "Endoskopik operatsiyalar",
      ],
    },
    {
      category: "Dermatologiya",
      icon: Shield,
      services: [
        "Teri kasalliklari diagnostikasi",
        "Kosmetik dermatologiya",
        "Lazer terapiyasi",
        "Teri o'smalarini olib tashlash",
        "Allergiya testlari",
      ],
    },
  ]

  const diagnosticEquipment = [
    {
      name: "3D Rentgen",
      icon: Scan,
      description: "Zamonaviy 3D rentgen diagnostikasi - aniq tasvirlar va minimal nurlanish",
      features: ["Yuqori aniqlik", "Tez natija", "Xavfsiz", "3D ko'rinish"],
    },
    {
      name: "UZI diagnostikasi",
      icon: Waves,
      description: "To'liq ultratovush diagnostikasi - barcha organlar uchun",
      features: ["4D UZI", "Doppler tekshiruvi", "Kardio UZI", "Ginekologik UZI"],
    },
    {
      name: "EKG monitoring",
      icon: Activity,
      description: "Yurak faoliyatini kuzatish va aritmiya aniqlash",
      features: ["24 soatlik monitoring", "Stress test", "Holter EKG", "Tez tahlil"],
    },
    {
      name: "FGDS",
      icon: Camera,
      description: "Fibrogastroduodenoskopiya - oshqozon va ichak tekshiruvi",
      features: ["HD kamera", "Og'riqsiz", "Biopsi olish", "Tez natija"],
    },
    {
      name: "EEG",
      icon: Brain,
      description: "Elektroentsefalografiya - miya faoliyatini tekshirish",
      features: ["32 kanalli", "Video EEG", "Uyqu EEG", "Epilepsiya diagnostikasi"],
    },
    {
      name: "ENMG",
      icon: Zap,
      description: "Elektroneyromiyografiya - asab va mushak tekshiruvi",
      features: ["Asab o'tkazuvchanlik", "Mushak faoliyati", "Neyropatiya aniqlash", "Aniq diagnostika"],
    },
    {
      name: "Reanimatsiya",
      icon: Monitor,
      description: "Zamonaviy reanimatsiya bo'limi - 24/7 intensiv terapiya",
      features: ["ICU monitoring", "Sun'iy nafas olish", "Kardioreanimatsiya", "24/7 xizmat"],
    },
    {
      name: "Laboratoriya",
      icon: Microscope,
      description: "To'liq laboratoriya diagnostikasi - barcha tahlillar",
      features: ["Qon tahlillari", "Gormonal tekshiruvlar", "Onkomarkerlar", "Tez natija"],
    },
  ]

  const detailedServices = [
    {
      title: "Kardiologiya bo'limi - Yurak kasalliklari",
      summary: "Yurak va qon tomir kasalliklari bo'yicha to'liq diagnostika, davolash va reabilitatsiya xizmatlar",
      details: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Diagnostika usullari:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>EKG (Elektrokardiografiya) - yurak ritmi va faoliyatini tekshirish</li>
              <li>Ekokardiografiya - yurak tuzilishi va qon oqimini ko'rish</li>
              <li>Holter monitoring - 24-48 soat davomida yurak kuzatuvi</li>
              <li>Stress test - jismoniy yuklanish ostida yurak tekshiruvi</li>
              <li>Koronarangiografiya - yurak tomirlarini tekshirish</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Davolanadigan kasalliklar:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Ishemik yurak kasalligi va stenokardiya</li>
              <li>Yurak aritmiyalari (tez urish, sekin urish)</li>
              <li>Arterial gipertenziya (qon bosimi ko'tarilishi)</li>
              <li>Yurak yetishmovchiligi</li>
              <li>Yurak qopqoqlari kasalliklari</li>
            </ul>
          </div>
          <div className="bg-primary/5 p-3 rounded-lg">
            <p className="text-sm">
              <strong>Shifokorlar:</strong> Dr. Nematova Gulnora (15 yillik tajriba), Dr. Karimov Aziz (12 yillik
              tajriba)
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Nevrologiya bo'limi - Asab tizimi",
      summary: "Asab tizimi kasalliklari, miya va orqa miya shikastlanishlari bo'yicha professional xizmatlar",
      details: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Diagnostika usullari:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>EEG (Elektroensefalografiya) - miya faoliyatini tekshirish</li>
              <li>ENMG (Elektroneyromiyografiya) - asab-mushak tizimi tekshiruvi</li>
              <li>Miya MRI va KT - miya tuzilishini batafsil ko'rish</li>
              <li>Doppler UZI - miya qon aylanishini tekshirish</li>
              <li>Nevrologik testlar va funktsional tekshiruvlar</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Davolanadigan kasalliklar:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Insult va uning oqibatlari</li>
              <li>Epilepsiya va tutqanoq kasalliklari</li>
              <li>Migren va boshqa bosh og'riqlari</li>
              <li>Parkinson kasalligi</li>
              <li>Neyropatiya va asab shikastlanishlari</li>
            </ul>
          </div>
          <div className="bg-primary/5 p-3 rounded-lg">
            <p className="text-sm">
              <strong>Shifokorlar:</strong> Dr. Rahimov Bobur (18 yillik tajriba), Dr. Toshev Anvar (14 yillik tajriba)
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "3D Rentgen diagnostikasi",
      summary: "Zamonaviy 3D rentgen texnologiyasi - yuqori aniqlik va minimal nurlanish bilan",
      details: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Texnik xususiyatlar:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Yuqori aniqlikdagi 3D tasvirlar</li>
              <li>Minimal nurlanish dozasi (an'anaviy rentgendan 70% kam)</li>
              <li>Tez natija - 5-10 daqiqada tayyor</li>
              <li>Barcha yosh guruhlari uchun xavfsiz</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tekshiriladigan sohalar:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Suyaklar va bo'g'imlar</li>
              <li>O'pkalar va ko'krak qafasi</li>
              <li>Qorin bo'shlig'i organlar</li>
              <li>Umurtqa pog'onasi</li>
              <li>Bosh va yuz suyaklari</li>
            </ul>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Afzallik:</strong> Oddiy rentgendan farqli o'laroq, 3D ko'rinish shifokorlarga aniqroq tashxis
              qo'yishga yordam beradi
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Reanimatsiya bo'limi",
      summary: "24/7 intensiv terapiya va reanimatsiya xizmatlari - zamonaviy uskunalar bilan",
      details: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Bo'lim imkoniyatlari:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>16 o'rinli zamonaviy reanimatsiya bo'limi</li>
              <li>Har bir o'rin uchun alohida monitoring tizimi</li>
              <li>Zamonaviy sun'iy nafas olish apparatlari</li>
              <li>Yurak faoliyatini qo'llab-quvvatlash tizimlari</li>
              <li>24/7 malakali shifokorlar va hamshiralar</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Xizmat turlari:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Og'ir bemorlarni intensiv davolash</li>
              <li>Post-operatsion kuzatuv va parvarish</li>
              <li>Favqulodda tibbiy yordam</li>
              <li>Reanimatsiya tadbirlari</li>
              <li>Koma holatidagi bemorlar parvarishi</li>
            </ul>
          </div>
          <div className="bg-red-50 p-3 rounded-lg">
            <p className="text-sm text-red-800">
              <strong>Muhim:</strong> Favqulodda holatlarda 24/7 tayyor. Tez yordam xizmati bilan bevosita aloqa
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Tibbiy xizmatlar</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Bizning xizmatlarimiz</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              60+ tibbiy yo'nalish bo'yicha professional xizmatlar, zamonaviy uskunalar va tajribali shifokorlar
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="services" className="text-lg py-3">
                Tibbiy xizmatlar
              </TabsTrigger>
              <TabsTrigger value="equipment" className="text-lg py-3">
                Diagnostik uskunalar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {medicalServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary/80">
                        Batafsil ma'lumot
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="equipment">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {diagnosticEquipment.map((equipment, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <equipment.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{equipment.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 text-pretty">{equipment.description}</p>
                      <div className="space-y-2">
                        {equipment.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Batafsil ma'lumotlar</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Asosiy xizmatlarimiz haqida to'liq ma'lumot
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Qo'shimcha ma'lumot kerakmi?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
            Bizning xizmatlar haqida batafsil ma'lumot olish uchun qo'ng'iroq qiling
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="tel:+998954120707" className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +998 95 412 07 07
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
