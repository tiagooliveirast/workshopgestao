import { PRECO, LINK_CHECKOUT } from '../config'
import ScrollReveal from './ScrollReveal'

export default function FinalCTA() {
  return (
    <section className="bg-dark py-16 md:py-24 relative overflow-hidden">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-white mb-8 leading-snug">
            Pare de trabalhar de graça.
            <br />
            Comece a mandar no seu negócio.
          </h2>

          <a
            href={LINK_CHECKOUT}
            className="inline-block bg-gold hover:bg-gold-light text-dark font-display font-extrabold text-lg md:text-xl px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.98]"
          >
            QUERO MINHA VAGA — {PRECO}
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
