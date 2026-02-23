import { useState, useEffect } from 'react'
import FileTree from './components/FileTree'
import CodeViewer from './components/CodeViewer'
import StatsBar from './components/StatsBar'
import { Code2, Github, Search } from 'lucide-react'

function App() {
  const [fileTree, setFileTree] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileContent, setFileContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetchFileTree()
    fetchStats()
  }, [])

  const fetchFileTree = async () => {
    try {
      const response = await fetch('/api/files')
      const data = await response.json()
      setFileTree(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching file tree:', error)
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const handleFileSelect = async (filePath) => {
    setSelectedFile(filePath)
    try {
      const response = await fetch(`/api/file/${encodeURIComponent(filePath)}`)
      const data = await response.json()
      setFileContent(data)
    } catch (error) {
      console.error('Error fetching file content:', error)
    }
  }

  const filterTree = (nodes, query) => {
    if (!query) return nodes
    
    return nodes.reduce((filtered, node) => {
      if (node.type === 'folder') {
        const filteredChildren = filterTree(node.children || [], query)
        if (filteredChildren.length > 0 || node.name.toLowerCase().includes(query.toLowerCase())) {
          filtered.push({ ...node, children: filteredChildren })
        }
      } else if (node.name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(node)
      }
      return filtered
    }, [])
  }

  const filteredTree = filterTree(fileTree, searchQuery)

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <Code2 size={28} className="logo-icon" />
          <h1>WinterPep</h1>
          <span className="header-subtitle">Code Viewer</span>
        </div>
        <div className="header-center">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="header-right">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            <Github size={22} />
          </a>
        </div>
      </header>

      {stats && <StatsBar stats={stats} />}

      <main className="main-content">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Explorer</h2>
          </div>
          {loading ? (
            <div className="loading">Loading files...</div>
          ) : (
            <FileTree 
              tree={filteredTree} 
              onFileSelect={handleFileSelect}
              selectedFile={selectedFile}
            />
          )}
        </aside>

        <div className="content-area">
          {fileContent ? (
            <CodeViewer file={fileContent} />
          ) : (
            <div className="welcome-screen">
              <Code2 size={80} strokeWidth={1} />
              <h2>Welcome to WinterPep Code Viewer</h2>
              <p>Select a file from the explorer to view its contents</p>
              <div className="welcome-features">
                <div className="feature">
                  <span className="feature-icon">📂</span>
                  <span>Browse all DSA solutions</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🎨</span>
                  <span>Syntax highlighted code</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🔍</span>
                  <span>Search across all files</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
