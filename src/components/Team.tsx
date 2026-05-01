import { motion } from "motion/react";
import isabellyImg from "./assets/isabelly-perfil.webp";

const team = [
  {
    name: "Isabelly Vitória",
    role: "Founder & Designer de Sobrancelhas",
    image: isabellyImg,
    description:
      "Fundadora e especialista em design de sobrancelhas, com mais de 10 anos de experiência, dedicada a realçar a beleza natural de cada cliente.",
  },
  {
    name: "Isabel Silva",
    role: "Senior Hair Stylist",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop",
    description:
      "Especialista em colorometria e técnicas avançadas de mechas, focada na saúde e brilho dos fios.",
  },
  {
    name: "Isadora Santos",
    role: "Nail designer",
    image:
      "https://images.unsplash.com/photo-1492106087820-71f171d0866b?q=80&w=1974&auto=format&fit=crop",
    description:
      "Designer de unhas com expertise em nail art e técnicas de alongamento, sempre atualizada com as últimas tendências do mercado.",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-white" id="team">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 uppercase tracking-[0.2em] text-xs font-semibold">
            Expertise & Talento
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4">
            Nossos Profissionais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              <span className="text-gold-600 uppercase tracking-widest text-[10px] font-bold">
                {member.role}
              </span>
              <h3 className="text-2xl font-serif text-gray-900 mb-2 mt-1">
                {member.name}
              </h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
