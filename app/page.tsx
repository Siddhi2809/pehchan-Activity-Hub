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
      color: 'from-pink-400 to-pink-600',
      bgSoft: 'bg-pink-50',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-500',
      borderHover: 'hover:border-pink-400',
      delay: 0,
    },
    {
      title: 'Music Therapy',
      icon: Sparkles,
      description: 'Using music and rhythm to support emotional well-being and cognitive development.',
      color: 'from-purple-400 to-purple-600',
      bgSoft: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-500',
      borderHover: 'hover:border-purple-400',
      delay: 100,
    },
    {
      title: 'Kids Yoga',
      icon: Smile,
      description: 'Playful yoga sessions designed to help children develop flexibility and mindfulness.',
      color: 'from-teal-400 to-teal-600',
      bgSoft: 'bg-teal-50',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-500',
      borderHover: 'hover:border-teal-400',
      highlight: true,
      delay: 200,
    },
    {
      title: 'Martial Arts',
      icon: Shield,
      description: 'Discipline-focused training to build strength, focus, and self-defense skills.',
      color: 'from-orange-400 to-orange-600',
      bgSoft: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
      borderHover: 'hover:border-orange-400',
      delay: 300,
    },
    {
      title: 'Nutrition & Diet',
      icon: Apple,
      description: 'Expert nutritional guidance to support your child\'s healthy growth and development.',
      color: 'from-green-400 to-green-600',
      bgSoft: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-500',
      borderHover: 'hover:border-green-400',
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
    <main className="bg-gradient-to-b from-amber-50/50 via-white to-purple-50/30 overflow-hidden">
      <Navbar />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative z-20 min-h-[600px] md:min-h-[700px] flex items-center pt-6">
        
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0">
          <FloatingClouds />
          <FloatingStars />
          
          {/* Gradient Blobs */}
          <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-30">
            <BlobShape color="var(--kids-pink-soft)" className="w-full h-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-20">
            <BlobShape color="var(--kids-blue-soft)" className="w-full h-full" />
          </div>
          
          {/* Sun */}
          <div className="absolute top-10 right-10 w-20 h-20 hidden lg:block">
            <SunDecoration className="w-full h-full" />
          </div>
        </div>

        {/* Hero Image with Playful Frame */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 lg:left-[30%]">
            <Image
              src="/hero_therapy.png"
              alt="Happy children in therapy"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-amber-50/90 via-40% to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-dashed border-yellow-400 mb-6 animate-pop-in">
              <span className="text-2xl animate-wave">👋</span>
              <span className="font-semibold text-yellow-700">Welcome to Little Stars!</span>
            </div>

            {/* Tagline */}
            <span className="font-satisfy text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 block mb-4 animate-slide-up">
              Where Kids Shine Bright ✨
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up animation-delay-100">
              <span className="text-slate-800">Helping Every</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient">
                Child Thrive
              </span>
              <br />
              <span className="text-slate-800">& Grow! </span>
              <span className="inline-block animate-bounce-in animation-delay-500">🌈</span>
            </h1>

            {/* Playful Underline */}
            <div className="mb-6">
              <PlayfulUnderline color="#10B981" />
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl animate-slide-up animation-delay-200">
              Fun therapy sessions designed with <span className="text-pink-500 font-semibold">love</span> and 
              <span className="text-purple-500 font-semibold"> care</span> to help your little ones 
              learn, heal, and discover their superpowers! 🦸‍♂️
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-slide-up animation-delay-300">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-full font-bold text-lg shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Book a Fun Session</span>
                <Sparkles className="w-5 h-5 relative z-10 group-hover:animate-spin-slow" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-6 py-4 bg-white/80 backdrop-blur-sm text-purple-600 rounded-full font-semibold border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
              >
                <Play className="w-5 h-5 fill-current" />
                Watch Our Story
              </Link>
            </div>

            {/* Floating Elements around CTA */}
            <div className="relative mt-4">
              <div className="absolute -left-4 top-0 w-8 h-8 bg-yellow-300 rounded-full animate-bounceSlow shadow-lg"></div>
              <div className="absolute left-20 -top-2 w-6 h-6 bg-pink-400 rotate-45 animate-float shadow-lg"></div>
              <div className="absolute left-40 top-2 w-5 h-5 bg-blue-400 rounded-full animate-float animation-delay-200 shadow-lg"></div>
              <div className="absolute left-56 -top-1 w-7 h-7 bg-green-400 rounded-full animate-bounceSlow animation-delay-300 shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Floating Balloons - Right Side */}
        <div className="hidden lg:block">
          <FloatingBalloons />
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider color="#10B981" />
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="relative z-10 bg-[#10B981] py-16 md:py-20 -mt-10 pt-24 md:pt-32">
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
                <div className="text-green-100 font-medium">{stat.label}</div>
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
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 opacity-20">
          <BlobShape color="var(--kids-purple-soft)" className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-15">
          <BlobShape color="var(--kids-teal-soft)" className="w-full h-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 font-semibold mb-4 animate-pop-in">
              <Sparkles className="w-4 h-4" />
              What We Offer
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-slate-800">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Fun Programs
              </span>
              <span className="inline-block ml-2 animate-wiggle">🎨</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                  group relative p-6 rounded-3xl bg-white border-2 border-transparent
                  shadow-lg shadow-slate-100 transition-all duration-500 cursor-pointer
                  hover:-translate-y-3 hover:shadow-2xl ${service.borderHover}
                  ${service.highlight ? 'lg:-translate-y-4 border-teal-300 shadow-teal-100' : ''}
                  animate-slide-up
                `}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-teal-400 to-green-400 text-white text-xs font-bold rounded-full shadow-lg">
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
                <h3 className="text-lg font-bold text-slate-800 text-center mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm text-center leading-relaxed mb-4">
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

                {/* Decorative Corner */}
                <div className={`
                  absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Explore All Programs
              <MoveRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <WavyLineDivider color="#E9D5FF" />

      {/* ================= ABOUT SECTION ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-20 hidden lg:block">
          <RainbowArc className="w-full h-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Side */}
            <div className="relative animate-slide-left">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/50">
                <Image
                  src="/about.jpg"
                  alt="Happy kids in therapy session"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                
                {/* Playful Frame Overlay */}
                <div className="absolute inset-0 border-8 border-white/30 rounded-3xl"></div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-6 -left-6 p-4 bg-white rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">10+ Years</div>
                    <div className="text-sm text-slate-500">Experience</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-2xl shadow-xl animate-float animation-delay-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center text-2xl">
                    💚
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Certified</div>
                    <div className="text-sm text-slate-500">Therapists</div>
                  </div>
                </div>
              </div>

              {/* Decorative Shapes */}
              <div className="absolute -top-10 right-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-bounceSlow"></div>
              <div className="absolute -bottom-8 left-20 w-16 h-16 bg-blue-200 rotate-45 opacity-60 animate-float"></div>
            </div>

            {/* Content Side */}
            <div className="animate-slide-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-6">
                <Heart className="w-4 h-4 fill-current" />
                About Us
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="text-slate-800">Why Families </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Love Us
                </span>
                <span className="inline-block ml-2 animate-heartbeat">💜</span>
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At <span className="font-bold text-purple-600">Little Stars Therapy</span>, 
                we believe every child has unique superpowers waiting to be discovered! 
                Our caring team creates a safe, fun environment where kids can 
                learn, grow, and shine bright.
              </p>

              <p className="text-slate-600 mb-8 leading-relaxed">
                We offer personalized therapy programs that feel like play but 
                deliver real results. From dance to yoga, music to nutrition – 
                we've got everything your little one needs to thrive! 🌟
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🎯', text: 'Personalized Programs' },
                  { icon: '🏠', text: 'Safe Environment' },
                  { icon: '👨‍👩‍👧', text: 'Family Involvement' },
                  { icon: '📈', text: 'Proven Results' },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-3 p-3 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
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
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30"></div>
        <div className="absolute inset-0 bg-confetti opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold mb-4">
              <Users className="w-4 h-4" />
              Our Team
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-slate-800">Meet Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Superhero Team
              </span>
              <span className="inline-block ml-2">🦸‍♀️</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our amazing therapists are here to make every child's journey 
              fun, exciting, and full of growth!
            </p>
          </div>

          {/* Team Grid - Hexagon Style */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div
                key={i}
                className="group relative w-28 h-28 md:w-36 md:h-36 animate-pop-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Hexagon Container */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl transform rotate-0 group-hover:rotate-6 transition-transform duration-500">
                  <Image
                    src={`/team${i}.jpg`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Emoji on hover */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {['⭐', '💜', '🌟', '💪', '🎨', '🎵', '🧘', '🥋', '🍎'][i - 1]}
                  </div>
                </div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-4 border-transparent group-hover:border-purple-400 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold text-lg shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              Meet Our Full Team
              <Heart className="w-5 h-5 fill-current animate-heartbeat" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Rainbow Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-dots-large"></div>
        </div>
        
        {/* Floating Elements */}
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
            <span className="text-yellow-300">Little Star Shine?</span> ⭐
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-100">
            Book a free consultation today and discover how our fun therapy 
            programs can help your child grow, learn, and thrive!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-200">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
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