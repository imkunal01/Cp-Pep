import { useState } from 'react'
import { motion } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check, ExternalLink, Tag, Clock, Zap, FileCode, BookOpen } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.2 }
  }
}

export default function CodeViewer({ file }) {
  const [copied, setCopied] = useState(false)
  const { isDark } = useTheme()

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(file.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lineCount = file.code.split('\n').length

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-5xl mx-auto"
    >
      {/* Header card */}
      <motion.div 
        className="mb-6 p-6 rounded-2xl glass border border-slate-200/50 dark:border-slate-700/50"
        whileHover={{ scale: 1.005 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div 
              className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 shadow-lg"
              whileHover={{ rotate: 5 }}
            >
              <FileCode className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                {file.name.replace('.cpp', '')}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">{file.path}</p>
            </div>
          </div>
          
          {file.difficulty && (
            <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
              file.difficulty === 'Easy' ? 'bg-green-500/20 text-green-600 dark:text-green-400' :
              file.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400' :
              'bg-red-500/20 text-red-600 dark:text-red-400'
            }`}>
              {file.difficulty}
            </span>
          )}
        </div>

        {file.description && (
          <div className="mb-4 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/50">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Problem Description</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300">{file.description}</p>
          </div>
        )}

        {/* Stats row */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-slate-600 dark:text-slate-300">{lineCount} lines</span>
          </div>
          
          {file.timeComplexity && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-slate-600 dark:text-slate-300">Time: {file.timeComplexity}</span>
            </div>
          )}

          {file.spaceComplexity && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
              <span className="text-sm text-slate-600 dark:text-slate-300">Space: {file.spaceComplexity}</span>
            </div>
          )}

          {file.leetcodeLink && (
            <motion.a
              href={file.leetcodeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">LeetCode</span>
            </motion.a>
          )}
        </div>

        {/* Tags */}
        {file.tags && file.tags.length > 0 && (
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-slate-400" />
            {file.tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-primary-500/10 text-primary-600 dark:text-primary-400"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Code block */}
      <motion.div 
        className="relative rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 shadow-xl"
        whileHover={{ boxShadow: "0 20px 40px rgba(14, 165, 233, 0.1)" }}
      >
        {/* Code header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-200/50 dark:bg-slate-800/80 border-b border-slate-300/50 dark:border-slate-700/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-2 text-sm font-mono text-slate-500 dark:text-slate-400">
              {file.name}
            </span>
          </div>
          
          <motion.button
            onClick={copyToClipboard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-300/50 dark:bg-slate-700/50 hover:bg-slate-400/50 dark:hover:bg-slate-600/50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-500 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span className="text-sm text-slate-500 dark:text-slate-400">Copy</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Code content */}
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language="cpp"
            style={isDark ? oneDark : oneLight}
            showLineNumbers
            wrapLines
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              background: isDark ? '#1e293b' : '#f8fafc',
              fontSize: '14px',
            }}
            lineNumberStyle={{
              minWidth: '3em',
              paddingRight: '1em',
              color: isDark ? '#64748b' : '#94a3b8',
              borderRight: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
              marginRight: '1em',
            }}
          >
            {file.code}
          </SyntaxHighlighter>
        </div>
      </motion.div>

      {/* Notes section */}
      {file.notes && (
        <motion.div 
          className="mt-6 p-6 rounded-2xl glass border border-slate-200/50 dark:border-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
            <span>📝</span> Notes
          </h3>
          <p className="text-slate-600 dark:text-slate-300 whitespace-pre-wrap">{file.notes}</p>
        </motion.div>
      )}
    </motion.div>
  )
}
