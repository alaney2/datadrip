import wikiConnections from '@/wiki-connections.json';


export function getPageObject(name) {
  const page = wikiConnections[name];
  return {
    id: name,
    title: page.title,
  };
};
