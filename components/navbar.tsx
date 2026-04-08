'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  Menu, 
  X, 
  Sparkles, 
  Home, 
  Info, 
  Heart, 
  Mail, 
  ImageIcon,
  Star,
  Phone,
  ChevronRight,
  ArrowRight
} from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Set active link based on current path
  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
    { href: '/services', label: 'Services', icon: Sparkles },
    { href: '/gallery', label: 'Gallery', icon: ImageIcon },
    { href: '/contact', label: 'Contact', icon: Mail },
  ]

  return (
    <>
      <nav 
        className={`
          fixed w-full top-0 z-50 transition-all duration-500
          ${scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(110,193,228,0.08)] py-3' 
            : 'bg-transparent py-5'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Mark */}
              <div className="relative">
                {/* Main Logo Circle */}
                <div className={`
                  w-11 h-11 rounded-xl flex items-center justify-center
                  transition-all duration-500 ease-out
                  ${scrolled 
                    ? 'bg-[#6EC1E4]' 
                    : 'bg-white shadow-lg shadow-black/5'
                  }
                  group-hover:scale-105 group-hover:rotate-3
                `}>
                  {/* Star Icon */}
                  <svg 
                    viewBox="0 0 24 24" 
                    className={`w-6 h-6 transition-colors duration-300 ${scrolled ? 'text-white' : 'text-[#6EC1E4]'}`}
                    fill="currentColor"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                
                {/* Subtle Pulse Ring - Only on hover */}
                <div className="absolute inset-0 rounded-xl bg-[#6EC1E4]/20 scale-100 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              </div>
              
              {/* Logo Text */}
              <div className="hidden sm:block">
                <span className={`
                  text-lg font-bold tracking-tight transition-colors duration-300
                  ${scrolled ? 'text-[#2D3436]' : 'text-[#2D3436]'}
                `}>
                  PEHCHAN 
                </span>
                <span className={`
                  block text-xs font-medium tracking-wide transition-colors duration-300
                  ${scrolled ? 'text-[#6EC1E4]' : 'text-[#636E72]'}
                `}>
                  Activity Hub
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              {/* Nav Links Container */}
              <div className={`
                flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 
                ${scrolled ? 'bg-[#F8F9FA]' : 'bg-white/80 backdrop-blur-sm shadow-lg shadow-black/5'}
              `}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-5 py-2.5 rounded-full text-sm font-medium
                      transition-all duration-300
                      ${activeLink === link.href
                        ? 'text-white'
                        : 'text-[#636E72] hover:text-[#2D3436]'
                      }
                    `}
                  >
                    {/* Active Background */}
                    {activeLink === link.href && (
                      <span className="absolute inset-0 bg-[#6EC1E4] rounded-full shadow-md shadow-[#6EC1E4]/30"></span>
                    )}
                    
                    {/* Hover Background */}
                    {activeLink !== link.href && (
                      <span className="absolute inset-0 bg-[#6EC1E4]/0 hover:bg-[#6EC1E4]/10 rounded-full transition-colors duration-300"></span>
                    )}
                    
                    <span className="relative">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Phone - Minimal */}
              <a 
                href="tel:+15551234567"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#636E72] hover:text-[#2D3436] transition-colors duration-300 rounded-full hover:bg-[#F8F9FA]"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">(555) 123-4567</span>
              </a>
              
              {/* Divider */}
              <div className="w-px h-6 bg-[#E8E8E8]"></div>
              
              {/* Book Now Button - Premium Style */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#2D3436] text-white rounded-full text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#2D3436]/20"
              >
                {/* Background Hover Effect */}
                <span className="absolute inset-0 bg-[#6EC1E4] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                
                <span className="relative">Book Consultation</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`
                lg:hidden relative w-11 h-11 rounded-xl flex items-center justify-center
                transition-all duration-300
                ${isOpen 
                  ? 'bg-[#2D3436] text-white' 
                  : scrolled 
                    ? 'bg-[#F8F9FA] text-[#2D3436] hover:bg-[#E8E8E8]' 
                    : 'bg-white text-[#2D3436] shadow-lg shadow-black/5 hover:bg-[#F8F9FA]'
                }
              `}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-5 h-5">
                <span className={`
                  absolute top-1 left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300
                  ${isOpen ? 'top-[9px] rotate-45' : ''}
                `}></span>
                <span className={`
                  absolute top-[9px] left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300
                  ${isOpen ? 'opacity-0 scale-0' : ''}
                `}></span>
                <span className={`
                  absolute bottom-1 left-0 w-5 h-0.5 bg-current rounded-full transition-all duration-300
                  ${isOpen ? 'bottom-[9px] -rotate-45' : ''}
                `}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Premium Design */}
        <div 
          className={`
            lg:hidden fixed inset-x-0 top-[76px] bg-white
            transition-all duration-500 ease-out
            ${isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
            }
          `}
        >
          {/* Content Container */}
          <div className="max-w-lg mx-auto px-6 py-8">
            
            {/* Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    flex items-center justify-between px-5 py-4 rounded-2xl
                    transition-all duration-300
                    ${activeLink === link.href
                      ? 'bg-[#6EC1E4] text-white'
                      : 'bg-[#F8F9FA] text-[#2D3436] hover:bg-[#6EC1E4]/10'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <link.icon className={`w-5 h-5 ${activeLink === link.href ? 'text-white' : 'text-[#6EC1E4]'}`} />
                    <span className="font-semibold">{link.label}</span>
                  </div>
                  
                  <ChevronRight className={`w-5 h-5 ${activeLink === link.href ? 'text-white/70' : 'text-[#B2BEC3]'}`} />
                </Link>
              ))}
            </div>
            
            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#E8E8E8] to-transparent"></div>
            
            {/* Mobile CTA Section */}
            <div className="space-y-3">
              {/* Book Now Button */}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#2D3436] text-white rounded-2xl font-semibold transition-all duration-300 hover:bg-[#6EC1E4]"
                onClick={() => setIsOpen(false)}
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              {/* Phone Link */}
              <a 
                href="tel:+15551234567"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#F0FAF8] text-[#2D3436] rounded-2xl font-medium transition-all duration-300 hover:bg-[#95E1D3]/30"
              >
                <div className="w-8 h-8 rounded-full bg-[#95E1D3] flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span>+1 (555) 123-4567</span>
              </a>
            </div>
            
            {/* Bottom Info */}
            <div className="mt-8 pt-6 border-t border-[#E8E8E8]">
              <p className="text-center text-sm text-[#636E72]">
                Helping children shine bright since 2014
              </p>
              
              {/* Trust Indicators */}
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-1.5 text-xs text-[#636E72]">
                  <div className="w-2 h-2 rounded-full bg-[#95E1D3]"></div>
                  <span>Certified</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#636E72]">
                  <div className="w-2 h-2 rounded-full bg-[#FFD166]"></div>
                  <span>Trusted</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#636E72]">
                  <div className="w-2 h-2 rounded-full bg-[#6EC1E4]"></div>
                  <span>Caring</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Shadow/Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6EC1E4]/30 to-transparent"></div>
        </div>
        
        {/* Overlay for mobile menu */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 top-[76px] bg-black/20 backdrop-blur-sm -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>

      {/* Spacer */}
      <div className={`transition-all duration-500 ${scrolled ? 'h-[68px]' : 'h-[84px]'}`}></div>
    </>
  )
}