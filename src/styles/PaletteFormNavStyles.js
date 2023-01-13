import sizes from './diplay-sizes';
import {DRAWER_WIDTH} from '../components/constants';
const drawerWidth = DRAWER_WIDTH;

export const styles = theme => ({
  root: {
    display: 'flex'
  }
}); 

export const stylesAppBar = ({ theme, open }) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    height: "64px",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& .navBtns': {
      marginRight: "0.5rem",
      "& a": {
        textDecoration: "none"
      },
      [sizes.down("sm")]: {
        marginRight: "0.3rem"
      },
      '& .button': {
        margin: "0 0.5rem",
        [sizes.down("sm")]: {
          margin: " 0 0.1rem",
          padding: "0 0.2rem"
        },
      },
    },

  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
});
