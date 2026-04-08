import Link from 'next/link'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Heart, 
  Star,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Send,
  Clock,
  Sparkles
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { href: '/', label: 'Home', emoji: '🏠' },
    { href: '/about', label: 'About Us', emoji: '💜' },
    { href: '/services', label: 'Our Services', emoji: '✨' },
    { href: '/gallery', label: 'Gallery', emoji: '🎨' },
    { href: '/contact', label: 'Contact', emoji: '📬' },
  ]
  
  const services = [
    { label: 'Dance Classes', emoji: '💃' },
    { label: 'Music Therapy', emoji: '🎵' },
    { label: 'Kids Yoga', emoji: '🧘' },
    { label: 'Martial Arts', emoji: '🥋' },
    { label: 'Nutrition', emoji: '🍎' },
  ]
  
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-[#6EC1E4]' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-[#FF8C94]' },
    { icon: Youtube, href: '#', label: 'Youtube', color: 'hover:bg-[#FF8C94]' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-[#6EC1E4]' },
  ]

  return (
    <footer className="relative overflow-hidden">
      
      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full h-20 md:h-28" preserveAspectRatio="none">
          <path
            d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      
      {/* Main Footer Background - Premium Gradient */}
      <div className="bg-gradient-to-br from-[#6EC1E4] via-[#5AB5D8] to-[#95E1D3] pt-32 pb-8 relative">
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Stars */}
          <div className="absolute top-20 left-[10%] text-white/10 animate-float">
            <Star className="w-8 h-8 fill-current" />
          </div>
          <div className="absolute top-40 right-[15%] text-white/10 animate-float animation-delay-500">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <div className="absolute bottom-40 left-[20%] text-white/5 animate-float animation-delay-300">
            <Star className="w-10 h-10 fill-current" />
          </div>
          
          {/* Floating Emojis */}
          <div className="absolute top-32 right-[5%] text-4xl opacity-15 animate-bounceSlow">🌟</div>
          <div className="absolute top-60 left-[8%] text-3xl opacity-10 animate-float">✨</div>
          <div className="absolute bottom-60 right-[12%] text-4xl opacity-10 animate-bounceSlow animation-delay-700">🎈</div>
          
          {/* Gradient Circles - Subtle */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Newsletter Section */}
        <div className="relative max-w-7xl mx-auto px-6 mb-16">
          <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-4">
                  <Sparkles className="w-4 h-4" />
                  Stay Connected!
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  Get Fun Tips & Updates! 🎉
                </h3>
                <p className="text-white/90">
                  Subscribe to our newsletter for parenting tips, activity ideas, and special offers!
                </p>
              </div>
              
              <div>
                <form className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6EC1E4]" />
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-[#2D3436] placeholder:text-[#B2BEC3] font-medium focus:outline-none focus:ring-4 focus:ring-[#FFD166]/50 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFD166] text-[#2D3436] rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-[#F5C04D] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                  >
                    Subscribe
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <p className="text-white/80 text-sm mt-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-current text-[#FF8C94]" />
                  No spam, just fun stuff for your little ones!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  ⭐
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-white block">
                    Little Stars
                  </span>
                  <span className="text-white/70 text-sm">Kids Therapy ✨</span>
                </div>
              </Link>
              
              <p className="text-white/80 leading-relaxed mb-6">
                Where every child's journey is filled with joy, growth, and endless possibilities! 
                We're here to help your little ones shine bright. 🌟
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className={`
                      w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center
                      text-white transition-all duration-300
                      hover:scale-110 hover:-translate-y-1 hover:shadow-lg
                      ${social.color}
                    `}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm">
                  🔗
                </span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300"
                    >
                      <span className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        {link.emoji}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm">
                  ✨
                </span>
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      href="/services"
                      className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300"
                    >
                      <span className="text-lg">{service.emoji}</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {service.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm">
                  📞
                </span>
                Contact Us
              </h3>
              
              <ul className="space-y-4">
                {/* Phone */}
                <li>
                  <a
                    href="tel:+15551234567"
                    className="group flex items-start gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#95E1D3]/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#95E1D3]/40 transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-xs text-white/60 mb-0.5">Call Us</span>
                      <span className="font-semibold">+1 (555) 123-4567</span>
                    </div>
                  </a>
                </li>
                
                {/* Email */}
                <li>
                  <a
                    href="mailto:hello@littlestars.com"
                    className="group flex items-start gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FF8C94]/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF8C94]/40 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-xs text-white/60 mb-0.5">Email Us</span>
                      <span className="font-semibold">hello@littlestars.com</span>
                    </div>
                  </a>
                </li>
                
                {/* Address */}
                <li>
                  <div className="flex items-start gap-3 text-white/80">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-xs text-white/60 mb-0.5">Visit Us</span>
                      <span className="font-semibold">123 Rainbow Lane,<br />Sunshine City, ST 12345</span>
                    </div>
                  </div>
                </li>
                
                {/* Hours */}
                <li>
                  <div className="flex items-start gap-3 text-white/80">
                    <div className="w-10 h-10 rounded-xl bg-[#FFD166]/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-xs text-white/60 mb-0.5">Working Hours</span>
                      <span className="font-semibold text-sm">
                        Mon-Fri: 9AM - 6PM<br />
                        Sat: 10AM - 4PM
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="relative max-w-7xl mx-auto px-6 mt-16">
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              
              {/* Copyright */}
              <p className="text-white/70 text-sm flex items-center gap-2">
                <span>© {currentYear} Little Stars Therapy.</span>
                <span className="hidden sm:inline">Made with</span>
                <Heart className="w-4 h-4 text-[#FF8C94] fill-current animate-heartbeat hidden sm:inline" />
                <span className="hidden sm:inline">for little ones</span>
              </p>
              
              {/* Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <span>Privacy Policy</span>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <span>Terms of Service</span>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
                  <span>Cookie Policy</span>
                </Link>
              </div>
              
              {/* Fun Bottom Element */}
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <span>Made for</span>
                <div className="flex -space-x-1">
                  {['⭐', '🌟', '✨'].map((emoji, i) => (
                    <span 
                      key={i} 
                      className="text-lg animate-bounce"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      {emoji}
                    </span>
                  ))}
                </div>
                <span>little stars</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 opacity-30">
          <svg viewBox="0 0 1440 50" className="w-full h-8" preserveAspectRatio="none">
            <path
              d="M0,25 C360,50 720,0 1080,25 C1260,37 1350,20 1440,30 L1440,50 L0,50 Z"
              fill="rgba(255,255,255,0.1)"
            />
          </svg>
        </div>
      </div>
    </footer>
  )
}