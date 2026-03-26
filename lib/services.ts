import { Music, Shield, Heart, Smile, Apple, Star, UserCheck, LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  title: string
  description: string
  fullDescription: string
  icon: LucideIcon
  benefits: string[]
  trainer: string
  color: string
  bgLight: string
  textHover: string
  iconColor: string
  borderColor: string
  shadowColor: string
  btnColor: string
}

export const services: Service[] = [
  {
    slug: 'dance-classes',
    icon: Music,
    title: 'Dance Classes',
    description: 'Energetic and fun dance sessions that help children express themselves, improve coordination, and build confidence.',
    fullDescription: 'Our dance classes are designed to be high-energy, inclusive, and incredibly fun. We believe that every child has a rhythm, and our goal is to help them find it while building physical coordination and self-confidence.',
    benefits: ['Physical fitness', 'Rhythm & Coordination', 'Social skills', 'Creative expression'],
    trainer: 'Mithali Bhadange',
    color: 'group-hover:bg-pink-500',
    bgLight: 'bg-pink-100',
    textHover: 'group-hover:text-pink-600',
    iconColor: 'text-pink-500',
    borderColor: 'hover:border-pink-400',
    shadowColor: 'hover:shadow-pink-200',
    btnColor: 'bg-pink-500 shadow-pink-200',
  },
  {
    slug: 'martial-arts-instructor',
    icon: UserCheck,
    title: 'Martial Arts Instructor',
    description: 'Professional guidance from expert instructors who specialize in teaching discipline and respect to young learners.',
    fullDescription: 'Our Martial Arts Instructors are dedicated to building character and discipline through focused mentorship. We provide a safe environment for kids to learn and grow.',
    benefits: ['Expert mentorship', 'Character building', 'Safety first approach', 'Goal setting'],
    trainer: 'Dr. Asmita Shirsat',
    color: 'group-hover:bg-blue-500',
    bgLight: 'bg-blue-100',
    textHover: 'group-hover:text-blue-600',
    iconColor: 'text-blue-500',
    borderColor: 'hover:border-blue-400',
    shadowColor: 'hover:shadow-blue-200',
    btnColor: 'bg-blue-500 shadow-blue-200',
  },
  {
    slug: 'music-therapy',
    icon: Star,
    title: 'Music Therapy',
    description: 'Using music and rhythm to support emotional well-being, cognitive development, and sensory integration.',
    fullDescription: 'Music therapy uses the power of sound and rhythm to support emotional well-being and sensory integration. Our sessions are interactive and tailored to each child\'s unique needs.',
    benefits: ['Emotional regulation', 'Cognitive development', 'Sensory integration', 'Stress relief'],
    trainer: 'Pratik Lohakare',
    color: 'group-hover:bg-purple-500',
    bgLight: 'bg-purple-100',
    textHover: 'group-hover:text-purple-600',
    iconColor: 'text-purple-500',
    borderColor: 'hover:border-purple-400',
    shadowColor: 'hover:shadow-purple-200',
    btnColor: 'bg-purple-500 shadow-purple-200',
  },
  {
    slug: 'kids-yoga',
    icon: Smile,
    title: 'Kids Yoga',
    description: 'Playful yoga sessions designed to help children develop flexibility, mindfulness, and body awareness.',
    fullDescription: 'Kids Yoga is all about exploration, mindfulness, and having fun with movement. We use storytelling and games to teach yoga poses and breathing techniques.',
    benefits: ['Flexibility & Balance', 'Mindfulness', 'Stress reduction', 'Body awareness'],
    trainer: 'Machendra',
    color: 'group-hover:bg-teal-500',
    bgLight: 'bg-teal-100',
    textHover: 'group-hover:text-teal-600',
    iconColor: 'text-teal-500',
    borderColor: 'hover:border-teal-400',
    shadowColor: 'hover:shadow-teal-200',
    btnColor: 'bg-teal-500 shadow-teal-200',
  },
  {
    slug: 'martial-arts',
    icon: Shield,
    title: 'Martial Arts',
    description: 'Discipline-focused training tailored for kids to build strength, focus, and self-defense skills in a safe environment.',
    fullDescription: 'Our Martial Arts program focuses on character development, respect, and physical fitness. We provide a safe environment for kids to learn self-defense and discipline.',
    benefits: ['Discipline & Focus', 'Self-defense', 'Physical strength', 'Confidence building'],
    trainer: 'Tushar Sawane',
    color: 'group-hover:bg-orange-500',
    bgLight: 'bg-orange-100',
    textHover: 'group-hover:text-orange-600',
    iconColor: 'text-orange-500',
    borderColor: 'hover:border-orange-400',
    shadowColor: 'hover:shadow-orange-200',
    btnColor: 'bg-orange-500 shadow-orange-200',
  },
  {
    slug: 'nutrition-dietician',
    icon: Apple,
    title: 'Child Nutritionist & Dietician',
    description: 'Expert nutritional guidance to support your child\'s physical growth, mental development, and healthy eating habits.',
    fullDescription: 'Good nutrition is the foundation of healthy development. Our dietician providing personalized plans to ensure your child gets the nutrients they need to thrive.',
    benefits: ['Healthy eating habits', 'Growth & development', 'Allergy management', 'Custom meal plans'],
    trainer: 'Vaishnavi Dahake',
    color: 'group-hover:bg-green-500',
    bgLight: 'bg-green-100',
    textHover: 'group-hover:text-green-600',
    iconColor: 'text-green-500',
    borderColor: 'hover:border-green-400',
    shadowColor: 'hover:shadow-green-200',
    btnColor: 'bg-green-500 shadow-green-200',
  },
]
