import { PRECO, LINK_CHECKOUT } from '../config'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Efeito de fundo sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-20 text-center">
        <span className="inline-block text-gold text-xs md:text-sm font-bold tracking-[0.25em] mb-6 uppercase">
          Imersão ao vivo • 3 noites
        </span>

        <h1 className="font-display text-[2.5rem] md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-white">
          Você trabalha o mês inteiro
          <br />
          e no fim não sobra nada?
        </h1>

        <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Em 3 noites ao vivo, eu te mostro por que você ganha pouco mesmo com a
          agenda cheia — e como virar o técnico que MANDA no próprio negócio,
          cobrando o preço certo e parando de trabalhar de graça.
        </p>

        <a
          href={LINK_CHECKOUT}
          className="inline-block bg-gold hover:bg-gold-light text-dark font-display font-extrabold text-lg md:text-xl px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.98]"
        >
          QUERO MINHA VAGA — {PRECO}
        </a>

        <p className="text-gray-600 text-xs md:text-sm mt-4 tracking-wide">
          Acesso imediato ao grupo da turma • Vagas limitadas
        </p>
      </div>
    </section>
  )
}
