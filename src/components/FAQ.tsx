import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

interface FAQItem {
  pergunta: string
  resposta: string
}

const faqs: FAQItem[] = [
  {
    pergunta: 'E se eu não puder assistir ao vivo?',
    resposta:
      'Sem problemas! Todas as aulas ficam gravadas por 7 dias. Você assiste no horário que funcionar melhor pra você.',
  },
  {
    pergunta: 'Serve pro meu segmento (ar-condicionado, geladeira, máquina de lavar)?',
    resposta:
      'Sim! Gestão serve pra todo técnico autônomo, independente do segmento. Os princípios são os mesmos.',
  },
  {
    pergunta: 'Como eu acesso?',
    resposta:
      'Após a compra, você recebe o link do grupo exclusivo no WhatsApp e os links de acesso às aulas.',
  },
  {
    pergunta: 'Preciso entender de finanças?',
    resposta:
      'Não. Vamos começar do zero, na linguagem do técnico. Se você sabe fazer um orçamento, você consegue acompanhar.',
  },
  {
    pergunta: 'É curso de conserto?',
    resposta:
      'Não. Essa imersão é de GESTÃO do seu negócio. Aqui você aprende a precificar, organizar o fluxo de caixa e fidelizar cliente.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  function toggle(idx: number) {
    setOpenIdx(prev => (prev === idx ? null : idx))
  }

  return (
    <section className="bg-dark-secondary py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-center text-white mb-12">
            Perguntas frequentes
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={idx}>
              <div className="bg-dark-card border border-white/5 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left text-white font-semibold text-sm md:text-base hover:bg-white/5 transition-colors"
                >
                  <span>{faq.pergunta}</span>
                  <svg
                    className={`w-5 h-5 text-gold flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openIdx === idx ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIdx === idx ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-4 md:px-5 pb-4 md:pb-5 text-gray-400 text-sm md:text-base leading-relaxed">
                    {faq.resposta}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
