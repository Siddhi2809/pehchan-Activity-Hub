import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Award, Users, Heart, Target, Star, Smile, Sparkles, Quote, Calendar ,MoveRight } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const team = [
    {
      name: 'Mithali Bhadange',
      role: 'Dance Class Trainer',
      description: 'Expert in rhythmic movement and creative expression for young children.',
      color: 'bg-pink-500',
      borderColor: 'border-pink-200',
      iconColor: 'text-pink-500',
      bgLight: 'bg-pink-50',
    },
    {
      name: 'Tushar Sawane',
      role: 'Martial Arts Instructor',
      description: 'Specializes in teaching discipline, focus, and strength through martial arts.',
      color: 'bg-orange-500',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-500',
      bgLight: 'bg-orange-50',
    },
    {
      name: 'Pratik Lohakare',
      role: 'Music Therapy Instructor',
      description: 'Uses music and melody to support emotional and cognitive child development.',
      color: 'bg-purple-500',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-500',
      bgLight: 'bg-purple-50',
    },
    {
       name: 'Machendra',
       role: 'Kids Yoga Trainer',
       description: 'Focuses on mindfulness, flexibility, and peaceful body awareness for children.',
       color: 'bg-teal-500',
       borderColor: 'border-teal-200',
       iconColor: 'text-teal-500',
       bgLight: 'bg-teal-50',
    },
    {
      name: 'Vaishnavi Dahake',
      role: 'Child Nutritionist & Dietician',
      description: 'Expert nutritional guidance for healthy growth and balanced eating habits.',
      color: 'bg-green-500',
      borderColor: 'border-green-200',
      iconColor: 'text-green-500',
      bgLight: 'bg-green-50',
    },
  ]

  return (
    <main className="min-h-screen bg-[#FDFCFB] overflow-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5F0] to-[#FDFCFB]">
        {/* Floating background elements */}
        <div className="absolute top-20 right-10 animate-bounce opacity-40">
           <Star size={48} className="text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute bottom-10 left-10 animate-pulse opacity-40">
           <Heart size={40} className="text-pink-300 fill-pink-300" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-satisfy text-4xl text-[#79B433] block mb-4">Our Heart & Mission</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 mb-6 uppercase tracking-tighter">
            About Kidz Therapy
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Discover the passionate experts behind our magical therapy center, dedicated to helping your child shine.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border-2 border-slate-50 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            
            {/* Background Blob */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            
            {/* Image Box */}
            <div className="relative z-10 w-full lg:w-[45%]">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                   <Users size={120} className="text-white/50" />
                   {/* This would be Dr. Asmita's Image */}
                </div>
                {/* Decorative Badge */}
                <div className="absolute bottom-6 right-6 bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg -rotate-12">
                   Founder & Director
                </div>
              </div>
            </div>

            {/* Content Box */}
            <div className="relative z-10 flex-1">
               <Quote size={60} className="text-blue-100 mb-6" />
               <span className="font-satisfy text-4xl text-[#3B96E1] mb-2 block">The Visionary</span>
               <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-8 tracking-tight">
                 Dr. Asmita Shirsat
               </h2>
               <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium italic">
                 "Our mission is to create a nurturing environment where every child feels seen, heard, and empowered to grow at their own unique pace. At Kidz Therapy, we don't just provide services; we build paths to a brighter future."
               </p>

               <div className="space-y-6">
                 {[
                   { icon: Heart, label: 'Experienced child development specialist' },
                   { icon: Sparkles, label: 'Dedicated to holistic and creative therapy' },
                   { icon: Award, label: 'Leading a team of certified experts' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                        <item.icon size={20} />
                     </div>
                     <span className="font-bold text-slate-700">{item.label}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="font-satisfy text-4xl text-[#79B433] block mb-4">The Expert Squad</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 uppercase tracking-tighter">
              Meet Our Heroes 🌟
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-transparent hover:border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
              >
                {/* Visual Indicator */}
                <div className={`absolute top-0 left-0 w-2 h-full ${member.color}`}></div>
                
                <div className={`w-28 h-28 rounded-3xl ${member.bgLight} flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-sm`}>
                   <Users size={48} className={member.iconColor} />
                </div>

                <h3 className="text-2xl font-black text-slate-800 mb-1">{member.name}</h3>
                <span className={`text-sm font-black uppercase tracking-widest ${member.iconColor} mb-6 block`}>
                   {member.role}
                </span>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                   {member.description}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex gap-1 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                   </div>
                   <button className={`text-xs font-black uppercase tracking-[0.1em] ${member.iconColor} hover:underline underline-offset-4 flex items-center gap-1`}>
                      Contact Expert <MoveRight size={14} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-[#3B96E1] rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden">
           {/* Pattern Background Overlay */}
           <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
           
           <div className="relative z-10">
             <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
               Want to Join Our Team?
             </h2>
             <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
               We're always looking for passionate professionals to join our mission in helping children grow.
             </p>
             <Link
               href="/contact"
               className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#3B96E1] rounded-full font-black text-lg hover:scale-105 transition-transform shadow-lg"
             >
               <Calendar size={20} />
               Schedule a Consultation
             </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
