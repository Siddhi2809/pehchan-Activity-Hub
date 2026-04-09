'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  User,
  Baby,
  Calendar,
  CheckCircle2,
  Star,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  Target
} from 'lucide-react'
import { FormEvent, useState } from 'react'
import Link from 'next/link'

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
      primary: '+91 7039337562',
      secondary: 'Mon-Fri 9AM-6PM',
      color: '#95E1D3',
      bgLight: '#F0FAF8',
      action: 'tel:+917039337562',
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'asmita@kidzexploretherapy.com',
      secondary: 'Response within 24 hours',
      color: '#FF8C94',
      bgLight: '#FFF0F1',
      action: 'mailto:asmita@kidzexploretherapy.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: 'Solartile Bussiness Hub,Wakad',
      color: '#6EC1E4',
      bgLight: '#EBF7FC',
      action: 'https://www.google.com/maps/place/Kidz+Explore+Therapy+Center/@18.6012674,73.7739539,1651m/data=!3m1!1e3!4m6!3m5!1s0x3bc2b9e8d7fbec75:0x3b3a17c820559b68!8m2!3d18.6007727!4d73.7752227!16s%2Fg%2F11vx278m6t?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      primary: 'Mon-Fri: 9AM - 6PM',
      secondary: 'Sat: 10AM - 4PM',
      color: '#FFD166',
      bgLight: '#FFF8E5',
      action: null,
    },
  ]

  const services = [
    { value: 'dance', label: 'Dance Classes' },
    { value: 'martial-arts', label: 'Martial Arts' },
    { value: 'music-therapy', label: 'Music Therapy' },
    { value: 'yoga', label: 'Kids Yoga' },
    { value: 'nutrition', label: 'Nutrition & Diet' },
    { value: 'other', label: 'Other / Multiple Services' },
  ]

  const faqs = [
    {
      question: 'What age groups do you work with?',
      answer: 'We work with children from ages 3 to 16. Our programs are tailored to different age groups to ensure age-appropriate activities and learning.',
    },
    {
      question: 'How do I know which service is right for my child?',
      answer: "We offer a free consultation where our experts assess your child's needs and recommend the best program. You can also try a trial session!",
    },
    {
      question: 'What are your payment options?',
      answer: 'We accept all major credit cards, bank transfers, and offer flexible payment plans. Some insurance plans may cover our services.',
    },
    {
      question: 'Can parents stay during sessions?',
      answer: 'Absolutely! We encourage parent involvement. You can observe sessions through our viewing area or participate in family activities.',
    },
    {
      question: 'How long are the therapy sessions?',
      answer: 'Sessions typically last 45-60 minutes, depending on the program. We recommend consistent weekly sessions for best results.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#FFF7E6] overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Subtle Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#EBF7FC] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#F0FAF8] rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#6EC1E4]/30 mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#95E1D3] animate-pulse"></div>
            <span className="text-sm font-semibold text-[#2D3436]">Get In Touch</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
            <span className="text-[#2D3436] block mb-2">Let's Start Your</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3]">
              Child's Journey
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3] rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-[#636E72] max-w-2xl mx-auto leading-relaxed mb-12">
            Have questions about our programs? Ready to schedule a consultation? 
            We're here to help every step of the way.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: '< 24hrs', label: 'Response Time' },
              { value: '100%', label: 'Confidential' },
              { value: 'Free', label: 'Consultation' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-[#6EC1E4] mb-1">{stat.value}</div>
                <div className="text-sm text-[#636E72]">{stat.label}</div>
              </div>
            ))}
          </div>
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
                className="group p-6 rounded-2xl bg-white border-2 border-[#E8E8E8] shadow-sm hover:shadow-xl hover:border-current transition-all duration-500 hover:-translate-y-2"
                style={{ color: info.color }}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: info.bgLight }}
                >
                  <info.icon className="w-7 h-7" style={{ color: info.color }} />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-[#2D3436] mb-2">
                  {info.title}
                </h3>
                
                {/* Info */}
                <p className="font-semibold mb-1" style={{ color: info.color }}>
                  {info.primary}
                </p>
                <p className="text-sm text-[#636E72]">{info.secondary}</p>
                
                {/* Arrow */}
                {info.action && (
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Contact</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORM & MAP SECTION ================= */}
      <section className="relative py-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBF7FC] to-[#F0FAF8] opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Form Side */}
            <div>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-[#E8E8E8]">
                
                {/* Form Header */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D3436] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-[#636E72]">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="mb-8 p-6 bg-[#F0FAF8] border-2 border-[#95E1D3] rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#95E1D3] rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#2D3436] text-lg mb-1">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-[#636E72]">
                          Thank you for reaching out. Our team will contact you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-[#2D3436] mb-2">
                        <User className="w-4 h-4 text-[#6EC1E4]" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#6EC1E4] focus:ring-4 focus:ring-[#6EC1E4]/10 transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-[#2D3436] mb-2">
                        <Mail className="w-4 h-4 text-[#FF8C94]" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#FF8C94] focus:ring-4 focus:ring-[#FF8C94]/10 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Child Name */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-[#2D3436] mb-2">
                        <Phone className="w-4 h-4 text-[#95E1D3]" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#95E1D3] focus:ring-4 focus:ring-[#95E1D3]/10 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="childName" className="flex items-center gap-2 text-sm font-semibold text-[#2D3436] mb-2">
                        <Baby className="w-4 h-4 text-[#FFD166]" />
                        Child's Name
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#FFD166] focus:ring-4 focus:ring-[#FFD166]/10 transition-all"
                        placeholder="Child's name"
                      />
                    </div>
                  </div>

                  {/* Child Age & Service */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="childAge" className="flex items-center gap-2 text-sm font-semibold text-[#2D3436] mb-2">
                        <Calendar className="w-4 h-4 text-[#6EC1E4]" />
                        Child's Age
                      </label>
                      <input
                        type="text"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#6EC1E4] focus:ring-4 focus:ring-[#6EC1E4]/10 transition-all"
                        placeholder="e.g., 5 years"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="flex items-center gap-2 text-sm font-semibold text-[#2D3436] mb-2">
                        <Target className="w-4 h-4 text-[#95E1D3]" />
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] focus:outline-none focus:border-[#95E1D3] focus:ring-4 focus:ring-[#95E1D3]/10 transition-all"
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
                  <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-[#2D3436] mb-2">
                      <MessageCircle className="w-4 h-4 text-[#6EC1E4]" />
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#E8E8E8] bg-white text-[#2D3436] placeholder:text-[#B2BEC3] focus:outline-none focus:border-[#6EC1E4] focus:ring-4 focus:ring-[#6EC1E4]/10 transition-all resize-none"
                      placeholder="Tell us about your child and what you're looking for..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full px-8 py-4 rounded-xl font-bold text-base text-white
                      transition-all duration-300
                      ${isSubmitting 
                        ? 'bg-[#B2BEC3] cursor-not-allowed' 
                        : 'bg-[#2D3436] hover:bg-[#6EC1E4] shadow-lg hover:shadow-xl hover:-translate-y-1'
                      }
                    `}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-center text-sm text-[#636E72]">
                    Your information is secure and confidential
                  </p>
                </form>
              </div>
            </div>

            {/* Map & Info Side */}
            <div className="space-y-8">
              
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-[#E8E8E8]">
                <div className="p-6 bg-[#6EC1E4]">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Visit Our Center</h3>
                      <p className="text-white/90 text-sm">Solartile Bussiness Hub,Wakad</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-[300px] bg-[#EBF7FC]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-[#6EC1E4]" />
                      </div>
                      <p className="text-[#2D3436] font-semibold mb-2">Interactive Map</p>
                      <a 
                        href="https://www.google.com/maps/place/Kidz+Explore+Therapy+Center/@18.6012674,73.7739539,1651m/data=!3m1!1e3!4m6!3m5!1s0x3bc2b9e8d7fbec75:0x3b3a17c820559b68!8m2!3d18.6007727!4d73.7752227!16s%2Fg%2F11vx278m6t?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#6EC1E4] hover:text-[#4DA8CE] text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E8E8E8]">
                <h3 className="text-xl font-bold text-[#2D3436] mb-6">
                  Quick Contact
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+917039337562"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-[#F0FAF8] border-2 border-[#E8E8E8] hover:border-[#95E1D3] hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-[#95E1D3] rounded-xl flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#2D3436]">Call Us Now</h4>
                      <p className="text-sm text-[#636E72]">+91 7039337562</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#95E1D3] group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a 
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-[#F0FAF8] border-2 border-[#E8E8E8] hover:border-[#95E1D3] hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-[#95E1D3] rounded-xl flex items-center justify-center text-white text-xl">
                      💬
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#2D3436]">WhatsApp Chat</h4>
                      <p className="text-sm text-[#636E72]">Quick responses</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#95E1D3] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2D3436]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#636E72] max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`
                  bg-white rounded-xl border-2 overflow-hidden transition-all duration-300
                  ${activeAccordion === i 
                    ? 'border-[#6EC1E4] shadow-lg' 
                    : 'border-[#E8E8E8] hover:border-[#6EC1E4]/50'
                  }
                `}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full p-6 flex items-center gap-4 text-left"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ 
                      backgroundColor: activeAccordion === i ? '#EBF7FC' : '#F8F9FA'
                    }}
                  >
                    <HelpCircle className="w-5 h-5" style={{ 
                      color: activeAccordion === i ? '#6EC1E4' : '#B2BEC3'
                    }} />
                  </div>
                  
                  <h3 className={`
                    flex-1 font-bold text-lg transition-colors
                    ${activeAccordion === i ? 'text-[#6EC1E4]' : 'text-[#2D3436]'}
                  `}>
                    {faq.question}
                  </h3>
                  
                  <ChevronDown className={`
                    w-6 h-6 transition-all duration-300
                    ${activeAccordion === i ? 'rotate-180 text-[#6EC1E4]' : 'text-[#B2BEC3]'}
                  `} />
                </button>
                
                <div className={`
                  overflow-hidden transition-all duration-300
                  ${activeAccordion === i ? 'max-h-48' : 'max-h-0'}
                `}>
                  <p className="px-6 pb-6 pl-[88px] text-[#636E72] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-[#636E72] mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#6EC1E4] text-white rounded-full font-bold shadow-lg hover:bg-[#4DA8CE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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