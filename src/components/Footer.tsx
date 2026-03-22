import { useLang } from '../contexts/LanguageContext'

export default function Footer() {
  const { lang } = useLang()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#000000] border-t border-slate-50 rounded-t-4xl py-10"
    style={{marginTop: '20px'}}>
      <div className="container-xl flex flex-col items-center justify-center">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 w-full">
          <span className="font-extrabold tracking-tight text-white text-xl">
            Sen<span className="text-white">Don</span>
          </span>
          <span className="text-slate-400 text-sm font-medium">
            © {currentYear} SenDon. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </span>
        </div>
      </div>
    </footer>
  )
}
