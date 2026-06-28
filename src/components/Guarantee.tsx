import ScrollReveal from './ScrollReveal'

export default function Guarantee() {
  return (
    <section className="bg-dark py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4">
            {/* Selo simples */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-display text-lg md:text-xl font-bold text-white">
                Garantia incondicional de 7 dias
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                Não curtiu? Devolvemos 100% do seu dinheiro, sem perguntas.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
