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
      marginRight: "1rem",
      "& a": {
        textDecoration: "none"
      },
      '& .button': {
        margin: "0 0.5rem"
      }
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
