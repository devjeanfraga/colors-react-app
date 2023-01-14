import sizes from './diplay-sizes';
import bg from "./bg.svg";

export default {
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#394bad",
    backgroundImage: `url(${bg})`,
    overflow: "scroll",
  }, 
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: "3%",

    [sizes.down("xxl")]: {
      maxWidth: "812px",
    },
    [sizes.down("md")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "80%",
      minWidth: "200px"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white"
    },
    [sizes.down("xs")]: {
      flexFlow: "column wrap",
      justifyContent: "center",
      lineHeight: "1rem",
      marginBottom: "20px"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 33.3333333%)",
    gridGap: "1.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "1.5rem",

    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem"
    }
  }
};