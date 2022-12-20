export default {
  root: {
    height: "100vh",
    paddingBottom: "10%",
    backgroundColor: "#394bad",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden"
  }, 
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
};