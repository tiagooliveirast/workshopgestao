import { LINK_CHECKOUT, PRECO } from '../config'
import ScrollReveal from './ScrollReveal'

const problemas = [
  'Sua agenda vive cheia, mas sua conta vive apertada',
  'Você cobra no chute e ainda fica com medo do cliente achar caro',
  'No fim do mês você não sabe pra onde foi o dinheiro',
  'Você corre atrás de cliente novo o tempo todo, mas os antigos somem',
  'Você é um ótimo técnico — mas ninguém te ensinou a tocar isso como negócio',
]

export default function Problem() {
  return (
    <section className="bg-dark-secondary py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-center text-white mb-12 leading-snug">
            Se você se identifica com isso,
            <br />
            essa imersão é pra você:
          </h2>
        </ScrollReveal>

        <ul className="space-y-5 max-w-2xl mx-auto">
          {problemas.map((item, idx) => (
            <ScrollReveal key={idx}>
              <li className="flex items-start gap-4">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-300 text-base md:text-lg">{item}</span>
              </li>
            </ScrollReveal>
          ))}
        </ul>

        <div className="text-center mt-10">
          <ScrollReveal>
            <a
              href={LINK_CHECKOUT}
              className="inline-block bg-gold hover:bg-gold-light text-dark font-display font-extrabold text-lg md:text-xl px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.98]"
            >
              QUERO MINHA VAGA — {PRECO}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
