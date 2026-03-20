import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertTriangle, NavigationOff, Clock, Database } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const f = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }

export default function Problem() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const problems = [
    { Icon: AlertTriangle, color: 'text-red-500',    bg: 'bg-red-50',    border: 'hover:border-red-100',    title: t.problem.card1Title, desc: t.problem.card1Desc },
    { Icon: NavigationOff, color: 'text-orange-500', bg: 'bg-orange-50', border: 'hover:border-orange-100', title: t.problem.card2Title, desc: t.problem.card2Desc },
    { Icon: Clock,         color: 'text-amber-500',  bg: 'bg-amber-50',  border: 'hover:border-amber-100',  title: t.problem.card3Title, desc: t.problem.card3Desc },
    { Icon: Database,      color: 'text-blue-500',   bg: 'bg-blue-50',   border: 'hover:border-blue-100',   title: t.problem.card4Title, desc: t.problem.card4Desc },
  ]

  return (
    <section id="problem" ref={ref} className="bg-slate-50 relative pb-16 sm:pb-24" style={{ paddingTop: '150px' }}>
      <div className="container-xl relative z-10">
        {/* Header */}
        <motion.div className="section-header" initial="hidden" animate={inView ? 'show' : 'hidden'} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={f}>
            <span className="section-badge text-red-600 bg-red-50 border-red-100">{t.problem.badge}</span>
          </motion.div>
          <motion.h2 variants={f} className="section-title">{t.problem.title}</motion.h2>
          <motion.p variants={f} className="section-sub">{t.problem.subtitle}</motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
        >
          {problems.map(({ Icon, color, bg, border, title, desc }) => (
            <motion.div key={title} variants={f} className={`card group ${border}`}>
              <div className={`card-icon ${bg}`}>
                <Icon size={22} className={`${color} stroke-[2.5]`} />
              </div>
              <h3 className="text-[1.125rem] font-bold text-slate-900 mb-2 tracking-tight">{title}</h3>
              <p className="text-slate-500 text-[0.9375rem] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
