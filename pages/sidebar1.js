import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { sideBarMenuItems } from '../constant';
import { NavItem } from '../component/nav-items';
import NextLink from 'next/link';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import App_Bar from '../component/app-bar';
import { themeHai } from '../theme/index';
import Switch from '@mui/material/Switch';

//==========================================================

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: '#272727',
  height: 80,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);

  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log('::-->', dark);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* ==========  APP_BAR(Customisable-component) =========================== */}

      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My App Bar
          </Typography>
        </Toolbar>
      </AppBar> */}
      <App_Bar onClick={handleDrawerOpen} open={open} />
      {/* ==========  Drawer(Customisable-component) =========================== */}

      <Drawer variant="permanent" sx={{ backgroundColor: 'red' }} open={open}>
        {/* ==========  Drawer_Header(Logo part) =========================== */}

        <DrawerHeader>
          <Box
            fullWidth
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 1,
              backgroundColor: 'white',
              width: '100%',
            }}
          >
            <Image
              onClick={() => router.push('/')}
              src="/logo.png"
              alt="me"
              width="90"
              height="150"
            />
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>
                Adept Baniya Pvt Ltd
              </Typography>
              <Typography sx={{ mb: 3 }} variant="caption">
                Baniya Franchise
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* ==========  SidebarMenu_Items(Dynamic-->comes from the Constants file) =========================== */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <List>
            {[
              {
                href: '/financial-dashobard/my-gold-financials',
                title: 'About',
              },
              {
                href: '/retail-dashboard/retail',
                title: 'Retail',
              },
              {
                href: '/inventory-dashboard/inventory',
                title: 'Inventory',
              },
              {
                href: '/app-bar ',
                title: 'App Bar',
              },
            ].map((text, index) => (
              <ListItem
                key={text.title}
                disablePadding
                sx={{ display: 'block' }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <NextLink href={text.href} passHref>
                    <ListItemText
                      sx={[
                        dark
                          ? themeHai.colors.primary
                          : themeHai.colors.secondary,
                        { opacity: open ? 1 : 0 },
                      ]}
                    >
                      {text.title}
                    </ListItemText>
                  </NextLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box
            disableRipple
            onClick={() => router.push('/')}
            sx={{
              // zoom: '90%',
              //   background: 'linear-gradient(45deg, #ff4b4b, #ffb5b5)',
              display: 'flex',
              // justifyContent:"space-around",
              cursor: 'pointer',
              color: 'gray',
              fontWeight: 'bolder',
              p: 1,
              height: '100%',
              alignItems: 'end',
              width: '100%',
              marginRight: 1,
              borderRadius: 1,
              mb: 2,
              textAlign: 'center',
              //   flex: 1,
            }}
          >
            <AccountBoxIcon sx={{ mr: 2, fontSize: '36px' }} />
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>Nischal Gupta</Typography>
              <Typography variant="caption">Adept Baniya</Typography>
            </Box>
          </Box>
          <Box
            onClick={() =>
              Swal.fire(
                'You have been logged out!',
                'Log in to continue',
                'success'
              )
            }
            sx={{
              // zoom: '90%',
              // background: 'linear-gradient(45deg, #ff4b4b, #ffb5b5)',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'flex-end',
              color: 'gray',
              cursor: 'pointer',
              fontWeight: 'bolder',
              p: 1,
              width: '100%',
              marginRight: 1,
              borderRadius: 1,
              textAlign: 'right',
              flex: 1,
            }}
          >
            <LogoutIcon sx={{ mr: 2 }} />
            Logout
          </Box>
          <Switch onChange={() => setDark((prev) => !prev)} />
          <label>Dark Mode</label>
        </Box>
      </Drawer>

      {/* ==========  Main_Content =========================== */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
