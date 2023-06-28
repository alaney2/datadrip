import wikiConnections from '@/wiki-connections.json';
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/system';
import NavBar from "@/components/NavBar/NavBar";
import SkipLink from '@/components/SkipLink';
import BackToTop from '@/components/PageContent/BackToTop';
import Head from "next/head";

const AlphabetList = styled('ul')`
  position: fixed;
  right: 1rem;
  display: none;
  margin-top: 3%;

  @media (min-width: 320px) {
    display: block;
    right: 0.5rem;
    margin-top: 10%;
  }
  @media (min-width: 600px) {
    right: 10%; 
  }
  @media (min-width: 1024px) {
    right: 15%;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const ListItem = styled('li')`
  list-style-type: none;
  margin-bottom: 0.5rem;
`;

const AlphabetListItem = styled(ListItem)`
  margin-bottom: 0;
`;

const MainList = styled('ul')`
  padding: 0;
  margin-top: 3%;

  @media (min-width: 320px) {
    margin-top: 10%;
    margin-left: 0.5rem;
  }
  @media (min-width: 600px) {
    margin-left: 10%; 
  }
  @media (min-width: 1024px) {
    margin-left: 15%;
  }
  
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export default function Glossary() {
  const sortedKeys = Object.keys(wikiConnections).sort((a, b) => 
  wikiConnections[a].title.localeCompare(wikiConnections[b].title));
  
  const alphabetLinks = [...Array(26)].map((_, i) => String.fromCharCode(i + 65)); // Generate an array with A-Z
  
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <main>
        <SkipLink skipToId={"main-content"} />
        <NavBar />
        <Box display="flex" flexDirection="column" alignItems="flex-start" mx={4}>
          <MainList>
            {sortedKeys.map((key) => (
              <ListItem key={key}>
                <a id={wikiConnections[key].title.charAt(0).toUpperCase()} href={`/${key}`}>{wikiConnections[key].title}</a>
              </ListItem>
            ))}
          </MainList>
          <AlphabetList>
            {alphabetLinks.map(letter => 
              <AlphabetListItem key={letter}>
                <a href={`#${letter}`}>{letter}</a>
              </AlphabetListItem>
            )}
          </AlphabetList>
        </Box>
        <BackToTop />
      </main>
    </>
  );
}
