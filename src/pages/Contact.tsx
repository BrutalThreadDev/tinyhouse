import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Calendar, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-barn-olive font-medium tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-6xl md:text-7xl font-serif mb-6">Contact & Booking</h1>
          <p className="text-xl text-barn-ink/60 max-w-2xl mx-auto">
            Have a question or ready to book your stay? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-barn-ink/5">
              <h2 className="text-4xl font-serif mb-10">Location & Info</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-barn-olive/10 flex items-center justify-center text-barn-olive shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Address</h4>
                    <p className="text-barn-ink/60">195 Bellamy Road, Forthside, Tasmania 7310, Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-barn-olive/10 flex items-center justify-center text-barn-olive shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Phone</h4>
                    <p className="text-barn-ink/60">+61 437 994 552</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-barn-olive/10 flex items-center justify-center text-barn-olive shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Email</h4>
                    <p className="text-barn-ink/60">hello@compasshut.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-barn-olive/10 flex items-center justify-center text-barn-olive shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Check-in / Out</h4>
                    <p className="text-barn-ink/60">Check-in: 2:00 PM <br /> Check-out: 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed Placeholder */}
            <div className="rounded-[3rem] overflow-hidden shadow-xl h-[400px] relative group">
              <img 
                src="https://picsum.photos/seed/map-tasmania/1200/800" 
                alt="Map Location" 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=-41.236,146.264" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-barn-olive text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:bg-barn-olive/90 transition-all flex items-center gap-2"
                >
                  <MapPin size={20} /> View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-barn-ink text-warm-white p-10 md:p-16 rounded-[4rem] shadow-2xl"
          >
            <h2 className="text-4xl font-serif mb-10">Book Your Stay</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="space-y-2">
                    <label className="text-sm font-medium text-warm-white/60">Full Name</label>
                    <input 
                      {...register("name", { required: true })}
                      className="w-full bg-warm-white/5 border border-warm-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-barn-earth transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-400 text-xs">Name is required</span>}
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="space-y-2">
                    <label className="text-sm font-medium text-warm-white/60">Email Address</label>
                    <input 
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full bg-warm-white/5 border border-warm-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-barn-earth transition-colors"
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-400 text-xs">Valid email is required</span>}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="space-y-2">
                    <label className="text-sm font-medium text-warm-white/60">Check-in Date</label>
                    <div className="relative">
                      <input 
                        type="date"
                        {...register("checkIn", { required: true })}
                        className="w-full bg-warm-white/5 border border-warm-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-barn-earth transition-colors appearance-none"
                      />
                      <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-warm-white/30 pointer-events-none" size={20} />
                    </div>
                  </motion.div>
                  <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="space-y-2">
                    <label className="text-sm font-medium text-warm-white/60">Check-out Date</label>
                    <div className="relative">
                      <input 
                        type="date"
                        {...register("checkOut", { required: true })}
                        className="w-full bg-warm-white/5 border border-warm-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-barn-earth transition-colors appearance-none"
                      />
                      <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 text-warm-white/30 pointer-events-none" size={20} />
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="space-y-2">
                  <label className="text-sm font-medium text-warm-white/60">Message (Optional)</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full bg-warm-white/5 border border-warm-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-barn-earth transition-colors resize-none"
                    placeholder="Tell us about your trip..."
                  />
                </motion.div>

                <motion.button 
                  variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-warm-white text-barn-ink py-5 rounded-2xl font-bold text-lg hover:bg-barn-earth hover:text-white transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <Send size={20} /> Send Inquiry
                </motion.button>
              </motion.div>
              
              <p className="text-center text-warm-white/40 text-sm mt-6">
                By submitting this form, you agree to our booking terms and conditions.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
