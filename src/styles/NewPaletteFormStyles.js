import { DRAWER_WIDTH as drawerWidth} from '../components/constants';
import sizes from './diplay-sizes';
export const styles = {
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    width: "100%",
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  button: {
    width: "45%"
  }
};

export const sx = {
  width: drawerWidth,
  flexShrink: 0,
  height: "100vh",
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    display: "flex",
    alignItems: "center"
    //boxSizing: 'border-box',
  },
};

export const mainStyles = ({ theme, open }) => ({
  flexGrow: 1,
  height: "calc(100vh - 64px)",
  padding: 0,//theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
});

export const drawerHeaderStyles = ({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  [sizes.down('xs')]: {
    padding: theme.spacing(0.2, 1),
  }
}); 