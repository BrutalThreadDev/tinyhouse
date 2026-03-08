import { motion } from 'framer-motion';
import { MapPin, Utensils, Waves, Mountain, Bird } from 'lucide-react';

const activities = [
  {
    title: "Tasmania Tasting Trail",
    desc: "Explore the finest local produce, from artisan cheeses to boutique wines, all within a short drive.",
    icon: <Utensils size={32} />,
    img: "https://picsum.photos/seed/tasmania-food-wine/600/400"
  },
  {
    title: "Turners Beach",
    desc: "A beautiful stretch of coastline perfect for morning walks, swimming, or simply watching the waves.",
    icon: <Waves size={32} />,
    img: "https://picsum.photos/seed/tasmania-beach-coast/600/400"
  },
  {
    title: "Cradle Mountain",
    desc: "Just an hour away, experience one of Tasmania's most iconic wilderness areas and its stunning hiking trails.",
    icon: <Mountain size={32} />,
    img: "https://picsum.photos/seed/cradle-mountain-lake/600/400"
  },
  {
    title: "Hiking & Wildlife",
    desc: "Discover local trails and encounter Tasmania's unique wildlife in their natural habitat.",
    icon: <Bird size={32} />,
    img: "https://picsum.photos/seed/tasmania-wildlife-nature/600/400"
  }
];

export default function Experience() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-barn-olive font-medium tracking-widest uppercase text-sm mb-4 block">The Surroundings</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-6">Nature Escape</h1>
          <p className="text-xl text-barn-ink/60 max-w-2xl mx-auto">
            Barnhaus is perfectly positioned to explore the best of Tasmania’s north-west coast while remaining a secluded sanctuary.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[60vh] rounded-[3rem] overflow-hidden mb-32 shadow-2xl"
        >
          <motion.img 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://picsum.photos/seed/tasmania-landscape/1600/900" 
            alt="Tasmania Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-12 left-12 text-white"
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={20} />
              <span className="font-medium">Forthside, Tasmania</span>
            </div>
            <h2 className="text-4xl font-serif">A gateway to the wilderness</h2>
          </motion.div>
        </motion.div>

        {/* Focus Areas */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32"
        >
          {[
            { title: "Wellness", desc: "A space designed for digital detox and mental clarity." },
            { title: "Relaxation", desc: "Slow down and enjoy the simple pleasures of country life." },
            { title: "Romantic Getaway", desc: "Create lasting memories in an intimate, private setting." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-center p-8 rounded-3xl bg-white border border-barn-ink/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-3xl font-serif mb-4">{item.title}</h3>
              <p className="text-barn-ink/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <div className="space-y-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-5xl font-serif mb-6">Nearby Activities</h2>
            <p className="text-lg text-barn-ink/60">
              From culinary adventures to wilderness hikes, there's something for everyone within reach of Barnhaus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {activities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm border border-barn-ink/5"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={activity.img} 
                    alt={activity.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10">
                  <div className="w-16 h-16 rounded-2xl bg-barn-olive/10 flex items-center justify-center text-barn-olive mb-6">
                    {activity.icon}
                  </div>
                  <h3 className="text-3xl font-serif mb-4">{activity.title}</h3>
                  <p className="text-barn-ink/60 leading-relaxed">{activity.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 p-12 md:p-20 bg-barn-olive rounded-[3rem] text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="text-5xl font-serif mb-8">Perfectly Located</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Devonport</h4>
                    <p className="text-white/70">Only 15 minutes away, perfect for supplies and dining.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Cradle Mountain</h4>
                    <p className="text-white/70">Approximately 1 hour drive to the heart of the wilderness.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/map-placeholder/800/600" 
                alt="Location Map" 
                className="w-full h-full object-cover grayscale brightness-75"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
