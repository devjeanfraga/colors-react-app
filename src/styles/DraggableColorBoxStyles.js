import sizes from "./diplay-sizes";
import chroma from 'chroma-js';

export default {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-7px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5.5%",
      "&:hover svg": {
        color: "white",
        transform: "scale(1.1)"
      },
    }
  },
  boxContent: {
    color: props => chroma(props.color).luminance() <= 0.08 ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    [sizes.down("sm")]: {
      bottom: "-10px",
    }
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
    paddingRight: '15px',
    paddingBottom: '2px',
    [sizes.down('xs')]: {
      paddingLeft: '50px'
    }
  }
};