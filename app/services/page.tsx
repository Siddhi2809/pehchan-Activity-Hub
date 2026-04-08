'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services } from '@/lib/services'
import { 
  Star, 
  Sparkles, 
  Activity, 
  Calendar, 
  ArrowRight, 
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Target,
  TrendingUp,
  Users,
  Award,
  Heart,
  Shield,
  ChevronRight
} from 'lucide-react'

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const processSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: "Meet with our team to discuss your child's needs and goals.",
      icon: Users,
      color: '#6EC1E4',
    },
    {
      step: '2',
      title: 'Personalized Plan',
      description: 'We create a customized program tailored to your child.',
      icon: Target,
      color: '#95E1D3',
    },
    {
      step: '3',
      title: 'Begin Sessions',
      description: 'Your child starts their journey with expert guidance.',
      icon: TrendingUp,
      color: '#FFD166',
    },
  ]

  const features = [
    { icon: Award, title: 'Certified Experts', description: 'Licensed professionals', color: '#6EC1E4' },
    { icon: Shield, title: 'Safe Environment', description: 'Child-friendly spaces', color: '#95E1D3' },
    { icon: Activity, title: 'Progress Tracking', description: 'Regular updates', color: '#FFD166' },
    { icon: Heart, title: 'Personalized Care', description: 'Individual attention', color: '#FF8C94' },
  ]

  const whyChooseUs = [
    { 
      icon: Award, 
      title: 'Certified Professionals', 
      description: 'All therapists hold relevant certifications and licenses',
      color: '#6EC1E4',
      bgLight: '#EBF7FC'
    },
    { 
      icon: Target, 
      title: 'Individualized Programs', 
      description: 'Customized approaches based on each child\'s unique needs',
      color: '#95E1D3',
      bgLight: '#F0FAF8'
    },
    { 
      icon: TrendingUp, 
      title: 'Proven Results', 
      description: 'Track record of helping children reach their potential',
      color: '#FFD166',
      bgLight: '#FFF8E5'
    },
    { 
      icon: Shield, 
      title: 'Safe & Welcoming', 
      description: 'Nurturing environment designed for children\'s comfort',
      color: '#FF8C94',
      bgLight: '#FFF0F1'
    },
  ]

  const stats = [
    { number: '500+', label: 'Children Served', color: '#6EC1E4' },
    { number: '15+', label: 'Specialists', color: '#95E1D3' },
    { number: '98%', label: 'Success Rate', color: '#FFD166' },
    { number: '10+', label: 'Years Experience', color: '#FF8C94' },
  ]

  // Service icon mapping
  const serviceIcons: { [key: string]: any } = {
    'dance-classes': '💃',
    'martial-arts-instructor': '🥋',
    'music-therapy': '🎵',
    'kids-yoga': '🧘',
    'martial-arts': '🥊',
    'nutrition-dietician': '🍎',
  }

  return (
    <main className="min-h-screen bg-[#FFF7E6] overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#EBF7FC] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F0FAF8] rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#6EC1E4]/30 mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#95E1D3] animate-pulse"></div>
            <span className="text-sm font-semibold text-[#2D3436]">Our Programs & Services</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            <span className="text-[#2D3436] block mb-2">Supporting Your Child's</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3]">
              Growth & Development
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3] rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-[#636E72] max-w-3xl mx-auto leading-relaxed mb-12">
            Explore our range of professional therapy services and enrichment programs 
            designed to help every child thrive.
          </p>

          {/* Feature Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="flex flex-col items-center gap-3 p-5 bg-white rounded-2xl shadow-sm border border-[#E8E8E8] hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <div className="text-center">
                  <div className="font-bold text-[#2D3436] text-sm mb-1">{feature.title}</div>
                  <div className="text-xs text-[#636E72]">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2D3436]">
              Our Services
            </h2>
            <p className="text-lg text-[#636E72] max-w-2xl mx-auto">
              Professional programs designed to support your child's unique journey
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredService(service.slug)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="h-full bg-white rounded-2xl p-8 border-2 border-[#E8E8E8] shadow-sm hover:shadow-xl hover:border-current transition-all duration-500 hover:-translate-y-2"
                     style={{ color: service.color.includes('#') ? service.color : '#6EC1E4' }}>
                  
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: service.bgLight || `${service.color}15`
                    }}
                  >
                    <span className="text-3xl">
                      {serviceIcons[service.slug] || '✨'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#2D3436] mb-3 group-hover:text-current transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#636E72] mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#2D3436] text-sm mb-3 flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      Additional:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-2 text-sm text-[#636E72]"
                        >
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trainer */}
                  <div className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-xl mb-6">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)` }}
                    >
                      {service.trainer.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-xs text-[#636E72]">Led by</div>
                      <div className="font-semibold text-[#2D3436] text-sm">{service.trainer}</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full py-3 px-6 rounded-xl font-bold text-black shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      style={{ backgroundColor: service.color }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link
                      href="/contact"
                      className="w-full py-3 px-6 rounded-xl font-semibold bg-white text-[#2D3436] border-2 border-[#E8E8E8] hover:border-current hover:bg-[#F8F9FA] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                      style={{ 
                        '--hover-color': service.color 
                      } as React.CSSProperties}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Free Trial</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="relative py-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBF7FC] to-[#F0FAF8] opacity-50"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2D3436]">
              How It Works
            </h2>
            <p className="text-lg text-[#636E72] max-w-2xl mx-auto">
              Getting started is simple and straightforward
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-1 bg-gradient-to-r from-[#6EC1E4] via-[#95E1D3] to-[#FFD166] rounded-full opacity-30"></div>
            
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border-2 border-[#E8E8E8] hover:shadow-lg hover:border-current transition-all duration-300"
                     style={{ color: item.color }}>
                  {/* Step Number */}
                  <div 
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl text-white text-xl font-bold flex items-center justify-center shadow-lg z-10"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6 mt-4"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#636E72] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Arrow (Mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ChevronRight className="w-6 h-6 text-[#B2BEC3] rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#2D3436] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#6EC1E4] transition-all duration-300 hover:-translate-y-1"
            >
              <Calendar className="w-6 h-6" />
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#2D3436]">
                Why Choose Little Stars?
              </h2>
              
              <p className="text-lg text-[#636E72] mb-8 leading-relaxed">
                We're committed to providing the highest quality care and support 
                for every child and family we serve.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-[#E8E8E8] hover:border-current hover:shadow-md transition-all duration-300"
                    style={{ color: item.color }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: item.bgLight }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2D3436] mb-1">{item.title}</h4>
                      <p className="text-[#636E72] text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#E8E8E8]">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {stats.map((stat, i) => (
                    <div 
                      key={i}
                      className="text-center p-6 bg-[#F8F9FA] rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                    >
                      <div 
                        className="text-4xl font-bold mb-1"
                        style={{ color: stat.color }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-sm text-[#636E72] font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="p-6 bg-[#EBF7FC] rounded-xl border border-[#6EC1E4]/30">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 text-[#FFD166] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#636E72] italic text-sm leading-relaxed mb-3">
                    "The team at Little Stars has been incredible. Our daughter has made 
                    amazing progress and actually looks forward to her sessions."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#6EC1E4] flex items-center justify-center text-white font-bold">
                      SM
                    </div>
                    <div>
                      <div className="font-semibold text-[#2D3436] text-sm">Sarah M.</div>
                      <div className="text-xs text-[#636E72]">Parent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK INFO BAR ================= */}
      <section className="relative py-16 bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: 'Session Length', value: '45-60 min' },
              { icon: Calendar, title: 'Schedule', value: 'Mon-Sat' },
              { icon: MapPin, title: 'Location', value: 'Central' },
              { icon: Phone, title: 'Support', value: '24/7' },
            ].map((item, i) => (
              <div 
                key={i}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-white/80 font-medium text-sm">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}