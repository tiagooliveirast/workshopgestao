import PixelInit from './components/PixelInit'
import Hero from './components/Hero'
import Problem from './components/Problem'
import About from './components/About'
import Nights from './components/Nights'
import Target from './components/Target'
import Offer from './components/Offer'
import Countdown from './components/Countdown'
import Authority from './components/Authority'
import Guarantee from './components/Guarantee'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'

export default function App() {
  return (
    <>
      {/* Injeção do Pixel da Meta (se configurado) */}
      <PixelInit />

      <main className="pb-16 md:pb-0">
        <Hero />
        <Problem />
        <About />
        <Nights />
        <Target />
        <Offer />
        <Countdown />
        <Authority />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <MobileBar />
    </>
  )
}
