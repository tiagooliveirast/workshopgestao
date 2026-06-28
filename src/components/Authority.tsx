import ScrollReveal from './ScrollReveal'

export default function Authority() {
  return (
    <section className="bg-dark-secondary py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-center text-white mb-12">
            Quem é o Tiago Sheik?
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Placeholder da foto */}
          <ScrollReveal className="flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-dark-card border-2 border-gold/30 flex items-center justify-center overflow-hidden">
              <svg className="w-20 h-20 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Técnico de refrigeração e criador de conteúdo. São mais de{' '}
                <strong className="text-white">+23 mil seguidores</strong> no
                Instagram, host do programa{' '}
                <strong className="text-white">"Papo de Técnico"</strong> e
                criador do <strong className="text-white">Refriclube</strong>.
                Tiago ajuda técnicos a transformarem o ofício em negócio
                lucrativo — com linguagem direta, sem teoria, sem frescura.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
