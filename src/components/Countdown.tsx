import { DATA_LIMITE_INSCRICAO } from '../config'
import ScrollReveal from './ScrollReveal'
import { useCountdown } from '../hooks/useCountdown'

export default function Countdown() {
  const timeLeft = useCountdown(DATA_LIMITE_INSCRICAO)

  return (
    <section className="bg-dark py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <ScrollReveal>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <h2 className="font-display text-lg md:text-2xl font-bold text-white mb-8">
            As inscrições encerram em:
          </h2>

          {timeLeft ? (
            <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-sm mx-auto">
              {([
                { label: 'Dias', value: timeLeft.days },
                { label: 'Horas', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Seg', value: timeLeft.seconds },
              ] as const).map((item) => (
                <div
                  key={item.label}
                  className="bg-dark-card border border-white/5 rounded-lg p-3 md:p-4"
                >
                  <div className="font-display text-2xl md:text-4xl font-extrabold text-gold">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm mt-1 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-display text-2xl md:text-3xl font-extrabold text-red-500">
              Inscrições encerradas
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
