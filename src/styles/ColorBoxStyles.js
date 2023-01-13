import chroma from 'chroma-js';
import sizes from './diplay-sizes';


export default {
  ColorBox: {
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: 1
    },
    [sizes.down("lg")]: {
      height: props => (props.showingFullPalette ? "20%" : "33.3333%"),
      width: "25%",
    },

    [sizes.down("md")]: {
      height: props => (props.showingFullPalette ? "10%": "20%"),
      width: "50%"
    },

    [sizes.down("xs")]: {
      height: props => ( props.showingFullPalette ? "10%": "15%"),
      width: "100%",
    }
  },
  copyText: {
    color: props => chroma(props.background).luminance() >= 0.4 ? "black" : "white"
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.07 ? "white" : "black"
  },
  seeMore: {
    color: props => chroma(props.background).luminance() >= 0.4 ? "rgba(0,0,0,0.7)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props => (chroma(props.background).luminance() >= 0.4 ? "rgba(0,0,0,0.7)" : "white"),
    background: props => (chroma(props.background).luminance() >= 0.4 ? "rgba(73,78,90,0.2)" : "rgba(255, 255, 255, 0.3)"),
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: 0
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "10px"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)"
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "15",
    position: "absolute",
    transition: "transform 0.6s ease-in-out",
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "5rem" 
      }
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100"
    }
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
};
