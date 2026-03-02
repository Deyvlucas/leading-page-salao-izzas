import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="text-3xl font-serif tracking-widest text-white uppercase block mb-6">
              SALÃO<span className="text-gold-400"></span> IZZAS
            </a>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Oferecendo soluções estéticas únicas e surpreendentes, num ambiente agradável e acolhedor.
            </p>
          </div>

          {/* Locations */}
          <div className="md:col-span-1">
            <h4 className="text-gold-400 uppercase tracking-widest text-xs font-semibold mb-6">
              Endereço
            </h4>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li>
                <strong className="block text-white mb-1">Rua João Gonçalves de Lima, n° 1234</strong>
                <span className="block">São Geraldo</span>
                <span className="block">Arcoverde - PE</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-gold-400 uppercase tracking-widest text-xs font-semibold mb-6">
              Contato
            </h4>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-gold-400" />
                <span>(87) 9.2140-5010</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-400" />
                <span>salaoizzas@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={16} className="text-gold-400" />
                <span>Ter - Sáb: 09h às 20h</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-gold-400 uppercase tracking-widest text-xs font-semibold mb-6">
              Newsletter
            </h4>
            <p className="text-gray-400 text-xs mb-4">
              Receba novidades e tendências exclusivas.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-500 text-white px-4 py-3 text-xs uppercase tracking-widest hover:bg-gold-600 transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>© 2026 Salão Izzas. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Youtube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
