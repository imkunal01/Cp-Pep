# WinterPep Code Viewer 🚀

A beautiful MERN stack application to view and browse all your DSA code solutions.

## Features

- 📂 **File Explorer** - Browse through all folders and files
- 🎨 **Syntax Highlighting** - Beautiful code display with syntax highlighting for C++
- 🔍 **Search** - Quickly search for files across the repository
- 📊 **Statistics** - View total files, folders, and lines of code
- 📋 **Copy to Clipboard** - One-click copy of code content
- 🌙 **Dark Theme** - Easy on the eyes GitHub-inspired dark theme

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Syntax Highlighting**: react-syntax-highlighter
- **Icons**: lucide-react

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Install all dependencies:
```bash
cd codeviewerwebsite
npm run install:all
```

Or install separately:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Running the Application

1. **Start the server** (Terminal 1):
```bash
cd server
npm run dev
```

2. **Start the client** (Terminal 2):
```bash
cd client
npm run dev
```

3. Open http://localhost:3000 in your browser

## Project Structure

```
codeviewerwebsite/
├── server/
│   ├── index.js         # Express server & API routes
│   └── package.json
├── client/
│   ├── src/
│   │   ├── App.jsx              # Main app component
│   │   ├── index.css            # Global styles
│   │   └── components/
│   │       ├── FileTree.jsx     # File explorer component
│   │       ├── CodeViewer.jsx   # Code display component
│   │       └── StatsBar.jsx     # Statistics bar
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── package.json         # Root scripts
```

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/files` | Get file tree structure |
| `GET /api/file/:path` | Get file content |
| `GET /api/stats` | Get repository statistics |

## Screenshots

The application displays:
- Left sidebar with expandable folder tree
- Main content area with syntax-highlighted code
- Header with search functionality
- Stats bar showing file/folder/line counts

---

*Built with ❤️ for WinterPep DSA Practice*
