import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mouse } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import { useLang } from '../contexts/LanguageContext'

export default function Home() {
  const { lang } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const YOUTUBE_VIDEO_ID = "u-b8DrVHBjg"

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      id="home"
      className="bg-[#060B18] min-h-screen flex flex-col items-center overflow-hidden px-4"
      style={{ position: 'relative', paddingTop: '100px' }}
    >
      {/* Glow (réduit sur mobile) */}
      <div className="hidden md:block absolute top-[45%] left-1/2 -translate-x-1/2 w-[70vw] h-[30vw] bg-indigo-600/20 blur-[120px] rounded-full" />
      <div className="hidden md:block absolute top-[50%] left-1/2 -translate-x-1/2 w-[50vw] h-[25vw] bg-rose-600/20 blur-[120px] rounded-full" />

      {/* Grid léger */}
      <div className="absolute inset-0 opacity-40 md:opacity-100 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center my-auto py-10">

        {/* TITRE */}
        <motion.div
          className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-3xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-rose-300 text-xs md:text-sm font-bold mb-6"
          style={{padding: '10px'}}>
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse " />
            {lang === 'fr' ? 'Découvrez SenDon' : 'Discover SenDon'}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 w-full min-h-[90px] md:min-h-[140px]">
            <TypeAnimation
              key={lang}
              sequence={
                lang === 'fr' 
                  ? [
                      'Donner du sang, sauvez des vies !',
                      3000,
                      'Donner du sang, offrez de l\'espoir !',
                      3000
                    ]
                  : [
                      'Give blood, save lives!',
                      3000,
                      'Give blood, offer a future!',
                      3000
                    ]
              }
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-white to-rose-400 bg-clip-text text-transparent"
            />
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl text-center">
            {lang === 'fr'
              ? 'Une plateforme connectée pour sauver des vies.'
              : 'A connected platform to save lives.'}
          </p>
        </motion.div>

        {/* VIDEO */}
        <motion.div
          style={{ y, opacity }}
          className="mx-auto w-full max-w-5xl aspect-video rounded-xl md:rounded-2xl 
          p-1 md:p-2 bg-white/5 border border-white/10 relative"
        >
          <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden bg-[#0A0F1C] group">
            
            {isVideoPlaying ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&showinfo=0`}
                title="Présentation SenDon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => setIsVideoPlaying(true)}
              >
                {/* Image */}
                <img
                  src="/images/sendon-video-cover.png"
                  alt="Video"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition duration-500"
                  onError={(e) => {
                    (e.currentTarget as any).style.display = 'none'
                  }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-rose-500/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(244,63,94,0.3)] border border-white/20">
                    <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[14px] md:border-l-[20px] border-l-white border-b-[8px] md:border-b-[12px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            )}

          </div>
        </motion.div>

        {/* SCROLL */}
        <div className="mt-10 md:mt-16 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <Mouse size={24} className="text-slate-400 opacity-80" strokeWidth={1.5} />
            <div className="w-px h-10 md:h-14 bg-gradient-to-b from-indigo-500 to-transparent" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}