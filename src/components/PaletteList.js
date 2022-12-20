import React, {Component} from "react";
import { Link } from "react-router-dom";
import styles from '../styles/PaletteListStyles'; 
import injectSheet from 'react-jss';
import MiniPalettes from "./MiniPalettes";

class PaletteList extends Component {
  constructor (props) {
    super(props);
  }

  goToPalette (id) {
    console.log("HI:rainbow:")
    this.props.history.push(`/palette/${id}`);
  }

  render () {
    const { palettes, classes  } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>

          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>

          <div className={classes.palettes}>
            { palettes.map(palette => ( <MiniPalettes {...palette} handleClick={()=>this.goToPalette(palette.id)}/> )) }
          </div>

        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(PaletteList); 