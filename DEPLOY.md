# 🚀 Guia de Deploy - Art Informática

Este guia contém instruções detalhadas para fazer o deploy do site da Art Informática em diferentes plataformas.

## ⚡ Deploy Rápido

### 1. Netlify (Recomendado)
**Mais simples e rápido:**

```bash
# 1. Faça o build
npm run build

# 2. Acesse https://netlify.com
# 3. Arraste a pasta 'dist' para o deploy
# 4. Pronto! Site no ar em segundos
```

### 2. Vercel
**Integração automática com GitHub:**

```bash
# 1. Acesse https://vercel.com
# 2. Conecte com GitHub
# 3. Importe este repositório
# 4. Deploy automático configurado!
```

### 3. GitHub Pages
**Hospedagem gratuita no GitHub:**

```bash
# 1. Instale a dependência
npm install --save-dev gh-pages

# 2. Adicione no package.json:
"homepage": "https://enzopfc.github.io/art-informatica-",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# 3. Faça o deploy
npm run deploy
```

## 🔧 Configurações Incluídas

### Netlify
- ✅ `netlify.toml` configurado
- ✅ Redirects para SPA
- ✅ Build automático

### Vercel
- ✅ `vercel.json` configurado
- ✅ Rewrites para SPA
- ✅ Build settings

## 🌍 URLs de Acesso

Após o deploy, o site estará disponível em:

- **Netlify:** `https://[nome-do-site].netlify.app`
- **Vercel:** `https://[nome-do-projeto].vercel.app`
- **GitHub Pages:** `https://enzopfc.github.io/art-informatica-`

## 📱 Teste Local

Antes do deploy, teste sempre localmente:

```bash
# Desenvolvimento
npm run dev

# Build e preview
npm run build
npm run preview
```

## ✅ Checklist Pré-Deploy

- [ ] Testou localmente com `npm run dev`
- [ ] Build executou sem erros com `npm run build`
- [ ] Testou o preview com `npm run preview`
- [ ] Verificou que o chatbot funciona
- [ ] Links do WhatsApp estão corretos
- [ ] Informações de contato estão atualizadas

## 🎯 Recursos do Site

### Páginas/Seções
- ✅ Home com hero section
- ✅ Quem Somos
- ✅ Serviços (Papelaria, Informática, Suporte, Impressão)
- ✅ Contato com horários

### Chatbot
- ✅ Autoatendimento funcional
- ✅ Formulário de orçamento
- ✅ Links diretos para WhatsApp: `https://wa.me/5519382720799`
- ✅ Direcionamento por setor

### Otimizações
- ✅ Responsivo (mobile-first)
- ✅ SEO básico configurado
- ✅ Performance otimizada
- ✅ Acessibilidade considerada

## 🚨 Problemas Comuns

### Build com erros CSS
- **Causa:** Classes Tailwind personalizadas
- **Solução:** Build funciona normalmente, ignore warnings

### Links não funcionam em produção
- **Causa:** Configuração SPA
- **Solução:** Files `netlify.toml` e `vercel.json` resolvem isso

### Chatbot não abre
- **Causa:** JavaScript não carregado
- **Solução:** Verifique se todos os arquivos foram deployados

## 📞 Suporte

Em caso de dúvidas sobre o deploy:
- WhatsApp: https://wa.me/5519382720799
- Telefone: (19) 3827-2079

---

💡 **Dica:** Use Netlify para deploy mais rápido ou Vercel para melhor integração com GitHub!