import wikiConnections from '@/wiki-connections.json';
import {remark} from 'remark';
import remarkParse from 'remark-parse';

export function getPageObject(name) {
  const page = wikiConnections[name];
  if (!page) {
    return {
      id: name,
      title: name.charAt(0).toUpperCase() + name.slice(1),
    }
  }
  
  return {
    id: name,
    title: page.title,
  };
};

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function getArticleDescription(fileContent) {
  const markdownAST = remark().use(remarkParse).parse(fileContent);
  const firstParagraph = markdownAST.children.find(node => node.type === 'paragraph');

  if (!firstParagraph) {
    return '';
  }

  return firstParagraph.children.map(child => child.value).join('');
}
