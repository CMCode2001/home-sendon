import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BellRing, Cpu, Activity, Smartphone } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const f = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } } }

export default function Solution() {
  const { lang, t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const features = [
    { Icon: BellRing,    color: 'text-emerald-600', bg: 'bg-emerald-50', title: t.solution.feature1, desc: t.solution.feature1Desc },
    { Icon: Cpu,         color: 'text-emerald-600', bg: 'bg-emerald-50', title: t.solution.feature2, desc: t.solution.feature2Desc },
    { Icon: Activity,    color: 'text-emerald-600', bg: 'bg-emerald-50', title: t.solution.feature3, desc: t.solution.feature3Desc },
    { Icon: Smartphone,  color: 'text-emerald-600', bg: 'bg-emerald-50', title: t.solution.feature4, desc: t.solution.feature4Desc },
  ]


  return (
    <section id="solution" ref={ref} className="section py-16 sm:py-24 bg-slate-50">
      <div className="container-xl">
        {/* Header */}
        <motion.div className="section-header" initial="hidden" animate={inView ? 'show' : 'hidden'} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={f}>
            <span className="section-badge text-emerald-700 bg-emerald-50 border-emerald-100">{t.solution.badge}</span>
          </motion.div>
          <motion.h2 variants={f} className="section-title">{t.solution.title}</motion.h2>
          <motion.p variants={f} className="section-sub">{t.solution.subtitle}</motion.p>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16"
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
        >
          {features.map(({ Icon, color, bg, title, desc }) => (
            <motion.div key={title} variants={f} className="card flex flex-row items-start gap-5 hover:border-emerald-100">
              <div className={`card-icon ${bg} mb-0 shrink-0`}>
                <Icon size={22} className={`${color} stroke-[2.5]`} />
              </div>
              <div>
                <h3 className="text-[1.0625rem] font-bold text-slate-900 mb-1.5 tracking-tight">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
