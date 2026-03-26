'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Sparkles, 
  Heart,
  MessageCircle,
  User,
  Baby,
  Calendar,
  CheckCircle2,
  Star,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Instagram,
  Facebook,
  Youtube,
  Rocket
} from 'lucide-react'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { 
  FloatingClouds, 
  FloatingStars,
  WaveDivider,
  BlobShape,
  PlayfulUnderline,
  SunDecoration
} from '@/components/decorations/FloatingElements'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      childName: '', 
      childAge: '',
      service: '',
      message: '' 
    })
    
    // Reset success message after 8 seconds
    setTimeout(() => setSubmitted(false), 8000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+1 (555) 123-4567',
      secondary: 'Mon-Fri 9AM-6PM',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
      emoji: '📞',
      action: 'tel:+15551234567',
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'hello@littlestars.com',
      secondary: "We'll respond within 24hrs",
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-500',
      emoji: '💌',
      action: 'mailto:hello@littlestars.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: '123 Rainbow Lane',
      secondary: 'Sunshine City, ST 12345',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      emoji: '📍',
      action: 'https://maps.google.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      primary: 'Mon-Fri: 9AM - 6PM',
      secondary: 'Sat: 10AM - 4PM',
      color: 'from-purple-400 to-violet-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
      emoji: '⏰',
      action: null,
    },
  ]

  const services = [
    { value: 'dance', label: '💃 Dance Classes' },
    { value: 'martial-arts', label: '🥋 Martial Arts' },
    { value: 'music-therapy', label: '🎵 Music Therapy' },
    { value: 'yoga', label: '🧘 Kids Yoga' },
    { value: 'nutrition', label: '🥗 Nutrition & Diet' },
    { value: 'other', label: '✨ Other / Multiple Services' },
  ]

  const faqs = [
    {
      question: 'What age groups do you work with?',
      answer: 'We work with children from ages 3 to 16. Our programs are tailored to different age groups to ensure age-appropriate activities and learning.',
      emoji: '👶',
    },
    {
      question: 'How do I know which service is right for my child?',
      answer: "We offer a free consultation where our experts assess your child's needs and recommend the best program. You can also try a trial session!",
      emoji: '🤔',
    },
    {
      question: 'What are your payment options?',
      answer: 'We accept all major credit cards, bank transfers, and offer flexible payment plans. Some insurance plans may cover our services too!',
      emoji: '💳',
    },
    {
      question: 'Can parents stay during sessions?',
      answer: 'Absolutely! We encourage parent involvement. You can observe sessions through our viewing area or participate in family activities.',
      emoji: '👨‍👩‍👧',
    },
    {
      question: 'How long are the therapy sessions?',
      answer: 'Sessions typically last 45-60 minutes, depending on the program. We recommend consistent weekly sessions for best results.',
      emoji: '⏱️',
    },
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
        </div>

        {/* Floating Decorations */}
        <div className="absolute top-32 right-[10%] animate-float hidden md:block">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg rotate-12">
            💌
          </div>
        </div>
        <div className="absolute bottom-24 left-[8%] animate-bounceSlow hidden md:block">
          <div className="w-14 h-14 bg-gradient-to-br from-green-300 to-teal-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
            📞
          </div>
        </div>
        <div className="absolute top-1/2 right-[5%] animate-float animation-delay-500 hidden lg:block">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-violet-400 rounded-xl flex items-center justify-center text-xl shadow-lg -rotate-12">
            ✨
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-100 to-teal-100 border-2 border-dashed border-green-300 mb-6 animate-pop-in">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span className="font-bold text-green-700">We'd Love to Hear From You!</span>
          </div>

          {/* Tagline */}
          <span className="font-satisfy text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 block mb-4 animate-slide-up">
            Let's Connect! 
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up animation-delay-100">
            <span className="text-slate-800">Get In </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient">
              Touch
            </span>
            <span className="inline-block ml-3 animate-wave">👋</span>
          </h1>

          {/* Playful Underline */}
          <div className="flex justify-center mb-6 animate-slide-up animation-delay-200">
            <PlayfulUnderline color="#10B981" />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-300">
            Have questions about our <span className="text-pink-500 font-bold">fun programs</span>? 
            Want to schedule a visit? We're here to help your 
            <span className="text-purple-500 font-bold"> little star shine!</span> ⭐
          </p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <WaveDivider color="#ffffff" />
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="relative py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.action || '#'}
                className={`
                  group relative p-6 rounded-3xl bg-white border-2 border-slate-100
                  shadow-lg hover:shadow-2xl transition-all duration-500
                  hover:-translate-y-2 hover:border-transparent overflow-hidden
                  animate-slide-up ${info.action ? 'cursor-pointer' : 'cursor-default'}
                `}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 ${info.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <span className="text-2xl">{info.emoji}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 transition-all">
                  {info.title}
                </h3>
                
                {/* Info */}
                <p className={`font-semibold ${info.iconColor} mb-1`}>{info.primary}</p>
                <p className="text-sm text-slate-500">{info.secondary}</p>
                
                {/* Arrow for clickable items */}
                {info.action && (
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                  </div>
                )}
                
                {/* Corner Decoration */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM & MAP SECTION ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50/50 to-orange-50/30"></div>
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-5xl opacity-20 animate-float">✉️</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounceSlow">💬</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Form Side */}
            <div className="order-2 lg:order-1 animate-slide-left">
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-purple-100/50 border border-purple-100/50 relative overflow-hidden">
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 opacity-5 rounded-bl-full"></div>
                
                {/* Form Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold mb-4">
                    <Send className="w-4 h-4" />
                    Send a Message
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                    Drop Us a Line! 
                    <span className="inline-block ml-2 animate-wiggle">✍️</span>
                  </h2>
                  <p className="text-slate-500 mt-2">
                    Fill out the form below and we'll get back to you super quick!
                  </p>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl animate-pop-in">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-green-800 text-lg mb-1">
                          Message Sent Successfully! 🎉
                        </h3>
                        <p className="text-green-700">
                          Thank you for reaching out! Our team will contact you within 24 hours. 
                          We can't wait to meet your little star! ⭐
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="group">
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <User className="w-4 h-4 text-purple-500" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <Mail className="w-4 h-4 text-pink-500" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100 transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Child Name Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="group">
                      <label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <Phone className="w-4 h-4 text-green-500" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-green-400 focus:bg-white focus:ring-4 focus:ring-green-100 transition-all duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Child's Name */}
                    <div className="group">
                      <label htmlFor="childName" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <Baby className="w-4 h-4 text-orange-500" />
                        Child's Name
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 transition-all duration-300"
                        placeholder="Little star's name"
                      />
                    </div>
                  </div>

                  {/* Child Age & Service Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Child's Age */}
                    <div className="group">
                      <label htmlFor="childAge" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <Calendar className="w-4 h-4 text-teal-500" />
                        Child's Age
                      </label>
                      <input
                        type="text"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-100 transition-all duration-300"
                        placeholder="e.g., 5 years"
                      />
                    </div>

                    {/* Service Interest */}
                    <div className="group">
                      <label htmlFor="service" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                        <Sparkles className="w-4 h-4 text-purple-500" />
                        Interested Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                      <MessageCircle className="w-4 h-4 text-blue-500" />
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 bg-slate-50/50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none"
                      placeholder="Tell us about your child and what you're looking for... We'd love to hear from you! 💜"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      group relative w-full px-8 py-5 rounded-xl font-bold text-lg
                      transition-all duration-300 overflow-hidden
                      ${isSubmitting 
                        ? 'bg-slate-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:shadow-xl hover:shadow-purple-200 hover:-translate-y-1'
                      }
                      text-white
                    `}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending Magic...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                          <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                        </>
                      )}
                    </span>
                    
                    {/* Shine effect */}
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-pink-400 fill-current" />
                    Your information is safe with us. We never share your data.
                  </p>
                </form>
              </div>
            </div>

            {/* Map & Info Side */}
            <div className="order-1 lg:order-2 space-y-8 animate-slide-right">
              
              {/* Map Container */}
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-purple-100/50 border border-purple-100/50">
                {/* Map Header */}
                <div className="p-6 bg-gradient-to-r from-blue-500 to-cyan-500">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Find Us Here!</h3>
                      <p className="text-white/80 text-sm">123 Rainbow Lane, Sunshine City</p>
                    </div>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="relative h-[300px] bg-gradient-to-br from-blue-100 to-cyan-100">
                  {/* Replace with actual Google Map embed */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <span className="text-4xl">📍</span>
                      </div>
                      <p className="text-blue-600 font-semibold">Interactive Map Coming Soon!</p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 mt-2 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                  
                  {/* Map Decorations */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-200 rounded-full opacity-50 animate-float"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-pink-200 rounded-full opacity-50 animate-bounceSlow"></div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-purple-100/50">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-purple-500" />
                  Quick Actions
                </h3>
                
                <div className="space-y-4">
                  
                  {/* Call Now */}
                  <a 
                    href="tel:+15551234567"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-teal-50 border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800">Call Us Now</h4>
                      <p className="text-sm text-slate-500">+1 (555) 123-4567</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center text-2xl">
                      💬
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800">Chat on WhatsApp</h4>
                      <p className="text-sm text-slate-500">Quick responses guaranteed</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-purple-100/50">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500 fill-current" />
                  Follow Our Fun!
                </h3>
                
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, color: 'from-blue-500 to-blue-600', label: 'Facebook' },
                    { icon: Instagram, color: 'from-pink-500 to-rose-500', label: 'Instagram' },
                    { icon: Youtube, color: 'from-red-500 to-red-600', label: 'YouTube' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`flex-1 p-4 rounded-xl bg-gradient-to-br ${social.color} text-white flex flex-col items-center gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="text-sm font-semibold">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-confetti opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold mb-4 animate-pop-in">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="text-slate-800">Frequently Asked </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Questions
              </span>
              <span className="inline-block ml-2 animate-wiggle">🤔</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here are some common questions parents ask. Can't find your answer? Just reach out!
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`
                  bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300
                  ${activeAccordion === i 
                    ? 'border-purple-300 shadow-lg shadow-purple-100' 
                    : 'border-slate-200 hover:border-purple-200'
                  }
                `}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full p-6 flex items-center gap-4 text-left"
                >
                  {/* Emoji */}
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0
                    transition-all duration-300
                    ${activeAccordion === i ? 'bg-purple-100 scale-110' : 'bg-slate-100'}
                  `}>
                    {faq.emoji}
                  </div>
                  
                  {/* Question */}
                  <h3 className={`
                    flex-1 font-bold text-lg transition-colors
                    ${activeAccordion === i ? 'text-purple-600' : 'text-slate-800'}
                  `}>
                    {faq.question}
                  </h3>
                  
                  {/* Arrow */}
                  <ChevronDown className={`
                    w-6 h-6 text-slate-400 transition-transform duration-300
                    ${activeAccordion === i ? 'rotate-180 text-purple-500' : ''}
                  `} />
                </button>
                
                {/* Answer */}
                <div className={`
                  overflow-hidden transition-all duration-300
                  ${activeAccordion === i ? 'max-h-48' : 'max-h-0'}
                `}>
                  <p className="px-6 pb-6 pl-[88px] text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More Questions CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Still have questions? We're here to help! 
              <span className="inline-block ml-2">💜</span>
            </p>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Us Anytime
            </a>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}