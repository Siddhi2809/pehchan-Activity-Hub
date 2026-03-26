import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services } from '@/lib/services'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, User, CheckCircle2, Star, Sparkles, Calendar, Activity } from 'lucide-react'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white overflow-hidden border-b border-slate-100`}>
        {/* Animated Background Icons */}
        <div className="absolute top-20 right-10 animate-pulse opacity-20">
           <service.icon size={120} className={service.iconColor} />
        </div>
        <div className="absolute bottom-10 left-10 animate-bounce opacity-10">
           <Sparkles size={60} className={service.iconColor} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-left">
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${service.bgLight} ${service.iconColor} mb-6 shadow-sm border ${service.borderColor}`}>
                 {service.title} Specialist
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-8 uppercase tracking-tighter leading-tight">
                {service.title} <br className="hidden md:block" /> Experience
              </h1>
              <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
                {service.fullDescription}
              </p>
            </div>

            {/* Service Image / Placeholder */}
            <div className="w-full lg:w-[45%]">
               <div className={`relative aspect-square rounded-[3rem] ${service.bgLight} border-8 border-white overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500`}>
                 <div className="absolute inset-0 flex items-center justify-center opacity-40">
                    <service.icon size={200} className={service.iconColor} />
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Detail Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Sub-categories */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-slate-800 mb-8 uppercase flex items-center gap-3 tracking-tight">
                  <Star className="text-yellow-400 fill-yellow-400" size={28} />
                  What Your Child Will Gain
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className={`p-6 rounded-3xl ${service.bgLight} border-2 ${service.borderColor} flex items-center gap-4 group hover:bg-white hover:shadow-lg transition-all`}>
                       <div className={`w-12 h-12 rounded-2xl ${service.color} text-white flex items-center justify-center shadow-md`}>
                          <CheckCircle2 size={24} />
                       </div>
                       <span className="text-lg font-black text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                 <h3 className="text-2xl font-black text-slate-800 mb-6 uppercase flex items-center gap-2">
                    <Activity className="text-blue-500" size={24} />
                    The Magic Process
                 </h3>
                 <p className="text-slate-600 mb-6 font-medium">Our sessions are designed to be engaging, safe, and tailored to every child's unique journey.</p>
                 <ul className="space-y-4">
                    {['Expert Guidance', 'Playful Learning', 'Safety First', 'Progress Tracking'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 font-bold">
                         <div className={`w-3 h-3 rounded-full ${service.color} opacity-40`}></div>
                         {item}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>

            {/* Trainer Spotlight */}
            <div className="lg:sticky lg:top-32 h-fit">
               <div className="bg-white rounded-[3rem] p-10 shadow-2xl border-2 border-slate-100 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-10 rounded-bl-full`}></div>
                  
                  <h3 className={`text-sm font-black uppercase tracking-[0.2em] ${service.iconColor} mb-8`}>
                     Meet Your Specialist
                  </h3>

                  <div className="flex items-center gap-8 mb-10">
                     <div className={`w-24 h-24 rounded-[2rem] ${service.bgLight} flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
                        <User size={48} className={service.iconColor} />
                     </div>
                     <div>
                        <h4 className="text-3xl font-black text-slate-800 mb-1">{service.trainer}</h4>
                        <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">{service.title} Expert</p>
                     </div>
                  </div>

                  <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10 italic">
                     "Every child has a superpower. My goal is to help them find it through {service.title.toLowerCase()} and guided learning."
                  </p>

                  <Link
                    href="/contact"
                    className={`w-full py-5 px-6 rounded-2xl font-black text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${service.btnColor} hover:shadow-xl hover:-translate-y-1`}
                  >
                    <Calendar size={20} />
                    Book with {service.trainer.split(' ')[0]}
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
         <div className="max-w-4xl mx-auto rounded-[3rem] bg-slate-900 border-4 border-slate-800 p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Ready to Start the Adventure? 🎉</h2>
            <p className="text-xl text-slate-400 mb-10 font-medium">Join our community and let's help your child shine bright!</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-slate-900 rounded-full font-black text-xl hover:scale-105 transition-transform"
            >
              Contact Us Now
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  )
}
