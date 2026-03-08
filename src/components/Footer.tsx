import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-barn-ink text-warm-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-3xl font-serif mb-6">Barnhaus</h3>
          <p className="text-warm-white/60 mb-8 leading-relaxed">
            A boutique eco-accommodation experience on Tasmania’s north-west coast. 
            Designed for those who seek to disconnect and reconnect with nature.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-warm-white hover:text-barn-ink transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-warm-white hover:text-barn-ink transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 text-warm-white/60">
            <li><Link to="/" className="hover:text-warm-white transition-colors">Home</Link></li>
            <li><Link to="/tiny-house" className="hover:text-warm-white transition-colors">The Tiny House</Link></li>
            <li><Link to="/experience" className="hover:text-warm-white transition-colors">Experience</Link></li>
            <li><Link to="/gallery" className="hover:text-warm-white transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-warm-white transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Contact</h4>
          <ul className="space-y-4 text-warm-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="shrink-0 mt-1" />
              <span>195 Bellamy Road, Forthside, Tasmania 7310, Australia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0" />
              <span>+61 437 994 552</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0" />
              <span>hello@compasshut.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6">Newsletter</h4>
          <p className="text-warm-white/60 mb-4 text-sm">Join our mailing list for updates and seasonal offers.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-warm-white/5 border border-warm-white/10 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-warm-white/30"
            />
            <button className="bg-warm-white text-barn-ink px-4 py-2 rounded-full text-sm font-medium hover:bg-warm-white/90 transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-warm-white/10 flex flex-col md:row justify-between items-center gap-4 text-warm-white/40 text-xs">
        <p>© {new Date().getFullYear()} Barnhaus Tasmania. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-warm-white">Privacy Policy</a>
          <a href="#" className="hover:text-warm-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
