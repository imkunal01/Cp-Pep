import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check, FileCode, Calendar, HardDrive } from 'lucide-react'
import { useState } from 'react'

function CodeViewer({ file }) {
  const [copied, setCopied] = useState(false)

  const getLanguage = (filename) => {
    const ext = filename.split('.').pop().toLowerCase()
    const languageMap = {
      'cpp': 'cpp',
      'c': 'c',
      'h': 'cpp',
      'hpp': 'cpp',
      'md': 'markdown',
      'json': 'json',
      'txt': 'text'
    }
    return languageMap[ext] || 'text'
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(file.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const lineCount = file.content.split('\n').length

  return (
    <div className="code-viewer">
      <div className="code-header">
        <div className="code-header-left">
          <FileCode size={18} />
          <span className="code-filename">{file.name}</span>
          <span className="code-path">{file.path}</span>
        </div>
        <div className="code-header-right">
          <button 
            className={`copy-btn ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
            title="Copy to clipboard"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      <div className="code-meta">
        <span className="meta-item">
          <Calendar size={14} />
          {formatDate(file.modified)}
        </span>
        <span className="meta-item">
          <HardDrive size={14} />
          {formatFileSize(file.size)}
        </span>
        <span className="meta-item">
          {lineCount} lines
        </span>
      </div>

      <div className="code-content">
        <SyntaxHighlighter
          language={getLanguage(file.name)}
          style={oneDark}
          showLineNumbers={true}
          wrapLines={true}
          customStyle={{
            margin: 0,
            borderRadius: '0 0 8px 8px',
            fontSize: '14px',
            fontFamily: "'JetBrains Mono', monospace"
          }}
          lineNumberStyle={{
            minWidth: '3em',
            paddingRight: '1em',
            color: '#636d83',
            textAlign: 'right'
          }}
        >
          {file.content}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeViewer
