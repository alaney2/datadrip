// const nProgressStart = debounce(() => {
//   NProgress.start();
// }, 200);

// const nProgressDone = () => {
//   nProgressStart.clear();
//   NProgress.done();
// };

// export function NextNProgressBar() {
//   const router = useRouter();
//   React.useEffect(() => {
//     const handleRouteChangeStart = (url, { shallow }) => {
//       if (!shallow) {
//         nProgressStart();
//       }
//     };

//     const handleRouteChangeDone = (url, { shallow }) => {
//       if (!shallow) {
//         nProgressDone();
//       }
//     };

//     router.events.on('routeChangeStart', handleRouteChangeStart);
//     router.events.on('routeChangeComplete', handleRouteChangeDone);
//     router.events.on('routeChangeError', handleRouteChangeDone);
//     return () => {
//       router.events.off('routeChangeStart', handleRouteChangeStart);
//       router.events.off('routeChangeComplete', handleRouteChangeDone);
//       router.events.off('routeChangeError', handleRouteChangeDone);
//     };
//   }, [router]);

//   return <NProgressBar />;
// }
import * as React from 'react';
import NextLink from 'next/link';
import { styled, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SkipLink from './SkipLink';
import GlobalStyles from '@mui/material/GlobalStyles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import SvgHamburgerMenu from 'docs/src/icons/SvgHamburgerMenu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Stack from '@mui/material/Stack';
import SettingsDrawer from './SettingsDrawer';

// const RootDiv = styled('div')(({ theme }) => {
//   return {
//     display: 'flex',
//     ...theme.applyDarkStyles({
//       background: (theme.vars || theme).palette.primaryDark[900],
//     }),
//     // TODO: Should be handled by the main component
//   };
// });

// const StyledAppBar = styled(AppBar, {
//   shouldForwardProp: (prop) => prop !== 'disablePermanent',
// })(({ disablePermanent, theme }) => {
//   return {
//     padding: theme.spacing(1, 2),
//     transition: theme.transitions.create('width'),
//     ...(disablePermanent && {
//       boxShadow: 'none',
//     }),
//     ...(!disablePermanent && {
//       [theme.breakpoints.up('lg')]: {
//         width: 'calc(100% - var(--MuiDocs-navDrawer-width))',
//       },
//     }),
//     boxShadow: 'none',
//     backdropFilter: 'blur(8px)',
//     borderStyle: 'solid',
//     borderColor: (theme.vars || theme).palette.grey[100],
//     borderWidth: 0,
//     borderBottomWidth: 'thin',
//     backgroundColor: 'rgba(255,255,255,0.9)',
//     color: (theme.vars || theme).palette.grey[800],
//     ...theme.applyDarkStyles({
//       borderColor: alpha(theme.palette.primary[100], 0.08),
//       backgroundColor: alpha(theme.palette.primaryDark[900], 0.8),
//       color: (theme.vars || theme).palette.grey[500],
//     }),
//   };
// });


const GrowingDiv = styled('div')({
  flex: '1 1 auto',
});

const NavIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'disablePermanent',
})(({ disablePermanent, theme }) => {
  if (disablePermanent) {
    return {};
  }
  return {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  };
});

// const StyledAppNavDrawer = styled(AppNavDrawer)(({ disablePermanent, theme }) => {
//   if (disablePermanent) {
//     return {};
//   }
//   return {
//     [theme.breakpoints.up('lg')]: {
//       flexShrink: 0,
//       width: 'var(--MuiDocs-navDrawer-width)',
//     },
//   };
// });

export default function AppFrame(props) {
  // const { children, disableDrawer = false, className, BannerComponent = AppFrameBanner } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  // const { activePage } = React.useContext(PageContext);

  // const disablePermanent = activePage?.disableDrawer === true || disableDrawer === true;

  return (
    // <RootDiv >
    <>
      {/* <NextNProgressBar /> */}
      <CssBaseline />
      <SkipLink />
      {/* <MarkdownLinks /> */}
      {/* <StyledAppBar disablePermanent={disablePermanent}> */}
        <GlobalStyles
          styles={{
            ':root': {
              '--MuiDocs-header-height': '64px',
            },
          }}
        />
        <Toolbar variant="dense" disableGutters>
          <NavIconButton
            edge="start"
            color="primary"
            aria-label="Open Drawer"
            // disablePermanent={disablePermanent}
            onClick={() => setMobileOpen(true)}
            sx={{ ml: '1px' }}
          >
            {/* <SvgHamburgerMenu /> */}
            <MenuIcon />
          </NavIconButton>
          
          <GrowingDiv />
          <Stack direction="row" spacing="10px">

            <Tooltip title="Toggle Settings" enterDelay={300}>
              <IconButton color="primary" onClick={() => setSettingsOpen(true)} sx={{ px: '8px' }}>
                <SettingsIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      {/* </StyledAppBar> */}
      {/* <StyledAppNavDrawer
        disablePermanent={disablePermanent}
        onClose={() => setMobileOpen(false)}
        onOpen={() => setMobileOpen(true)}
        mobileOpen={mobileOpen}
      /> */}
      {/* {children} */}
      <SettingsDrawer onClose={() => setSettingsOpen(false)} open={settingsOpen} />
    </>
  );
}
