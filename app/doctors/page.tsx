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
  name: "Dr. Ilyos Akhmedovich",
  specialty: "Urolog, Androlog",
  experience: "15+ yil",
  education: "Xitoy, Koreya, Turkiya, Qozog‘iston va Qirg‘izistonda malaka oshirgan",
  rating: 5.0,
  image: "/professional-male-doctor-cardiologist.png",
  phone: "+998 91-233-88-33",
  instagram: "@xursandovilyos5",
  surgeries: 500,

  specializations: [
    "HoLEP — Prostata bezini lazer usulida operatsiya qilish",
    "Buyrak va siydik yo‘llari tosh kasalliklari",
    "Varikotselni jarrohlik davolash",
    "Erektil disfunksiya va erkak bepushtligi",
    "Prostatit va prostata adenomasi"
  ],

  achievements: [
    "500+ muvaffaqiyatli operatsiyalar",
    "Urologiya bo‘yicha ilmiy izlanishlar muallifi",
    "Xalqaro urologik anjumanlar ishtirokchisi va taqdimotchisi"
  ],

  bio: "Dr. Ilyos Akhmedovich — 15 yildan ortiq tajribaga ega urolog va androlog. Xitoy, Koreya, Turkiya kabi mamlakatlarda malaka oshirgan. Surxondaryoda yagona xisoblangan HoLEP lazer jarrohligi bo‘yicha yetakchi mutaxassislardan biri bo‘lib, bemorlarga yuqori sifatli tashxis va davolash xizmatini ko‘rsatadi."
}
,
    {
  id: 2,
  name: "Dr. Ibodullayev Saydulla",
  specialty: "Nevropatolog",
  experience: "8+ yil",
  education: "O‘zbekiston, Rossiya, Turkiya, Janubiy Koreya",
  rating: 4.9,
  image: "/doctor-neurology-specialist.png",
  phone: "+99894 454-22-26",
  instagram: "@dr.ibodullayev04",
  surgeries: 500,
  
  specializations: [
    "Insultdan keyingi reabilitatsiya",
    "Epilepsiya kasalligi davolash",
    "Migren va bosh og‘rig‘i terapiyasi",
    "Parkinson kasalligi nazorati",
    "Uyqu buzilishi va nevrozlar"
  ],
  
  achievements: [
    "Rossiyaning yetakchi nevrologiya markazlarida malaka oshirgan",
    "Yiliga 300+ bemorda muvaffaqiyatli reabilitatsiya",
    "Neyrologiya bo‘yicha xalqaro konferensiya ishtirokchisi"
  ],

  bio: "8+ yillik tajribaga ega malakali nevropatolog. Miya va asab tizimi kasalliklarini aniqlash, davolash va reabilitatsiya bo‘yicha mutaxassis. Har bir bemorga individual yondashuv."
},
    {
  id: 3,
  name: "Dr. Latipov Djavdat Axmedovich",
  specialty: "Ortoped-Travmatolog",
  experience: "15 yil",
  education: "Turkiya, Istanbul; Rossiya; O‘zbekiston",
  rating: 4.9,
  image: "/orthopedic-doctor-specialist.png",
  phone: "+99890 747-35-53",
  instagram: "@dr_latipov_djavdat",

  surgeries: 1200,

  specializations: [
    "Tizza bo‘g‘imi artroskopiyasi",
    "Suyak va sinishlar jarrohligi",
    "Orqa miya va bo‘g‘im og‘riqlarini davolash",
    "Sport jarohatlari terapiyasi",
    "Protezlash (sun’iy bo‘g‘im o‘rnatish)"
  ],

  achievements: [
    "Turkiyada bo‘g‘im jarrohligi bo‘yicha malaka oshirgan",
    "1200+ muvaffaqiyatli jarrohlik amaliyoti",
    "Sport ortopediyasi bo‘yicha ekspert"
  ],

  bio: "15 yillik tajribaga ega ortoped-travmatolog. Bo‘g‘imlar, suyak tizimi kasalliklari va sport jarohatlarini zamonaviy texnologiyalar yordamida davolaydi."
},
  
     {
  id: 4,
  name: "Dr. Toshmurodov Akmal",
  specialty: "Otorinolaringolog (LOR)",
  experience: "8 yil",
  education: "Samarqand davlat tibbiyot universiteti, LOR yo‘nalishi",
  rating: 4.8,
  image: "/ent-specialist-male-doctor.png",
  phone: "+99893 636-77-55",
  instagram: "@toshmurodov162",
  surgeries: 950,

  specializations: [
    "Quloq-burun-tomoq operatsiyalari",
    "Endoskopik sinus jarrohligi",
    "Tonsillektomiya (bodomsimon bez olib tashlash)",
    "Bolaning adenoidi va poliplari",
    "Ovoz buzilishlari va eshitish pasayishi"
  ],

  achievements: [
    "Endoskopik LOR operatsiyalari bo‘yicha malaka oshirgan",
    "950+ muvaffaqiyatli jarrohlik amaliyoti",
    "Bolalar LOR patologiyalari bo‘yicha yetakchi mutaxassis"
  ],

  bio: "8 yillik tajribaga ega otorinolaringolog. Quloq, burun va tomoq kasalliklarini zamonaviy texnologiyalar yordamida davolash bo‘yicha mutaxassis. Har bir bemorga alohida yondashuv."
},

   {
  id: 5,
  name: "Dr. Xonimqulova Saodat Yusupovna",
  specialty: "Ginekolog",
  experience: "6 yil",
  education: "Toshkent tibbiyot akademiyasi, Ginekologiya yo‘nalishi",
  rating: 4.8,
  image: "/professional-female-doctor-gynecologist.png",
  phone: "+99897 786-17-00",
  instagram: "@saodat_yusupovna",
  surgeries: 680,

  specializations: [
    "Homiladorlik kuzatuvi va tug‘ruq yordami",
    "Ginekologik operatsiyalar",
    "Bepushtlik davolash",
    "Onkoginekologiya",
    "Reproduktiv salomatlik masalalari"
  ],

  achievements: [
    " Toshkent malaka sertifikati",
    
    "500+ muvaffaqiyatli operatsiya"
  ],

  bio: "6 yillik tajribaga ega ginekolog. Homiladorlik, tug‘ruq va reproduktiv salomatlik bo‘yicha zamonaviy amaliyotlar va davolash usullarini qo‘llaydi."
},

   {
  id: 6,
  name: "Dr. Jo'rayeva Sabohat Bahadirovna",
  specialty: "Kardiyolog",
  experience: "13 yil",
  education: "Toshkent tibbiyot akademiyasi, Kardiyologiya yo‘nalishi",
  rating: 4.9,
  image: "/professional-female-doctor-cardiologist.png",
  phone: "+99890 123-45-72",
  instagram: "@jorayeyasaboxat",
  surgeries: 320,

  specializations: [
    "EKG diagnostikasi",
    "Ekokardiografiya",
    "Holter monitoring",
    "Yurak aritmiyalari davolash",
                            
  ],

  achievements: [
   
    "Minimal invaziv kardiyologik operatsiyalar bo‘yicha ekspert",
    "320+ muvaffaqiyatli yurak amaliyotlari"
  ],

  bio: "13 yillik tajribaga ega ayol kardiyolog. Yurak va qon tomir kasalliklarini zamonaviy diagnostika va davolash usullari bilan muolaja qiladi."
}
,

    {
  id: 7,
  name: "Dr. Choriyev Abubakir Chorshamiyevich",
  specialty: "Bolalar va kattalar nevrologi",
  experience: "3+ yil",
  education: "Toshkent Pediatriya Instituti, Nevrologiya yo‘nalishi",
  rating: 4.8,
  image: "/professional-male-doctor-neurologist.png",
  phone: "+99891 166-47-48",
  instagram: "@abubakir_nevrolog",
  surgeries: 0, // nevrologiyada jarrohlik ko‘p emas

  specializations: [
    "Epilepsiya davolash",
    "Migren terapiyasi",
    "Insult reabilitatsiyasi",
    "Nevropatologik diagnostika",
    "Bolalar nevrologiyasi"
  ],

  achievements: [
    "Toshkent Pediatriya Instituti, Nevrologiya bo‘yicha malaka",
    "Nevrologiya bo‘yicha 3+ yillik tajriba",
    "Ko‘plab muvaffaqiyatli nevrologik terapiya va konsultatsiyalar"
  ],

  bio: "3+ yillik tajribaga ega bolalar va kattalar nevrologi. Epilepsiya, migren va insult reabilitatsiyasi bo‘yicha zamonaviy diagnostika va davolash usullarini qo‘llaydi."
},

   {
  id: 8,
  name: "Dr. Xolboev Norbek Aliniyozovich",
  specialty: "Pediatr",
  experience: "6+ yil",
  education: "Toshkent Pediatriya Instituti",
  rating: 4.9,
  image: "/professional-male-doctor-pediatrician.png",
  phone: "+998 99 121-21-16",
  instagram: "@norbekkholboev",
  surgeries: 0, // pediatriyada jarrohlik odatda yo'q

  specializations: [
    "Bolalar kasalliklarini diagnostikasi",
    "Emizikli va bolalar immunizatsiyasi",
    "Oshqozon-ichak kasalliklari",
    "Nafas olish yo‘llari kasalliklari",
    "Rivojlanish va o‘sish monitoringi"
  ],

  achievements: [
    "Toshkent Pediatriya Instituti diplom",
    "6+ yillik pediatriya tajribasi",
    "Ko‘plab muvaffaqiyatli pediatrik muolajalar"
  ],

  bio: "11 yillik tajribaga ega pediatr. Bolalar kasalliklarini diagnostika va davolash, shuningdek rivojlanish monitoringi bo‘yicha zamonaviy usullarni qo‘llaydi."
},
{
  id: 9,
  name: "Dr. Boyqulov To‘rabek Temirovich",
  specialty: "Urolog, Androlog, Endourolog",
  experience: "6+ yil",
  education: "Toshkent Tibbiyot Akademiyasi",
  rating: 4.9,
  image: "/image-removebg-preview (9).png",
  phone: "+99897 809-30-03",
  instagram: "@to‘rabek_boyqulov", // agar instagram bo‘lsa o‘zgartirishingiz mumkin
  surgeries: 120, // urologiyada jarrohlik bo‘ladi, shu sababli son qo‘ydim
  specializations: [
    "Buyrak, siydik yo‘llari va prostata kasalliklari",
    "Andrologik muammolar (bepushtlik, prostatit, varikotsel)",
    "Endoskopik va lazer usulida jarrohlik amaliyotlar",
    "Siydik pufagi toshlarini davolash",
    "Erektil disfunktsiyani davolash"
  ],
  achievements: [
    "O‘zbekistonning yetakchi urologlari ishtirokida seminar va konferensiyalar qatnashchisi",
    "Minimal invaziv urologik jarrohlik bo‘yicha tajribaga ega",
    "Ko‘plab muvaffaqiyatli operatsiyalar muallifi"
  ],
  bio: "Dr. Boyqulov To‘rabek Temirovich — tajribali urolog va androlog. Bemorlarga zamonaviy tashxis va davolash usullarini qo‘llagan holda sifatli tibbiy yordam ko‘rsatadi. Tug‘ilishdagi muammolar, buyrak va prostata bilan bog‘liq kasalliklar bo‘yicha keng ko‘lamli amaliy tajribaga ega."
}

