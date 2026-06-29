const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  const regex = /`\$\{process\.env\.NEXT_PUBLIC_BASE_PATH\s*\|\|\s*(?:""|'')\}(\/[^`]+)`/g;
  let replaced = false;

  newContent = newContent.replace(regex, (match, group1) => {
    replaced = true;
    return `withBasePath("${group1}")`;
  });

  if (replaced) {
    if (!newContent.includes('import { withBasePath }')) {
      const lines = newContent.split('\n');
      let lastImportIdx = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          lastImportIdx = i;
        }
      }
      
      const importLine = 'import { withBasePath } from "@/lib/basePath";';
      if (lastImportIdx >= 0) {
        lines.splice(lastImportIdx + 1, 0, importLine);
      } else {
        if (lines[0].includes('use client')) {
           lines.splice(1, 0, importLine);
        } else {
           lines.splice(0, 0, importLine);
        }
      }
      newContent = lines.join('\n');
    }
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated:', filePath);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

traverse(path.join(process.cwd(), 'src'));
console.log('Done');
