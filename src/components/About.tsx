import { NOME_WORKSHOP } from '../config'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-white mb-6">
            O que é a {NOME_WORKSHOP}?
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            3 noites ao vivo, prático, mão na massa. Não é teoria — você sai com
            transformação real já na primeira noite. Cada encontro tem exercícios
            aplicáveis ao seu dia a dia, com linguagem de técnico pra técnico,
            sem enrolação.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
