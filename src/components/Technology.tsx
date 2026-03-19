import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Server, Shield, Zap } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const f = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function Technology() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const tech = [
    { Icon: Smartphone, title: t.technology.t1, desc: t.technology.t1Desc },
    { Icon: Server,     title: t.technology.t2, desc: t.technology.t2Desc },
    { Icon: Shield,     title: t.technology.t3, desc: t.technology.t3Desc },
    { Icon: Zap,        title: t.technology.t4, desc: t.technology.t4Desc },
  ]

  const stack = ['React Native', 'Node.js', 'PostgreSQL', 'TensorFlow', 'Kubernetes', 'Redis']

  return (
    <section id="technology" ref={ref} className="section bg-slate-50">
      <div className="container-xl">
        {/* Header */}
        <motion.div className="section-header" initial="hidden" animate={inView?'show':'hidden'} variants={{ show:{ transition:{ staggerChildren:0.1 } } }}>
          <motion.div variants={f}>
            <span className="section-badge text-slate-600 bg-white border-slate-200">{t.technology.badge}</span>
          </motion.div>
          <motion.h2 variants={f} className="section-title">{t.technology.title}</motion.h2>
          <motion.p variants={f} className="section-sub">{t.technology.subtitle}</motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden" animate={inView?'show':'hidden'}
          variants={{ show:{ transition:{ staggerChildren:0.1, delayChildren:0.2 } } }}
        >
          {tech.map(({ Icon, title, desc }) => (
            <motion.div key={title} variants={f} className="card group hover:border-slate-300">
              <div className="card-icon bg-white border border-slate-100 group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                <Icon size={20} className="text-slate-600 group-hover:text-white stroke-[2.5] transition-colors duration-300"/>
              </div>
              <h3 className="text-[1.0625rem] font-bold text-slate-900 mb-2 tracking-tight">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stack logos */}
        <motion.div
          initial={{ opacity:0 }} animate={inView?{ opacity:1 }:{}} transition={{ duration:0.8, delay:0.7 }}
          className="mt-16 pt-12 border-t border-slate-200 flex flex-wrap items-center justify-center gap-x-14 gap-y-6"
        >
          {stack.map(s => (
            <span key={s} className="text-xl font-extrabold tracking-tight text-slate-300 hover:text-slate-700 transition-colors duration-300 cursor-default select-none">{s}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
