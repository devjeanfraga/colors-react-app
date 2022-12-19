export default {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItem: "flex-start",
    justifyContent: "center"
  }, 
  container: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "noWrap",
  },
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  palettes: {
    boxSizing: "border-box",
    marginBottom: "2rem",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
};