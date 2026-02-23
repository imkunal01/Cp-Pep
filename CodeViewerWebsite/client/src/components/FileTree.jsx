import { useState } from 'react'
import { ChevronRight, ChevronDown, Folder, FolderOpen, FileCode, FileText } from 'lucide-react'

function FileTreeNode({ node, onFileSelect, selectedFile, level = 0 }) {
  const [isExpanded, setIsExpanded] = useState(level < 1)

  const getFileIcon = (extension) => {
    const iconProps = { size: 16 }
    switch (extension) {
      case '.cpp':
      case '.c':
      case '.h':
      case '.hpp':
        return <FileCode {...iconProps} className="icon-cpp" />
      case '.md':
        return <FileText {...iconProps} className="icon-md" />
      default:
        return <FileCode {...iconProps} />
    }
  }

  if (node.type === 'folder') {
    return (
      <div className="tree-node">
        <div 
          className="tree-item folder"
          style={{ paddingLeft: `${level * 16 + 8}px` }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="tree-chevron">
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
          <span className="tree-icon">
            {isExpanded ? <FolderOpen size={16} /> : <Folder size={16} />}
          </span>
          <span className="tree-name">{node.name}</span>
          <span className="tree-count">{node.children?.length || 0}</span>
        </div>
        {isExpanded && node.children && (
          <div className="tree-children">
            {node.children.map((child, index) => (
              <FileTreeNode 
                key={`${child.path}-${index}`}
                node={child}
                onFileSelect={onFileSelect}
                selectedFile={selectedFile}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="tree-node">
      <div 
        className={`tree-item file ${selectedFile === node.path ? 'selected' : ''}`}
        style={{ paddingLeft: `${level * 16 + 28}px` }}
        onClick={() => onFileSelect(node.path)}
      >
        <span className="tree-icon">
          {getFileIcon(node.extension)}
        </span>
        <span className="tree-name">{node.name}</span>
      </div>
    </div>
  )
}

function FileTree({ tree, onFileSelect, selectedFile }) {
  if (!tree || tree.length === 0) {
    return <div className="tree-empty">No files found</div>
  }

  return (
    <div className="file-tree">
      {tree.map((node, index) => (
        <FileTreeNode 
          key={`${node.path}-${index}`}
          node={node}
          onFileSelect={onFileSelect}
          selectedFile={selectedFile}
        />
      ))}
    </div>
  )
}

export default FileTree
