import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Therapy Session', image: '/therapy-center.jpg', category: 'Sessions' },
    { id: 2, title: 'Happy Child', image: '/child-1.jpg', category: 'Success Stories' },
    { id: 3, title: 'Creative Play', image: '/child-2.jpg', category: 'Activities' },
    { id: 4, title: 'Learning Together', image: '/therapy-center.jpg', category: 'Programs' },
    { id: 5, title: 'Art Therapy', image: '/child-1.jpg', category: 'Therapy' },
    { id: 6, title: 'Group Activity', image: '/child-2.jpg', category: 'Activities' },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Gallery
          </h1>
          <p className="text-lg text-foreground/70">
            Glimpses of happy moments, growth, and success at Kids Therapy Center.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-muted"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What Parents Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah & Tom',
                child: 'Emma, 7',
                text: 'The therapists at Kids Therapy Center have been incredible with Emma. We\'ve seen such positive changes in her confidence and social skills!',
              },
              {
                name: 'Michael',
                child: 'Liam, 9',
                text: 'Liam was struggling with anxiety, but the personalized approach here has made all the difference. Highly recommend!',
              },
              {
                name: 'Jennifer',
                child: 'Sophie, 5',
                text: 'The warm environment and caring therapists make Sophie actually look forward to her sessions. That\'s when you know it\'s the right place.',
              },
              {
                name: 'David & Lisa',
                child: 'Noah, 8',
                text: 'We\'ve tried other centers, but the expertise and compassion here is unmatched. Noah has improved tremendously.',
              },
              {
                name: 'Amanda',
                child: 'Olivia, 6',
                text: 'Our daughter was shy and withdrawn, but now she\'s blooming! The therapists truly care about each child.',
              },
              {
                name: 'Robert',
                child: 'Lucas, 10',
                text: 'Excellent communication from the team. They keep us updated and involve us every step of the way.',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
