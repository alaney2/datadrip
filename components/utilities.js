import wikiConnections from '@/wiki-connections.json';


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
