'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Users, 
  Pill, 
  Lightbulb, 
  Puzzle, 
  Heart, 
  MoveRight, 
  Sparkles,
  Star,
  Music,
  Smile,
  Apple,
  Shield,
  ArrowRight,
  Play
} from 'lucide-react'
import { 
  FloatingClouds, 
  FloatingStars, 
  FloatingBalloons,
  WaveDivider,
  WavyLineDivider,
  BlobShape,
  SunDecoration,
  RainbowArc,
  PlayfulUnderline
} from '@/components/decorations/FloatingElements'

export default function Home() {
  const services = [
    {
      title: 'Dance Classes',
      icon: Music,
      description: 'Energetic and fun dance sessions that help children express themselves and build confidence.',
      color: 'from-[#FF8C94] to-[#FF6B75]', // Coral
      bgSoft: 'bg-[#FFF0F1]',
      iconBg: 'bg-[#FFF0F1]',
      iconColor: 'text-[#FF8C94]',
      borderHover: 'hover:border-[#FF8C94]',
      delay: 0,
    },
    {
      title: 'Music Therapy',
      icon: Sparkles,
      description: 'Using music and rhythm to support emotional well-being and cognitive development.',
      color: 'from-[#FFD166] to-[#F5C04D]', // Soft Yellow
      bgSoft: 'bg-[#FFF8E5]',
      iconBg: 'bg-[#FFF8E5]',
      iconColor: 'text-[#E6A800]',
      borderHover: 'hover:border-[#FFD166]',
      delay: 100,
    },
    {
      title: 'Kids Yoga',
      icon: Smile,
      description: 'Playful yoga sessions designed to help children develop flexibility and mindfulness.',
      color: 'from-[#95E1D3] to-[#76CBBF]', // Mint Green
      bgSoft: 'bg-[#F0FAF8]',
      iconBg: 'bg-[#F0FAF8]',
      iconColor: 'text-[#95E1D3]',
      borderHover: 'hover:border-[#95E1D3]',
      highlight: true,
      delay: 200,
    },
    {
      title: 'Martial Arts',
      icon: Shield,
      description: 'Discipline-focused training to build strength, focus, and self-defense skills.',
      color: 'from-[#6EC1E4] to-[#4DA8CE]', // Sky Blue
      bgSoft: 'bg-[#EBF7FC]',
      iconBg: 'bg-[#EBF7FC]',
      iconColor: 'text-[#6EC1E4]',
      borderHover: 'hover:border-[#6EC1E4]',
      delay: 300,
    },
    {
      title: 'Nutrition & Diet',
      icon: Apple,
      description: 'Expert nutritional guidance to support your child\'s healthy growth and development.',
      color: 'from-[#95E1D3] to-[#76CBBF]', // Mint Green
      bgSoft: 'bg-[#F0FAF8]',
      iconBg: 'bg-[#F0FAF8]',
      iconColor: 'text-[#95E1D3]',
      borderHover: 'hover:border-[#95E1D3]',
      delay: 400,
    },
  ]

  const stats = [
    { number: '500+', label: 'Happy Kids', icon: '😊' },
    { number: '15+', label: 'Expert Therapists', icon: '👨‍⚕️' },
    { number: '6+', label: 'Fun Programs', icon: '🎨' },
    { number: '98%', label: 'Parent Satisfaction', icon: '⭐' },
  ]

  return (
    <main className="bg-[#FFF7E6] over
    flow-hidden">
      <Navbar />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative z-20 min-h-[600px] md:min-h-[700px] flex items-center pt-6">
        
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0">
          <FloatingClouds />
          <FloatingStars />
          
          {/* Gradient Blobs - Premium Colors */}
          <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-20">
            <BlobShape color="#00b7ff" className="w-full h-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15">
            <BlobShape color="#00ffcc" className="w-full h-full" />
          </div>
          
          {/* Sun */}
          <div className="absolute top-10 right-10 w-20 h-20 hidden lg:block">
            <SunDecoration className="w-full h-full" />
          </div>
        </div>

        {/* Hero Image with Playful Frame */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-1 lg:left-[10%]">
            <Image
              src="/hero_therapy.png"
              alt="Happy children in therapy"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          
          {/* Gradient Overlay - Cream to Transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF7E6] via-[#FFF7E6]/5 via-40% to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            
            {/* Badge - Soft Yellow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF8E5] border-2 border-[#FFD166] mb-6 animate-pop-in">
              <span className="text-2xl animate-wave">👋</span>
              <span className="font-semibold text-[#2D3436]">Welcome to Little Stars!</span>
            </div>

            {/* Tagline - Mint Green */}
            <span className="font-satisfy text-4xl md:text-5xl text-[#95E1D3] block mb-4 animate-slide-up">
              Where Kids Shine Bright ✨
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up animation-delay-100">
              <span className="text-[#2D3436]">Helping Every</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3]">
                Child Thrive
              </span>
              <br />
              <span className="text-[#2D3436]">& Grow! </span>
              <span className="inline-block animate-bounce-in animation-delay-500">🌈</span>
            </h1>

            {/* Playful Underline */}
            <div className="mb-6">
              <PlayfulUnderline color="#95E1D3" />
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-black mb-8 max-w-xl animate-slide-up animation-delay-200">
              Fun therapy sessions designed with <span className="text-[#FF8C94] font-semibold">love</span> and 
              <span className="text-[#6EC1E4] font-semibold"> care</span> to help your little ones 
              learn, heal, and discover their superpowers! 🦸‍♂️
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-slide-up animation-delay-300">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#6EC1E4] text-white rounded-full font-bold text-lg shadow-lg shadow-[#6EC1E4]/30 hover:shadow-xl hover:shadow-[#6EC1E4]/40 hover:bg-[#4DA8CE] transition-all duration-300 hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Book a Fun Session</span>
                <Sparkles className="w-5 h-5 relative z-10 group-hover:animate-spin-slow" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-6 py-4 bg-white/80 backdrop-blur-sm text-[#6EC1E4] rounded-full font-semibold border-2 border-[#E8E8E8] hover:border-[#6EC1E4] hover:bg-white transition-all duration-300"
              >
                <Play className="w-5 h-5 fill-current" />
                Watch Our Story
              </Link>
            </div>

            {/* Floating Elements around CTA - Premium Colors */}
            <div className="relative mt-4">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-[#FFD166] rounded-full animate-bounceSlow shadow-lg"></div>
              <div className="absolute left-20 -top-2 w-6 h-6 bg-[#FF8C94] rotate-45 animate-float shadow-lg"></div>
              <div className="absolute left-40 top-2 w-5 h-5 bg-[#6EC1E4] rounded-full animate-float animation-delay-200 shadow-lg"></div>
              <div className="absolute left-56 -top-1 w-7 h-7 bg-[#95E1D3] rounded-full animate-bounceSlow animation-delay-300 shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Floating Balloons - Right Side */}
        <div className="hidden lg:block">
          <FloatingBalloons />
        </div>

        {/* Bottom Wave - Mint Green */}
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider color="#95E1D3" />
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="relative z-10 bg-[#95E1D3] py-16 md:py-20 -mt-10 pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="text-center text-white animate-pop-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.number}</div>
                <div className="text-[#2D3436]/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Wave to Services */}
        <div className="absolute bottom-0 left-0 w-full translate-y-[90%] z-10">
          <WaveDivider color="#ffffff" flip />
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-white">
        {/* Background Pattern - Subtle */}
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        
        {/* Decorative Blobs - Very Subtle */}
        <div className="absolute top-0 right-0 w-72 h-72 opacity-10">
          <BlobShape color="#EBF7FC" className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <BlobShape color="#F0FAF8" className="w-full h-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#EBF7FC] text-[#6EC1E4] font-semibold text-base mb-4 animate-pop-in">
              <Sparkles className="w-4 h-4" />
              What We Offer
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="text-[#2D3436]">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3]">
                Fun Programs
              </span>
              <span className="inline-block ml-2 animate-wiggle">🎨</span>
            </h2>
            
            <p className="text-xl text-[#636E72] max-w-2xl mx-auto">
              Discover exciting activities designed to help your child grow stronger, 
              happier, and more confident every day!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`
                  group relative p-6 rounded-3xl bg-white border-2 border-[#E8E8E8]
                  shadow-lg shadow-slate-100 transition-all duration-500 cursor-pointer
                  hover:-translate-y-3 hover:shadow-2xl ${service.borderHover}
                  ${service.highlight ? 'lg:-translate-y-4 border-[#95E1D3] shadow-[#95E1D3]/20' : ''}
                  animate-slide-up
                `}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#95E1D3] to-[#76CBBF] text-white text-xs font-bold rounded-full shadow-lg">
                    ⭐ POPULAR
                  </div>
                )}
                
                {/* Icon */}
                <div className={`
                  w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center
                  ${service.iconBg} transition-all duration-300
                  group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg
                `}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#2D3436] text-center mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#636E72] text-sm text-center leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="text-center">
                  <Link
                    href={`/services`}
                    className={`
                      inline-flex items-center gap-1 text-sm font-semibold
                      ${service.iconColor} opacity-0 group-hover:opacity-100
                      transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                    `}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Decorative Corner - Subtle */}
                <div className={`
                  absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-5
                  bg-gradient-to-br ${service.color} rounded-bl-full
                  transition-opacity duration-300
                `}></div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3] text-white rounded-full font-bold text-lg shadow-lg shadow-[#6EC1E4]/30 hover:shadow-xl hover:shadow-[#6EC1E4]/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Explore All Programs
              <MoveRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Wavy Divider - Soft Yellow */}
      <WavyLineDivider color="#FFF8E5" />

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background - Soft Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBF7FC] via-white to-[#F0FAF8]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-10 hidden lg:block">
          <RainbowArc className="w-full h-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Side */}
            <div className="relative animate-slide-left">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#6EC1E4]/20">
                <Image
                  src="/therapy-center.jpg"
                  alt="Happy kids in therapy session"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                
                {/* Playful Frame Overlay */}
                <div className="absolute inset-0 border-8 border-white/30 rounded-3xl"></div>
              </div>

              {/* Floating Badge 1 - Soft Yellow */}
              <div className="absolute -top-6 -left-6 p-4 bg-white rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FFD166] to-[#F5C04D] rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <div className="font-bold text-[#2D3436]">10+ Years</div>
                    <div className="text-sm text-[#636E72]">Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 - Mint Green */}
              <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-2xl shadow-xl animate-float animation-delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#95E1D3] to-[#76CBBF] rounded-full flex items-center justify-center text-2xl">
                    💚
                  </div>
                  <div>
                    <div className="font-bold text-[#2D3436]">Certified</div>
                    <div className="text-sm text-[#636E72]">Therapists</div>
                  </div>
                </div>
              </div>

              {/* Decorative Shapes - Subtle */}
              <div className="absolute -top-10 right-10 w-20 h-20 bg-[#FF8C94]/20 rounded-full opacity-60 animate-bounceSlow"></div>
              <div className="absolute -bottom-8 left-20 w-16 h-16 bg-[#6EC1E4]/20 rotate-45 opacity-60 animate-float"></div>
            </div>

            {/* Content Side */}
            <div className="animate-slide-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF0F1] text-[#FF8C94] font-semibold mb-6">
                <Heart className="w-4 h-4 fill-current" />
                About Us
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="text-[#2D3436]">Why Families </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3]">
                  Love Us
                </span>
                <span className="inline-block ml-2 animate-heartbeat">💜</span>
              </h2>

              <p className="text-lg text-[#636E72] mb-6 leading-relaxed">
                At <span className="font-bold text-[#6EC1E4]">Little Stars Therapy</span>, 
                we believe every child has unique superpowers waiting to be discovered! 
                Our caring team creates a safe, fun environment where kids can 
                learn, grow, and shine bright.
              </p>

              <p className="text-[#636E72] mb-8 leading-relaxed">
                We offer personalized therapy programs that feel like play but 
                deliver real results. From dance to yoga, music to nutrition – 
                we've got everything your little one needs to thrive! 🌟
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🎯', text: 'Personalized Programs', color: '#6EC1E4' },
                  { icon: '🏠', text: 'Safe Environment', color: '#95E1D3' },
                  { icon: '👨‍👩‍👧', text: 'Family Involvement', color: '#FFD166' },
                  { icon: '📈', text: 'Proven Results', color: '#FF8C94' },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-[#E8E8E8] hover:border-current hover:shadow-md transition-all"
                    style={{ color: item.color }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-[#2D3436]">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3] text-white rounded-full font-bold text-lg shadow-lg shadow-[#6EC1E4]/30 hover:shadow-xl hover:shadow-[#6EC1E4]/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-soft-pattern opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF0F1] text-[#FF8C94] font-semibold mb-4">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-[#2D3436]">Meet Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C94] to-[#6EC1E4]">
                Superhero Team
              </span>
              <span className="inline-block ml-2">🦸‍♀️</span>
            </h2>
            
            <p className="text-lg text-[#636E72] max-w-2xl mx-auto">
              Our amazing therapists are here to make every child's journey 
              fun, exciting, and full of growth!
            </p>
          </div>

          {/* Team Grid - Hexagon Style */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
            {[
              { emoji: '⭐', color: '#6EC1E4' },
              { emoji: '💜', color: '#95E1D3' },
              { emoji: '🌟', color: '#FFD166' },
              { emoji: '💪', color: '#FF8C94' },
              { emoji: '🎨', color: '#6EC1E4' },
              { emoji: '🎵', color: '#95E1D3' },
              { emoji: '🧘', color: '#FFD166' },
              { emoji: '🥋', color: '#FF8C94' },
              { emoji: '🍎', color: '#95E1D3' },
            ].map((member, i) => (
              <div
                key={i}
                className="group relative w-28 h-28 md:w-36 md:h-36 animate-pop-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Container */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl transform rotate-0 group-hover:rotate-6 transition-transform duration-500 border-2 border-[#E8E8E8] group-hover:border-current"
                     style={{ borderColor: member.color }}>
                  <Image
                    src="https://placehold.net/default.png"
                    alt={`Team member ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{ background: `linear-gradient(to top, ${member.color}CC, transparent)` }}></div>
                  
                  {/* Emoji on hover */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {member.emoji}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF8C94] to-[#6EC1E4] text-white rounded-full font-bold text-lg shadow-lg shadow-[#FF8C94]/30 hover:shadow-xl hover:shadow-[#FF8C94]/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Meet Our Full Team
              <Heart className="w-5 h-5 fill-current animate-heartbeat" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Premium Gradient Background - Sky to Mint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3]"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-dots-large"></div>
        </div>
        
        {/* Floating Elements - Subtle */}
        <div className="absolute top-10 left-10 text-white/20 text-6xl animate-float">🌟</div>
        <div className="absolute bottom-10 right-10 text-white/20 text-5xl animate-float animation-delay-500">✨</div>
        <div className="absolute top-1/2 left-1/4 text-white/10 text-4xl animate-bounceSlow">🎈</div>
        <div className="absolute top-1/3 right-1/4 text-white/10 text-4xl animate-bounceSlow animation-delay-300">🎉</div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-6 animate-pop-in">
            🎉 Start Your Child's Journey Today!
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-slide-up">
            Ready to Watch Your
            <br />
            <span className="text-[#FFD166]">Little Star Shine?</span> ⭐
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-100">
            Book a free consultation today and discover how our fun therapy 
            programs can help your child grow, learn, and thrive!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-200">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#6EC1E4] rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              Book Free Consultation
              <Sparkles className="w-5 h-5" />
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-5 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white/50 hover:bg-white/10 transition-all duration-300"
            >
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}