import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sidebar from './components/Sidebar'
import CodeViewer from './components/CodeViewer'
import Header from './components/Header'
import WelcomeScreen from './components/WelcomeScreen'
import { codeData } from './data/codeData'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [filteredData, setFilteredData] = useState(codeData)

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredData(codeData)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = {}

    Object.entries(codeData).forEach(([category, files]) => {
      const matchedFiles = files.filter(file => 
        file.name.toLowerCase().includes(query) ||
        file.description?.toLowerCase().includes(query) ||
        file.tags?.some(tag => tag.toLowerCase().includes(query))
      )
      if (matchedFiles.length > 0) {
        filtered[category] = matchedFiles
      }
    })

    setFilteredData(filtered)
  }, [searchQuery])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950 transition-colors duration-500">
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        
        <div className="flex pt-16">
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <Sidebar 
                data={filteredData}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            )}
          </AnimatePresence>
          
          <main className={`flex-1 p-6 transition-all duration-300 ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
            <AnimatePresence mode="wait">
              {selectedFile ? (
                <CodeViewer key={selectedFile.name} file={selectedFile} />
              ) : (
                <WelcomeScreen key="welcome" />
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
