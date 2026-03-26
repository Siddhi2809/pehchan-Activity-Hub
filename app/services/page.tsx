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
  Music,
  Heart,
  CheckCircle2,
  Users,
  Trophy,
  Clock,
  MapPin,
  Phone,
  Rocket,
  Zap,
  Target,
  Award,
  Play,
  ChevronRight
} from 'lucide-react'
import { 
  FloatingClouds, 
  FloatingStars,
  BlobShape,
  PlayfulUnderline,
  SunDecoration,
  WaveDivider
} from '@/components/decorations/FloatingElements'

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const processSteps = [
    {
      step: '1',
      title: 'Say Hello!',
      description: "We meet your wonderful family to understand your child's unique superpowers.",
      icon: '👋',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      shadowColor: 'shadow-blue-200',
    },
    {
      step: '2',
      title: 'Pick a Path',
      description: 'Together, we select the perfect mix of activities for fun and development.',
      icon: '🎯',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      shadowColor: 'shadow-purple-200',
    },
    {
      step: '3',
      title: 'Have Fun & Grow',
      description: 'Your child joins our expert-led sessions full of smiles and progress!',
      icon: '🚀',
      color: 'from-orange-400 to-yellow-500',
      bgColor: 'bg-orange-50',
      shadowColor: 'shadow-orange-200',
    },
  ]

  const features = [
    { icon: '👨‍⚕️', title: 'Expert Trainers', description: 'Certified professionals' },
    { icon: '🏠', title: 'Safe Environment', description: 'Child-friendly spaces' },
    { icon: '📊', title: 'Progress Tracking', description: 'Regular updates' },
    { icon: '🎨', title: 'Fun Activities', description: 'Learning through play' },
  ]

  // Map service slugs to emojis
  const serviceEmojis: { [key: string]: string } = {
    'dance-classes': '💃',
    'martial-arts-instructor': '🥋',
    'music-therapy': '🎵',
    'kids-yoga': '🧘',
    'martial-arts': '🥊',
    'nutrition-dietician': '🥗',
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-purple-50/30 overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-purple-50 to-white"></div>
        
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0">
          <FloatingClouds />
          <FloatingStars />
          
          {/* Gradient Blobs */}
          <div className="absolute top-10 right-0 w-[500px] h-[500px] opacity-30">
            <BlobShape color="var(--kids-pink-soft)" className="w-full h-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-20">
            <BlobShape color="var(--kids-blue-soft)" className="w-full h-full" />
          </div>
          
          {/* Sun */}
          <div className="absolute top-20 right-16 w-20 h-20 hidden lg:block">
            <SunDecoration className="w-full h-full" />
          </div>
        </div>

        {/* Floating Decorations */}
        <div className="absolute top-32 left-[5%] animate-float hidden md:block">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg rotate-12">
            ⭐
          </div>
        </div>
        <div className="absolute top-48 right-[8%] animate-bounceSlow hidden md:block">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
            🎨
          </div>
        </div>
        <div className="absolute bottom-40 left-[10%] animate-float animation-delay-500 hidden lg:block">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-violet-400 rounded-xl flex items-center justify-center text-xl shadow-lg -rotate-12">
            🎵
          </div>
        </div>
        <div className="absolute bottom-48 right-[12%] animate-bounceSlow animation-delay-300 hidden lg:block">
          <div className="w-14 h-14 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg rotate-6">
            🧘
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border-2 border-dashed border-purple-300 mb-6 animate-pop-in shadow-lg">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="font-bold text-purple-700">Explore Our Fun Programs!</span>
          </div>

          {/* Tagline */}
          <span className="font-satisfy text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 block mb-4 animate-slide-up">
            Where Learning Meets Play
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up animation-delay-100">
            <span className="text-slate-800">Fun & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient">
              Growing
            </span>
            <br />
            <span className="text-slate-800">Activities!</span>
            <span className="inline-block ml-3 animate-bounce">🚀</span>
          </h1>

          {/* Playful Underline */}
          <div className="flex justify-center mb-6 animate-slide-up animation-delay-200">
            <PlayfulUnderline color="#A855F7" />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-300 mb-10">
            Discover a world of <span className="text-pink-500 font-bold">exciting classes</span>, 
            <span className="text-purple-500 font-bold"> therapy</span>, and 
            <span className="text-orange-500 font-bold"> guidance</span> designed specially 
            for your little champions! ✨
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-400">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-md border border-purple-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">{feature.icon}</span>
                <div className="text-left">
                  <div className="font-bold text-slate-800 text-sm">{feature.title}</div>
                  <div className="text-xs text-slate-500">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 text-5xl opacity-20 animate-float">✨</div>
        <div className="absolute bottom-20 left-10 text-4xl opacity-20 animate-bounceSlow">🌟</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold mb-4 animate-pop-in">
              <Heart className="w-4 h-4 fill-current" />
              Our Services
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-slate-800">Choose Your </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Adventure
              </span>
              <span className="inline-block ml-2 animate-wiggle">🎯</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each program is designed with love to help your child discover their superpowers!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredService(service.slug)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`
                  relative h-full bg-white rounded-[2rem] p-8 
                  border-3 border-slate-100 shadow-lg
                  transition-all duration-500 overflow-hidden
                  hover:shadow-2xl hover:-translate-y-3 hover:border-transparent
                  ${hoveredService === service.slug ? 'ring-4 ring-purple-200' : ''}
                `}>
                  
                  {/* Gradient Background on Hover */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${service.color.replace('group-hover:', '')} 
                    opacity-0 group-hover:opacity-5 transition-opacity duration-500
                  `}></div>
                  
                  {/* Decorative Blob */}
                  <div className={`
                    absolute -right-12 -top-12 w-40 h-40 rounded-full 
                    ${service.bgLight} opacity-50 
                    transition-transform duration-500 group-hover:scale-150
                  `}></div>

                  {/* Top Section */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`
                      w-20 h-20 rounded-2xl ${service.bgLight} 
                      flex items-center justify-center mb-6 
                      transition-all duration-500 rotate-3 
                      group-hover:-rotate-6 group-hover:scale-110
                      shadow-lg
                    `}>
                      <span className="text-4xl">
                        {serviceEmojis[service.slug] || '✨'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`
                      text-2xl font-extrabold text-slate-800 mb-3 
                      transition-colors duration-300
                      group-hover:text-transparent group-hover:bg-clip-text 
                      group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500
                    `}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits Section */}
                  <div className={`
                    relative z-10 ${service.bgLight} rounded-2xl p-5 mb-6
                  `}>
                    <h4 className={`
                      font-bold text-sm ${service.iconColor} uppercase tracking-wider mb-4
                      flex items-center gap-2
                    `}>
                      <Activity className="w-4 h-4" />
                      What Kids Gain:
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center gap-3 text-sm font-medium text-slate-700"
                        >
                          <span className={`
                            w-6 h-6 rounded-full flex items-center justify-center 
                            bg-white ${service.iconColor} font-bold text-xs shadow-sm
                          `}>
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trainer Info */}
                  <div className="relative z-10 flex items-center gap-3 mb-6 p-3 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-bold">
                      {service.trainer.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Trainer</div>
                      <div className="font-semibold text-slate-800 text-sm">{service.trainer}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="relative z-10 space-y-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className={`
                        w-full py-4 px-6 rounded-xl font-bold text-white 
                        shadow-lg transition-all duration-300 
                        flex items-center justify-center gap-2
                        hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
                        ${service.btnColor}
                      `}
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link
                      href="/contact"
                      className="
                        w-full py-3 px-6 rounded-xl font-semibold 
                        bg-white text-slate-700 border-2 border-slate-200
                        hover:border-purple-300 hover:bg-purple-50
                        transition-all duration-300
                        flex items-center justify-center gap-2 text-sm
                      "
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Free Trial</span>
                    </Link>
                  </div>

                  {/* Corner Decoration */}
                  <div className={`
                    absolute bottom-0 right-0 w-24 h-24 
                    bg-gradient-to-br ${service.color.replace('group-hover:', '')} 
                    opacity-0 group-hover:opacity-10 rounded-tl-full 
                    transition-opacity duration-300
                  `}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50/50 to-orange-50/30"></div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply opacity-30 blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-4 animate-pop-in">
              <Rocket className="w-4 h-4" />
              Our Magical Process
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-slate-800">Ready, Set, </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Grow!
              </span>
              <span className="inline-block ml-2 animate-bounce">🌟</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Starting your child's journey is easy as 1-2-3!
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-orange-300 rounded-full"></div>
            
            {processSteps.map((item, index) => (
              <div 
                key={index} 
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="
                  bg-white rounded-3xl p-8 text-center shadow-xl 
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
                  border border-slate-100
                ">
                  {/* Step Number */}
                  <div className={`
                    absolute -top-6 left-1/2 -translate-x-1/2 
                    w-16 h-16 rounded-2xl 
                    bg-gradient-to-br ${item.color} 
                    text-white text-2xl font-extrabold 
                    flex items-center justify-center 
                    shadow-lg ${item.shadowColor}
                    rotate-6 hover:rotate-0 transition-transform duration-300
                  `}>
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-5xl mb-4 mt-6">{item.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Arrow (Mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-6 h-6 text-purple-500 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA After Process */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-full font-bold text-lg shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <Calendar className="w-6 h-6" />
              <span>Start Your Journey Today</span>
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Content */}
            <div className="animate-slide-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-6">
                <Trophy className="w-4 h-4" />
                Why Little Stars?
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="text-slate-800">What Makes Us </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
                  Special
                </span>
                <span className="inline-block ml-2">✨</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Little Stars, we believe every child is unique and deserves 
                personalized attention. Here's why families choose us:
              </p>

              <div className="space-y-5">
                {[
                  { icon: '👨‍⚕️', title: 'Certified Experts', description: 'All trainers are professionally certified', color: 'bg-blue-50 text-blue-500' },
                  { icon: '🎯', title: 'Personalized Programs', description: 'Tailored to your child\'s unique needs', color: 'bg-purple-50 text-purple-500' },
                  { icon: '📊', title: 'Progress Reports', description: 'Regular updates on your child\'s growth', color: 'bg-green-50 text-green-500' },
                  { icon: '🏠', title: 'Safe Environment', description: 'Child-friendly, secure facilities', color: 'bg-orange-50 text-orange-500' },
                  { icon: '💰', title: 'Flexible Pricing', description: 'Affordable packages for every family', color: 'bg-pink-50 text-pink-500' },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-x-1 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative animate-slide-right">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Background Shapes */}
                <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-[3rem] rotate-3"></div>
                
                {/* Main Card */}
                <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl border-4 border-white">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '500+', label: 'Happy Kids', emoji: '😊', color: 'from-pink-400 to-rose-500' },
                      { value: '15+', label: 'Expert Trainers', emoji: '👨‍⚕️', color: 'from-blue-400 to-cyan-500' },
                      { value: '98%', label: 'Satisfaction', emoji: '⭐', color: 'from-yellow-400 to-orange-500' },
                      { value: '10+', label: 'Years Experience', emoji: '🏆', color: 'from-purple-400 to-violet-500' },
                    ].map((stat, i) => (
                      <div 
                        key={i}
                        className="text-center p-5 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                      >
                        <div className="text-4xl mb-2">{stat.emoji}</div>
                        <div className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial Preview */}
                  <div className="mt-6 p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">💬</div>
                      <div>
                        <p className="text-slate-600 italic text-sm leading-relaxed mb-3">
                          "Little Stars transformed our daughter's confidence. She now loves going to her sessions!"
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-1">
                            {[1,2,3,4,5].map(i => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm font-semibold text-slate-700">— Sarah M.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg rotate-12 animate-float">
                  🌟
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-300 to-teal-400 rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounceSlow">
                  ✅
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK INFO SECTION ================= */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: 'Session Duration', value: '45-60 mins', description: 'Per session' },
              { icon: Calendar, title: 'Schedule', value: 'Flexible', description: 'Mon-Sat available' },
              { icon: MapPin, title: 'Location', value: 'Central City', description: 'Easy access' },
              { icon: Phone, title: 'Support', value: '24/7', description: 'Always here for you' },
            ].map((item, i) => (
              <div 
                key={i}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-2xl font-extrabold text-white mb-1">{item.value}</div>
                <div className="text-white/80 font-semibold text-sm">{item.title}</div>
                <div className="text-white/60 text-xs mt-1">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Spacer before Footer */}
      <div className="h-8 bg-white"></div>

      <Footer />
    </main>
  )
}