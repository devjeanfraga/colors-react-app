import React, {Component} from "react";
import { Link } from "react-router-dom";
import { withStyles} from "@material-ui/styles"
import MiniPalettes from "./miniPalettes";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItem: "flex-start",
    justifyContent: "center"
  }, 
  container: {
    width: "50%",
    display: "flex",
    alingItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  palettes: {
    boxSizing: "boder-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
}

class PaletteList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>

          <nav className={classes.nav}>
            <h1>REACT COLORS</h1>
          </nav>

          <div className={classes.palettes}>
            { palettes.map(palette => ( <MiniPalettes {...palette}/> )) }
          </div>

        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList); 