'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { 
  Camera, 
  Heart, 
  Star, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Quote,
  Play,
  Grid3X3,
  LayoutGrid,
  Smile,
  PartyPopper,
  Music,
  Palette,
  Trophy,
  Users
} from 'lucide-react'
import { 
  FloatingClouds, 
  FloatingStars,
  BlobShape,
  PlayfulUnderline,
  SunDecoration
} from '@/components/decorations/FloatingElements'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories = [
    { id: 'all', label: 'All Photos', emoji: '✨', count: 12 },
    { id: 'sessions', label: 'Therapy Sessions', emoji: '💜', count: 4 },
    { id: 'activities', label: 'Fun Activities', emoji: '🎨', count: 3 },
    { id: 'events', label: 'Special Events', emoji: '🎉', count: 3 },
    { id: 'success', label: 'Success Stories', emoji: '⭐', count: 2 },
  ]

  const galleryItems = [
    { 
      id: 1, 
      title: 'Dance Class Fun', 
      image: 'https://placehold.net/default.png', 
      category: 'activities',
      color: 'from-pink-400 to-rose-500',
      emoji: '💃'
    },
    { 
      id: 2, 
      title: 'Music Therapy Session', 
      image: 'https://placehold.net/default.png', 
      category: 'sessions',
      color: 'from-purple-400 to-violet-500',
      emoji: '🎵'
    },
    { 
      id: 3, 
      title: 'Yoga for Kids', 
      image: 'https://placehold.net/default.png', 
      category: 'sessions',
      color: 'from-teal-400 to-cyan-500',
      emoji: '🧘'
    },
    { 
      id: 4, 
      title: 'Art & Craft Day', 
      image: 'https://placehold.net/default.png', 
      category: 'activities',
      color: 'from-orange-400 to-amber-500',
      emoji: '🎨'
    },
    { 
      id: 5, 
      title: 'Annual Day Celebration', 
      image: 'https://placehold.net/default.png', 
      category: 'events',
      color: 'from-yellow-400 to-orange-500',
      emoji: '🎉'
    },
    { 
      id: 6, 
      title: 'Martial Arts Training', 
      image: 'https://placehold.net/default.png', 
      category: 'sessions',
      color: 'from-red-400 to-orange-500',
      emoji: '🥋'
    },
    { 
      id: 7, 
      title: 'Emma\'s Progress', 
      image: 'https://placehold.net/default.png', 
      category: 'success',
      color: 'from-green-400 to-emerald-500',
      emoji: '🌟'
    },
    { 
      id: 8, 
      title: 'Group Activity Time', 
      image: 'https://placehold.net/default.png', 
      category: 'activities',
      color: 'from-blue-400 to-cyan-500',
      emoji: '👫'
    },
    { 
      id: 9, 
      title: 'Birthday Celebrations', 
      image: 'https://placehold.net/default.png', 
      category: 'events',
      color: 'from-pink-400 to-purple-500',
      emoji: '🎂'
    },
    { 
      id: 10, 
      title: 'Nutrition Workshop', 
      image: 'https://placehold.net/default.png', 
      category: 'sessions',
      color: 'from-green-400 to-teal-500',
      emoji: '🥗'
    },
    { 
      id: 11, 
      title: 'Noah\'s Achievement', 
      image: 'https://placehold.net/default.png', 
      category: 'success',
      color: 'from-yellow-400 to-amber-500',
      emoji: '🏆'
    },
    { 
      id: 12, 
      title: 'Sports Day Fun', 
      image: 'https://placehold.net/default.png', 
      category: 'events',
      color: 'from-cyan-400 to-blue-500',
      emoji: '🏃'
    },
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const testimonials = [
    {
      name: 'Sarah & Tom',
      child: 'Emma, 7',
      text: 'The therapists at Little Stars have been incredible with Emma. We\'ve seen such positive changes in her confidence and social skills!',
      avatar: '👨‍👩‍👧',
      rating: 5,
      color: 'from-pink-400 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      name: 'Michael',
      child: 'Liam, 9',
      text: 'Liam was struggling with anxiety, but the personalized approach here has made all the difference. Highly recommend!',
      avatar: '👨',
      rating: 5,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Jennifer',
      child: 'Sophie, 5',
      text: 'The warm environment and caring therapists make Sophie actually look forward to her sessions. That\'s when you know it\'s the right place.',
      avatar: '👩',
      rating: 5,
      color: 'from-purple-400 to-violet-500',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'David & Lisa',
      child: 'Noah, 8',
      text: 'We\'ve tried other centers, but the expertise and compassion here is unmatched. Noah has improved tremendously.',
      avatar: '👨‍👩‍👦',
      rating: 5,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Amanda',
      child: 'Olivia, 6',
      text: 'Our daughter was shy and withdrawn, but now she\'s blooming! The therapists truly care about each child.',
      avatar: '👩',
      rating: 5,
      color: 'from-orange-400 to-amber-500',
      bgColor: 'bg-orange-50',
    },
    {
      name: 'Robert',
      child: 'Lucas, 10',
      text: 'Excellent communication from the team. They keep us updated and involve us every step of the way.',
      avatar: '👨',
      rating: 5,
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-teal-50',
    },
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
    <main className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-purple-50/30 overflow-hidden">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0">
          <FloatingClouds />
          <FloatingStars />
          
          {/* Gradient Blobs */}
          <div className="absolute top-10 right-0 w-[400px] h-[400px] opacity-30">
            <BlobShape color="var(--kids-purple-soft)" className="w-full h-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-20">
            <BlobShape color="var(--kids-pink-soft)" className="w-full h-full" />
          </div>
        </div>

        {/* Floating Decorations */}
        <div className="absolute top-32 right-[10%] animate-float hidden md:block">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg rotate-12">
            📸
          </div>
        </div>
        <div className="absolute bottom-10 left-[8%] animate-bounceSlow hidden md:block">
          <div className="w-14 h-14 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
            🌟
          </div>
        </div>
        <div className="absolute top-1/2 right-[5%] animate-float animation-delay-500 hidden lg:block">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-xl flex items-center justify-center text-xl shadow-lg -rotate-12">
            🎨
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-dashed border-purple-300 mb-6 animate-pop-in">
            <Camera className="w-5 h-5 text-purple-600" />
            <span className="font-bold text-purple-700">Magical Moments Captured</span>
          </div>

          {/* Tagline */}
          <span className="font-satisfy text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 block mb-4 animate-slide-up">
            Our Photo Gallery
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-up animation-delay-100">
            <span className="text-slate-800">Happy </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-gradient">
              Memories
            </span>
            <span className="inline-block ml-3 animate-wiggle">📷</span>
          </h1>

          {/* Playful Underline */}
          <div className="flex justify-center mb-6 animate-slide-up animation-delay-200">
            <PlayfulUnderline color="#A855F7" />
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-300">
            Glimpses of <span className="text-pink-500 font-bold">joy</span>, 
            <span className="text-purple-500 font-bold"> growth</span>, and 
            <span className="text-orange-500 font-bold"> success</span> at Little Stars! ✨
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 animate-slide-up animation-delay-400">
            {[
              { icon: '📸', value: '500+', label: 'Photos' },
              { icon: '😊', value: '200+', label: 'Happy Faces' },
              { icon: '🎉', value: '50+', label: 'Events' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <div className="text-2xl font-extrabold text-purple-600">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-dots opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  group relative px-5 py-3 rounded-full font-semibold text-sm
                  transition-all duration-300 overflow-hidden
                  ${activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-purple-300 hover:shadow-md'
                  }
                `}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className={`text-lg ${activeCategory === category.id ? '' : 'group-hover:animate-bounce'}`}>
                    {category.emoji}
                  </span>
                  <span>{category.label}</span>
                  <span className={`
                    px-2 py-0.5 rounded-full text-xs font-bold
                    ${activeCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-slate-100 text-slate-500'
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
                className="group cursor-pointer animate-pop-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative rounded-3xl overflow-hidden bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Placeholder - Replace with actual images */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <span className="text-6xl group-hover:scale-125 transition-transform duration-500">
                        {item.emoji}
                      </span>
                    </div>
                    
                    {/* Actual Image (uncomment when you have images) */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white font-bold text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/80 text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                          <span>{item.emoji}</span>
                          <span className="capitalize">{item.category.replace('-', ' ')}</span>
                        </p>
                      </div>
                    </div>

                    {/* Top Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 shadow-lg">
                      <Heart className="w-5 h-5 text-pink-500 group-hover:fill-current" />
                    </div>

                    {/* Play Button for videos (optional) */}
                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                        <Play className="w-6 h-6 text-purple-600 ml-1" />
                      </div>
                    </div> */}
                  </div>

                  {/* Bottom Color Bar */}
                  <div className={`h-1 bg-gradient-to-r ${item.color}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button (optional) */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              <LayoutGrid className="w-5 h-5" />
              Load More Photos
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
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

          {/* Navigation - Previous */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br ${filteredItems[currentImageIndex]?.color} flex items-center justify-center`}>
              <span className="text-9xl">{filteredItems[currentImageIndex]?.emoji}</span>
              
              {/* Actual Image (uncomment when you have images) */}
              <Image
                src={filteredItems[currentImageIndex]?.image}
                alt={filteredItems[currentImageIndex]?.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl">
              <h3 className="text-white font-bold text-2xl mb-1">
                {filteredItems[currentImageIndex]?.title}
              </h3>
              <p className="text-white/70 flex items-center gap-2">
                <span>{filteredItems[currentImageIndex]?.emoji}</span>
                <span className="capitalize">
                  {filteredItems[currentImageIndex]?.category.replace('-', ' ')}
                </span>
              </p>
            </div>
          </div>

          {/* Navigation - Next */}
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${currentImageIndex === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                  }
                `}
              />
            ))}
          </div>
        </div>
      )}

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50/50 to-orange-50/30"></div>
        <div className="absolute inset-0 bg-confetti opacity-10"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 text-5xl opacity-20 animate-float">💬</div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounceSlow">⭐</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold mb-4 animate-pop-in">
              <Heart className="w-4 h-4 fill-current" />
              Parent Love
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="text-slate-800">What Parents </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Say
              </span>
              <span className="inline-block ml-2 animate-heartbeat">💛</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real stories from real families who've experienced the Little Stars magic!
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`
                  group relative p-6 rounded-3xl bg-white border-2 border-transparent
                  shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                  overflow-hidden animate-slide-up
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color}`}></div>
                
                {/* Quote Icon */}
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <Quote className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${testimonial.color}`} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-2xl`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <span>Parent of</span>
                      <span className="font-semibold text-purple-600">{testimonial.child}</span>
                    </p>
                  </div>
                </div>

                {/* Hover Decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Video Testimonial CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-3xl shadow-lg border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-slate-800 text-lg">Watch Video Testimonials</h3>
                <p className="text-slate-500 text-sm">Hear directly from our happy families!</p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:shadow-lg transition-all duration-300">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Spacer before Footer */}
      <div className="h-8 bg-gradient-to-b from-purple-50/30 to-transparent"></div>

      <Footer />
    </main>
  )
}