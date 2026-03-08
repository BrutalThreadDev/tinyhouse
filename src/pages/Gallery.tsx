import { motion } from 'framer-motion';

const visualImages = [
  { src: "https://picsum.photos/seed/barnhaus-scandi-exterior-3/1200/800", alt: "Barnhaus Exterior - Scandinavian Design", span: "md:col-span-2 md:row-span-2" },
  { src: "https://picsum.photos/seed/barnhaus-scandi-interior-5/800/800", alt: "Minimalist Living Space" },
  { src: "https://picsum.photos/seed/tasmania-nature-1/800/800", alt: "Tasmanian Countryside Views" },
  { src: "https://picsum.photos/seed/barnhaus-garden/800/1200", alt: "Private Eco-Garden", span: "md:row-span-2" },
  { src: "https://picsum.photos/seed/tasmania-night-sky/1200/800", alt: "Stargazing from the Deck", span: "md:col-span-2" },
  { src: "https://picsum.photos/seed/scandi-kitchen-detail/800/800", alt: "Eco-Friendly Kitchenette" },
  { src: "https://picsum.photos/seed/modern-bathroom-luxury/800/800", alt: "Luxury Rain Shower" },
  { src: "https://picsum.photos/seed/barnhaus-outdoor-deck/1200/800", alt: "Outdoor Seating Area", span: "md:col-span-2" },
];

const hotelImages = [
  { src: "https://picsum.photos/seed/barnhaus-bed/800/800", alt: "Cozy Bedroom with View" },
  { src: "https://picsum.photos/seed/barnhaus-desk/800/800", alt: "Workspace with a View" },
  { src: "https://picsum.photos/seed/barnhaus-evening/800/800", alt: "Warm Evening Lighting" },
  { src: "https://picsum.photos/seed/barnhaus-bath/800/800", alt: "Modern Bathroom Detail" },
  { src: "https://picsum.photos/seed/barnhaus-soap/800/800", alt: "Eco-Friendly Toiletries" },
  { src: "https://picsum.photos/seed/barnhaus-solar/800/800", alt: "Solar Powered Living" },
  { src: "https://picsum.photos/seed/barnhaus-deck/800/800", alt: "Outdoor Deck and Flora" },
  { src: "https://picsum.photos/seed/barnhaus-food/800/800", alt: "Tasmanian Tasting Platter" },
  { src: "https://picsum.photos/seed/barnhaus-herbs/800/800", alt: "Fresh Herbs in the Garden" },
  { src: "https://picsum.photos/seed/barnhaus-arch/800/800", alt: "Scandinavian Architecture" },
  { src: "https://picsum.photos/seed/barnhaus-wild/800/800", alt: "Surrounding Wilderness" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Gallery() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-barn-olive font-medium tracking-widest uppercase text-sm mb-4 block">Visual Journey</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-6">Gallery</h1>
          <p className="text-xl text-barn-ink/60 max-w-2xl mx-auto">
            A glimpse into the life at Barnhaus. From the Scandinavian architecture to the breathtaking Tasmanian night sky.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] mb-32"
        >
          {visualImages.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-[2rem] group ${img.span || ""}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <span className="text-white font-serif text-xl">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hotel Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-barn-olive font-medium tracking-widest uppercase text-sm mb-4 block">Authentic Experience</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Hotel Gallery</h2>
          <p className="text-lg text-barn-ink/60 max-w-2xl mx-auto">
            Real moments captured at Barnhaus. Experience the warmth and detail of our off-grid retreat.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {hotelImages.map((img, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative aspect-square overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-barn-ink/40 italic mb-8">Follow us on Instagram for more updates @barnhaus_tasmania</p>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-barn-ink text-white px-10 py-4 rounded-full font-medium hover:bg-barn-ink/90 transition-all shadow-lg"
          >
            Follow our Journey
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
