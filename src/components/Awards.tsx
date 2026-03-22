import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const f = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function Awards() {
  const { lang, t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8px' })

  const awards = [
    { logoImg: '/images/govathon-logo.gif', title: t.awards.award1Name, org: t.awards.award1Org, year: t.awards.award1Year, desc: t.awards.award1Desc },
    { logoImg: '/images/amref-logo.png',   title: t.awards.award2Name, org: t.awards.award2Org, year: t.awards.award2Year, desc: t.awards.award2Desc },
    { logoImg: '/images/docsen-logo.png',   title: t.awards.award3Name, org: t.awards.award3Org, year: t.awards.award3Year, desc: t.awards.award3Desc },
  ]

  return (
    <section id="awards" ref={ref} className="section py-16 sm:py-24 bg-slate-50">
      <div className="container-xl">
        {/* Header */}
        <motion.div className="section-header" initial="hidden" animate={inView?'show':'hidden'} variants={{ show:{ transition:{ staggerChildren:0.1 } } }}>
          <motion.div variants={f}>
            <span className="section-badge text-amber-700 bg-amber-50 border-amber-200">
              <Star size={12} className="fill-amber-500 text-amber-500"/> {t.awards.badge}
            </span>
          </motion.div>
          <motion.h2 variants={f} className="section-title">{t.awards.title}</motion.h2>
          <motion.p variants={f} className="section-sub">{t.awards.subtitle}</motion.p>
        </motion.div>

        {/* Awards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden" animate={inView?'show':'hidden'}
          variants={{ show:{ transition:{ staggerChildren:0.15, delayChildren:0.2 } } }}
        >
          {awards.map(({ logoImg, title, org, year, desc }) => (
            <motion.div key={title} variants={f} whileHover={{ y:-6 }} className="card group hover:border-amber-200">
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 ">
                  {/* Image render: will show your logo here */}
                  <img 
                    src={logoImg} 
                    alt={title} 
                    className="w-full h-full object-contain mix-blend-multiply  duration-300"
                    onError={(e) => {
                      // Fallback text if image not found
                      (e.currentTarget as any).style.display = 'none';
                      e.currentTarget.parentElement?.setAttribute('data-pseudo', 'Logo');
                    }}
                  />
                  <style>{`
                    [data-pseudo="Logo"]::after {
                      content: "Logo";
                      font-size: 0.75rem;
                      color: #94a3b8;
                      font-weight: 500;
                    }
                  `}</style>
                </div>
                <span className="text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">{year}</span>
              </div>
              <h3 className="text-[1.0625rem] font-extrabold text-slate-900 mb-1 tracking-tight leading-snug">{title}</h3>
              <p className="text-xs font-bold text-amber-600 mb-3 uppercase tracking-widest">{org}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
