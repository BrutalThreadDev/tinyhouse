import { motion } from 'framer-motion';
import { Check, Wifi, Coffee, ShowerHead, Bed, Trees, BookOpen, Tablet } from 'lucide-react';

const amenities = [
  { icon: <Bed size={24} />, name: "Luxury double bed" },
  { icon: <ShowerHead size={24} />, name: "Rain shower" },
  { icon: <Trees size={24} />, name: "Private garden" },
  { icon: <Coffee size={24} />, name: "Country-style kitchenette" },
  { icon: <Wifi size={24} />, name: "Free Wi-Fi" },
  { icon: <Tablet size={24} />, name: "Tablet travel guide" },
  { icon: <BookOpen size={24} />, name: "Books & board games" },
  { icon: <Check size={24} />, name: "Self check-in" },
];

export default function TinyHouse() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-barn-olive font-medium tracking-widest uppercase text-sm mb-4 block">The Accommodation</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-6">Barnhaus Stay</h1>
          <p className="text-xl text-barn-ink/60 max-w-2xl mx-auto">
            A Scandinavian-style eco tiny house retreat designed for couples wanting a quiet nature getaway.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <div className="space-y-12">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://picsum.photos/seed/barnhaus-scandi-exterior-2/1200/800" 
                alt="Barnhaus Exterior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="https://picsum.photos/seed/barnhaus-scandi-interior-3/600/600" 
                  alt="Barnhaus Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="https://picsum.photos/seed/barnhaus-scandi-interior-4/600/600" 
                  alt="Barnhaus Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-barn-ink/5">
              <h2 className="text-4xl font-serif mb-8">Your Private Retreat</h2>
              <div className="space-y-6 mb-10">
                <p className="text-lg text-barn-ink/70 leading-relaxed">
                  The Barnhaus is a masterclass in small-space living. Every inch has been thoughtfully 
                  designed to provide maximum comfort while maintaining a minimal footprint.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-barn-olive/10 text-barn-olive px-4 py-2 rounded-full text-sm font-medium">Sleeps: 2 guests</span>
                  <span className="bg-barn-olive/10 text-barn-olive px-4 py-2 rounded-full text-sm font-medium">1 Bedroom</span>
                  <span className="bg-barn-olive/10 text-barn-olive px-4 py-2 rounded-full text-sm font-medium">1 Bathroom</span>
                  <span className="bg-barn-olive/10 text-barn-olive px-4 py-2 rounded-full text-sm font-medium">Private Garden</span>
                </div>
              </div>

              <h3 className="text-2xl font-serif mb-6">Amenities</h3>
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {amenities.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-4 text-barn-ink/80"
                  >
                    <div className="w-10 h-10 rounded-xl bg-warm-white flex items-center justify-center text-barn-olive shadow-sm">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-12 pt-10 border-t border-barn-ink/5 flex items-center justify-between">
                <div>
                  <span className="text-sm text-barn-ink/40 block">Starting from</span>
                  <span className="text-3xl font-serif text-barn-ink">AU$190 <span className="text-lg font-sans text-barn-ink/50">/ night</span></span>
                </div>
                <button className="bg-barn-olive text-white px-8 py-4 rounded-full font-semibold hover:bg-barn-olive/90 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif mb-8">The Kitchenette</h2>
              <p className="text-lg text-barn-ink/70 leading-relaxed mb-6">
                Our country-style kitchenette is fully equipped for your stay. Enjoy locally sourced 
                Tasmanian produce or prepare a simple meal to enjoy in your private garden.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Check size={18} className="text-barn-olive" /> Induction cooktop</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-barn-olive" /> Small fridge</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-barn-olive" /> Coffee plunger & local tea</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-barn-olive" /> Essential cooking supplies</li>
              </ul>
            </motion.div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/kitchenette/800/600" 
                alt="Kitchenette" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/bathroom/800/600" 
                alt="Bathroom" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-5xl font-serif mb-8">The Ensuite</h2>
              <p className="text-lg text-barn-ink/70 leading-relaxed mb-6">
                Experience luxury in a compact space. Our ensuite bathroom features a rain shower 
                and premium eco-friendly toiletries for a spa-like experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Check size={18} className="text-barn-olive" /> Rain shower head</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-barn-olive" /> Eco-friendly toiletries</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-barn-olive" /> Plush cotton towels</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-barn-olive" /> Hair dryer</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
