import { motion } from 'framer-motion';
import { Leaf, Sun, Wind, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-barn-olive font-medium tracking-widest uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-6">About Barnhaus</h1>
          <p className="text-xl text-barn-ink/60 max-w-2xl mx-auto">
            A labor of love designed to bring people closer to the raw beauty of the Tasmanian landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src="https://picsum.photos/seed/bell-sisters/800/1000" 
                alt="The Founders" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-barn-ink/5"
            >
              <Heart className="text-barn-olive mb-4" />
              <p className="text-sm italic text-barn-ink/70">
                "We wanted to create a space that feels like a warm embrace from nature itself."
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <h2 className="text-5xl font-serif leading-tight">Designed by the Bell Sisters</h2>
            <p className="text-lg text-barn-ink/70 leading-relaxed">
              Barnhaus is part of a boutique eco-accommodation experience on Tasmania’s north-west coast. 
              Designed by the Bell sisters, the tiny house combines Scandinavian architecture with a cozy 
              French-inspired interior while running fully off-grid.
            </p>
            <p className="text-lg text-barn-ink/70 leading-relaxed">
              Our vision was to create a sanctuary where the boundaries between indoors and outdoors blur. 
              Every material, from the sustainable timber to the eco-friendly linens, has been chosen 
              with the environment in mind.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="font-serif text-2xl mb-2">Sustainability</h4>
                <p className="text-sm text-barn-ink/50">100% off-grid power and water systems.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <h4 className="font-serif text-2xl mb-2">Immersion</h4>
                <p className="text-sm text-barn-ink/50">Designed to maximize views and nature connection.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-barn-ink text-warm-white rounded-[4rem] p-12 md:p-24"
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif mb-6">Our Core Values</h2>
            <p className="text-warm-white/60 max-w-xl mx-auto">The principles that guide everything we do at Barnhaus.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16"
          >
            {[
              {
                title: "Eco-Conscious",
                desc: "We believe in leaving a light footprint. Our tiny house is fully off-grid, utilizing solar energy and rainwater harvesting.",
                icon: <Sun size={40} className="text-barn-earth" />
              },
              {
                title: "Craftsmanship",
                desc: "From the Scandinavian architecture to the bespoke interior details, we celebrate quality and intentional design.",
                icon: <Leaf size={40} className="text-barn-earth" />
              },
              {
                title: "Connection",
                desc: "We provide a space for guests to reconnect with themselves, their loved ones, and the natural world.",
                icon: <Wind size={40} className="text-barn-earth" />
              }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="inline-block mb-8">{value.icon}</div>
                <h3 className="text-3xl font-serif mb-6">{value.title}</h3>
                <p className="text-warm-white/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
