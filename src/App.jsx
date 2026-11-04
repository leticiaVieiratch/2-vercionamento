import React, { useState, useEffect, useMemo } from 'react'

const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Criar aplicação React no VS Code',
    description: 'Configurar o ambiente de desenvolvimento e estrutura de arquivos do projeto.',
    category: 'Estudos',
    priority: 'Alta',
    completed: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Versionar com Git e commitar alterações',
    description: 'Inicializar o repositório git local, adicionar arquivos e realizar o commit.',
    category: 'Projetos',
    priority: 'Alta',
    completed: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Publicar repositório no GitHub',
    description: 'Criar repositório remoto no GitHub e realizar push da branch principal.',
    category: 'Trabalho',
    priority: 'Média',
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Realizar deploy na plataforma Vercel',
    description: 'Importar o projeto do GitHub na Vercel e configurar publicação contínua.',
    category: 'Trabalho',
    priority: 'Alta',
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    title: 'Entregar link público da Vercel',
    description: 'Testar aplicação em produção e submeter a URL gerada pela Vercel.',
    category: 'Estudos',
    priority: 'Baixa',
    completed: false,
    createdAt: new Date().toISOString()
  }
]

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('taskflow_tasks')
      return saved ? JSON.parse(saved) : INITIAL_TASKS
    } catch {
      return INITIAL_TASKS
    }
  })

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('taskflow_theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all') // all, pending, completed
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [newTitle, setNewTitle] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [newCategory, setNewCategory] = useState('Estudos')
  const [newPriority, setNewPriority] = useState('Média')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('taskflow_theme', theme)
    } catch (e) {
      console.error(e)
    }
  }, [theme])

  useEffect(() => {
    try {
      localStorage.setItem('taskflow_tasks', JSON.stringify(tasks))
    } catch (e) {
      console.error(e)
    }
  }, [tasks])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    if (!newTitle.trim()) return

    const newTask = {
      id: Date.now().toString(),
      title: newTitle.trim(),
      description: newDesc.trim(),
      category: newCategory,
      priority: newPriority,
      completed: false,
      createdAt: new Date().toISOString()
    }

    setTasks(prev => [newTask, ...prev])
    setNewTitle('')
    setNewDesc('')
  }

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const resetTasks = () => {
    setTasks(INITIAL_TASKS)
  }

  // Filtragem
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())

      const matchStatus =
        statusFilter === 'all'
          ? true
          : statusFilter === 'completed'
          ? task.completed
          : !task.completed

      const matchCategory =
        categoryFilter === 'all' ? true : task.category === categoryFilter

      return matchSearch && matchStatus && matchCategory
    })
  }, [tasks, search, statusFilter, categoryFilter])

  // Estatísticas
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(t => t.completed).length
  const pendingTasks = totalTasks - completedTasks
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="app-header">
        <div className="logo-area">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <h1 className="logo-title">TaskFlow</h1>
            <p className="logo-subtitle">Aplicação React • Deploy na Vercel</p>
          </div>
        </div>

        <div className="header-actions">
          <span className="badge-tag badge-vercel">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L24 22H0L12 1Z" />
            </svg>
            Vercel Ready
          </span>

          <button
            onClick={toggleTheme}
            className="btn-icon"
            title={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="9" x2="15" y2="9" />
              <line x1="9" y1="13" x2="15" y2="13" />
              <line x1="9" y1="17" x2="13" y2="17" />
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-value">{totalTasks}</span>
            <span className="stat-label">Total de Tarefas</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-value">{completedTasks}</span>
            <span className="stat-label">Concluídas</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-value">{pendingTasks}</span>
            <span className="stat-label">Pendentes</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>
          <div className="stat-info">
            <span className="stat-value">{progressPercent}%</span>
            <span className="stat-label">Conclusão Geral</span>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-header">
          <span>Progresso da Atividade</span>
          <span>{completedTasks} de {totalTasks} concluídas ({progressPercent}%)</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      {/* New Task Form */}
      <section className="form-card">
        <h2 className="form-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Adicionar Nova Tarefa
        </h2>
        <form onSubmit={handleAddTask} className="task-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Qual é a tarefa?"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="input-field"
              required
            />
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="select-field"
            >
              <option value="Estudos">Estudos</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Projetos">Projetos</option>
              <option value="Pessoal">Pessoal</option>
            </select>
            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
              className="select-field"
            >
              <option value="Alta">Prioridade Alta</option>
              <option value="Média">Prioridade Média</option>
              <option value="Baixa">Prioridade Baixa</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '0.85rem' }}>
            <input
              type="text"
              placeholder="Descrição ou anotações adicionais (opcional)"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="input-field"
              style={{ flex: 1 }}
            />
            <button type="submit" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Adicionar
            </button>
          </div>
        </form>
      </section>

      {/* Filter and Search Bar */}
      <div className="controls-bar">
        <div className="search-box">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="input-field search-input"
            placeholder="Pesquisar tarefas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <div className="filter-buttons">
            <button
              onClick={() => setStatusFilter('all')}
              className={`filter-btn ${statusFilter === 'all' ? 'active' : ''}`}
            >
              Todas
            </button>
            <button
              onClick={() => setStatusFilter('pending')}
              className={`filter-btn ${statusFilter === 'pending' ? 'active' : ''}`}
            >
              Pendentes
            </button>
            <button
              onClick={() => setStatusFilter('completed')}
              className={`filter-btn ${statusFilter === 'completed' ? 'active' : ''}`}
            >
              Concluídas
            </button>
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="select-field"
            style={{ width: 'auto', padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
          >
            <option value="all">Todas categorias</option>
            <option value="Estudos">Estudos</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Projetos">Projetos</option>
            <option value="Pessoal">Pessoal</option>
          </select>
        </div>
      </div>

      {/* Task List */}
      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </div>
            <h3 className="empty-title">Nenhuma tarefa encontrada</h3>
            <p className="empty-text">
              Não encontramos nenhuma tarefa com os filtros selecionados. Tente limpar os filtros ou adicionar uma nova tarefa.
            </p>
            <button onClick={resetTasks} className="btn-outline">
              Restaurar tarefas padrão
            </button>
          </div>
        ) : (
          filteredTasks.map(task => (
            <div
              key={task.id}
              className={`task-item ${task.completed ? 'completed' : ''}`}
            >
              <button
                onClick={() => toggleTask(task.id)}
                className={`task-checkbox ${task.completed ? 'checked' : ''}`}
                aria-label={task.completed ? 'Marcar como pendente' : 'Marcar como concluída'}
              >
                {task.completed && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>

              <div className="task-content">
                <span className="task-title">{task.title}</span>
                {task.description && (
                  <span className="task-desc">{task.description}</span>
                )}
                <div className="task-meta">
                  <span className="category-tag">{task.category}</span>
                  <span className={`priority-tag priority-${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                </div>
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="btn-delete"
                title="Excluir tarefa"
                aria-label="Excluir tarefa"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <p>Desenvolvido com React + Vite • Pronto para deploy no GitHub & Vercel</p>
        <div className="footer-tags">
          <span className="badge-tag" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)' }}>React 18</span>
          <span className="badge-tag" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}>Vite</span>
          <span className="badge-tag" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}>Git & GitHub</span>
          <span className="badge-tag" style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent)' }}>Vercel Deploy</span>
        </div>
      </footer>
    </div>
  )
}

