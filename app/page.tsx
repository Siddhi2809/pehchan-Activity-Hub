import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Users, Pill, Lightbulb, Puzzle, Heart, MoveRight } from 'lucide-react'

export default function Home() {
  const services = [
    {
      title: 'COUNSELING & PLAY THERAPY',
      icon: Users,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'bg-blue-500',
    },
    {
      title: 'PSYCHIATRY & MEDICATIONS MANAGEMENT',
      icon: Pill,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'bg-purple-500',
    },
    {
      title: 'TRAINING INSTITUTE',
      icon: Lightbulb,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'bg-green-500',
      highlight: true,
    },
    {
      title: 'TARGETED CASE MANAGEMENT',
      icon: Puzzle,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'bg-blue-400',
    },
    {
      title: 'EMPOWER PLAY',
      icon: Heart,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      color: 'bg-purple-400',
    },
  ]

  return (
    <main className="bg-white">
      <Navbar />
{/* ================= HERO (RESPONSIVE FIXED) ================= */}
<section className="relative h-[520px] md:h-[600px] flex items-center md:items-center items-start overflow-hidden bg-white mt-15">

  {/* IMAGE */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 lg:left-[28%]">
      <Image
        src="/hero_therapy.png"
        alt="Therapy"
        fill
        priority
        className="object-cover object-center"
      />
    </div>

    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full px-6 md:px-12 pt-20 md:pt-0">
    <div className="w-full max-w-none relative">

      <span className="font-satisfy text-4xl text-[#79B433] block mb-2">
        Learn Heal Thrive
      </span>

      {/* ✅ FIXED HEADING */}
      <h1 className="w-full text-[30px] sm:text-[38px] md:text-[48px] lg:text-[60px] font-extrabold text-slate-800 leading-tight uppercase mb-3 max-w-md md:max-w-none">
        OFFERING COUNSELING FOR <br className="hidden md:block" />
        ALL AGES & PSYCHIATRY
      </h1>

      <div className="w-16 h-1 bg-[#79B433] mb-4 rounded-full"></div>

      <p className="text-slate-600 text-sm mb-5 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="px-7 py-3 bg-[#3B96E1] text-white rounded-lg font-semibold shadow-sm hover:shadow-md transition transform hover:-translate-y-1 hover:scale-105"
        >
          MAKE AN APPOINTMENT
        </Link>

        <span className="text-purple-500 text-xl animate-pulse">➝</span>
      </div>

      {/* FLOATING ANIMATION */}
      <div className="absolute left-0 bottom-10 w-6 h-6 bg-yellow-300 rounded-full animate-bounceSlow"></div>
      <div className="absolute left-32 -bottom-6 w-5 h-5 bg-blue-400 rotate-12 animate-float"></div>
      <div className="absolute left-64 bottom-6 w-4 h-4 bg-pink-400 rounded-full animate-float delay-200"></div>
      <div className="absolute left-96 -bottom-2 w-6 h-6 bg-green-400 rounded-full animate-bounceSlow delay-300"></div>

    </div>
  </div>

  {/* WAVE */}
  <div className="absolute bottom-0 left-0 w-full leading-none">
    <svg viewBox="0 0 1440 120" className="w-full h-[100px]" preserveAspectRatio="none">
      <path
        d="M0,80 C240,120 480,20 720,50 C960,80 1200,30 1440,60 L1440,120 L0,120 Z"
        fill="#79B433"
      />
    </svg>
  </div>
</section>
      {/* ================= SERVICES ================= */}
      <section className="py-20 text-center">
        <span className="font-satisfy text-4xl text-green-500">
          Our Services
        </span>
        <h2 className="text-4xl font-bold mt-2 mb-12">
          WHAT CAN WE HELP YOU WITH?
        </h2>

        <div className="grid lg:grid-cols-5 gap-6 max-w-7xl mx-auto px-6">
          {services.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl shadow-md bg-white ${
                item.highlight ? 'scale-105 border-2 border-green-500' : ''
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white ${item.color}`}
              >
                <item.icon />
              </div>

              <h3 className="font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>

              {item.highlight && (
                <Link
                  href="/services"
                  className="text-blue-500 text-sm mt-3 inline-flex items-center gap-1"
                >
                  READ MORE <MoveRight size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 px-6 items-center">
          
          {/* Image */}
          <div className="relative">
            <Image
              src="/about.jpg"
              alt=""
              width={500}
              height={400}
              className="rounded-2xl"
            />

            {/* Circle overlay */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              +
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-satisfy text-3xl text-green-500">
              About Us
            </span>

            <h2 className="text-4xl font-bold mt-2">
              WHY CHOOSE PARSONS COUNSELING
            </h2>

            <p className="mt-4 text-gray-600">
              Offering Counseling for all ages and Targeted Case Management.
              We also accept Private Insurance and Medicaid.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg"
            >
              MAKE AN APPOINTMENT
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-20 text-center">
        <span className="font-satisfy text-3xl text-blue-500">Team</span>
        <h2 className="text-4xl font-bold mb-12">MEET THE TEAM</h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-6">
          {[1,2,3,4,5,6,7,8,9].map((i) => (
            <Image
              key={i}
              src={`/team${i}.jpg`}
              alt=""
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
          ))}
        </div>

        <Link
          href="/team"
          className="inline-block mt-10 px-6 py-3 bg-purple-500 text-white rounded-full"
        >
          MEET OUR FULL TEAM
        </Link>
      </section>

      <Footer />
    </main>
  )
}