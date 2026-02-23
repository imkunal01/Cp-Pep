const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Base directory for the code repository
const CODE_BASE_PATH = path.resolve(__dirname, '../../');

// Folders to scan for code files
const ALLOWED_FOLDERS = ['Assignments', 'Contest', 'CP_DSA', 'DSA'];

// File extensions to display
const CODE_EXTENSIONS = ['.cpp', '.c', '.h', '.hpp', '.md', '.txt', '.json'];

app.use(cors());
app.use(express.json());

// Recursively build folder structure
function buildFileTree(dirPath, relativePath = '') {
  const items = [];
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      // Skip hidden files, temp files, and executables
      if (entry.name.startsWith('.') || 
          entry.name.startsWith('temp') ||
          entry.name.endsWith('.exe')) {
        continue;
      }
      
      const fullPath = path.join(dirPath, entry.name);
      const itemRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;
      
      if (entry.isDirectory()) {
        const children = buildFileTree(fullPath, itemRelativePath);
        if (children.length > 0) {
          items.push({
            name: entry.name,
            type: 'folder',
            path: itemRelativePath,
            children: children
          });
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (CODE_EXTENSIONS.includes(ext)) {
          items.push({
            name: entry.name,
            type: 'file',
            path: itemRelativePath,
            extension: ext
          });
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dirPath}:`, err.message);
  }
  
  // Sort: folders first, then files, alphabetically
  items.sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === 'folder' ? -1 : 1;
  });
  
  return items;
}

// Get file tree structure
app.get('/api/files', (req, res) => {
  const tree = [];
  
  for (const folder of ALLOWED_FOLDERS) {
    const folderPath = path.join(CODE_BASE_PATH, folder);
    if (fs.existsSync(folderPath)) {
      const children = buildFileTree(folderPath, folder);
      tree.push({
        name: folder,
        type: 'folder',
        path: folder,
        children: children
      });
    }
  }
  
  res.json(tree);
});

// Get file content
app.get('/api/file/:filePath(*)', (req, res) => {
  const filePath = req.params.filePath;
  
  // Security check: ensure path doesn't escape the allowed directories
  const normalizedPath = path.normalize(filePath);
  const isAllowed = ALLOWED_FOLDERS.some(folder => normalizedPath.startsWith(folder));
  
  if (!isAllowed) {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  const fullPath = path.join(CODE_BASE_PATH, normalizedPath);
  
  if (!fs.existsSync(fullPath)) {
    return res.status(404).json({ error: 'File not found' });
  }
  
  try {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const stats = fs.statSync(fullPath);
    
    res.json({
      name: path.basename(fullPath),
      path: filePath,
      content: content,
      size: stats.size,
      modified: stats.mtime
    });
  } catch (err) {
    res.status(500).json({ error: 'Error reading file' });
  }
});

// Get statistics
app.get('/api/stats', (req, res) => {
  let totalFiles = 0;
  let totalFolders = 0;
  let totalLines = 0;
  
  function countStats(dirPath) {
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.name.startsWith('.') || entry.name.startsWith('temp') || entry.name.endsWith('.exe')) {
          continue;
        }
        
        const fullPath = path.join(dirPath, entry.name);
        
        if (entry.isDirectory()) {
          totalFolders++;
          countStats(fullPath);
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();
          if (CODE_EXTENSIONS.includes(ext)) {
            totalFiles++;
            try {
              const content = fs.readFileSync(fullPath, 'utf-8');
              totalLines += content.split('\n').length;
            } catch (e) {}
          }
        }
      }
    } catch (err) {}
  }
  
  for (const folder of ALLOWED_FOLDERS) {
    const folderPath = path.join(CODE_BASE_PATH, folder);
    if (fs.existsSync(folderPath)) {
      countStats(folderPath);
    }
  }
  
  res.json({
    totalFiles,
    totalFolders,
    totalLines
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📁 Serving code from: ${CODE_BASE_PATH}`);
});
