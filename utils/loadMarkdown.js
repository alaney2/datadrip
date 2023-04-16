import fs from 'fs';
import path from 'path';

export async function loadMarkdown(markdownPath) {
  const filePath = path.join(process.cwd(), 'data', markdownPath);
  const markdownContent = fs.readFileSync(filePath, 'utf8');
  return markdownContent;
}
