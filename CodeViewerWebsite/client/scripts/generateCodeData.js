/**
 * Code Scanner Script
 * Run this script to generate codeData.js from your actual repository files
 * 
 * Usage: node scripts/generateCodeData.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const REPO_ROOT = path.resolve(__dirname, '../../..'); // WinterPep folder
const OUTPUT_FILE = path.resolve(__dirname, '../src/data/codeData.js');

// Folders to scan
const SCAN_FOLDERS = [
  { path: 'Assignments', category: 'auto' },
  { path: 'DSA/Arrays', category: 'Arrays' },
  { path: 'DSA/LinkedList', category: 'LinkedList' },
  { path: 'DSA/Stack', category: 'Stack' },
  { path: 'DSA/Trees', category: 'Trees' },
  { path: 'DSA/Graphs', category: 'Graphs' },
  { path: 'DSA/Sorting', category: 'Sorting' },
  { path: 'DSA/Searching', category: 'Searching' },
];

// Category detection based on filename patterns
const categoryPatterns = {
  LinkedList: ['LL', 'LinkedList', 'List', 'ListNode'],
  Stack: ['Stack', 'Parenthesis', 'NGE', 'Histogram'],
  Queue: ['Queue', 'Circular'],
  Trees: ['Tree', 'BT', 'BST', 'Node', 'Invert', 'Level', 'Traversal', 'View'],
  Graphs: ['Graph', 'BFS', 'DFS', 'Island'],
  Matrix: ['Matrix', 'Spiral', 'Rotate', '2D'],
  Sorting: ['Sort', 'Merge', 'Quick', 'Heap'],
  Searching: ['Search', 'Binary'],
  TwoPointers: ['TwoSum', 'Pointer'],
  DynamicProgramming: ['DP', 'Dynamic', 'Fibonacci'],
};

// Difficulty detection based on patterns
const difficultyPatterns = {
  Easy: ['Reverse', 'Detect', 'Valid', 'Invert', 'Height', 'Depth', 'Count', 'Same', 'Merge'],
  Medium: ['Level', 'Diameter', 'LCA', 'Spiral', 'Search2D', 'Design', 'NGE'],
  Hard: ['Histogram', 'Serialize', 'Maximal'],
};

function detectCategory(filename) {
  for (const [category, patterns] of Object.entries(categoryPatterns)) {
    if (patterns.some(p => filename.includes(p))) {
      return category;
    }
  }
  return 'Miscellaneous';
}

function detectDifficulty(filename) {
  for (const [difficulty, patterns] of Object.entries(difficultyPatterns)) {
    if (patterns.some(p => filename.includes(p))) {
      return difficulty;
    }
  }
  return 'Medium';
}

function extractTags(filename, code) {
  const tags = [];
  
  // From filename
  if (filename.includes('LL') || filename.includes('List')) tags.push('Linked List');
  if (filename.includes('BT') || filename.includes('Tree')) tags.push('Binary Tree');
  if (filename.includes('BST')) tags.push('BST');
  if (filename.includes('Stack')) tags.push('Stack');
  if (filename.includes('Queue')) tags.push('Queue');
  if (filename.includes('Sort')) tags.push('Sorting');
  if (filename.includes('Search')) tags.push('Searching');
  if (filename.includes('Matrix')) tags.push('Matrix');
  
  // From code content
  if (code.includes('recursion') || code.includes('Recursion')) tags.push('Recursion');
  if (code.includes('while') && code.includes('fast') && code.includes('slow')) tags.push('Two Pointers');
  if (code.includes('queue<')) tags.push('BFS');
  if (code.includes('stack<')) tags.push('Stack');
  
  return [...new Set(tags)];
}

function scanDirectory(dirPath, category) {
  const files = [];
  
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`);
    return files;
  }
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.cpp') && !entry.name.includes('temp')) {
      const filePath = path.join(dirPath, entry.name);
      const code = fs.readFileSync(filePath, 'utf-8');
      const relativePath = path.relative(REPO_ROOT, filePath).replace(/\\/g, '/');
      
      const detectedCategory = category === 'auto' ? detectCategory(entry.name) : category;
      
      files.push({
        name: entry.name,
        path: relativePath,
        category: detectedCategory,
        difficulty: detectDifficulty(entry.name),
        tags: extractTags(entry.name, code),
        code: code,
      });
    }
  }
  
  return files;
}

function generateCodeData() {
  console.log('🔍 Scanning repository for code files...\n');
  
  const allFiles = [];
  
  for (const folder of SCAN_FOLDERS) {
    const fullPath = path.join(REPO_ROOT, folder.path);
    console.log(`📁 Scanning: ${folder.path}`);
    const files = scanDirectory(fullPath, folder.category);
    allFiles.push(...files);
    console.log(`   Found ${files.length} files\n`);
  }
  
  // Group by category
  const codeData = {};
  for (const file of allFiles) {
    if (!codeData[file.category]) {
      codeData[file.category] = [];
    }
    codeData[file.category].push({
      name: file.name,
      path: file.path,
      difficulty: file.difficulty,
      tags: file.tags,
      code: file.code,
    });
  }
  
  // Generate output
  const output = `// Auto-generated code data
// Generated on: ${new Date().toISOString()}
// Total problems: ${allFiles.length}

export const codeData = ${JSON.stringify(codeData, null, 2)};

export const getTotalProblems = () => {
  return Object.values(codeData).reduce((acc, files) => acc + files.length, 0);
};

export const getAllTags = () => {
  const tags = new Set();
  Object.values(codeData).forEach(files => {
    files.forEach(file => {
      file.tags?.forEach(tag => tags.add(tag));
    });
  });
  return Array.from(tags).sort();
};
`;
  
  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`\n✅ Generated ${OUTPUT_FILE}`);
  console.log(`📊 Total categories: ${Object.keys(codeData).length}`);
  console.log(`📊 Total problems: ${allFiles.length}`);
}

generateCodeData();
