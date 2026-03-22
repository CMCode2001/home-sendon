import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Map, TrendingUp, Layers } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

export default function AISection() {
  const { lang, t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const features = [
    { Icon: TrendingUp, title: t.ai.feature1, desc: t.ai.feature1Desc },
    { Icon: Brain,      title: t.ai.feature2, desc: t.ai.feature2Desc },
    { Icon: Map,        title: t.ai.feature3, desc: t.ai.feature3Desc },
    { Icon: Layers,     title: t.ai.feature4, desc: t.ai.feature4Desc },
  ]

  return (
    <section id="ai" ref={ref} className="section py-16 sm:py-24 bg-slate-50">
      <div className="container-xl flex flex-col items-center">
        
        {/* Text */}
        <motion.div 
          className="max-w-4xl text-center flex flex-col items-center w-full"
          initial={{opacity:0,y:32}} 
          animate={inView?{opacity:1,y:0}:{}} 
          transition={{duration:0.7}}
        >
          <span className="section-badge text-purple-700 bg-purple-50 border-purple-100 mb-6 inline-flex items-center gap-2">
            <Brain size={13}/>{t.ai.badge}
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-5 max-w-3xl">
            {t.ai.title}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-2xl">
            {t.ai.subtitle}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
            {features.map(({Icon,title,desc})=>(
              <div key={title} className="card hover:border-purple-100 flex flex-col items-start bg-slate-50 border border-slate-100 px-6 py-8 rounded-2xl">
                <div className="card-icon bg-purple-100/60 mb-4 p-3 rounded-xl">
                  <Icon size={24} className="text-purple-600 stroke-[2]"/>
                </div>
                <h4 className="text-[1.0625rem] font-bold text-slate-900 mb-2 tracking-tight">{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
