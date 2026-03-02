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
            Criando tendências globais em coloração e estilo.
          </h2>
          <div className="space-y-6 text-gray-600 font-light leading-relaxed">
            <p>
              Isabelly Vitoria iniciou sua carreira como educador da Wella. Se tornou um hair stylist mundialmente conhecido por lançar técnicas novas de coloração, sendo uma delas feitas à mão, dando um ar bem natural aos fios.
            </p>
            <p>
              É o idealizador de todas as campanhas que levam sua assinatura, desde o casting de modelos, fotógrafo, locação e figurino. Conquistou a confiança de grandes nomes e celebridades que buscam a excelência em cada detalhe.
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
