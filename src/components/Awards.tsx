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
    <section id="awards" ref={ref} className="section bg-white">
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
<br />
        {/* CTA block */}
        <motion.div
          initial={{ opacity:0, scale:0.97 }} animate={inView?{ opacity:1, scale:1 }:{}} transition={{ duration:0.8, delay:0.7 }}
          className="mt-20 rounded-3xl bg-slate-900 p-1 md:p-16 text-center relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-red-600/20 blur-[100px]"/>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight max-w-2xl mx-auto">
              {lang==='fr'?'Prêt à transformer le don de sang ?':'Ready to transform blood donation?'}
            </h3>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              {lang==='fr'?'Rejoignez SenDon et contribuez à sauver plus de vies grâce à l\'intelligence artificielle.':'Join SenDon and help save more lives with artificial intelligence.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#" className="btn btn-primary">
                {lang==='fr'?'Devenir Partenaire':'Become a Partner'} <ArrowRight size={18}/>
              </a>
              <a href="#" className="btn" style={{ background:'rgba(255,255,255,0.08)', color:'white', border:'1.5px solid rgba(255,255,255,0.15)' }}>
                {lang==='fr'?'Nous contacter':'Contact us'}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
