import React, {Component} from "react"
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import styles from '../styles/SingleColorPaletteStyles';
import injectSheet from 'react-jss';


class SingleColorPalette extends Component {
  constructor (props) {
    super(props);
    this.shades = this.getColorShades(this.props.palette, this.props.colorId);
    this.changeFormat = this.changeFormat.bind(this); 
    this.state = {format: "hex"};  
  }

  getColorShades (palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for ( let key in allColors ) {
      shades = shades.concat(
        allColors[key].filter( item => item.id === colorToFilterBy)
      );
    };
    
    return shades.slice(1);
  }; 

  changeFormat (val) {
    this.setState({format: val}); 
  };

  render () {
    const {format} = this.state;
    const {paletteName, emoji, id} = this.props.palette;
    const {classes} = this.props;
    const colorBoxes = this.shades.map(color => ( <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false}/>)); 
    
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} isSingleColor={false}/>
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    );
  };
};

export default injectSheet(styles)(SingleColorPalette);

