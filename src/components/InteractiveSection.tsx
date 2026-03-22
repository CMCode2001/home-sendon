import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  Bell, MapPin, Heart, History, ClipboardList,
  Activity, Users, BarChart3, Globe, TrendingUp, PieChart,
  Droplet, Building2, Dna
} from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

// ─── Types ────────────────────────────────────────────────────────
type TabId = 'donor' | 'hospital' | 'cnts'

// ─── Shared placeholder ───────────────────────────────────────────
// Replace <Placeholder /> with <img src="..." alt="..." /> when your visuals are ready.
function Placeholder({
  label = 'Visual',
  className = '',
  aspectRatio = '16/9',
}: {
  label?: string
  className?: string
  aspectRatio?: string
}) {
  return (
    <div
      className={`relative overflow-hidden bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-slate-400 select-none pointer-events-none">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="text-xs font-semibold tracking-wide">{label}</span>
      </div>
    </div>
  )
}

// ─── Shared feature card ──────────────────────────────────────────
function FeatureCard({
  Icon,
  color,
  bg,
  title,
  desc,
  hoverBorder = 'hover:border-slate-200',
}: {
  Icon: React.ElementType
  color: string
  bg: string
  title: string
  desc: string
  hoverBorder?: string
}) {
  return (
    <div className={`card group ${hoverBorder} transition-all duration-200`}>
      <div className={`card-icon ${bg}`}>
        <Icon size={20} className={`${color} stroke-[2.5]`} aria-hidden="true" />
      </div>
      <h4 className="text-[0.9375rem] font-bold text-slate-900 mb-1.5 tracking-tight">{title}</h4> 
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

// ─── Donor Mockup ─────────────────────────────────────────────────
function DonorMockup({ t, lang }: { t: any; lang: string }) {
  const d = t.interactive.donor

  const features = [
    { Icon: Bell,    color: 'text-rose-500', bg: 'bg-rose-50', title: d.feature1, desc: d.feature1Desc },
    { Icon: Heart,   color: 'text-pink-500', bg: 'bg-pink-50', title: d.feature2, desc: d.feature2Desc },
    { Icon: MapPin,  color: 'text-red-500',  bg: 'bg-red-50',  title: d.feature3, desc: d.feature3Desc },
    { Icon: History, color: 'text-rose-500', bg: 'bg-rose-50', title: d.feature4, desc: d.feature4Desc },
  ]

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
      {/* Phone shell with placeholder */}
      <div className="flex-shrink-0 mx-auto">
        <div
          className="relative w-[380px] hrounded-[48px] "
          role="img"
          aria-label={lang === 'fr' ? 'Aperçu application donneur' : 'Donor app preview'}
        >
          {/* Status bar */}
          {/* <div className="flex justify-between items-center px-5 pt-5 pb-2 text-[11px] font-bold text-slate-900 relative">
            <span>9:41</span>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-slate-900 rounded-full" aria-hidden="true" />
          </div> */}

          {/* ↓ REPLACE with: <img src="/images/donor-app.png" alt="..." className="w-full" /> */}
          <img src="/images/donor-app.png" alt="..." className="w-full h-1000px" />
          {/* <Placeholder
            label={lang === 'fr' ? 'Capture app donneur' : 'Donor app screenshot'}
            aspectRatio="9/16"
            className="mx-2 mb-2 rounded-[34px]"
          /> */}

          {/* Home indicator */}
          <div className="flex justify-center py-3" aria-hidden="true">
            <div className="h-1 w-1/3 bg-slate-200 rounded-full" />
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
        {features.map(({ Icon, color, bg, title, desc }) => (
          <FeatureCard
            key={title}
            Icon={Icon}
            color={color}
            bg={bg}
            title={title}
            desc={desc}
            hoverBorder="hover:border-rose-100"
          />
        ))}
      </div>
    </div>
  )
}

// ─── Hospital Mockup ──────────────────────────────────────────────
function HospitalMockup({ t, lang }: { t: any; lang: string }) {
  const h = t.interactive.hospital

  const features = [
    { Icon: ClipboardList, color: 'text-blue-500',   bg: 'bg-blue-50',   title: h.feature1, desc: h.feature1Desc },
    { Icon: Activity,      color: 'text-indigo-500', bg: 'bg-indigo-50', title: h.feature2, desc: h.feature2Desc },
    { Icon: Users,         color: 'text-blue-500',   bg: 'bg-blue-50',   title: h.feature3, desc: h.feature3Desc },
    { Icon: History,       color: 'text-indigo-500', bg: 'bg-indigo-50', title: h.feature4, desc: h.feature4Desc },
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Browser chrome + placeholder */}
      <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
        {/* Address bar */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 border-b border-slate-100">
          <div className="flex gap-1.5" aria-hidden="true">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-slate-200 rounded-lg px-4 py-1.5 text-[11px] text-slate-400 flex items-center gap-2 w-56">
              <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
              <span>app.sendon.sn/hospital</span>
            </div>
          </div>
        </div>

        {/* ↓ REPLACE with: <img src="/images/hospital-dashboard.png" alt="..." className="w-full" /> */}
        <img src="/images/dashboard-hopital.png" alt="..." className="w-full" />
        {/* <Placeholder
          label={lang === 'fr' ? 'Dashboard hôpital' : 'Hospital dashboard'}
          aspectRatio="16/7"
          className="rounded-none border-x-0 border-b-0"
        /> */}
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ Icon, color, bg, title, desc }) => (
          <FeatureCard
            key={title}
            Icon={Icon}
            color={color}
            bg={bg}
            title={title}
            desc={desc}
            hoverBorder="hover:border-blue-100"
          />
        ))}
      </div>
    </div>
  )
}

// ─── CNTS Mockup ──────────────────────────────────────────────────
function CNTSMockup({ t, lang }: { t: any; lang: string }) {
  const c = t.interactive.cnts

  const features = [
    { Icon: Globe,      color: 'text-emerald-500', bg: 'bg-emerald-50', title: c.feature1, desc: c.feature1Desc },
    { Icon: BarChart3,  color: 'text-teal-500',    bg: 'bg-teal-50',    title: c.feature2, desc: c.feature2Desc },
    { Icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50', title: c.feature3, desc: c.feature3Desc },
    { Icon: PieChart,   color: 'text-teal-500',    bg: 'bg-teal-50',    title: c.feature4, desc: c.feature4Desc },
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Browser chrome + placeholder */}
      <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
        {/* Address bar */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 border-b border-slate-100">
          <div className="flex gap-1.5" aria-hidden="true">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-white border border-slate-200 rounded-lg px-4 py-1.5 text-[11px] text-slate-400 flex items-center gap-2 w-56">
              <Globe size={10} aria-hidden="true" />
              <span>cnts.sendon.sn/analytics</span>
            </div>
          </div>
        </div>

        {/* ↓ REPLACE with: <img src="/images/cnts-analytics.png" alt="..." className="w-full" /> */}
        <img src="/images/dashboard-cnts.png" alt="..." className="w-full" />
        {/* <Placeholder
          label={lang === 'fr' ? 'Analytics CNTS' : 'CNTS analytics dashboard'}
          aspectRatio="16/7"
          className="rounded-none border-x-0 border-b-0"
        /> */}
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ Icon, color, bg, title, desc }) => (
          <FeatureCard
            key={title}
            Icon={Icon}
            color={color}
            bg={bg}
            title={title}
            desc={desc}
            hoverBorder="hover:border-emerald-100"
          />
        ))}
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────
export default function InteractiveSection() {
  const { lang, t } = useLang()
  const [active, setActive] = useState<TabId>('donor')
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const tabs: { id: TabId; Icon: React.ElementType; label: string; activeColor: string }[] = [
    { id: 'donor',    Icon: Droplet,   label: t.interactive.tabs.donor,    activeColor: 'text-rose-600' },
    { id: 'hospital', Icon: Building2, label: t.interactive.tabs.hospital, activeColor: 'text-blue-600' },
    { id: 'cnts',     Icon: Dna,       label: t.interactive.tabs.cnts,     activeColor: 'text-emerald-600' },
  ]

  const subHeaders: Record<TabId, { title: string; sub: string }> = {
    donor:    { title: t.interactive.donor.title,    sub: t.interactive.donor.subtitle    },
    hospital: { title: t.interactive.hospital.title, sub: t.interactive.hospital.subtitle },
    cnts:     { title: t.interactive.cnts.title,     sub: t.interactive.cnts.subtitle     },
  }

  return (
    <section id="product" ref={ref} className="section py-16 sm:py-24 bg-slate-50">
      <div className="container-xl">

        {/* ── Section header ── */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge text-rose-600 bg-rose-50 border-rose-100">
            {t.interactive.badge}
          </span>
          <h2 className="section-title">{t.interactive.title}</h2>
          <p className="section-sub">{t.interactive.subtitle}</p>
        </motion.div>

        {/* ── Tabs + Sub-header (grouped) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-8 mb-14"
        >
          {/* Toggle pill */}
          <div
            role="tablist"
            aria-label={lang === 'fr' ? 'Sélection interface' : 'Interface selection'}
            className="relative flex flex-col sm:flex-row bg-slate-100/80 backdrop-blur-md border border-slate-200/80 p-1.5 sm:p-2 gap-1.5 rounded-[2rem] sm:rounded-full shadow-inner w-[90%] sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            {tabs.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  className={`
                    relative z-10 flex items-center justify-center gap-3 w-full sm:w-40 md:w-48 py-3.5 sm:py-4 rounded-[1.75rem] sm:rounded-full font-bold
                    transition-colors duration-300 select-none
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2
                    ${isActive
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="interactiveTabIndicator"
                      className="absolute inset-0 bg-white rounded-[1.75rem] sm:rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-200/70"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  <tab.Icon 
                    size={22} 
                    className={`transition-colors duration-300 ${isActive ? tab.activeColor : 'text-slate-400'} stroke-[2.5] flex-shrink-0`} 
                    aria-hidden="true" 
                  />
                  <span className="text-base sm:text-lg tracking-wide whitespace-nowrap">{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Sub-header — always visible, no overlap */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${active}-header`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                {subHeaders[active].title}
              </h3>
              <p className="text-slate-500 font-medium text-base max-w-md mx-auto">
                {subHeaders[active].sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Tab panels ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`tabpanel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {active === 'donor'    && <DonorMockup    t={t} lang={lang} />}
            {active === 'hospital' && <HospitalMockup t={t} lang={lang} />}
            {active === 'cnts'     && <CNTSMockup     t={t} lang={lang} />}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}