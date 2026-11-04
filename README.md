# 🚀 TaskFlow - Aplicação React com Deploy na Vercel

Aplicação web interativa desenvolvida em **React** utilizando o **Visual Studio Code (VS Code)** como ambiente de desenvolvimento, versionada com **Git/GitHub** e publicada na plataforma **Vercel**.

---

## 📋 Sobre o Projeto

O **TaskFlow** é um gerenciador de tarefas moderno, responsivo e intuitivo, desenvolvido com React e Vite. Ele permite gerenciar tarefas com prioridades, categorias, filtros inteligentes e suporte a tema escuro/claro.

### ✨ Funcionalidades
- 📝 **Criação de Tarefas**: Adicione tarefas com título, descrição opcional, categoria e nível de prioridade.
- ✅ **Controle de Status**: Marque tarefas como concluídas ou pendentes de forma interativa.
- 📊 **Estatísticas em Tempo Real**: Painel com contador de tarefas totais, pendentes, concluídas e barra de progresso.
- 🔍 **Busca & Filtros**: Filtre por status (Todas, Pendentes, Concluídas), por categoria ou busque por palavras-chave.
- 🌓 **Tema Dark / Light**: Alternador de tema visual com persistência no navegador.
- 💾 **Persistência Local**: Dados salvos via `localStorage` (não perde suas tarefas ao recarregar).
- 📱 **Design Responsivo**: Adaptado para telas mobile, tablet e desktop.

---

## 🛠️ Tecnologias Utilizadas

- **React 18** (Components, Hooks: `useState`, `useEffect`, `useMemo`)
- **Vite** (Build tool e dev server ultra-rápido)
- **CSS Moderno** (Variáveis CSS, Flexbox, CSS Grid, Glassmorphism)
- **Git & GitHub** (Versionamento de código)
- **Vercel** (Deploy contínuo e hospedagem serverless)

---

## 💻 Como Rodar o Projeto Localmente no VS Code

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- [VS Code](https://code.visualstudio.com/) instalado
- [Git](https://git-scm.com/) instalado

### Passo a Passo

1. **Abrir a pasta no VS Code**:
   Abra o VS Code e utilize o menu **File > Open Folder...** (ou `Ctrl+K Ctrl+O`) e selecione a pasta do projeto.

2. **Abrir o Terminal Integrado**:
   No VS Code, pressione ``Ctrl + ` `` (ou menu **Terminal > New Terminal**).

3. **Instalar as dependências**:
   ```bash
   npm install
   ```

4. **Executar em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse a aplicação no seu navegador pelo link indicado (geralmente `http://localhost:5173`).

---

## 🌐 Passo a Passo: Publicar no GitHub e Fazer Deploy na Vercel

### 1️⃣ Subir para o GitHub

1. Crie um novo repositório no [GitHub](https://github.com/new):
   - Escolha um nome (exemplo: `licao2-react-app`).
   - Mantenha como **Public**.
   - **Não** marque "Add a README file" (já temos um).
   - Clique em **Create repository**.

2. No terminal do VS Code, execute:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit - React TaskFlow app"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```
   *(Substitua `SEU_USUARIO` e `SEU_REPOSITORIO` pelos seus dados do GitHub).*

---

### 2️⃣ Conectar e Fazer Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login (recomendado fazer login com a sua conta do **GitHub**).
2. No painel inicial (Dashboard), clique no botão **"Add New..."** > **"Project"**.
3. Na lista de repositórios do GitHub, localize o repositório que acabou de criar (`licao2-react-app`) e clique em **"Import"**.
4. A Vercel detectará automaticamente que é um projeto **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
5. Clique no botão **"Deploy"**.
6. Aguarde alguns segundos até finalizar a publicação.
7. Pronto! A Vercel exibirá confetes e disponibilizará o link público oficial (ex: `https://licao2-react-app.vercel.app`).
