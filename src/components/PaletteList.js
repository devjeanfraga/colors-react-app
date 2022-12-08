import React, {Component} from "react";
import { Link } from "react-router-dom";
import { withStyles} from "@material-ui/styles"
import MiniPalettes from "./miniPalettes";

const styles = {
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
}

class PaletteList extends Component {
  constructor (props) {
    super(props);
  }

  goToPalette (id) {
    console.log("HI:rainbow:")
    this.props.history.push(`/palette/${id}`);
  }

  render () {
    const { palettes, classes,  } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>

          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>

          <div className={classes.palettes}>
            { palettes.map(palette => ( <MiniPalettes {...palette} handleClick={()=>this.goToPalette(palette.id)}/> )) }
          </div>

        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList); 