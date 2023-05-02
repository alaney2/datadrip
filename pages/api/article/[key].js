import path from 'path';
import fs from 'fs';
import { getArticleDescription } from '@/components/utilities';

export default async function handler(req, res) {
  const {
    query: { key },
  } = req;

  const filePath = path.join(process.cwd(), 'data', `${key}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const description = await getArticleDescription(fileContent);
  const value = { ...wikiConnections[key], description };

  res.status(200).json(value);
}