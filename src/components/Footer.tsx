import { motion } from 'framer-motion'
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import { useState, useEffect } from 'react'

export default function Footer() {
  const { t } = useLang()
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1 }
  }

  return (
    <footer className="bg-gradient-to-b from-[#030303] to-black border-t border-white/[0.03] pt-20 pb-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.03]">
          {/* Brand section - larger */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-600/30 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C8 8 4 12 4 16a8 8 0 0 0 16 0c0-4-4-8-8-14z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white text-2xl tracking-tight">
                    Sen<span className="text-red-500">Don</span>
                  </span>
                  <p className="text-white/30 text-xs mt-0.5">© {currentYear} Tous droits réservés</p>
                </div>
              </div>
              
              <p className="text-white/40 text-sm leading-relaxed max-w-md">
                {t.footer.tagline || "Révolutionner le don du sang au Sénégal grâce à la technologie"}
              </p>
              
              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-white/60 text-xs font-medium uppercase tracking-wider">Restez informé</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/80 text-sm placeholder:text-white/20 focus:outline-none focus:border-red-500/50 transition-colors"
                  />
                  <button className="px-4 py-2.5 bg-red-600 hover:bg-red-700 rounded-xl text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30">
                    S'abonner
                  </button>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-2">
                {[
                  { icon: Twitter, href: '#', color: 'hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2]' },
                  { icon: Linkedin, href: '#', color: 'hover:bg-[#0A66C2]/20 hover:text-[#0A66C2]' },
                  { icon: Github, href: '#', color: 'hover:bg-[#333]/20 hover:text-white' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 transition-all duration-200 ${social.color}`}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            {/* Product */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-white/90 font-semibold text-sm mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                {t.footer.product}
              </h4>
              <ul className="space-y-3">
                {[t.footer.links.solution, t.footer.links.ai, t.footer.links.hospital, t.footer.links.donor].map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="group flex items-center gap-1 text-white/40 hover:text-white/90 text-sm transition-all duration-200"
                    >
                      {link}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-white/90 font-semibold text-sm mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                {t.footer.company}
              </h4>
              <ul className="space-y-3">
                {[t.footer.links.about, t.footer.links.blog, t.footer.links.press, t.footer.links.careers].map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="group flex items-center gap-1 text-white/40 hover:text-white/90 text-sm transition-all duration-200"
                    >
                      {link}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeInUp} className="col-span-2 md:col-span-1">
              <h4 className="text-white/90 font-semibold text-sm mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-red-500 rounded-full"></span>
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/40 text-sm group">
                  <MapPin size={16} className="shrink-0 mt-0.5 text-red-500/60 group-hover:text-red-500 transition-colors" />
                  <span className="group-hover:text-white/70 transition-colors">Dakar, Sénégal</span>
                </li>
                <li className="flex items-center gap-3 text-white/40 text-sm group">
                  <Mail size={16} className="shrink-0 text-red-500/60 group-hover:text-red-500 transition-colors" />
                  <a href="mailto:hello@sendon.sn" className="hover:text-white/70 transition-colors">hello@sendon.sn</a>
                </li>
                <li className="flex items-center gap-3 text-white/40 text-sm group">
                  <Phone size={16} className="shrink-0 text-red-500/60 group-hover:text-red-500 transition-colors" />
                  <span className="group-hover:text-white/70 transition-colors">+221 77 000 00 00</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
        >
          <p className="text-white/20 text-xs flex items-center gap-1">
            Made with <Heart size={10} className="text-red-500 fill-red-500" /> by SenDon
          </p>
          <div className="flex items-center gap-6">
            {[t.footer.links.privacy, t.footer.links.terms, t.footer.links.security].map((link, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-white/20 hover:text-white/50 text-xs transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}