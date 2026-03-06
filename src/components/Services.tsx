import { motion } from 'motion/react';

const services = [
  {
    title: 'Escova',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop',
    description: 'Técnica exclusiva para morenas iluminadas com contraste marcante.',
  },
  {
    title: 'Capinha',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop',
    description: 'O loiro icônico, saudável e natural que conquistou o mundo.',
  },
  {
    title: 'Sobrancelhas',
    image: 'https://images.unsplash.com/photo-1492106087820-71f171d0866b?q=80&w=1974&auto=format&fit=crop',
    description: 'Tons quentes e sofisticados para realçar a beleza natural.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-stone-50" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4">
            Técnicas Exclusivas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
