import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Folder, FolderOpen, FileCode, Hash, Clock } from 'lucide-react'

const sidebarVariants = {
  hidden: { x: -320, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: { 
    x: -320, 
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.05, type: "spring", stiffness: 300 }
  })
}

export default function Sidebar({ data, selectedFile, setSelectedFile }) {
  const [expandedCategories, setExpandedCategories] = useState(
    Object.keys(data).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  )

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  const getCategoryIcon = (category) => {
    const icons = {
      'LinkedList': '🔗',
      'Trees': '🌳',
      'Stack': '📚',
      'Queue': '📋',
      'Array': '📊',
      'Matrix': '🔲',
      'Sorting': '🔢',
      'Searching': '🔍',
      'Graph': '🕸️',
      'Recursion': '🔄',
      'DynamicProgramming': '💡',
    }
    return icons[category] || '📁'
  }

  const totalProblems = Object.values(data).reduce((acc, files) => acc + files.length, 0)

  return (
    <motion.aside
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed left-0 top-16 bottom-0 w-80 glass border-r border-slate-200/50 dark:border-slate-700/50 overflow-hidden flex flex-col"
    >
      {/* Stats header */}
      <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Problems</p>
              <p className="text-2xl font-bold gradient-text">{totalProblems}</p>
            </div>
          </div>
          <div className="p-2 rounded-lg bg-primary-500/10">
            <Hash className="w-5 h-5 text-primary-500" />
          </div>
        </div>
      </div>

      {/* Categories list */}
      <div className="flex-1 overflow-y-auto p-3">
        {Object.entries(data).map(([category, files], categoryIndex) => (
          <motion.div
            key={category}
            custom={categoryIndex}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-2"
          >
            <motion.button
              onClick={() => toggleCategory(category)}
              whileHover={{ x: 4 }}
              className="w-full flex items-center gap-2 p-2.5 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all group"
            >
              <motion.div
                animate={{ rotate: expandedCategories[category] ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </motion.div>
              
              <span className="text-lg">
                {getCategoryIcon(category)}
              </span>
              
              {expandedCategories[category] ? (
                <FolderOpen className="w-4 h-4 text-primary-500" />
              ) : (
                <Folder className="w-4 h-4 text-slate-400 group-hover:text-primary-500 transition-colors" />
              )}
              
              <span className="flex-1 text-left text-sm font-medium text-slate-700 dark:text-slate-200">
                {category}
              </span>
              
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary-500/10 text-primary-600 dark:text-primary-400">
                {files.length}
              </span>
            </motion.button>

            <AnimatePresence>
              {expandedCategories[category] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  {files.map((file, fileIndex) => (
                    <motion.button
                      key={file.name}
                      custom={fileIndex}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => setSelectedFile(file)}
                      whileHover={{ x: 8, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center gap-2 p-2 pl-10 rounded-lg transition-all ${
                        selectedFile?.name === file.name
                          ? 'bg-primary-500/20 border-l-2 border-primary-500'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <FileCode className={`w-4 h-4 ${
                        selectedFile?.name === file.name 
                          ? 'text-primary-500' 
                          : 'text-slate-400'
                      }`} />
                      <span className={`flex-1 text-left text-sm truncate ${
                        selectedFile?.name === file.name
                          ? 'text-primary-600 dark:text-primary-400 font-medium'
                          : 'text-slate-600 dark:text-slate-300'
                      }`}>
                        {file.name.replace('.cpp', '')}
                      </span>
                      {file.difficulty && (
                        <span className={`px-1.5 py-0.5 rounded text-xs font-medium ${
                          file.difficulty === 'Easy' ? 'bg-green-500/10 text-green-600' :
                          file.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-600' :
                          'bg-red-500/10 text-red-600'
                        }`}>
                          {file.difficulty[0]}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  )
}
