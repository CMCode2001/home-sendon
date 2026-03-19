import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import InteractiveSection from './components/InteractiveSection'
import AISection from './components/AISection'
import Awards from './components/Awards'
// import Technology from './components/Technology'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className='pt-30'>
          {/* <Hero /> */}
          <Problem />
          <Solution />
          <InteractiveSection />
          <AISection />
          <Awards />
          {/* <Technology /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </LanguageProvider>
  )
}
