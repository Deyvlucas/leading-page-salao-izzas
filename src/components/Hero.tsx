import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold-400 uppercase tracking-[0.3em]  text-sm md:text-base mb-6"
        >
          Bem-vindo ao Salão Izzas
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-8xl text-white font-serif leading-tight mb-8"
        >
          Contribuímos para o bem-estar e a realização pessoal de nossos clientes
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#services"
            className="inline-block border border-white/30 text-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300"
          >
            Conheça Nossos Serviços
          </a>
        </motion.div>
      </div>
    </section>
  );
}
