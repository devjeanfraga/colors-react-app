import sizes from '../styles/diplay-sizes';

export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    [sizes.down("sm")]: {
      overflow: 'auto'
    }
  },
  colors: {
    height: "90%"
  }
};