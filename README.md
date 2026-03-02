# Salão Izaas - Landing Page

Uma landing page sofisticada e moderna para salão de beleza, desenvolvida com foco em design de luxo, inspirada na estética minimalista e elegante do Rom Concept.

![Salão Izaas Preview](https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop)

## 📋 Sobre o Projeto

Este projeto é uma landing page de alta conversão projetada para salões de beleza premium. O design utiliza uma paleta de cores refinada (Preto, Branco e Dourado), tipografia editorial e animações suaves para transmitir exclusividade e profissionalismo.

### Principais Características

- **Design Responsivo:** Layout fluido que se adapta perfeitamente a desktops, tablets e dispositivos móveis.
- **Animações Suaves:** Utilização do `motion` (Framer Motion) para transições de entrada e interações de scroll elegantes.
- **Tipografia Premium:** Combinação das fontes *Playfair Display* (Serifa) para títulos e *Inter* (Sans-serif) para legibilidade.
- **Componentes Modulares:** Estrutura de código limpa e organizada em componentes reutilizáveis.
- **Performance:** Construído com Vite para carregamento rápido e otimizado.

## 🚀 Tecnologias Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[Vite](https://vitejs.dev/)**: Build tool moderna e rápida.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utility-first para estilização ágil.
- **[Motion](https://motion.dev/)**: Biblioteca de animações para React (anteriormente Framer Motion).
- **[Lucide React](https://lucide.dev/)**: Coleção de ícones SVG limpos e consistentes.

## 📂 Estrutura do Projeto

```
/
├── src/
│   ├── components/      # Componentes de UI (Hero, Navbar, Services, etc.)
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada da aplicação
│   └── index.css        # Estilos globais e configuração do Tailwind
├── public/              # Arquivos estáticos
├── index.html           # HTML base
├── package.json         # Dependências e scripts
└── vite.config.ts       # Configuração do Vite
```

## 🛠️ Instalação e Uso

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Deyvlucas/leading-page-salao-izzas.git
   cd salao-izaas
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Build para produção**
   ```bash
   npm run build
   ```

## 🎨 Personalização

### Cores
As cores são definidas no arquivo `src/index.css` utilizando variáveis CSS do Tailwind v4. A paleta principal é baseada em tons de dourado (`--color-gold-*`).

### Imagens
As imagens atuais são provenientes do Unsplash. Para personalizar, substitua as URLs nos componentes localizados em `src/components/`.

### Conteúdo
Os textos e informações de contato podem ser editados diretamente nos componentes:
- `Navbar.tsx`: Links de navegação.
- `Hero.tsx`: Título principal e chamada para ação.
- `About.tsx`: Biografia e descrição do salão.
- `Services.tsx`: Lista de serviços oferecidos.
- `Footer.tsx`: Informações de contato, endereço e links sociais.

---

Desenvolvido com ❤️ para **Salão Izaas**.
