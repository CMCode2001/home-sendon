import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Problem from './components/Problem'
import Solution from './components/Solution'
import InteractiveSection from './components/InteractiveSection'
import AISection from './components/AISection'
import Awards from './components/Awards'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className="flex flex-col gap-10 md:gap-10 mb-10">
          <Home />
          <Problem />
          <Solution />
          <InteractiveSection />
          <AISection />
          <Awards />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
