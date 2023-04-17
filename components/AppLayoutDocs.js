import * as React from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import { exactProp } from '@mui/utils';
import GlobalStyles from '@mui/material/GlobalStyles';
import NoSsr from '@mui/material/NoSsr';
import Head from '@/components/Head';
import AppFrame from '@/components/AppFrame';
import AppContainer from '@/components/AppContainer';
// import AppTableOfContents from 'docs/src/modules/components/AppTableOfContents';
import BackToTop from '@/components/BackToTop';

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'disableToc',
})(({ disableToc, theme }) => ({
  display: 'grid',
  width: '100%',
  ...(disableToc
    ? {
        [theme.breakpoints.up('lg')]: {
          marginRight: '5%',
        },
      }
    : {
        [theme.breakpoints.up('md')]: {
          gridTemplateColumns: '1fr 242px',
        },
      }),
  '& .markdown-body .comment-link': {
    display: 'inline-block',
  },
}));

const StyledAppContainer = styled(AppContainer, {
  shouldForwardProp: (prop) => prop !== 'disableAd' && prop !== 'hasTabs',
})(({ disableAd, hasTabs, theme }) => {
  return {
    position: 'relative',
    // https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items
    minWidth: 0,
    ...(!disableAd && {
      ...(!hasTabs && {
        '&& .description': {
          marginBottom: 198,
        },
        '&& .description.ad': {
          marginBottom: 40,
        },
      }),
      ...(hasTabs && {
        '&& .component-tabs .MuiTabs-root': {
          marginBottom: 193,
        },
        '&& .component-tabs.ad .MuiTabs-root': {
          marginBottom: 35,
        },
      }),
    }),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '60px',
      paddingRight: '60px',
    },
  };
});

const ActionsDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: -10,
  marginBottom: -15,
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-end',
  },
}));

function AppLayoutDocs(props) {
  const router = useRouter();
  const {
    BannerComponent,
    children,
    description,
    disableAd = false,
    disableToc = false,
    location,
    title,
    toc,
    hasTabs = false,
  } = props;


  return (
    <AppFrame BannerComponent={BannerComponent}>
      <GlobalStyles
        styles={{
          ':root': {
            '--MuiDocs-navDrawer-width': '300px',
          },
        }}
      />
      
        <Head
          // title={`${title} - ${productName}`} 
          description={description}
          largeCard={false}
          card="https://mui.com/static/logo.png"
        />
        <Main disableToc={disableToc}>
 
        <StyledAppContainer disableAd={disableAd} hasTabs={hasTabs}>
          <ActionsDiv>
          </ActionsDiv>
          {children}
          <NoSsr>
          </NoSsr>
        </StyledAppContainer>

        </Main>

      <BackToTop />
    </AppFrame>
  );
}


export default AppLayoutDocs;