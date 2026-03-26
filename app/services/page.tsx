import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services } from '@/lib/services'
import { Star, Sparkles, Activity, Calendar, ArrowRight, Music,Heart } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  return (
    <main className="min-h-screen bg-[#F0F8FF] overflow-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#87CEEB] to-[#F0F8FF] overflow-hidden">
        {/* Playful background elements */}
        <div className="absolute top-20 left-10 animate-bounce opacity-60">
          <Star size={48} className="text-yellow-300 fill-yellow-300" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse opacity-60">
          <Sparkles size={56} className="text-pink-300" />
        </div>
        <div className="absolute bottom-10 left-1/4 animate-bounce opacity-60" style={{ animationDelay: '1s' }}>
          <Music size={40} className="text-purple-300" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
            Fun & Growing <br className="hidden md:block"/> Activities! 🚀
          </h1>
          <p className="text-xl md:text-2xl text-blue-900/80 font-medium max-w-2xl mx-auto bg-white/30 backdrop-blur-sm p-4 rounded-3xl border border-white/50 shadow-sm">
            Discover a world of exciting classes, therapy, and guidance designed specially for your little champions.
          </p>
        </div>
        
        {/* Clouds overlay */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[100px] md:h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.15,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-[#F0F8FF]"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-[#F0F8FF]"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-[#F0F8FF]"></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 border-4 border-transparent ${service.borderColor} shadow-xl ${service.shadowColor} hover:-translate-y-2 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col h-full`}
              >
                {/* Decorative blob in corner */}
                <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-150 ${service.bgLight}`}></div>
                
                <div className={`w-20 h-20 rounded-2xl ${service.bgLight} flex items-center justify-center mb-6 transition-all duration-300 rotate-3 group-hover:-rotate-6 shadow-sm ${service.color}`}>
                  <service.icon size={40} className={`${service.iconColor} group-hover:text-white transition-colors`} />
                </div>
                
                <h3 className={`text-2xl font-black text-gray-800 mb-4 tracking-tight ${service.textHover} transition-colors`}>{service.title}</h3>
                <p className="text-gray-600 mb-8 font-medium leading-relaxed">{service.description}</p>

                <div className="space-y-4 bg-gray-50 p-5 rounded-2xl relative z-10 mb-8 flex-grow">
                  <h4 className="font-bold text-sm text-gray-800 uppercase tracking-wider flex items-center gap-2">
                    <Activity size={16} className={service.iconColor} />
                    What Kids Gain:
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center ${service.bgLight} ${service.iconColor} font-bold text-xs`}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className={`relative z-10 w-full py-4 px-6 rounded-2xl font-black text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${service.btnColor} hover:scale-[1.03] active:scale-95`}
                  >
                    Learn More
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/contact"
                    className={`relative z-10 w-full py-3 px-6 rounded-2xl font-bold bg-white text-slate-700 border-2 border-slate-100 hover:border-slate-200 transition-all flex items-center justify-center gap-2 text-sm`}
                  >
                    <Calendar size={18} />
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Play Area Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-blue-50 relative overflow-hidden md:my-10 md:rounded-[3rem] mx-0 md:mx-10 border-y-4 md:border-4 border-blue-100 border-dashed">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-bold text-sm tracking-wider uppercase mb-4 shadow-sm border border-blue-200">Our Magical Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800">Ready, Set, Grow! 🌟</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Say Hello!',
                description: 'We meet your wonderful family to understand your child\'s unique superpowers.',
                color: 'bg-blue-400',
                shadow: 'shadow-blue-200'
              },
              {
                step: '2',
                title: 'Pick a Path',
                description: 'Together, we select the perfect mix of activities for fun and development.',
                color: 'bg-pink-400',
                shadow: 'shadow-pink-200'
              },
              {
                step: '3',
                title: 'Have Fun & Grow',
                description: 'Your child joins our expert-led sessions full of smiles, learning, and progress!',
                color: 'bg-yellow-400',
                shadow: 'shadow-yellow-200'
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-lg relative ml-0 hover:-translate-y-2 transition-transform duration-300">
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl ${item.color} ${item.shadow} shadow-lg text-white text-2xl font-black flex items-center justify-center rotate-12`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">{item.title}</h3>
                <p className="text-gray-600 font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative md:mb-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 md:rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-4 left-4 text-white/20 scale-150 rotate-45 transform">
            <Sparkles size={100} />
          </div>
          <div className="absolute bottom-4 right-4 text-white/20 scale-150 -rotate-12 transform">
            <Heart size={100} />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
              Let's Start the Adventure! 🎉
            </h2>
            <p className="text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto">
              Join our community and give your child the tools they need to shine bright. We can't wait to meet you!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-full font-black text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all outline-none focus:ring-4 focus:ring-white/50"
            >
              <Heart size={24} className="text-pink-500 fill-pink-500" />
              Book a Free Tour
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
