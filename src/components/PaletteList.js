import React, {Component} from "react";
import  { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from "react-router-dom";
import styles from '../styles/PaletteListStyles'; 
import injectSheet from 'react-jss';
import MiniPalettes from "./MiniPalettes";

class PaletteList extends Component {

  goToPalette (id) {
    console.log("HI:rainbow:")
    this.props.history.push(`/palette/${id}`);
  }

  render () {
    const { palettes, classes, deletePalette, isDeletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>

          <nav className={classes.nav}>
            <h1>Saturn Palettes</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>

            <TransitionGroup className={classes.palettes}>
            { palettes.map(palette => ( 
             <CSSTransition key={palette.id} classNames='fade' timeout={2000}  >
               <MiniPalettes 
                  key={palette.id} 
                  id={palette.id} 
                  handleDelete={deletePalette} 
                  handleClick={()=>this.goToPalette(palette.id)}
                  {...palette} 
               /> 
             </CSSTransition> 
            )) }
            </TransitionGroup>

        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(PaletteList); 