,
{
  id: 10,
  name: "Dr. Xamroyev Shaxboz",
  specialty: "Radiolog",
  experience: "7+ yil",
  education: "Samarqand Davlat Tibbiyot Instituti",
  rating: 4.9,
  image: "/image-removebg-preview (10).png",
  phone: "+998 91 970-07-07",
  instagram: "@shahhamrayev",
  surgeries: 0,

  specializations: [
    "Rentgen, UTT va MRT diagnostikasi",
    "Kompyuter tomografiyasi (KT)",
    "Pediatrik radiologiya",
    "Onkologik kasalliklarda erta tashxis",
    "Neyro­radiologiya"
  ],

  achievements: [
    "Tasviriy diagnostika bo‘yicha yetakchi mutaxassislar ishtirokidagi seminarlarda qatnashgan",
    "KT va MRT bo‘yicha ilg‘or tashxis metodlarini amaliyotga joriy etib kelmoqda",
    "Ko‘plab murakkab klinik holatlarda to‘g‘ri tashxis qo‘yilishiga hissa qo‘shgan"
  ],

  bio: "Dr. Xamroyev Shaxboz — 7+ yildan ziyod tajribaga ega radiolog mutaxassis. U Samarqand Davlat Tibbiyot Institutida tahsil olgan. Tasviriy diagnostika sohasida aniqlik va zamonaviy texnologiyalardan foydalanishni ustuvor deb biladi. Turli yoshdagi bemorlarga sifatli va mas’uliyatli tashxis xizmatini ko‘rsatib keladi."
}

