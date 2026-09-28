# 🚀 Como Subir o Site LetUs DEV para o GitHub

Siga estes passos para colocar o site no GitHub:

---

## 📋 Pré-requisitos

1. **Instalar Git** (se ainda não tiver):
   - Baixe em: https://git-scm.com/download/win
   - Instale com as opções padrão
   - Reinicie o terminal após a instalação

2. **Criar conta no GitHub** (se ainda não tiver):
   - Acesse: https://github.com/signup
   - Crie sua conta gratuita

---

## 🔧 Passo a Passo

### 1. Abrir Terminal no Projeto

```powershell
# No VS Code, pressione Ctrl + ` (abre terminal)
# Ou abra PowerShell na pasta do projeto
```

### 2. Inicializar Git

```powershell
git init
```

### 3. Adicionar Todos os Arquivos

```powershell
git add .
```

### 4. Fazer o Primeiro Commit

```powershell
git commit -m "Primeiro commit: Site LetUs DEV completo"
```

### 5. Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `letusdev-website` (ou outro nome)
3. Descrição: `Website oficial da LetUs DEV - Soluções Digitais em Moçambique`
4. Deixe como **Público** (ou Privado se preferir)
5. **NÃO** marque nenhuma opção (README, .gitignore, license)
6. Clique em **"Create repository"**

### 6. Conectar ao Repositório Remoto

```powershell
# Substitua SEU-USUARIO pelo seu nome de usuário do GitHub
git remote add origin https://github.com/SEU-USUARIO/letusdev-website.git
```

### 7. Renomear Branch para Main (se necessário)

```powershell
git branch -M main
```

### 8. Enviar para o GitHub

```powershell
git push -u origin main
```

**Nota:** Na primeira vez, pode pedir suas credenciais do GitHub.

---

## 🌐 Publicar o Site Online (GitHub Pages)

Depois de subir para o GitHub:

### Opção 1: GitHub Pages

1. Vá nas **Settings** do repositório
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. Crie arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Opção 2: Vercel (Mais Fácil e Recomendado)

1. Acesse: https://vercel.com
2. Faça login com sua conta do GitHub
3. Clique em **"New Project"**
4. Selecione o repositório `letusdev-website`
5. Clique em **"Deploy"**
6. Pronto! Seu site estará online em poucos minutos

**URL será algo como:** `https://letusdev-website.vercel.app`

### Opção 3: Netlify

1. Acesse: https://app.netlify.com
2. Faça login com sua conta do GitHub
3. Clique em **"Add new site" → "Import an existing project"**
4. Selecione GitHub e o repositório
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Clique em **"Deploy"**

---

## 🔄 Atualizar o Site Depois

Quando fizer mudanças no código:

```powershell
# 1. Adicionar arquivos modificados
git add .

# 2. Fazer commit com mensagem descritiva
git commit -m "Atualização: descrição do que mudou"

# 3. Enviar para o GitHub
git push
```

O site será atualizado automaticamente se estiver usando Vercel ou Netlify!

---

## 📝 Comandos Git Úteis

```powershell
# Ver status dos arquivos
git status

# Ver histórico de commits
git log --oneline

# Ver diferenças não commitadas
git diff

# Criar nova branch
git checkout -b nova-feature

# Voltar para a branch main
git checkout main
```

---

## ❗ Problemas Comuns

### 1. Git não reconhecido
- Instale o Git: https://git-scm.com/download/win
- Reinicie o terminal

### 2. Erro ao fazer push
```powershell
# Solução: configurar nome e email
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### 3. Conflitos ao fazer push
```powershell
# Solução: puxar mudanças primeiro
git pull origin main
# Resolver conflitos manualmente
git add .
git commit -m "Resolver conflitos"
git push
```

---

## ✅ Checklist Final

- [ ] Git instalado
- [ ] Conta no GitHub criada
- [ ] Repositório criado no GitHub
- [ ] Código enviado com `git push`
- [ ] Site publicado (Vercel/Netlify/GitHub Pages)
- [ ] Site acessível online

---

## 🎉 Pronto!

Seu site LetUs DEV agora está:
- ✅ Versionado no Git
- ✅ Salvo no GitHub
- ✅ Publicado online (se configurou Vercel/Netlify)

**Qualquer dúvida, consulte a documentação:**
- Git: https://git-scm.com/doc
- GitHub: https://docs.github.com
- Vercel: https://vercel.com/docs
