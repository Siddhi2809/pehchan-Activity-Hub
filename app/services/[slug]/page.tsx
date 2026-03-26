
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
  Sparkles, 
  Calendar, 
  Activity,
  Clock,
  Users,
  Target,
  Heart,
  Award,
  Play,
  ChevronDown,
  ArrowRight,
  Phone,
  MapPin,
  Quote,
  Zap,
  Shield,
  Smile,
  Music,
  Dumbbell,
  Apple,
  Flower2
} from 'lucide-react'
import { 
  FloatingClouds, 
  FloatingStars,
  BlobShape,
  PlayfulUnderline,
  WaveDivider
} from '@/components/decorations/FloatingElements'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

// Map service slugs to emojis and gradients
const serviceExtras: { [key: string]: { emoji: string; gradient: string; lightGradient: string } } = {
  'dance-classes': { 
    emoji: '💃', 
    gradient: 'from-pink-500 to-rose-500',
    lightGradient: 'from-pink-100 to-rose-100'
  },
  'martial-arts-instructor': { 
    emoji: '🥋', 
    gradient: 'from-blue-500 to-cyan-500',
    lightGradient: 'from-blue-100 to-cyan-100'
  },
  'music-therapy': { 
    emoji: '🎵', 
    gradient: 'from-purple-500 to-violet-500',
    lightGradient: 'from-purple-100 to-violet-100'
  },
  'kids-yoga': { 
    emoji: '🧘', 
    gradient: 'from-teal-500 to-cyan-500',
    lightGradient: 'from-teal-100 to-cyan-100'
  },
  'martial-arts': { 
    emoji: '🥊', 
    gradient: 'from-orange-500 to-amber-500',
    lightGradient: 'from-orange-100 to-amber-100'
  },
  'nutrition-dietician': { 
    emoji: '🥗', 
    gradient: 'from-green-500 to-emerald-500',
    lightGradient: 'from-green-100 to-emerald-100'
  },
}