,{
  id: 11,
  name: "Dr. Qayumov Bahodir",
  specialty: "Laboratoriya diagnostikasi mutaxassisi (Laborant)",
  experience: "6+ yil",
  education: "Termiz Davlat Universiteti — Biologiya va tibbiy laboratoriya yo‘nalishi",
  rating: 4.9,
  image: "/image-removebg-preview (11).png",
  phone: "+998 94 215-20-45",
  instagram: "@", // agar instagram bo'lsa qo'shamiz
  surgeries: 0,

  specializations: [
    "Qon va biokimyoviy tahlillar",
    "Immunologik tahlillar",
    "Mikrobiologik tekshiruvlar",
    "Virusologik va parazitologik diagnostika",
    "Profilaktik tahlillar"
  ],

  achievements: [
    "Laboratoriya sifat nazorati bo‘yicha tajribaga ega",
    "Zamonaviy tahlil qurilmalari bilan ishlash malakasi",
    "Tashxis jarayonida shifokorlar bilan bevosita hamkorlik"
  ],

  bio: "Qayumov Bahodir — 6 yildan ortiq tajribaga ega laboratoriya diagnostikasi bo‘yicha mutaxassis. U Termiz Davlat Universitetida tahsil olgan. Laboratoriya tahlillari orqali kasalliklarni erta aniqlash va tashxislash jarayonida muhim rol o‘ynaydi. Bemorlar salomatligi uchun javobgarlik va aniqlikni har doim birinchi o‘ringa qo‘yadi."
}
,
{
  id: 12,
  name: "Dr. Xakimova Aziza Baxri qizi",
  specialty: "Ginekolog, UTT mutaxassisi",
  experience: "7+ yil",
  education: "Samarqand Davlat Tibbiyot Universiteti",
  rating: 4.9,
  image: "/image-removebg-preview (13).png",
  phone: "+998 97 919-07-92",
  instagram: "@dr_aziza_xakimova",
  surgeries: 0,

  specializations: [
    "Ayollar salomatligi va profilaktika ko‘riklari",
    "Homiladorlikni kuzatish va UTT diagnostikasi",
    "Gormonal muammolar tashxisi",
    "Bepushtlikni diagnostika qilish",
    "Yumshoq to‘qimalar va kichik tos organlari UTT tekshiruvi"
  ],

  achievements: [
    "Ko‘plab bemorlarda homiladorlikni muvaffaqiyatli kuzatish tajribasi",
    "Ginekologik kasalliklarda erta tashxis qo‘yish bo‘yicha amaliy tajriba",
    "UTT diagnostikasining zamonaviy usullarini qo‘llab keladi"
  ],

  bio: "Dr. Xakimova Aziza Baxri qizi — 7 yillik tajribaga ega ginekolog va UTT mutaxassisi. Ayollar salomatligini saqlash, homiladorlikni nazorat qilish va to‘g‘ri tashxis qo‘yishda yuqori mas’uliyat bilan ishlaydi. Bemorlar bilan mehribon va e’tiborli munosabati bilan ajralib turadi."
}



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
