import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Languages } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'
import logo from '../assets/logo/LogoSenDon.png'

export default function Navbar() {
  const { lang, toggleLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const langRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Gestion optimisée du scroll avec passive event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(prev => {
        const newScrolled = window.scrollY > 40
        return prev !== newScrolled ? newScrolled : prev
      })
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermeture des menus au clic extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      
      if (langRef.current && !langRef.current.contains(target)) {
        setLangOpen(false)
      }
      
      if (menuRef.current && !menuRef.current.contains(target) && 
          !(e.target instanceof HTMLElement && e.target.closest('button[aria-label="menu-toggle"]'))) {
        setMenuOpen(false)
      }
    }
    
    window.addEventListener('mousedown', handleClickOutside)
    return () => window.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Removed problematic automatic close on scroll to prevent the menu from instantly closing when reopened.

  // Gestion de la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangOpen(false)
        setMenuOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const handleLangSelect = useCallback((selectedLang: string) => {
    if (lang !== selectedLang) {
      toggleLang()
    }
    setLangOpen(false)
  }, [lang, toggleLang])

  const navLinks = [
    { label: t.nav.solution, href: '#solution' },
    { label: t.nav.product, href: '#product' },
    { label: t.nav.ai, href: '#ai' },
    // { label: t.nav.technology, href: '#technology' },
    { label: t.nav.recognition, href: '#awards' },
  ]

  // Variants pour les animations
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.96,
      transition: { duration: 0.15 }
    }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.25 }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] md:w-[calc(100%-32px)] max-w-6xl"
    >
      {/* NAV CONTAINER */}
      <motion.div
        animate={{
          paddingTop: scrolled ? '8px' : '12px',    // Augmenté pour plus d'espace
          paddingBottom: scrolled ? '8px' : '12px', // Augmenté pour plus d'espace
          paddingLeft: '20px',                       // Padding fixe à gauche
          paddingRight: '20px',                       // Padding fixe à droite
          backgroundColor: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.7)',
        }}
        transition={{ duration: 0.3 }}
        className="rounded-full border border-white/20 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center justify-between">
          {/* LOGO - CORRIGÉ POUR RESTER DANS LE ROUNDED-FULL */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg overflow-hidden" // overflow-hidden ajouté
            aria-label="Accueil"
          >
            <div className="flex items-center justify-center"> {/* Conteneur pour contrôler le débordement */}
              <img 
                src={logo} 
                alt="SenDon Logo" 
                className="h-9 w-auto transition duration-500 group-hover:scale-105"
                loading="eager"
              />
            </div>
            <span className="font-extrabold tracking-tight text-slate-900 text-[1.1rem] whitespace-nowrap">
              Sen<span className="text-red-600">Don</span>
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative  hover:text-slate-900 text-[0.85rem] font-semibold px-4 py-2 rounded-full transition group focus:outline-none focus-visible:ring-2 whitespace-nowrap" // whitespace-nowrap ajouté
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {link.label}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-5/6 rounded-full" />
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* 🌍 LANGUAGE DROPDOWN */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(prev => !prev)}
                className="flex items-center gap-2.5 bg-transparent px-5 py-2 focus-visible:ring-2 focus-visible:ring-red-500 active:scale-95 "
                aria-label="Changer de langue"
                aria-expanded={langOpen}
                aria-haspopup="true"
              >
                <Languages size={18} className="" />
                <span className="text-xs text-red-600 font-bold hidden sm:block">
                  {lang === 'fr' ? 'FR' : 'EN'}
                </span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-3 w-40 
                             bg-white/90 
                             rounded-2xl backdrop-blur-xl
                             border border-slate-200/50 
                             shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
                             p-3.5 overflow-hidden z-[60]"
                    role="menu"
                    aria-label="Sélection de la langue"
                    style={{padding:10}}
                  >
                    <div className="flex flex-col gap-1">
                      {[
                        { slug: 'fr', name: 'Français', flag: '🇫🇷' },
                        { slug: 'en', name: 'English', flag: '🇬🇧' }
                      ].map((l) => (
                        <button
                          key={l.slug}
                          onClick={() => handleLangSelect(l.slug)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 w-full text-left group
                          ${
                            lang === l.slug
                              ? 'bg-red-50 text-red-600 font-bold'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                          role="menuitem"
                        >
                          <span className="text-base filter grayscale-[0.2] group-hover:grayscale-0 transition-all">{l.flag}</span>
                          <span className="tracking-tight">{l.name}</span>
                          {lang === l.slug && (
                            <motion.div 
                              layoutId="active-tick"
                              className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2 focus-visible:ring-2 focus-visible:ring-red-500"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              style={{color:"black", backgroundColor:"transparent!important"}}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white/80 backdrop-blur-xl shadow-xl p-10 rounded-2xl flex flex-col items-center justify-center"
            style={{marginTop:10}}
            role="menu"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    setMenuOpen(false)
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-slate-700 hover:text-black font-semibold px-4 py-3 rounded-xl transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2"
                  role="menuitem"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}