// Session info for each service
const sessionInfo: { [key: string]: { duration: string; frequency: string; groupSize: string; ageGroup: string } } = {
  'dance-classes': { duration: '45 mins', frequency: '2x/week', groupSize: '8-10 kids', ageGroup: '4-12 years' },
  'martial-arts-instructor': { duration: '60 mins', frequency: '2x/week', groupSize: '6-8 kids', ageGroup: '5-14 years' },
  'music-therapy': { duration: '45 mins', frequency: '1-2x/week', groupSize: '4-6 kids', ageGroup: '3-10 years' },
  'kids-yoga': { duration: '45 mins', frequency: '2-3x/week', groupSize: '8-12 kids', ageGroup: '4-12 years' },
  'martial-arts': { duration: '60 mins', frequency: '2-3x/week', groupSize: '8-10 kids', ageGroup: '5-14 years' },
  'nutrition-dietician': { duration: '30 mins', frequency: '1x/week', groupSize: '1-on-1', ageGroup: '3-16 years' },
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const extras = serviceExtras[slug] || { emoji: '✨', gradient: 'from-purple-500 to-pink-500', lightGradient: 'from-purple-100 to-pink-100' }
  const session = sessionInfo[slug] || { duration: '45 mins', frequency: '2x/week', groupSize: '6-10 kids', ageGroup: '4-12 years' }
  
  // Get related services (exclude current)
  const relatedServices = services.filter(s => s.slug !== slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-purple-50/30 overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className={`absolute inset-0 bg-gradient-to-b ${extras.lightGradient} to-white`}></div>
        
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0">
          <FloatingClouds />
          
          {/* Gradient Blobs */}
          <div className="absolute top-10 right-0 w-[400px] h-[400px] opacity-20">
            <BlobShape color={`var(--kids-${slug.includes('pink') ? 'pink' : slug.includes('blue') ? 'blue' : 'purple'}-soft)`} className="w-full h-full" />
          </div>
        </div>

        {/* Floating Service Icon */}
        <div className="absolute top-32 right-[8%] animate-float hidden lg:block">
          <div className={`w-24 h-24 bg-gradient-to-br ${extras.gradient} rounded-3xl flex items-center justify-center text-5xl shadow-2xl rotate-12`}>
            {extras.emoji}
          </div>
        </div>

        {/* Floating Decorations */}
        <div className="absolute bottom-20 left-[5%] animate-bounceSlow hidden md:block">
          <div className="w-14 h-14 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
            ⭐
          </div>
        </div>
        <div className="absolute top-1/2 left-[3%] animate-float animation-delay-500 hidden lg:block">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-rose-400 rounded-xl flex items-center justify-center text-lg shadow-lg -rotate-12">
            ✨
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-600 hover:text-purple-600 font-semibold mb-8 transition-all hover:shadow-md group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Services
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Content Side */}
            <div className="flex-1 text-left">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${service.bgLight} border-2 border-dashed ${service.borderColor} mb-6 animate-pop-in`}>
                <span className="text-xl">{extras.emoji}</span>
                <span className={`font-bold ${service.iconColor} text-sm uppercase tracking-wider`}>
                  {service.title} Program
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
                <span className="text-slate-800">{service.title}</span>
                <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${extras.gradient}`}>
                  Experience
                </span>
                <span className="inline-block ml-3 animate-wiggle">{extras.emoji}</span>
              </h1>

              {/* Playful Underline */}
              <div className="mb-6 animate-slide-up animation-delay-100">
                <PlayfulUnderline color={service.iconColor.includes('pink') ? '#EC4899' : service.iconColor.includes('blue') ? '#3B82F6' : '#A855F7'} />
              </div>

              {/* Description */}
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 animate-slide-up animation-delay-200">
                {service.fullDescription}
              </p>

              {/* Quick Info Pills */}
              <div className="flex flex-wrap gap-3 mb-8 animate-slide-up animation-delay-300">
                {[
                  { icon: Clock, label: session.duration },
                  { icon: Calendar, label: session.frequency },
                  { icon: Users, label: session.groupSize },
                  { icon: Smile, label: session.ageGroup },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className={`flex items-center gap-2 px-4 py-2 ${service.bgLight} rounded-full`}
                  >
                    <item.icon className={`w-4 h-4 ${service.iconColor}`} />
                    <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-400">
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${extras.gradient} text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105`}
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Trial
                  <Sparkles className="w-5 h-5" />
                </Link>
                
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white text-slate-700 rounded-full font-semibold border-2 border-slate-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>

            {/* Visual Side */}
            <div className="w-full lg:w-[45%] animate-slide-right">
              <div className="relative">
                {/* Background Shape */}
                <div className={`absolute -top-4 -left-4 w-full h-full bg-gradient-to-br ${extras.gradient} rounded-[2.5rem] rotate-3 opacity-20`}></div>
                
                {/* Main Image Container */}
                <div className={`relative aspect-square rounded-[2.5rem] ${service.bgLight} border-8 border-white overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500`}>
                  {/* Placeholder Icon - Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[150px] opacity-40">{extras.emoji}</span>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${extras.gradient} opacity-10`}></div>
                  
                  {/* Actual Image (uncomment when you have images) */}
                  <Image
                    src="https://placehold.net/default.png"
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Badge - Rating */}
                <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-2xl shadow-xl animate-pop-in animation-delay-500">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-slate-800">4.9/5</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Based on 50+ reviews</div>
                </div>

                {/* Floating Badge - Popular */}
                <div className={`absolute -top-4 -right-4 bg-gradient-to-r ${extras.gradient} px-4 py-2 rounded-full shadow-xl animate-pop-in animation-delay-300 text-white font-bold text-sm`}>
                  ⭐ Popular Choice
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Benefits */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold mb-6">
                <Star className="w-4 h-4 fill-current" />
                Amazing Benefits
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                <span className="text-slate-800">What Your Child </span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${extras.gradient}`}>
                  Will Gain
                </span>
                <span className="inline-block ml-2">🌟</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className={`
                      group p-5 rounded-2xl ${service.bgLight} border-2 ${service.borderColor}
                      flex items-center gap-4 
                      hover:bg-white hover:shadow-xl hover:-translate-y-1 
                      transition-all duration-300
                    `}
                  >
                    <div className={`
                      w-12 h-12 rounded-xl bg-gradient-to-br ${extras.gradient} 
                      text-white flex items-center justify-center shadow-lg
                      group-hover:scale-110 group-hover:rotate-6 transition-all duration-300
                    `}>
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-bold text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Additional Benefits */}
              <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Zap className={`w-5 h-5 ${service.iconColor}`} />
                  Plus, Your Child Gets:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Improved social skills & friendships',
                    'Boosted self-confidence',
                    'Better focus & concentration',
                    'Fun & memorable experiences',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${extras.gradient}`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What to Expect */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-6">
                <Activity className="w-4 h-4" />
                Session Overview
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
                <span className="text-slate-800">The Magic </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Process
                </span>
                <span className="inline-block ml-2">✨</span>
              </h2>

              <div className="space-y-4">
                {[
                  { 
                    icon: '👋', 
                    title: 'Warm Welcome', 
                    description: 'We greet each child and help them feel comfortable and excited.',
                    color: 'from-pink-400 to-rose-500'
                  },
                  { 
                    icon: '🎯', 
                    title: 'Skill Building', 
                    description: `Fun activities focused on ${service.title.toLowerCase()} fundamentals.`,
                    color: 'from-purple-400 to-violet-500'
                  },
                  { 
                    icon: '🎮', 
                    title: 'Play & Practice', 
                    description: 'Interactive games and exercises to reinforce learning.',
                    color: 'from-blue-400 to-cyan-500'
                  },
                  { 
                    icon: '⭐', 
                    title: 'Celebrate Progress', 
                    description: 'Recognition of achievements and encouragement.',
                    color: 'from-yellow-400 to-orange-500'
                  },
                ].map((step, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{step.title}</h4>
                      <p className="text-slate-500 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Safety Note */}
              <div className={`mt-6 p-5 ${service.bgLight} rounded-2xl border-2 border-dashed ${service.borderColor}`}>
                <div className="flex items-center gap-3">
                  <Shield className={`w-8 h-8 ${service.iconColor}`} />
                  <div>
                    <h4 className="font-bold text-slate-800">Safety First</h4>
                    <p className="text-sm text-slate-600">All sessions are supervised by certified professionals in a child-safe environment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRAINER SPOTLIGHT ================= */}
      <section className="relative py-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${extras.lightGradient} to-white`}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 overflow-hidden relative">
            
            {/* Decorative Elements */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${extras.gradient} opacity-5 rounded-bl-full`}></div>
            <div className="absolute bottom-8 left-8 text-6xl opacity-10">{extras.emoji}</div>
            
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              
              {/* Trainer Image */}
              <div className="relative">
                <div className={`w-48 h-48 md:w-56 md:h-56 rounded-[2rem] ${service.bgLight} flex items-center justify-center shadow-xl border-4 border-white overflow-hidden`}>
                  {/* Placeholder - Replace with actual image */}
                  <User size={80} className={service.iconColor} />
                  
                  {/* Actual Image (uncomment when you have images) */}
                  <Image
                    src="https://placehold.net/default.png"
                    alt={service.trainer}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Verified Badge */}
                <div className={`absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-br ${extras.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                  <Award className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Trainer Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${service.bgLight} ${service.iconColor} font-semibold text-sm mb-4`}>
                  <Sparkles className="w-4 h-4" />
                  Meet Your Specialist
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
                  {service.trainer}
                </h3>
                <p className={`${service.iconColor} font-bold uppercase tracking-wider text-sm mb-6`}>
                  {service.title} Expert
                </p>

                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className={`absolute -top-2 -left-2 w-8 h-8 ${service.iconColor} opacity-30`} />
                  <p className="text-lg text-slate-600 italic leading-relaxed pl-6">
                    "Every child has a superpower waiting to be discovered. My mission is to help them find it through {service.title.toLowerCase()} and create memories that last a lifetime."
                  </p>
                </div>

                {/* Trainer Stats */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  {[
                    { label: 'Experience', value: '8+ Years' },
                    { label: 'Kids Trained', value: '200+' },
                    { label: 'Rating', value: '4.9 ⭐' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center px-4 py-2 bg-slate-50 rounded-xl">
                      <div className="text-lg font-extrabold text-slate-800">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${extras.gradient} text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <Calendar className="w-5 h-5" />
                  Book with {service.trainer.split(' ')[0]}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= RELATED SERVICES ================= */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="text-slate-800">Explore More </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Adventures
              </span>
              <span className="inline-block ml-2">🎨</span>
            </h2>
            <p className="text-slate-600">
              Check out other exciting programs for your child!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((relService, i) => {
              const relExtras = serviceExtras[relService.slug] || { emoji: '✨', gradient: 'from-purple-500 to-pink-500' }
              return (
                <Link
                  key={i}
                  href={`/services/${relService.slug}`}
                  className="group bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${relService.bgLight} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {relExtras.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {relService.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {relService.description}
                  </p>
                  <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Simple Spacer before Footer */}
      <div className="h-8 bg-purple-50/30"></div>

      <Footer />
    </main>
  )
}