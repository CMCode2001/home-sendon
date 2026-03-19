import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, Heart, Activity, MapPin } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const f = { hidden: { opacity: 0, y: 24 }, show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }) }

export default function Hero() {
  const { lang, t } = useLang()

  const stats = [
    { value: '12 400+', label: t.hero.stat1, Icon: Users },
    { value: '48', label: t.hero.stat2, Icon: Heart },
    { value: '3 200+', label: t.hero.stat3, Icon: Activity },
    { value: '14', label: t.hero.stat4, Icon: MapPin },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-red-50 blur-[120px] opacity-60" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-slate-50 blur-[100px]" />
      </div>

      <div className="container-xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div custom={0} initial="hidden" animate="show" variants={f}>
            <span className="section-badge text-red-600 bg-red-50 border-red-100">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1} initial="hidden" animate="show" variants={f}
            className="mt-4 text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-slate-900 max-w-4xl"
          >
            {lang === 'fr'
              ? <>Quand le sang est nécessaire, le temps ne&nbsp;doit pas décider <span className="gradient-text">qui&nbsp;vit</span></>
              : <>When blood is needed, time shouldn't decide <span className="gradient-text">who&nbsp;lives</span></>
            }
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2} initial="hidden" animate="show" variants={f}
            className="mt-6 text-lg font-medium text-slate-500 max-w-xl leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div custom={3} initial="hidden" animate="show" variants={f} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#product" className="btn btn-primary">
              {t.hero.ctaPrimary} <ArrowRight size={18} />
            </a>
            <a href="#video" className="btn btn-secondary">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
                <Play size={14} className="ml-0.5 text-slate-700" fill="currentColor" />
              </span>
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            custom={5} initial="hidden" animate="show" variants={f}
            className="mt-20 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100 rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden"
          >
            {stats.map(({ value, label, Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2 px-6 py-7">
                <Icon size={18} className="text-red-400" />
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">{value}</span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 text-center">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-slate-300 to-transparent" />
      </motion.div>
    </section>
  )
}
