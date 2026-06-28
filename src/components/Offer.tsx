import { NOME_WORKSHOP, PRECO, LINK_CHECKOUT } from '../config'
import ScrollReveal from './ScrollReveal'

const beneficios = [
  '3 noites ao vivo com o Tiago Sheik',
  'Grupo exclusivo da turma no WhatsApp',
  'Acesso às gravações por 7 dias',
  'Bônus: Planilha de Precificação Sheik',
]

export default function Offer() {
  return (
    <section className="bg-dark-secondary py-16 md:py-24" id="oferta">
      <div className="max-w-2xl mx-auto px-4">
        <ScrollReveal>
          <div className="border-2 border-gold rounded-xl p-6 md:p-10 bg-dark-card relative">
            {/* Detalhe brilho no canto */}
            <div className="absolute -top-px -right-px w-20 h-20 bg-gradient-to-bl from-gold/20 to-transparent rounded-bl-full" />

            <h2 className="font-display text-xl md:text-3xl font-bold text-white text-center mb-8">
              Sua vaga na {NOME_WORKSHOP}
            </h2>

            <ul className="space-y-4 mb-8">
              {beneficios.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Preço com ancoragem */}
            <div className="text-center mb-6">
              <span className="text-gray-500 text-lg line-through">R$ 197</span>
              <div className="text-gold font-display text-5xl md:text-6xl font-extrabold mt-1">
                {PRECO}
              </div>
              <p className="text-gray-400 text-sm mt-1">à vista no Pix</p>
            </div>

            <a
              href={LINK_CHECKOUT}
              className="block w-full bg-gold hover:bg-gold-light text-dark font-display font-extrabold text-base md:text-lg px-8 py-4 rounded-lg text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.98]"
            >
              GARANTIR MINHA VAGA AGORA
            </a>

            <p className="text-gray-500 text-xs text-center mt-4">
              Esse investimento se paga no primeiro serviço que você recalcular.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
