# 🚀 TaskFlow - Aplicação React com Deploy na Vercel

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4.11-646CFF?logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/Git-Versionado-F05032?logo=git&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy_Ready-000000?logo=vercel&logoColor=white)

Aplicação web interativa desenvolvida em **React** utilizando o **Visual Studio Code (VS Code)** como ambiente de desenvolvimento, versionada com **Git/GitHub** e publicada na plataforma **Vercel**.

Repositório oficial: **[github.com/leticiaVieiratch/2-vercionamento](https://github.com/leticiaVieiratch/2-vercionamento)**

---

## 📋 Sobre o Projeto

O **TaskFlow** é um gerenciador de tarefas moderno, responsivo e intuitivo, desenvolvido com React e Vite. A aplicação foi concebida para atender todos os critérios da atividade de desenvolvimento front-end com versionamento e publicação contínua.

### ✨ Funcionalidades
- 📝 **Criação de Tarefas**: Adicione tarefas com título, descrição opcional, categoria (Estudos, Trabalho, Projetos, Pessoal) e nível de prioridade (Alta, Média, Baixa).
- ✅ **Controle de Status**: Marque tarefas como concluídas ou pendentes de forma interativa.
- 📊 **Estatísticas em Tempo Real**: Painel com contador de tarefas totais, pendentes, concluídas e barra de progresso calculada dinamicamente.
- 🔍 **Busca & Filtros**: Filtre por status (Todas, Pendentes, Concluídas), por categoria ou realize busca textual em tempo real.
- 🌓 **Tema Dark / Light**: Alternador de tema visual com persistência no navegador.
- 💾 **Persistência Local**: Dados salvos via `localStorage` (suas tarefas permanecem salvas mesmo após atualizar ou fechar a página).
- 📱 **Design Responsivo**: Interface adaptada para smartphones, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **React 18** (Components, Hooks: `useState`, `useEffect`, `useMemo`)
- **Vite** (Build tool e dev server de alta performance)
- **CSS3 Moderno** (Variáveis customizadas, Flexbox, CSS Grid, Glassmorphism)
- **Git & GitHub** (Versionamento e repositório remoto)
- **Vercel** (Deploy contínuo e hospedagem cloud)

---

## 💻 Como Executar o Projeto Localmente no VS Code

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### Passo a Passo

1. **Clonar ou abrir o projeto no VS Code**:
   Abra o VS Code, vá em **File > Open Folder...** e selecione a pasta do projeto.

2. **Abrir o Terminal Integrado**:
   Pressione as teclas ``Ctrl + ` `` (ou no menu superior: **Terminal > New Terminal**).

3. **Instalar as dependências**:
   ```bash
   npm install
   ```

4. **Executar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

5. **Acessar no navegador**:
   Abra seu navegador em:
   👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 Publicação no GitHub e Deploy na Vercel

### 1️⃣ Versionamento e Push no GitHub

O projeto já está configurado e pronto para envio ao repositório:
```bash
# Adicionar alterações e commitar
git add .
git commit -m "feat: complete React app with docs and deploy setup"

# Enviar para o repositório principal
git push -u origin main
```

---

### 2️⃣ Conectar e Fazer Deploy na Vercel

1. Acesse **[vercel.com](https://vercel.com)** e faça login com sua conta do **GitHub**.
2. No painel inicial (Dashboard), clique em **Add New...** ➔ **Project**.
3. Na lista de repositórios, selecione **`2-vercionamento`** e clique em **Import**.
4. As configurações padrão já são compatíveis:
   - **Framework Preset**: `Vite`
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
5. Clique em **Deploy**.
6. Em instantes, sua aplicação estará online com uma URL pública (exemplo: `https://2-vercionamento.vercel.app`).

---

## 👤 Autora
Desenvolvido por **Letícia Vieira**  
GitHub: [@leticiaVieiratch](https://github.com/leticiaVieiratch)
