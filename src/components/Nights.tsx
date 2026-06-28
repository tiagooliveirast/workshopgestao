import { DATA_LIVE_1, DATA_LIVE_2, DATA_LIVE_3 } from '../config'
import ScrollReveal from './ScrollReveal'

const noites = [
  {
    numero: 'NOITE 1',
    titulo: 'Quanto você REALMENTE ganha por serviço?',
    subtitulo: 'Precificação',
    texto: 'Você vai recalcular um serviço real e descobrir, na hora, o preço que faz seu negócio dar lucro de verdade.',
    data: DATA_LIVE_1,
  },
  {
    numero: 'NOITE 2',
    titulo: 'Para onde some o seu dinheiro?',
    subtitulo: 'Fluxo de caixa e pró-labore',
    texto: 'Monte um controle simples do seu dinheiro e defina, pela primeira vez, quanto VOCÊ ganha de verdade.',
    data: DATA_LIVE_2,
  },
  {
    numero: 'NOITE 3',
    titulo: 'Como faturar mais SEM pegar mais serviço?',
    subtitulo: 'Recorrência e pós-venda',
    texto: 'Aprenda a faturar com os clientes que você JÁ tem, sem viver caçando cliente novo.',
    data: DATA_LIVE_3,
  },
]

export default function Nights() {
  return (
    <section className="bg-dark-secondary py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-center text-white mb-4">
            As 3 noites
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Ao vivo, com exercícios práticos e suporte direto
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {noites.map((noite, idx) => (
            <ScrollReveal key={idx}>
              <div className="h-full bg-dark-card border border-white/5 rounded-lg p-6 md:p-8 flex flex-col hover:border-gold/30 transition-colors duration-300">
                <span className="text-gold text-xs font-bold tracking-[0.2em] mb-1">
                  {noite.numero}
                </span>
                <span className="text-gold/60 text-xs font-semibold uppercase tracking-wider mb-3">
                  {noite.subtitulo}
                </span>
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-3 leading-snug">
                  {noite.titulo}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-1">
                  {noite.texto}
                </p>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <span className="text-gray-500 text-xs">
                    📅 {noite.data}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
