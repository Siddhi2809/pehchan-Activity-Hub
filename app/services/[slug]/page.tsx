import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services, Service } from '@/lib/services'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, 
  User, 
  CheckCircle2, 
  Star, 
  Calendar, 
  Activity,
  Clock,
  Users,
  Shield,
  Award,
  ArrowRight,
  Phone,
  Quote,
  Target,
  TrendingUp,
  Heart
} from 'lucide-react'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

// Service metadata mapping
const serviceMetadata: { [key: string]: { 
  icon: string
  sessionInfo: {
    duration: string
    frequency: string
    groupSize: string
    ageGroup: string
  }
}} = {
  'dance-classes': { 
    icon: '💃',
    sessionInfo: { duration: '45 mins', frequency: '2x/week', groupSize: '8-10 kids', ageGroup: '4-12 years' }
  },
  'martial-arts-instructor': { 
    icon: '🥋',
    sessionInfo: { duration: '60 mins', frequency: '2x/week', groupSize: '6-8 kids', ageGroup: '5-14 years' }
  },
  'music-therapy': { 
    icon: '🎵',
    sessionInfo: { duration: '45 mins', frequency: '1-2x/week', groupSize: '4-6 kids', ageGroup: '3-10 years' }
  },
  'kids-yoga': { 
    icon: '🧘',
    sessionInfo: { duration: '45 mins', frequency: '2-3x/week', groupSize: '8-12 kids', ageGroup: '4-12 years' }
  },
  'martial-arts': { 
    icon: '🥊',
    sessionInfo: { duration: '60 mins', frequency: '2-3x/week', groupSize: '8-10 kids', ageGroup: '5-14 years' }
  },
  'nutrition-dietician': { 
    icon: '🍎',
    sessionInfo: { duration: '30 mins', frequency: '1x/week', groupSize: '1-on-1', ageGroup: '3-16 years' }
  },
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const metadata = serviceMetadata[slug] || { 
    icon: '✨',
    sessionInfo: { duration: '45 mins', frequency: '2x/week', groupSize: '6-10 kids', ageGroup: '4-12 years' }
  }
  
  // Get related services
  const relatedServices = services.filter(s => s.slug !== slug).slice(0, 3)

  // Extract color from service
  const serviceColor = service.color || '#6EC1E4'
  const serviceBgLight = service.bgLight || '#EBF7FC'

  return (
    <main className="min-h-screen bg-[#FFF7E6] overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Subtle Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div 
            className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: serviceBgLight }}
          ></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#F0FAF8] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#636E72] hover:text-[#2D3436] font-medium mb-8 transition-all hover:shadow-md border border-[#E8E8E8] group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-current mb-6"
                   style={{ color: serviceColor }}>
                <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                <span className="text-sm font-semibold">{service.title} Program</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-2">
                <span className="text-[#2D3436] block ">{service.title}</span>
                <span className="text-[#2D3436] bg-clip-text bg-gradient-to-r"
                      style={{ 
                        backgroundImage: `linear-gradient(to right, ${serviceColor}, ${serviceColor}CC)` 
                      }}>
                  Program
                </span>
              </h1>

              {/* Decorative Line */}
              <div className="w-24 h-1 rounded-full mb-2"
                   style={{ backgroundColor: serviceColor }}></div>

              {/* Description */}
              <p className="text-xl text-[#636E72] leading-relaxed mb-2">
                {service.fullDescription}
              </p>

              {/* Session Info Pills */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Clock, label: 'Duration', value: metadata.sessionInfo.duration },
                  { icon: Calendar, label: 'Frequency', value: metadata.sessionInfo.frequency },
                  { icon: Users, label: 'Group Size', value: metadata.sessionInfo.groupSize },
                  { icon: Target, label: 'Age Group', value: metadata.sessionInfo.ageGroup },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E8E8E8]"
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${serviceColor}15` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: serviceColor }} />
                    </div>
                    <div>
                      <div className="text-xs text-[#636E72]">{item.label}</div>
                      <div className="font-bold text-[#2D3436] text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 text-yellow rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: serviceColor }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Trial</span>
                </Link>
                
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white text-[#2D3436] rounded-full font-semibold border-2 border-[#E8E8E8] hover:border-current transition-all duration-300"
                  style={{ '--hover-color': serviceColor } as React.CSSProperties}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://placehold.net/default.png"
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 opacity-10"
                     style={{ 
                       background: `linear-gradient(to top right, ${serviceColor}, transparent)` 
                     }}></div>
                
                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="text-[200px]">{metadata.icon}</span>
                </div>
              </div>

              {/* Floating Stats Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl shadow-xl border border-[#E8E8E8]">
                <div className="flex items-center gap-2 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-[#FFD166] fill-current" />
                  ))}
                </div>
                <div className="text-sm font-bold text-[#2D3436]">4.9/5 Rating</div>
                <div className="text-xs text-[#636E72]">50+ reviews</div>
              </div>

              {/* Popular Badge */}
              <div 
                className="absolute -top-4 -right-4 px-4 py-2 text-black rounded-full shadow-lg text-sm font-bold"
                style={{ backgroundColor: serviceColor }}
              >
                ⭐ Popular
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Benefits List */}
            <div>
              <h2 className="text-4xl font-extrabold mb-8 text-[#2D3436]">
                Key Benefits
              </h2>

              <div className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-[#E8E8E8] hover:border-current hover:shadow-md transition-all duration-300"
                    style={{ color: serviceColor }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${serviceColor}15` }}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-semibold text-[#2D3436] pt-1">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Additional Benefits */}
              <div className="mt-8 p-6 bg-[#F8F9FA] rounded-xl border border-[#E8E8E8]">
                <h3 className="font-bold text-[#2D3436] mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5" style={{ color: serviceColor }} />
                  Additional Benefits
                </h3>
                <ul className="space-y-2">
                  {[
                    'Enhanced social interaction skills',
                    'Improved self-confidence',
                    'Better focus and discipline',
                    'Fun, engaging activities',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#636E72]">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: serviceColor }}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Session Process */}
            <div>
              <h2 className="text-4xl font-extrabold mb-8 text-[#2D3436]">
                What to Expect
              </h2>

              <div className="space-y-4">
                {[
                  { 
                    title: 'Welcome & Warmup', 
                    description: 'Each session starts with a friendly greeting and preparation activities.',
                    icon: Users
                  },
                  { 
                    title: 'Skill Development', 
                    description: `Focused practice on ${service.title.toLowerCase()} techniques and fundamentals.`,
                    icon: Target
                  },
                  { 
                    title: 'Interactive Practice', 
                    description: 'Hands-on activities that reinforce learning through engagement.',
                    icon: Activity
                  },
                  { 
                    title: 'Progress Review', 
                    description: 'Recognition of achievements and encouragement for continued growth.',
                    icon: TrendingUp
                  },
                ].map((step, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border border-[#E8E8E8] hover:shadow-md transition-all duration-300"
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${serviceColor}15` }}
                    >
                      <step.icon className="w-6 h-6" style={{ color: serviceColor }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2D3436] mb-1">{step.title}</h4>
                      <p className="text-[#636E72] text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Safety Note */}
              <div 
                className="mt-8 p-6 rounded-xl border-2"
                style={{ 
                  backgroundColor: `${serviceColor}08`,
                  borderColor: `${serviceColor}30`
                }}
              >
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 flex-shrink-0" style={{ color: serviceColor }} />
                  <div>
                    <h4 className="font-bold text-[#2D3436] mb-1">Safety First</h4>
                    <p className="text-sm text-[#636E72]">
                      All sessions are conducted by certified professionals in a secure, 
                      child-friendly environment with proper supervision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRAINER SECTION ================= */}
      <section className="relative py-20">
        {/* Background */}
        <div className="absolute inset-0 opacity-50"
             style={{ 
               background: `linear-gradient(to bottom right, ${serviceBgLight}, white)` 
             }}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#E8E8E8]">
            <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-center">
              
              {/* Trainer Photo */}
              <div className="relative mx-auto lg:mx-0">
                <div 
                  className="w-48 h-48 md:w-56 md:h-56 rounded-2xl flex items-center justify-center shadow-lg border-4 border-white overflow-hidden"
                  style={{ backgroundColor: serviceBgLight }}
                >
                  <Image
                    src="https://placehold.net/default.png"
                    alt={service.trainer}
                    fill
                    className="object-cover"
                  />
                  <User size={80} className="opacity-30" style={{ color: serviceColor }} />
                </div>
                
                {/* Badge */}
                <div 
                  className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: serviceColor }}
                >
                  <Award className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Trainer Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4"
                     style={{ 
                       backgroundColor: `${serviceColor}15`,
                       color: serviceColor 
                     }}>
                  Meet Your Specialist
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-[#2D3436] mb-2">
                  {service.trainer}
                </h3>
                <p className="font-semibold mb-6" style={{ color: serviceColor }}>
                  {service.title} Specialist
                </p>

                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 opacity-20" 
                         style={{ color: serviceColor }} />
                  <p className="text-lg text-[#636E72] leading-relaxed pl-6">
                    "I'm passionate about helping every child discover their potential through {service.title.toLowerCase()}. 
                    Each session is designed to be both fun and developmentally beneficial."
                  </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { label: 'Experience', value: '8+ Years' },
                    { label: 'Children Helped', value: '200+' },
                    { label: 'Rating', value: '4.9/5' },
                  ].map((stat, i) => (
                    <div key={i} className="px-5 py-3 bg-[#F8F9FA] rounded-xl border border-[#E8E8E8]">
                      <div className="text-lg font-bold" style={{ color: serviceColor }}>{stat.value}</div>
                      <div className="text-xs text-[#636E72]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: serviceColor }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule with {service.trainer.split(' ')[0]}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RELATED SERVICES ================= */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-[#2D3436]">
              Other Programs
            </h2>
            <p className="text-[#636E72]">
              Explore additional services that might interest your child
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((relService, i) => {
              const relMeta = serviceMetadata[relService.slug] || { icon: '✨' }
              return (
                <Link
                  key={i}
                  href={`/services/${relService.slug}`}
                  className="group bg-white rounded-2xl p-6 border-2 border-[#E8E8E8] hover:border-current hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  style={{ color: relService.color || '#6EC1E4' }}
                >
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: relService.bgLight || '#EBF7FC' }}
                  >
                    {relMeta.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3436] mb-2 group-hover:text-current transition-colors">
                    {relService.title}
                  </h3>
                  <p className="text-[#636E72] text-sm mb-4 line-clamp-2">
                    {relService.description}
                  </p>
                  <div className="flex items-center gap-2 font-semibold text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}