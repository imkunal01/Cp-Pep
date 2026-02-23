# WinterPep Code Viewer 🚀

A beautiful, modern website to showcase your DSA problem solutions with syntax highlighting, search functionality, and a sexy animated UI.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF006E?logo=framer)

## ✨ Features

- 🎨 **Sexy UI with Animations** - Smooth Framer Motion animations, glassmorphism effects, gradient accents
- 🔍 **Search Functionality** - Find problems by name, tags, or keywords
- 📁 **Category Navigation** - Browse problems organized by data structure/algorithm type
- 🌙 **Dark/Light Theme** - Toggle between themes with animated transitions
- 📋 **Code Copy Button** - One-click copy to clipboard
- 💡 **Problem Descriptions** - Add context, complexity analysis, and notes
- 🏷️ **Tags & Difficulty** - Visual indicators for problem metadata
- 🔗 **LeetCode Links** - Quick access to original problems
- 📊 **Syntax Highlighting** - Beautiful code display with line numbers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd client
npm install
```

### Development

```bash
npm run dev
```

Opens at http://localhost:3000

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
client/
├── public/
│   └── vite.svg          # Favicon
├── scripts/
│   └── generateCodeData.js   # Auto-generate data from repo
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Top navigation bar
│   │   ├── Sidebar.jsx       # Category/file tree
│   │   ├── CodeViewer.jsx    # Code display component
│   │   └── WelcomeScreen.jsx # Landing screen
│   ├── context/
│   │   └── ThemeContext.jsx  # Theme provider
│   ├── data/
│   │   └── codeData.js       # Problem data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 📝 Adding New Problems

### Option 1: Manual (Recommended for customization)

Edit `src/data/codeData.js`:

```javascript
export const codeData = {
  'Category': [
    {
      name: 'ProblemName.cpp',
      path: 'Assignments/ProblemName.cpp',
      description: 'Problem description here...',
      difficulty: 'Easy', // 'Easy' | 'Medium' | 'Hard'
      tags: ['Array', 'Two Pointers'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      leetcodeLink: 'https://leetcode.com/problems/...',
      notes: 'Additional notes or explanation',
      code: `// Your C++ code here...`
    },
    // ... more problems
  ],
  // ... more categories
};
```

### Option 2: Auto-generate from Repository

```bash
node scripts/generateCodeData.js
```

This scans your repository and generates `codeData.js` automatically.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
    }
  }
}
```

### Animations

Modify Framer Motion variants in components for different animation styles.

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide Icons** - Icon library
- **React Syntax Highlighter** - Code highlighting

## 📜 License

MIT

---

Made with ❤️ for DSA enthusiasts
