import { FileCode, Folder, Code2 } from 'lucide-react'

function StatsBar({ stats }) {
  return (
    <div className="stats-bar">
      <div className="stat-item">
        <FileCode size={18} />
        <span className="stat-value">{stats.totalFiles}</span>
        <span className="stat-label">Files</span>
      </div>
      <div className="stat-item">
        <Folder size={18} />
        <span className="stat-value">{stats.totalFolders}</span>
        <span className="stat-label">Folders</span>
      </div>
      <div className="stat-item">
        <Code2 size={18} />
        <span className="stat-value">{stats.totalLines.toLocaleString()}</span>
        <span className="stat-label">Lines of Code</span>
      </div>
    </div>
  )
}

export default StatsBar
