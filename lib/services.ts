import { Music, Shield, Heart, Smile, Apple, Star, UserCheck, LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  title: string
  description: string
  fullDescription: string
  icon: LucideIcon
  benefits: string[]
  trainer: string
  information?: string
  experience: string
  color: string
  bgLight: string
  textHover: string
  iconColor: string
  borderColor: string
  shadowColor: string
  btnColor: string  
  image?: string 
  seviceimage?: string
}

export const services: Service[] = [
  {
    slug: 'dance-classes',
    icon: Music,
    title: 'Dance Classes',
    description: 'Energetic and fun dance sessions that help children express themselves, improve coordination, and build confidence.',
    fullDescription: ' Dance classes are designed to promote physical fitness, coordination, and emotional expression in children. Through engaging styles such as Bollywood, Zumba, and Indian classical dance, children develop rhythm, balance, and flexibility. These sessions also help improve confidence, social interaction, and creativity while providing a fun and energetic environment. Dance is especially beneficial for enhancing motor skills and reducing stress in children.',
    benefits: ['Bollywood', 'Zumba', 'Indian classical dance',],
    trainer: 'Mithali Bhadange',
    information: 'Hello, I am Mitali Bhadange, a professional Odissi dancer with ten years of experience, a graduate in Odissi Dance, a Gold Medalist, and a Guinness World Record holder. I have performed on national and international stages, and I am now starting Dance Classes for children in Pune at Kidz Explore Therapy Center, Solitaire Business Hub, Wakad.',
    color: 'group-hover:bg-pink-500',
    bgLight: 'bg-pink-100',
    textHover: 'group-hover:text-pink-600',
    iconColor: 'text-pink-500',
    borderColor: 'hover:border-pink-400',
    shadowColor: 'hover:shadow-pink-200',
    btnColor: 'bg-pink-500 shadow-pink-200',
    experience: '10',
    image: '/mitali.jpg',
    seviceimage: '/dance.jpg'
  },
  {
    slug: 'martial-arts-instructor',
    icon: UserCheck,
    title: 'Martial Arts Instructor',
    description: 'Professional guidance from expert instructors who specialize in teaching discipline and respect to young learners.',
    fullDescription: 'Martial arts training focuses on building discipline, strength, and self-confidence in children. With techniques from Karate and Taekwondo, students learn self-defense skills along with improving focus, coordination, and physical endurance. This training also encourages respect, patience, and mental resilience, helping children develop a strong mind-body connection.',
    benefits: ['Karate', 'Taekwondo'],
    trainer: 'Tushar Sawane',
    information:'Hello, I am Tushar sawane, Certified fitness trainer And sport nutritionist.Black belt in karate and taekwondo Former Head of sports in reputed international school .18 yrs of teaching experience in martial arts and sports.International gold medalist in karate..',
    color: 'group-hover:bg-blue-500',
    bgLight: 'bg-blue-100',
    textHover: 'group-hover:text-blue-600',
    iconColor: 'text-blue-500',
    borderColor: 'hover:border-blue-400',
    shadowColor: 'hover:shadow-blue-200',
    btnColor: 'bg-blue-500 shadow-blue-200',
    experience:'18',
    image: '/tushar.jpg',
    seviceimage: '/martial-arts.jpg'
  },
  {
    slug: 'music-therapy',
    icon: Star,
    title: 'Music Therapy',
    description: 'Using music and rhythm to support emotional well-being, cognitive development, and sensory integration.',
    fullDescription: 'Music therapy uses the power of sound and rhythm to support emotional, cognitive, and sensory development in children. By engaging with instruments such as Djembe, Piano, and Tabla, children can express themselves creatively while improving attention, communication, and coordination skills. It is especially helpful for children with developmental challenges, as it creates a calming and therapeutic environment.',
    benefits: ['Emotional regulation', 'Cognitive development', 'Sensory integration', 'Stress relief'],
    trainer: 'Pratik Lohakare',
    information:'Hello, I am Pratik Lohakare,  qualified music professional with a B.A. in Music and a Tabla Visharad certification. With over 10 years of experience working with children with special needs, he uses music as a powerful tool for healing, emotional expression, and joyful development.',
    color: 'group-hover:bg-purple-500',
    bgLight: 'bg-purple-100',
    textHover: 'group-hover:text-purple-600',
    iconColor: 'text-purple-500',
    borderColor: 'hover:border-purple-400',
    shadowColor: 'hover:shadow-purple-200',
    btnColor: 'bg-purple-500 shadow-purple-200',
    experience:'10',
    image: '/pratik.jpg',
    seviceimage: '/music1.jpg'
  },
  {
    slug: 'kids-yoga',
    icon: Smile,
    title: 'Kids Yoga',
    description: 'Playful yoga sessions designed to help children develop flexibility, mindfulness, and body awareness.',
    fullDescription: 'Kids yoga is a holistic activity that enhances both physical and mental well-being. Through simple yoga poses, breathing exercises, and relaxation techniques, children improve flexibility, posture, and concentration. Yoga also helps in reducing anxiety, increasing mindfulness, and promoting emotional balance, making it highly beneficial for overall development.',
    benefits: ['Flexibility & Balance', 'Mindfulness', 'Stress reduction', 'Body awareness'],
    trainer: 'Machendra',
    information: 'Machhindra Changdev Rode, based in Sangamner, is a qualified yoga professional with an M.Com (SET) and experience as an Assistant Professor at a senior college for 5 years. He holds a Diploma in Yoga and Naturopathy from Tilak Maharashtra University, Pune, and has completed a 200-hour Teacher Training Course in Bangalore, where he also gained 2 years of teaching experience. Currently in Pune, he is pursuing an MA in Yogashastra from Kavikulaguru Sanskrit University, Nagpur, further strengthening his expertise in yoga and holistic wellness.',
    color: 'group-hover:bg-teal-500',
    bgLight: 'bg-teal-100',
    textHover: 'group-hover:text-teal-600',
    iconColor: 'text-teal-500',
    borderColor: 'hover:border-teal-400',
    shadowColor: 'hover:shadow-teal-200',
    btnColor: 'bg-teal-500 shadow-teal-200',
    experience:'5',
    image: '/machendra.jpg',
    seviceimage: '/yoga2.jpg'
  },
  {
    slug: 'martial-arts',
    icon: Shield,
    title: 'Martial Arts',
    description: 'Discipline-focused training tailored for kids to build strength, focus, and self-defense skills in a safe environment.',
    fullDescription: 'Our Martial Arts program focuses on character development, respect, and physical fitness. We provide a safe environment for kids to learn self-defense and discipline.',
    benefits: ['Discipline & Focus', 'Self-defense', 'Physical strength', 'Confidence building'],
    trainer: 'Tushar Sawane',
    information: 'Hello, I am Tushar sawane, Certified fitness trainer And sport nutritionist.Black belt in karate and taekwondo Former Head of sports in reputed international school .18 yrs of teaching experience in martial arts and sports.International gold medalist in karate..',
    color: 'group-hover:bg-orange-500',
    bgLight: 'bg-orange-100',
    textHover: 'group-hover:text-orange-600',
    iconColor: 'text-orange-500',
    borderColor: 'hover:border-orange-400',
    shadowColor: 'hover:shadow-orange-200',
    btnColor: 'bg-orange-500 shadow-orange-200',
    experience:'18',
    image: '/tushar.jpg',
    seviceimage: '/martial-arts.jpg'
  },
  {
    slug: 'nutrition-dietician',
    icon: Apple,
    title: 'Child Nutritionist & Dietician',
    description: 'Expert nutritional guidance to support your child\'s physical growth, mental development, and healthy eating habits.',
    fullDescription: 'This service focuses on ensuring proper nutrition and healthy eating habits for children. Personalized diet plans are created based on the child’s age, health condition, and developmental needs. Guidance is provided to parents on balanced nutrition, improving immunity, and managing specific dietary concerns. Proper nutrition plays a vital role in a child’s physical growth, brain development, and overall well-being.',
    benefits: ['Healthy eating habits', 'Growth & development', 'Allergy management', 'Custom meal plans'],
    trainer: 'Vaishnavi Dahake',
    information: 'Dt. Vaishnavi Dahake is a certified Clinical Dietitian with an M.Sc. in Clinical Nutrition and Dietetics from SNDT College, Pune, and hands-on experience at Sancheti Rehabilitation Hospital and KEM Hospital, Pune. She specializes in children’s gut health, immunity, and holistic nutrition, offering personalized diet plans, consultation, and family nutrition guidance. Her work also includes a published e-book on PCOS, reflecting her expertise in sustainable and health-focused nutrition.',
    color: 'group-hover:bg-green-500',
    bgLight: 'bg-green-100',
    textHover: 'group-hover:text-green-600',
    iconColor: 'text-green-500',
    borderColor: 'hover:border-green-400',
    shadowColor: 'hover:shadow-green-200',
    btnColor: 'bg-green-500 shadow-green-200',
    experience:'5',
    image: '/vaishnavi.jpg',
    seviceimage: '/nutrition.jpg'
  },
]
