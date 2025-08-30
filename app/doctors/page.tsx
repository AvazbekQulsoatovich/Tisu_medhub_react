import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  Brain,
  Eye,
  Baby,
  Stethoscope,
  Activity,
  Shield,
  Phone,
  Instagram,
  Award,
  GraduationCap,
  MapPin,
  Calendar,
  Star,
} from "lucide-react"

export default function DoctorsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Akmal Karimov",
      specialty: "Kardiolog",
      experience: "18 yil",
      education: "Germaniya, Berlin",
      rating: 4.9,
      image: "/professional-male-doctor-cardiologist.png",
      phone: "+998901234567",
      instagram: "@dr_karimov",
      surgeries: 850,
      specializations: ["Yurak operatsiyalari", "Aritmiya davolash", "Kateterizatsiya"],
      achievements: ["Germaniya sertifikati", "500+ muvaffaqiyatli operatsiya", "Kardiologiya bo'yicha PhD"],
      bio: "18 yillik tajribaga ega kardiolog. Germaniyada malaka oshirgan va zamonaviy yurak operatsiyalari bo'yicha mutaxassis.",
    },
    {
      id: 2,
      name: "Dr. Nilufar Abdullayeva",
      specialty: "Nevropatolog",
      experience: "15 yil",
      education: "Rossiya, Moskva",
      rating: 4.8,
      image: "/professional-female-doctor-neurologist.png",
      phone: "+998901234568",
      instagram: "@dr_nilufar",
      surgeries: 420,
      specializations: ["Insult reabilitatsiyasi", "Epilepsiya", "Migren terapiyasi"],
      achievements: ["Moskva tibbiyot akademiyasi", "Nevrologiya bo'yicha professor", "300+ bemor sog'aygan"],
      bio: "Nevrologiya sohasida 15 yillik tajriba. Rossiyada malaka oshirgan va neyrojarrohlik amaliyotlari bo'yicha ekspert.",
    },
    {
      id: 3,
      name: "Dr. Sardor Toshmatov",
      specialty: "Oftalmolog",
      experience: "12 yil",
      education: "Turkiya, Istanbul",
      rating: 4.9,
      image: "/professional-male-doctor-ophthalmologist.png",
      phone: "+998901234569",
      instagram: "@dr_sardor_eye",
      surgeries: 1200,
      specializations: ["Katarakt operatsiyasi", "Lazer terapiya", "Ko'z protezlash"],
      achievements: ["Turkiya sertifikati", "1000+ katarakt operatsiyasi", "Lazer terapiya mutaxassisi"],
      bio: "Ko'z kasalliklari bo'yicha 12 yillik tajriba. Turkiyada zamonaviy oftalmologiya usullarini o'rgangan.",
    },
    {
      id: 4,
      name: "Dr. Gulnora Rahimova",
      specialty: "Ginekolog",
      experience: "20 yil",
      education: "Fransiya, Parij",
      rating: 5.0,
      image: "/professional-female-doctor-gynecologist.png",
      phone: "+998901234570",
      instagram: "@dr_gulnora",
      surgeries: 950,
      specializations: ["Tug'ruq yordami", "Ginekologik operatsiyalar", "Bepushtlik davolash"],
      achievements: ["Parij tibbiyot universiteti", "Ginekologiya professori", "800+ muvaffaqiyatli tug'ruq"],
      bio: "20 yillik tajribaga ega ginekolog. Fransiyada malaka oshirgan va reproduktiv salomatlik bo'yicha ekspert.",
    },
    {
      id: 5,
      name: "Dr. Bobur Ergashev",
      specialty: "Urolog",
      experience: "14 yil",
      education: "AQSH, Nyu-York",
      rating: 4.8,
      image: "/professional-male-doctor-urologist.png",
      phone: "+998901234571",
      instagram: "@dr_bobur_uro",
      surgeries: 680,
      specializations: ["Buyrak operatsiyalari", "Prostatit davolash", "Erkaklar salomatligi"],
      achievements: ["AQSH sertifikati", "Urologiya bo'yicha PhD", "500+ buyrak operatsiyasi"],
      bio: "Urologiya sohasida 14 yillik tajriba. AQSHda zamonaviy urologik operatsiyalar bo'yicha malaka oshirgan.",
    },
    {
      id: 6,
      name: "Dr. Feruza Normatova",
      specialty: "Proktolog (Ayol)",
      experience: "10 yil",
      education: "Italiya, Milan",
      rating: 4.9,
      image: "/professional-female-doctor-proctologist.png",
      phone: "+998901234572",
      instagram: "@dr_feruza_procto",
      surgeries: 320,
      specializations: ["Gemorroyni davolash", "Anal fissura", "Kolorektal operatsiyalar"],
      achievements: ["Milan universiteti", "Proktologiya mutaxassisi", "Minimal invaziv operatsiyalar"],
      bio: "Ayol proktolog, 10 yillik tajriba. Italiyada zamonaviy proktologiya usullarini o'rgangan va ayol bemorlar uchun qulay muhit yaratadi.",
    },
    {
      id: 7,
      name: "Dr. Jasur Mirzayev",
      specialty: "Ortoped",
      experience: "16 yil",
      education: "Yaponiya, Tokio",
      rating: 4.8,
      image: "/professional-male-doctor-orthopedist.png",
      phone: "+998901234573",
      instagram: "@dr_jasur_ortho",
      surgeries: 750,
      specializations: ["Endoprotezlash", "Artoskopiya", "Sport jarohatlari"],
      achievements: ["Tokio universiteti", "Ortopediya professori", "600+ endoprotez operatsiyasi"],
      bio: "Ortopediya bo'yicha 16 yillik tajriba. Yaponiyada zamonaviy ortopedik operatsiyalar bo'yicha malaka oshirgan.",
    },
    {
      id: 8,
      name: "Dr. Madina Sultanova",
      specialty: "Dermatolog",
      experience: "11 yil",
      education: "Shveytsariya, Tsyurix",
      rating: 4.9,
      image: "/dermatologist-female-professional.png",
      phone: "+998901234574",
      instagram: "@dr_madina_derm",
      surgeries: 450,
      specializations: ["Teri kasalliklari", "Kosmetik dermatologiya", "Lazer terapiya"],
      achievements: ["Tsyurix universiteti", "Dermatologiya mutaxassisi", "Lazer terapiya sertifikati"],
      bio: "Dermatologiya sohasida 11 yillik tajriba. Shveytsariyada kosmetik dermatologiya bo'yicha malaka oshirgan.",
    },
  ]

  const specialties = [
    { name: "Barchasi", icon: Stethoscope },
    { name: "Kardiolog", icon: Heart },
    { name: "Nevropatolog", icon: Brain },
    { name: "Oftalmolog", icon: Eye },
    { name: "Ginekolog", icon: Baby },
    { name: "Urolog", icon: Activity },
    { name: "Proktolog", icon: Shield },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Bizning jamoa</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Malakali shifokorlar</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Xalqaro tajribaga ega bo'lgan yuqori malakali mutaxassislar jamoasi
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <Dialog key={doctor.id}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardHeader className="text-center pb-4">
                      <Avatar className="w-24 h-24 mx-auto mb-4">
                        <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                        <AvatarFallback className="text-lg">
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {doctor.name}
                      </CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {doctor.specialty}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          {doctor.experience} tajriba
                        </div>
                        <div className="flex items-center justify-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {doctor.education}
                        </div>
                        <div className="flex items-center justify-center text-sm">
                          <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                          {doctor.rating}
                        </div>
                      </div>
                      <Button variant="outline" className="w-full bg-transparent">
                        Portfolio ko'rish
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{doctor.name}</DialogTitle>
                  </DialogHeader>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Avatar className="w-32 h-32 mx-auto mb-4">
                        <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                        <AvatarFallback className="text-2xl">
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                      <Badge className="mb-4">{doctor.specialty}</Badge>

                      <div className="space-y-3">
                        <div className="flex items-center justify-center">
                          <Phone className="w-4 h-4 mr-2 text-primary" />
                          <a href={`tel:${doctor.phone}`} className="text-sm hover:text-primary">
                            {doctor.phone}
                          </a>
                        </div>
                        <div className="flex items-center justify-center">
                          <Instagram className="w-4 h-4 mr-2 text-primary" />
                          <a href="#" className="text-sm hover:text-primary">
                            {doctor.instagram}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <Tabs defaultValue="info" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="info">Ma'lumot</TabsTrigger>
                          <TabsTrigger value="experience">Tajriba</TabsTrigger>
                          <TabsTrigger value="achievements">Yutuqlar</TabsTrigger>
                        </TabsList>

                        <TabsContent value="info" className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Biografiya</h4>
                            <p className="text-sm text-muted-foreground text-pretty">{doctor.bio}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Ta'lim</h4>
                            <div className="flex items-center text-sm">
                              <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                              {doctor.education}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Mutaxassislik</h4>
                            <div className="flex flex-wrap gap-2">
                              {doctor.specializations.map((spec, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {spec}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="experience" className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-primary/5 rounded-lg">
                              <div className="text-2xl font-bold text-primary">{doctor.experience}</div>
                              <div className="text-sm text-muted-foreground">Tajriba</div>
                            </div>
                            <div className="text-center p-4 bg-primary/5 rounded-lg">
                              <div className="text-2xl font-bold text-primary">{doctor.surgeries}+</div>
                              <div className="text-sm text-muted-foreground">Operatsiyalar</div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Bajarilgan operatsiyalar</h4>
                            <p className="text-sm text-muted-foreground">
                              {doctor.surgeries}+ muvaffaqiyatli operatsiya bajarilgan, jumladan murakkab holatlar va
                              favqulodda vaziyatlarda.
                            </p>
                          </div>
                        </TabsContent>

                        <TabsContent value="achievements" className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-3">Asosiy yutuqlar</h4>
                            <div className="space-y-2">
                              {doctor.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-center text-sm">
                                  <Award className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                                  {achievement}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-center p-4 bg-yellow-50 rounded-lg">
                            <Star className="w-5 h-5 mr-2 text-yellow-500 fill-current" />
                            <span className="font-semibold">{doctor.rating}/5.0 reyting</span>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Shifokor bilan uchrashish</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
            Mutaxassis shifokor bilan konsultatsiya uchun qo'ng'iroq qiling
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
