import ScrollReveal from './ScrollReveal'

export default function Target() {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-center text-white mb-12">
            Para quem é essa imersão?
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ScrollReveal>
            <div className="bg-dark-card border border-green-900/30 rounded-lg p-6 md:p-8">
              <h3 className="font-display text-xl font-bold text-green-400 mb-4">
                ✅ É pra você se:
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Você é técnico autônomo de refrigeração ou eletrodomésticos que
                quer parar de trabalhar muito e ganhar pouco. Quer cobrar com
                segurança, organizar o negócio e finalmente ter controle sobre
                suas finanças.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-dark-card border border-red-900/30 rounded-lg p-6 md:p-8">
              <h3 className="font-display text-xl font-bold text-red-400 mb-4">
                ❌ NÃO é pra você se:
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Você busca um curso técnico de conserto (aqui o foco é GESTÃO)
                ou não está disposto a aplicar o que aprender nas aulas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
