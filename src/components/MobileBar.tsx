import { PRECO, LINK_CHECKOUT } from '../config'

export default function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-dark-secondary/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
      <div className="flex flex-col">
        <span className="text-gray-400 text-xs">Apenas</span>
        <span className="font-display text-gold text-xl font-extrabold">{PRECO}</span>
      </div>
      <a
        href={LINK_CHECKOUT}
        className="flex-1 bg-gold hover:bg-gold-light text-dark font-display font-extrabold text-sm px-6 py-3 rounded-lg text-center transition-all duration-300 active:scale-[0.98]"
      >
        Garantir vaga
      </a>
    </div>
  )
}
