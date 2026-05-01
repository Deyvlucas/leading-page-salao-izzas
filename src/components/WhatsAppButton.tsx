import { motion } from "motion/react";

export default function WhatsAppButton() {
  const phoneNumber = "5587921405010";
  const message = encodeURIComponent(
    "Olá! Gostaria de agendar um atendimento no Salão Izzas.",
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#22c35e] transition-colors duration-300 flex items-center justify-center group"
      aria-label="Falar pelo WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>

      {/* Tooltip opcional que aparece no hover */}
      <span className="absolute right-full mr-4 bg-black/80 text-white text-[10px] uppercase tracking-widest py-2 px-4 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Agende seu horário
      </span>
    </motion.a>
  );
}
