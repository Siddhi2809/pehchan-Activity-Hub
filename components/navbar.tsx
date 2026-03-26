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
  Image,
  Star,
  Phone
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

  const navLinks = [
    { href: '/', label: 'Home', icon: Home, emoji: '🏠' },
    { href: '/about', label: 'About', icon: Info, emoji: '💜' },
    { href: '/services', label: 'Services', icon: Sparkles, emoji: '✨' },
    { href: '/gallery', label: 'Gallery', icon: Image, emoji: '🎨' },
    { href: '/contact', label: 'Contact', icon: Mail, emoji: '📬' },
  ]

  return (
    <>
      <nav 
        className={`
          fixed w-full top-0 z-50 transition-all duration-500
          ${scrolled 
            ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-purple-100/20 py-2 border-b border-white/30' 
            : 'bg-white/30 backdrop-blur-md py-4 border-b border-white/10'
          }
        `}
      >
        {/* Decorative Top Border - Rainbow gradient */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-teal-500 to-green-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Animated Logo Icon */}
              <div className="relative">
                <div className={`
                  w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400
                  flex items-center justify-center text-white font-bold text-lg
                  shadow-lg shadow-purple-200 transition-all duration-300
                  group-hover:shadow-xl group-hover:shadow-purple-300
                  group-hover:scale-110 group-hover:rotate-6
                `}>
                  <span className="text-xl">⭐</span>
                </div>
                
                {/* Sparkle effect */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 text-yellow-700 fill-current" />
                </div>
              </div>
              
              {/* Logo Text */}
              <div className="hidden sm:block">
                <span className={`
                  text-xl font-extrabold transition-all duration-300
                  ${scrolled 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600' 
                    : 'text-slate-800'
                  }
                  group-hover:text-transparent group-hover:bg-clip-text 
                  group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600
                `}>
                  Little Stars
                </span>
                <span className={`
                  block text-xs font-medium transition-colors duration-300
                  ${scrolled ? 'text-slate-500' : 'text-slate-600'}
                `}>
                  Kids Therapy ✨
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2.5 rounded-xl font-semibold text-sm
                    transition-all duration-300 group overflow-hidden
                    ${activeLink === link.href
                      ? 'text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-200/50'
                      : `${scrolled ? 'text-slate-800' : 'text-slate-900'} hover:text-purple-700`
                    }
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Hover Background */}
                  {activeLink !== link.href && (
                    <span className="absolute inset-0 bg-purple-100 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                  )}
                  
                  {/* Link Content */}
                  <span className="relative flex items-center gap-2">
                    <span className={`text-base transition-opacity duration-300 ${activeLink === link.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      {link.emoji}
                    </span>
                    <span className={activeLink === link.href ? 'font-bold' : ''}>{link.label}</span>
                  </span>
                  
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone number */}
              <a 
                href="tel:+15551234567"
                className={`
                  flex items-center gap-2 text-sm font-medium transition-colors duration-300
                  ${scrolled ? 'text-slate-600' : 'text-slate-700'}
                  hover:text-purple-600
                `}
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>
                <span className="hidden xl:inline">+1 (555) 123-4567</span>
              </a>
              
              {/* Book Now Button */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-full font-bold text-sm shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Book Now</span>
                <Sparkles className="w-4 h-4 relative z-10 group-hover:animate-spin" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`
                lg:hidden relative w-12 h-12 rounded-xl flex items-center justify-center
                transition-all duration-300
                ${isOpen 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                  : `${scrolled ? 'bg-purple-100 text-purple-600' : 'bg-white/80 text-purple-600'} hover:bg-purple-200`
                }
              `}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} 
                />
                <X 
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            lg:hidden fixed inset-x-0 top-[72px] bg-white/98 backdrop-blur-lg
            border-t border-purple-100 shadow-2xl shadow-purple-100/50
            transition-all duration-500 ease-out overflow-hidden
            ${isOpen ? 'max-h-[calc(100vh-72px)] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-20"></div>
          
          <div className="max-w-lg mx-auto px-6 py-6 space-y-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center gap-4 px-5 py-4 rounded-2xl
                  transition-all duration-300 transform
                  ${activeLink === link.href
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-purple-50 text-slate-700 hover:bg-purple-100 hover:translate-x-2'
                  }
                `}
                onClick={() => setIsOpen(false)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.3s ease ${index * 0.05}s`
                }}
              >
                {/* Icon Container */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center text-xl
                  ${activeLink === link.href 
                    ? 'bg-white/20' 
                    : 'bg-white shadow-sm'
                  }
                `}>
                  {link.emoji}
                </div>
                
                {/* Label */}
                <span className="font-semibold text-lg">{link.label}</span>
                
                {/* Arrow for active */}
                {activeLink === link.href && (
                  <span className="ml-auto text-xl animate-bounce">→</span>
                )}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-purple-100">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-2xl font-bold text-lg shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                <span>Book a Session</span>
                <Sparkles className="w-5 h-5" />
              </Link>
              
              {/* Phone */}
              <a 
                href="tel:+15551234567"
                className="flex items-center justify-center gap-3 w-full px-6 py-3 mt-3 bg-green-50 text-green-700 rounded-2xl font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </a>
            </div>
            
            {/* Decorative Bottom */}
            <div className="flex justify-center gap-4 pt-4">
              {['🌟', '💜', '✨', '🎨', '🦋'].map((emoji, i) => (
                <span 
                  key={i} 
                  className="text-2xl animate-bounce"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  )
}