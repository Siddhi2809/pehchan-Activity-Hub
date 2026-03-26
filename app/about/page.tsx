'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Award, 
  Users, 
  Heart, 
  Target, 
  Star, 
  Smile, 
  Sparkles, 
  Quote, 
  Calendar,
  MoveRight,
  Music,
  Shield,
  Apple,
  Flower2,
  Trophy,
  GraduationCap,
  HandHeart,
  Rocket,
  Rainbow,
  Sun,
  Cloud,
  TreePine,
  Palette,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Play
} from 'lucide-react'
import { 
  FloatingClouds, 
  FloatingStars,
  WaveDivider,
  BlobShape,
  RainbowArc,
  PlayfulUnderline,
  SunDecoration
} from '@/components/decorations/FloatingElements'

export default function About() {
  const team = [
    {
      name: 'Mithali Bhadange',
      role: 'Dance Class Trainer',
      description: 'Expert in rhythmic movement and creative expression for young children.',
      image: 'https://placehold.net/default.png',
      icon: Music,
      color: 'from-pink-400 to-rose-500',
      borderColor: 'border-pink-200',
      iconColor: 'text-pink-500',
      bgLight: 'bg-pink-50',
      bgGradient: 'bg-gradient-to-br from-pink-100 to-rose-100',
      emoji: '💃',
      funFact: 'Loves salsa dancing!',
    },
    {
      name: 'Tushar Sawane',
      role: 'Martial Arts Instructor',
      description: 'Specializes in teaching discipline, focus, and strength through martial arts.',
      image: 'https://placehold.net/default.png',
      icon: Shield,
      color: 'from-orange-400 to-amber-500',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-500',
      bgLight: 'bg-orange-50',
      bgGradient: 'bg-gradient-to-br from-orange-100 to-amber-100',
      emoji: '🥋',
      funFact: 'Black belt holder!',
    },
    {
      name: 'Pratik Lohakare',
      role: 'Music Therapy Instructor',
      description: 'Uses music and melody to support emotional and cognitive child development.',
      image: 'https://placehold.net/default.png',
      icon: Sparkles,
      color: 'from-purple-400 to-violet-500',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-500',
      bgLight: 'bg-purple-50',
      bgGradient: 'bg-gradient-to-br from-purple-100 to-violet-100',
      emoji: '🎵',
      funFact: 'Plays 5 instruments!',
    },
    {
      name: 'Machendra',
      role: 'Kids Yoga Trainer',
      description: 'Focuses on mindfulness, flexibility, and peaceful body awareness for children.',
      image: 'https://placehold.net/default.png',
      icon: Flower2,
      color: 'from-teal-400 to-cyan-500',
      borderColor: 'border-teal-200',
      iconColor: 'text-teal-500',
      bgLight: 'bg-teal-50',
      bgGradient: 'bg-gradient-to-br from-teal-100 to-cyan-100',
      emoji: '🧘',
      funFact: 'Morning meditation expert!',
    },
    {
      name: 'Vaishnavi Dahake',
      role: 'Child Nutritionist & Dietician',
      description: 'Expert nutritional guidance for healthy growth and balanced eating habits.',
      image: 'https://placehold.net/default.png',
      icon: Apple,
      color: 'from-green-400 to-emerald-500',
      borderColor: 'border-green-200',
      iconColor: 'text-green-500',
      bgLight: 'bg-green-50',
      bgGradient: 'bg-gradient-to-br from-green-100 to-emerald-100',
      emoji: '🥗',
      funFact: 'Creates fun recipes!',
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Love & Care',
      description: 'Every child is treated with unconditional love and gentle care.',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-50',
      emoji: '💕',
    },
    {
      icon: Lightbulb,
      title: 'Creative Learning',
      description: 'We make therapy fun through play, art, and imagination.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      emoji: '💡',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'A secure space where children feel comfortable to explore.',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      emoji: '🛡️',
    },
    {
      icon: Target,
      title: 'Personalized Care',
      description: 'Tailored programs that meet each child\'s unique needs.',
      color: 'from-purple-400 to-violet-500',
      bgColor: 'bg-purple-50',
      emoji: '🎯',
    },
  ]

  const stats = [
    { number: '500+', label: 'Happy Kids', emoji: '😊', color: 'text-pink-500' },
    { number: '10+', label: 'Years Experience', emoji: '🏆', color: 'text-yellow-500' },
    { number: '15+', label: 'Expert Trainers', emoji: '👨‍⚕️', color: 'text-blue-500' },
    { number: '98%', label: 'Parent Satisfaction', emoji: '⭐', color: 'text-purple-500' },
  ]

  const milestones = [
    { year: '2014', title: 'The Beginning', description: 'Started with a small team and big dreams', emoji: '🌱' },
    { year: '2017', title: 'Growing Family', description: 'Expanded to 5 therapy programs', emoji: '🌿' },
    { year: '2020', title: 'Community Impact', description: 'Reached 500+ families milestone', emoji: '🌳' },
    { year: '2024', title: 'Leading Excellence', description: 'Recognized as top therapy center', emoji: '🌟' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-purple-50/30 overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0">
          <FloatingClouds />
          <FloatingStars />
          
          {/* Gradient Blobs */}
          <div className="absolute top-10 right-0 w-[400px] h-[400px] opacity-30">
            <BlobShape color="var(--kids-pink-soft)" className="w-full h-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-20">
            <BlobShape color="var(--kids-blue-soft)" className="w-full h-full" />
          </div>
          
          {/* Sun */}
          <div className="absolute top-20 right-20 w-16 h-16 hidden lg:block">
            <SunDecoration className="w-full h-full" />
          </div>
          
          {/* Rainbow */}
          <div className="absolute top-40 left-10 w-32 h-16 opacity-40 hidden lg:block">
            <RainbowArc className="w-full h-full" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 right-[10%] animate-float hidden md:block">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg rotate-12">
            ⭐
          </div>
        </div>
        <div className="absolute bottom-20 left-[5%] animate-bounceSlow hidden md:block">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
            💕
          </div>
        </div>
        <div className="absolute top-1/2 right-[5%] animate-float animation-delay-500 hidden lg:block">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-xl flex items-center justify-center text-xl shadow-lg -rotate-12">
            🎈
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-dashed border-purple-300 mb-6 animate-pop-in">
            <Heart className="w-5 h-5 text-pink-500 fill-current animate-heartbeat" />
            <span className="font-bold text-purple-700">Our Story & Mission</span>
          </div>

          {/* Tagline */}
          <span className="font-satisfy text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 block mb-4 animate-slide-up">
            Where Every Child Shines ✨
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-slide-up animation-delay-100">
            <span className="text-slate-800">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient">
              Little Stars
            </span>
          </h1>

          {/* Playful Underline */}
          <div className="flex justify-center mb-6 animate-slide-up animation-delay-200">
            <PlayfulUnderline color="#EC4899" />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-300">
            Discover the <span className="text-pink-500 font-bold">passionate hearts</span> behind 
            our magical therapy center, dedicated to helping your little ones 
            <span className="text-purple-500 font-bold"> discover their superpowers!</span> 🦸‍♂️
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 animate-slide-up animation-delay-400">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="group px-6 py-4 bg-white rounded-2xl shadow-lg shadow-purple-100/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100"
              >
                <div className="text-3xl mb-1 group-hover:animate-bounce">{stat.emoji}</div>
                <div className={`text-2xl font-extrabold ${stat.color}`}>{stat.number}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      {/* ================= OUR VALUES SECTION ================= */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold mb-4 animate-pop-in">
              <Sparkles className="w-4 h-4" />
              What We Believe In
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-slate-800">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Core Values
              </span>
              <span className="inline-block ml-2 animate-wiggle">💛</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do at Little Stars!
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-white border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <span className="text-3xl">{value.emoji}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 transition-all">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-500 leading-relaxed">
                  {value.description}
                </p>
                
                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOUNDER SPOTLIGHT ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/50"></div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-20 right-10 w-64 h-64 opacity-20">
          <BlobShape color="var(--kids-blue-soft)" className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 left-10 w-48 h-48 opacity-15">
          <BlobShape color="var(--kids-purple-soft)" className="w-full h-full" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl shadow-purple-100/30 border border-purple-100/50 relative overflow-hidden">
            
            {/* Decorative Elements Inside */}
            <div className="absolute top-8 right-8 text-4xl animate-float opacity-30">✨</div>
            <div className="absolute bottom-8 left-8 text-3xl animate-bounceSlow opacity-30">💜</div>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Image Box */}
              <div className="relative w-full lg:w-[45%] animate-slide-left">
                {/* Main Image Container */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
                  {/* Gradient Background (replace with actual image) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400">
                    <Image
                      src="https://placehold.net/default.png"
                      alt="Dr. Asmita Shirsat"
                      fill
                      className="object-cover"
                    />
                    {/* Fallback if no image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/80">
                        <Users size={80} className="mx-auto mb-4" />
                        <span className="text-lg font-medium">Dr. Asmita Shirsat</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Frame Border */}
                  <div className="absolute inset-0 border-8 border-white rounded-[2rem]"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-3 rounded-2xl font-bold text-sm shadow-xl transform -rotate-6 hover:rotate-0 transition-transform animate-pop-in animation-delay-500">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Founder & Director
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-4 -left-4 lg:top-8 lg:-left-6 bg-white px-5 py-3 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform animate-pop-in animation-delay-300">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏅</span>
                    <div>
                      <div className="text-xs text-slate-500">Experience</div>
                      <div className="font-bold text-purple-600">10+ Years</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Shapes */}
                <div className="absolute -top-8 right-1/4 w-6 h-6 bg-pink-400 rounded-full animate-float opacity-80"></div>
                <div className="absolute -bottom-6 left-1/4 w-8 h-8 bg-yellow-400 rotate-45 animate-bounceSlow opacity-80"></div>
              </div>

              {/* Content Box */}
              <div className="flex-1 animate-slide-right">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 rotate-12">
                  <Quote className="w-8 h-8 text-purple-500" />
                </div>
                
                {/* Tagline */}
                <span className="font-satisfy text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 block mb-2">
                  The Visionary Behind Little Stars
                </span>
                
                {/* Name */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                  Dr. Asmita Shirsat
                  <span className="inline-block ml-3 animate-wave">👋</span>
                </h2>
                
                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed italic border-l-4 border-purple-300 pl-6">
                  "Our mission is to create a <span className="text-purple-600 font-semibold not-italic">nurturing environment</span> where 
                  every child feels seen, heard, and empowered to grow at their own unique pace. 
                  At Little Stars, we don't just provide services; we build 
                  <span className="text-pink-500 font-semibold not-italic"> paths to a brighter future.</span>"
                </blockquote>

                {/* Achievements */}
                <div className="space-y-4 mb-8">
                  {[
                    { icon: GraduationCap, label: 'PhD in Child Development Psychology', color: 'text-blue-500', bg: 'bg-blue-50' },
                    { icon: Heart, label: 'Passionate about holistic child therapy', color: 'text-pink-500', bg: 'bg-pink-50' },
                    { icon: Award, label: 'Award-winning therapy methodologies', color: 'text-yellow-500', bg: 'bg-yellow-50' },
                    { icon: Users, label: 'Leading a team of 15+ certified experts', color: 'text-purple-500', bg: 'bg-purple-50' },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <span className="font-semibold text-slate-700">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
                >
                  <span>Book a Session with Dr. Asmita</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY/MILESTONES SECTION ================= */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-10"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-4">
              <Rocket className="w-4 h-4" />
              Our Journey
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-slate-800">Growing </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
                Together
              </span>
              <span className="inline-block ml-2">🌱</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-orange-400 rounded-full hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, i) => (
                <div 
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                    <div className={`
                      inline-block p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                      border-2 border-transparent hover:border-purple-200
                      animate-slide-up
                    `}
                    style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <span className="text-4xl mb-4 block">{milestone.emoji}</span>
                      <div className="text-sm font-bold text-purple-500 mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{milestone.title}</h3>
                      <p className="text-slate-500">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-purple-400 rounded-full hidden md:flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                  </div>
                  
                  {/* Empty Space for other side */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERT TEAM SECTION ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50/50 to-orange-50/30"></div>
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-5xl opacity-20 animate-float">🌟</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounceSlow">✨</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold mb-4 animate-pop-in">
              <Users className="w-4 h-4" />
              Our Amazing Team
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-slate-800">Meet Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                Superhero Team
              </span>
              <span className="inline-block ml-2 animate-wiggle">🦸‍♀️</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These amazing experts make the magic happen every single day!
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top Color Bar */}
                <div className={`h-2 bg-gradient-to-r ${member.color}`}></div>
                
                {/* Card Content */}
                <div className="p-8">
                  {/* Avatar & Icon */}
                  <div className="relative mb-6">
                    {/* Avatar Container */}
                    <div className={`w-24 h-24 ${member.bgGradient} rounded-2xl flex items-center justify-center mx-auto rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg overflow-hidden`}>
                      {/* Replace with actual image */}
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Icon Badge */}
                    <div className={`absolute -bottom-2 -right-2 w-12 h-12 ${member.bgLight} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      <span className="text-2xl">{member.emoji}</span>
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-2xl font-bold text-slate-800 text-center mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 transition-all">
                    {member.name}
                  </h3>
                  <span className={`block text-sm font-bold uppercase tracking-wider ${member.iconColor} text-center mb-4`}>
                    {member.role}
                  </span>
                  
                  {/* Description */}
                  <p className="text-slate-500 text-center leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Fun Fact */}
                  <div className={`${member.bgLight} rounded-xl p-3 mb-6`}>
                    <p className="text-sm text-center">
                      <span className="font-semibold text-slate-700">Fun Fact:</span>{' '}
                      <span className="text-slate-600">{member.funFact}</span>
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    {/* Rating */}
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star 
                          key={s} 
                          className="w-4 h-4 text-yellow-400 fill-current" 
                        />
                      ))}
                    </div>
                    
                    {/* Contact Button */}
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-1.5 text-sm font-bold ${member.iconColor} hover:underline underline-offset-4 group/btn`}
                    >
                      <span>Contact</span>
                      <MoveRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Hover Overlay Decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="text-center mt-16">
            <p className="text-slate-600 mb-4">
              Want to join our amazing team? 
              <span className="inline-block ml-2 animate-wave">👋</span>
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-purple-600 font-bold hover:text-pink-500 transition-colors"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
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
          <div className="absolute inset-0 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:30px_30px]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-white/20 text-6xl animate-float">🌈</div>
        <div className="absolute bottom-10 right-10 text-white/20 text-5xl animate-float animation-delay-500">⭐</div>
        <div className="absolute top-1/2 left-1/4 text-white/10 text-4xl animate-bounceSlow">🎈</div>
        <div className="absolute top-1/3 right-1/4 text-white/10 text-4xl animate-bounceSlow animation-delay-300">🎉</div>
        <div className="absolute bottom-1/3 left-1/3 text-white/10 text-3xl animate-float animation-delay-700">✨</div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold mb-8 animate-pop-in">
            <span className="flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              Start Your Child's Journey Today!
            </span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-slide-up">
            Ready to Watch Your
            <br />
            <span className="text-yellow-300">Little Star Shine?</span> 
            <span className="inline-block ml-2 animate-sparkle">⭐</span>
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-100">
            Book a free consultation and discover how we can help your child 
            grow, learn, and discover their amazing potential!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up animation-delay-200">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <Calendar className="w-6 h-6" />
              <span>Schedule a Free Visit</span>
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-5 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white/50 hover:bg-white/10 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>Watch Our Story</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-white/20">
            {[
              { icon: '🏆', label: 'Top Rated' },
              { icon: '✅', label: 'Certified Team' },
              { icon: '💯', label: '100% Safe' },
              { icon: '❤️', label: 'Family Approved' },
            ].map((badge, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 text-white/80"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="font-semibold">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Wave */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
        <WaveDivider color="#ffffff" flip />
      </div>

      <Footer />
    </main>
  )
}