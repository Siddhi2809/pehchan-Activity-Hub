'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Award, 
  Users, 
  Heart, 
  Target, 
  Star, 
  Sparkles, 
  Quote, 
  Calendar,
  Music,
  Shield,
  Apple,
  Flower2,
  Trophy,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Phone
} from 'lucide-react'

export default function About() {
  const team = [
    {
      name: 'Mithali Bhadange',
      role: 'Dance Class Trainer',
      description: 'Expert in rhythmic movement and creative expression for young children.',
      image: 'https://placehold.net/default.png',
      icon: Music,
      color: '#FF8C94',
      bgLight: '#FFF0F1',
    },
    {
      name: 'Tushar Sawane',
      role: 'Martial Arts Instructor',
      description: 'Specializes in teaching discipline, focus, and strength through martial arts.',
      image: 'https://placehold.net/default.png',
      icon: Shield,
      color: '#6EC1E4',
      bgLight: '#EBF7FC',
    },
    {
      name: 'Pratik Lohakare',
      role: 'Music Therapy Instructor',
      description: 'Uses music and melody to support emotional and cognitive child development.',
      image: 'https://placehold.net/default.png',
      icon: Sparkles,
      color: '#FFD166',
      bgLight: '#FFF8E5',
    },
    {
      name: 'Machendra',
      role: 'Kids Yoga Trainer',
      description: 'Focuses on mindfulness, flexibility, and peaceful body awareness for children.',
      image: 'https://placehold.net/default.png',
      icon: Flower2,
      color: '#95E1D3',
      bgLight: '#F0FAF8',
    },
    {
      name: 'Vaishnavi Dahake',
      role: 'Child Nutritionist & Dietician',
      description: 'Expert nutritional guidance for healthy growth and balanced eating habits.',
      image: 'https://placehold.net/default.png',
      icon: Apple,
      color: '#95E1D3',
      bgLight: '#F0FAF8',
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every child receives personalized attention with warmth and understanding.',
      color: '#FF8C94',
    },
    {
      icon: Lightbulb,
      title: 'Evidence-Based Methods',
      description: 'Our programs are built on proven therapeutic approaches and research.',
      color: '#FFD166',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'A secure, welcoming space where children feel comfortable to grow.',
      color: '#6EC1E4',
    },
    {
      icon: Target,
      title: 'Personalized Growth',
      description: 'Tailored programs designed around each child\'s unique needs and goals.',
      color: '#95E1D3',
    },
  ]

  const stats = [
    { number: '500+', label: 'Children Served', color: '#6EC1E4' },
    { number: '10+', label: 'Years Experience', color: '#FFD166' },
    { number: '15+', label: 'Expert Therapists', color: '#95E1D3' },
    { number: '98%', label: 'Success Rate', color: '#FF8C94' },
  ]

  const milestones = [
    { year: '2014', title: 'Foundation', description: 'Little Stars Therapy Center was established with a vision to transform children\'s lives' },
    { year: '2017', title: 'Expansion', description: 'Grew our team to 10 specialists and added new therapy programs' },
    { year: '2020', title: 'Community Impact', description: 'Reached milestone of serving 500+ families in our community' },
    { year: '2024', title: 'Leading Excellence', description: 'Recognized as a premier pediatric therapy center with innovative approaches' },
  ]

  return (
    <main className="min-h-screen bg-[#FFF7E6] overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#EBF7FC] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#F0FAF8] rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#6EC1E4]/30 mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#95E1D3] animate-pulse"></div>
            <span className="text-sm font-semibold text-[#2D3436]">About Little Stars Therapy</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            <span className="text-[#2D3436] block mb-2">Dedicated to</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3]">
              Your Child's Growth
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3] rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-[#636E72] max-w-3xl mx-auto leading-relaxed mb-12">
            At Little Stars, we combine professional expertise with genuine care to help 
            every child reach their full potential in a nurturing, supportive environment.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E8E8E8]"
              >
                <div 
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-[#636E72] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2D3436]">
              Our Core Values
            </h2>
            <p className="text-lg text-[#636E72] max-w-2xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white border-2 border-[#E8E8E8] hover:border-current hover:shadow-lg transition-all duration-300"
                style={{ color: value.color }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon className="w-7 h-7" style={{ color: value.color }} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#2D3436] mb-3">
                  {value.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#636E72] leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOUNDER SECTION ================= */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBF7FC] to-[#F0FAF8] opacity-50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-xl border border-[#E8E8E8]">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Image Side */}
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://placehold.net/default.png"
                    alt="Dr. Asmita Shirsat"
                    fill
                    className="object-cover"
                  />
                  
                  {/* Gradient Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6EC1E4]/10 to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#FFD166] text-[#2D3436] px-5 py-3 rounded-xl font-bold text-sm shadow-lg">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Founder & Director
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -top-4 -left-4 bg-white px-5 py-3 rounded-xl shadow-lg border border-[#E8E8E8]">
                  <div className="text-xs text-[#636E72] mb-1">Experience</div>
                  <div className="font-bold text-[#6EC1E4]">10+ Years</div>
                </div>
              </div>

              {/* Content Side */}
              <div>
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-[#EBF7FC] rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-[#6EC1E4]" />
                </div>
                
                {/* Name */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D3436] mb-2">
                  Dr. Asmita Shirsat
                </h2>
                
                <p className="text-[#6EC1E4] font-semibold mb-6">
                  Founder & Clinical Director
                </p>
                
                {/* Quote */}
                <blockquote className="text-lg text-[#636E72] mb-8 leading-relaxed">
                  "Every child deserves a nurturing environment where they can grow at their own pace. 
                  At Little Stars, we don't just provide therapy – we build foundations for lifelong success."
                </blockquote>

                {/* Credentials */}
                <div className="space-y-4 mb-8">
                  {[
                    { icon: GraduationCap, label: 'PhD in Child Development Psychology' },
                    { icon: Award, label: 'Certified Pediatric Therapist' },
                    { icon: Users, label: 'Leading Team of 15+ Specialists' },
                    { icon: TrendingUp, label: '500+ Successful Cases' },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-[#F0FAF8] rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#95E1D3]" />
                      </div>
                      <span className="text-[#2D3436] font-medium text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#2D3436] text-white rounded-full font-bold shadow-lg hover:bg-[#6EC1E4] transition-all duration-300"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE SECTION ================= */}
      <section className="relative py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2D3436]">
              Our Journey
            </h2>
            <p className="text-lg text-[#636E72]">
              A decade of dedication to children's wellbeing
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6EC1E4] to-[#95E1D3] hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div 
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#E8E8E8] hover:border-[#6EC1E4] transition-all duration-300">
                      <div className="inline-block px-3 py-1 bg-[#6EC1E4] text-white text-sm font-bold rounded-full mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#2D3436] mb-2">{milestone.title}</h3>
                      <p className="text-[#636E72] text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-4 border-[#6EC1E4] rounded-full hidden md:block z-10">
                    <div className="absolute inset-0 bg-[#6EC1E4] rounded-full animate-ping opacity-75"></div>
                  </div>
                  
                  {/* Empty Space */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#FFF7E6]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2D3436]">
              Meet Our Team
            </h2>
            <p className="text-lg text-[#636E72] max-w-2xl mx-auto">
              Certified professionals dedicated to your child's development
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E8E8E8] hover:border-current"
                style={{ color: member.color }}
              >
                {/* Top Accent Bar */}
                <div className="h-1" style={{ backgroundColor: member.color }}></div>
                
                {/* Card Content */}
                <div className="p-8">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden mx-auto shadow-md">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Icon Badge */}
                    <div 
                      className="absolute -bottom-3 -right-3 w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
                      style={{ backgroundColor: member.bgLight }}
                    >
                      <member.icon className="w-6 h-6" style={{ color: member.color }} />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-[#2D3436] text-center mb-1">
                    {member.name}
                  </h3>
                  <span 
                    className="block text-sm font-semibold text-center mb-4 uppercase tracking-wide"
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </span>
                  
                  {/* Description */}
                  <p className="text-[#636E72] text-center text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star 
                        key={s} 
                        className="w-4 h-4 text-[#FFD166] fill-current" 
                      />
                    ))}
                  </div>

                  {/* Contact Link */}
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 text-sm font-semibold hover:underline underline-offset-4"
                    style={{ color: member.color }}
                  >
                    <span>Contact {member.name.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-20 overflow-hidden">
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3]"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Start Your Child's
            <br />
            Journey with Us?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation and see how we can support your child's growth and development
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#6EC1E4] rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <Calendar className="w-6 h-6" />
              <span>Book Free Consultation</span>
            </Link>
            
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 px-8 py-5 bg-transparent text-white rounded-full font-bold text-lg border-2 border-white/50 hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}