import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1976&auto=format&fit=crop"
            alt="Isabelly Vitoria"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-8 left-8 bg-white p-6 shadow-lg max-w-xs">
            <p className="font-serif text-2xl italic text-gray-900">Isabelly Vitória</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Founder & Creative Director</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold">
            A Mente Criativa
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Experiência moldada pelo tempo e planejamento.
          </h2>
          <div className="space-y-6 text-gray-600 font-light leading-relaxed ">
            <p>
              O Salão Izzas é o resultado de uma jornada de dedicação iniciada precocemente por Isabelly Vitoria. Criado dentro do ambiente de salão desde os 13 anos, ele transformou a vivência familiar e a observação atenta em uma carreira profissional de alto impacto. Com uma formação sólida pela prestigiada Beauty University (Natalia Beauty), Isabelly refinou sua técnica e sensibilidade antes de dar o passo mais importante de sua trajetória: a abertura de seu próprio espaço.
            </p>
            <p>
              Mais do que um empreendimento, o Salão Izzas é um centro de estética onde a seriedade e a sofisticação se encontram. Cada atendimento é fruto de um planejamento minucioso, focado na harmonia facial e no bem-estar absoluto das clientes. Aqui, a experiência de anos de prática se une à inovação técnica para elevar o patamar do design de sobrancelhas, entregando resultados naturais e personalizados.
            </p>
          </div>
          <a
            href="#"
            className="inline-block border-b border-black pb-1 text-sm uppercase tracking-widest hover:text-gold-600 hover:border-gold-600 transition-colors"
          >
            Ler Biografia Completa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
