'use client'

import Image from 'next/image'
import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Camera, 
  Heart, 
  Star, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Quote,
  Play,
  Filter,
  Users,
  TrendingUp
} from 'lucide-react'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // ✅ HERO SLIDER
  const heroImages = [
    '/yoga1.jpg',
    'music1.jpg',
    '/yoga5.jpg',
    '/yoga6.jpg',
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const categories = [
    { id: 'all', label: 'All', count: 12 },
    { id: 'sessions', label: 'Dance Classes', count: 4 },
    { id: 'activities', label: 'Kids Yoga', count: 4 },
    { id: 'events', label: 'Martial Arts', count: 3 },
    { id: 'success', label: 'Music Therapy', count: 2 },
    { id: 'nutrition', label: 'Nutrition & Diet', count: 2 },
  ]

  const galleryItems = [
    { id: 1, title: 'Dance Class', image: 'https://placehold.net/default.png', category: 'sessions', color: '#FF8C94', icon: '💃' },
    { id: 2, title: 'Music Therapy', image: '/music1.jpg', category: 'success', color: '#FFD166', icon: '🎵' },
    { id: 3, title: 'Kids Yoga', image: '/yoga1.jpg', category: 'activities', color: '#95E1D3', icon: '🧘' },
    { id: 4, title: 'Martial Arts', image: 'https://placehold.net/default.png', category: 'events', color: '#6EC1E4', icon: '🥋' },
    { id: 5, title: 'Music Therapy', image: 'https://placehold.net/default.png', category: 'success', color: '#FFD166', icon: '🎉' },
    { id: 6, title: 'Martial Arts', image: 'https://placehold.net/default.png', category: 'events', color: '#6EC1E4', icon: '🥋' },
    { id: 7, title: 'nutrition & diet', image: 'https://placehold.net/default.png', category: 'nutrition', color: '#95E1D3', icon: '⭐' },
    { id: 8, title: 'kidz yoga', image: '/yoga3.jpg', category: 'activities', color: '#95E1D3', icon: '⭐' },
    { id: 9, title: 'kidz yoga', image: '/yoga6.jpg', category: 'activities', color: '#FF8C94', icon: '🎂' },
    { id: 10, title: 'Nutrition Workshop', image: 'https://placehold.net/default.png', category: 'sessions', color: '#95E1D3', icon: '🥗' },
    { id: 11, title: 'kidz yoga', image: '/yoga5.jpg', category: 'activities', color: '#FFD166', icon: '🏆' },
    { id: 12, title: 'Sports Day', image: 'https://placehold.net/default.png', category: 'events', color: '#6EC1E4', icon: '🏃' },
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const testimonials = [
    { rating: 5, text: "Pehchan Activity Hub has been transformative for our child. The therapists are wonderful and caring.", name: "Sarah Johnson", child: "Emma" },
    { rating: 5, text: "The activities and therapy sessions have really helped our son's development. Highly recommended!", name: "Michael Chen", child: "Alex" },
    { rating: 5, text: "A warm and welcoming center. Our daughter loves coming here for her music therapy sessions.", name: "Priya Patel", child: "Aisha" },
  ]

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <main className="min-h-screen bg-[#FFF7E6] overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION (UPDATED) ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="gallery"
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md mb-6">
            <div className="w-2 h-2 rounded-full bg-[#95E1D3] animate-pulse"></div>
            <span className="text-sm font-semibold">Photo Gallery</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-yellow-400">
            Moments That Matter
          </h1>

          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-[#6EC1E4] to-[#95E1D3] rounded-full"></div>
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
            A collection of special moments capturing growth, joy, and achievement 
            at Pehchan Activity Hub Therapy Center.
          </p>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {heroImages.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-6 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters */}
          <div className="flex items-center gap-3 mb-12 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-[#636E72] flex-shrink-0">
              <Filter className="w-5 h-5" />
              <span className="font-medium text-sm">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex-shrink-0 px-5 py-2.5 rounded-full font-medium text-sm
                  transition-all duration-300 border-2
                  ${activeCategory === category.id
                    ? 'bg-[#6EC1E4] text-white border-[#6EC1E4] shadow-md'
                    : 'bg-white text-[#2D3436] border-[#E8E8E8] hover:border-[#6EC1E4] hover:bg-[#EBF7FC]'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span>{category.label}</span>
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs font-bold
                    ${activeCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-[#F8F9FA] text-[#636E72]'
                    }
                  `}>
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#F8F9FA] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-[#E8E8E8] hover:border-current"
                     style={{ color: item.color }}>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center"
                         style={{ backgroundColor: `${item.color}15` }}>
                      <span className="text-6xl opacity-30 group-hover:scale-125 transition-transform duration-500">
                        {item.icon}
                      </span>
                    </div>
                    
                    {/* Actual Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm capitalize transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                          {item.category.replace('-', ' ')}
                        </p>
                      </div>
                    </div>

                    {/* Heart Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                      <Heart className="w-5 h-5 text-[#FF8C94]" />
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1" style={{ backgroundColor: item.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F8F9FA] flex items-center justify-center relative">
              <Image
                src={filteredItems[currentImageIndex]?.image}
                alt={filteredItems[currentImageIndex]?.title}
                fill
                className="object-contain"
              />
              
              {/* Placeholder */}
              <span className="text-9xl opacity-20" 
                    style={{ color: filteredItems[currentImageIndex]?.color }}>
                {filteredItems[currentImageIndex]?.icon}
              </span>
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <h3 className="text-white font-bold text-2xl mb-1">
                {filteredItems[currentImageIndex]?.title}
              </h3>
              <p className="text-white/70 capitalize text-sm">
                {filteredItems[currentImageIndex]?.category.replace('-', ' ')}
              </p>
            </div>
          </div>

          {/* Next */}
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${currentImageIndex === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                  }
                `}
              />
            ))}
          </div>
        </div>
      )}

      {/* ================= TESTIMONIALS ================= */}
      <section className="relative py-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBF7FC] to-[#F0FAF8] opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#2D3436]">
              Parent Testimonials
            </h2>
            <p className="text-lg text-[#636E72] max-w-2xl mx-auto">
              Hear from families about their experience at Pehchan Activity Hub
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial: { rating: any; text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; child: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }, index: Key | null | undefined) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border-2 border-[#E8E8E8] hover:shadow-lg hover:border-[#6EC1E4] transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-[#EBF7FC] rounded-xl flex items-center justify-center mb-4">
                  <Quote className="w-6 h-6 text-[#6EC1E4]" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFD166] fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#636E72] mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-[#E8E8E8]">
                  <h4 className="font-bold text-[#2D3436]">{testimonial.name}</h4>
                  <p className="text-sm text-[#636E72]">
                    Parent of <span className="text-[#6EC1E4] font-semibold">{testimonial.child}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Video CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md border border-[#E8E8E8]">
              <div className="w-14 h-14 bg-[#6EC1E4] rounded-full flex items-center justify-center">
                <Play className="w-7 h-7 text-white ml-1" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-[#2D3436] mb-1">Watch Video Testimonials</h3>
                <p className="text-[#636E72] text-sm">Hear directly from our families</p>
              </div>
              <button className="px-6 py-3 bg-[#6EC1E4] text-white rounded-full font-bold hover:bg-[#4DA8CE] transition-colors ml-auto">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}