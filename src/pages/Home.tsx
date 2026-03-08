import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Leaf, Wind, Map } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="https://picsum.photos/seed/barnhaus-scandi-exterior/1920/1080" 
            alt="Barnhaus Exterior" 
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-barn-ink/40" />
        </div>

        <div className="relative z-10 max-w-4xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1 }}
              className="uppercase text-sm font-medium mb-6 block text-warm-white/80"
            >
              Welcome to Barnhaus
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif mb-8 leading-tight"
            >
              100% Eco Tiny House <br /> <span className="italic">Accommodation</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto text-warm-white/90"
            >
              “Disconnect from the busy world and reconnect with nature in a private off-grid tiny house in Tasmania.”
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link 
                to="/contact" 
                className="bg-barn-olive text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-barn-olive/90 transition-all hover:scale-105 shadow-lg"
              >
                Book Your Stay
              </Link>
              <Link 
                to="/tiny-house" 
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all"
              >
                Explore the Tiny House
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* About Summary */}
      <section className="py-24 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/barnhaus-scandi-interior/800/1000" 
                alt="Barnhaus Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-barn-olive rounded-3xl p-8 text-white hidden md:flex flex-col justify-center">
              <Leaf className="mb-4" size={32} />
              <h3 className="text-2xl font-serif mb-2">Eco-Friendly</h3>
              <p className="text-sm text-white/80">Fully off-grid living with Scandinavian design principles.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-barn-olive font-medium tracking-widest uppercase text-sm mb-4 block">The Story</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Boutique Eco-Accommodation in Tasmania</h2>
            <p className="text-lg text-barn-ink/70 mb-8 leading-relaxed">
              Barnhaus is part of a boutique eco-accommodation experience on Tasmania’s north-west coast. 
              Designed by the Bell sisters, the tiny house combines Scandinavian architecture with a cozy 
              French-inspired interior while running fully off-grid.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Scandinavian architecture meets French interior",
                "100% off-grid and sustainable",
                "Private garden and nature immersion",
                "Located on Tasmania's Tasting Trail"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-barn-ink/80">
                  <div className="w-5 h-5 rounded-full bg-barn-olive/10 flex items-center justify-center text-barn-olive">
                    <ArrowRight size={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-barn-olive font-semibold hover:gap-4 transition-all">
              Learn more about our story <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="py-24 px-6 bg-barn-ink text-warm-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-barn-earth font-medium tracking-widest uppercase text-sm mb-4 block">Guest Experience</span>
          <h2 className="text-5xl md:text-6xl font-serif">A Sanctuary for the Soul</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Wellness & Relaxation",
              desc: "Rejuvenate your spirit in a space designed for peace and quiet contemplation.",
              icon: <Wind className="text-barn-earth" size={32} />,
              img: "https://picsum.photos/seed/wellness/600/400"
            },
            {
              title: "Nature Immersion",
              desc: "Wake up to bird songs and garden views, surrounded by the beauty of Tasmania.",
              icon: <Leaf className="text-barn-earth" size={32} />,
              img: "https://picsum.photos/seed/nature/600/400"
            },
            {
              title: "Romantic Getaway",
              desc: "The perfect intimate escape for couples looking to reconnect away from the world.",
              icon: <Star className="text-barn-earth" size={32} />,
              img: "https://picsum.photos/seed/romantic/600/400"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-md group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                className="mb-4"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-warm-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-warm-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-barn-olive font-medium tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
              <h2 className="text-5xl font-serif">What our guests say</h2>
            </div>
            <div className="flex gap-2">
              <div className="flex text-barn-olive">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "An absolutely magical stay. The attention to detail in the Barnhaus is incredible. We loved the off-grid experience without sacrificing any luxury.",
                author: "Sarah & James",
                location: "Melbourne"
              },
              {
                text: "The perfect base for exploring Cradle Mountain and the Tasting Trail. Coming back to the cozy interior and garden views was the highlight of our trip.",
                author: "Michael T.",
                location: "Sydney"
              },
              {
                text: "A truly sustainable and beautiful space. The Scandinavian design is so calming. We'll definitely be back for another digital detox.",
                author: "Emma L.",
                location: "Hobart"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[2rem] bg-white border border-barn-ink/5 shadow-sm"
              >
                <p className="text-lg italic text-barn-ink/80 mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-barn-ink">{t.author}</h4>
                  <p className="text-sm text-barn-ink/50">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-barn-olive text-white p-12 md:p-24 text-center">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://picsum.photos/seed/cta-bg/1200/800" 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif mb-8">Ready to disconnect?</h2>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto text-white/90">
              Book your stay at Barnhaus and experience the magic of Tasmania's north-west coast.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-barn-olive px-12 py-5 rounded-full text-xl font-semibold hover:bg-warm-white transition-all hover:scale-105 inline-block"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
