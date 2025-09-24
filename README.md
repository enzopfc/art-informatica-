# Art Informática - Site Institucional

Site institucional desenvolvido em **React + Vite + Tailwind CSS** para a papelaria Art Informática.

## 🏢 Sobre a Empresa

**Art Informática** - Sua papelaria e informática em um só lugar.

📍 **Endereço:** R. XV de Novembro, 566 – Santa Rosa, Artur Nogueira – SP, 13163-190
📞 **Telefone:** (19) 3827-2079
📱 **WhatsApp:** (19) 3827-2079

### Horário de Funcionamento
- **Segunda a Sexta:** 08:30 – 18:00
- **Sábado:** 09:00 – 13:00
- **Domingo:** Fechado

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework de estilização
- **Font Awesome** - Ícones
- **Google Fonts (Inter)** - Tipografia

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Comandos

```bash
# Clonar o repositório
git clone [url-do-repositorio]
cd art-informatica-react

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎯 Funcionalidades

### 🌐 Site Institucional
- Header responsivo com navegação suave
- Seção Hero com apresentação da empresa
- Seção "Quem Somos" com diferenciais
- Catálogo de serviços organizado
- Informações de contato completas
- Footer com dados da empresa
- Design totalmente responsivo

### 🤖 Chatbot de Autoatendimento
- Ícone flutuante no canto inferior direito
- Interface de chat com balões de mensagem
- Fluxo de atendimento completo:
  - **Financeiro** → Redirecionamento para WhatsApp
  - **Orçamentos** → Formulário de solicitação
  - **Suporte técnico** → Contato especializado
  - **Outros assuntos** → Atendimento humano
- Validação de formulários
- Links diretos para WhatsApp
- Navegação intuitiva entre opções

## 🎨 Design

- **Paleta de cores:** Azul (#667eea) e Roxo (#764ba2)
- **Tipografia:** Inter (Google Fonts)
- **Estilo:** Moderno, clean e profissional
- **Animações:** Suaves e elegantes
- **Responsividade:** Mobile-first

## 🚀 Deploy

### Netlify
1. Faça o build: `npm run build`
2. Arraste a pasta `dist` para o Netlify
3. Configure redirects se necessário

### Vercel
1. Conecte o repositório GitHub
2. Configure o build command: `npm run build`
3. Configure output directory: `dist`

### GitHub Pages
1. Instale: `npm install --save-dev gh-pages`
2. Configure no package.json:
   ```json
   {
     "homepage": "https://[username].github.io/[repo-name]",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Execute: `npm run deploy`

## 📱 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx      # Cabeçalho e navegação
│   ├── Footer.jsx      # Rodapé com informações
│   ├── Sections.jsx    # Seções principais do site
│   └── Chatbot.jsx     # Chatbot de autoatendimento
├── App.jsx             # Componente principal
├── main.jsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 📞 Contato

Para suporte ou dúvidas sobre o projeto, entre em contato com a Art Informática:

- **Site:** [Site institucional]
- **WhatsApp:** https://wa.me/5519382720799
- **Telefone:** (19) 3827-2079

---

Desenvolvido com ❤️ para Art Informática+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
