import React, {Component} from "react"

class SingleColorPalette extends Component {
  constructor (props) {
    super(props);
    this.shades = this.getColorShades(this.props.palette, this.props.colorId); 
  }

  getColorShades (palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for ( let key in allColors ) {
      shades = shades.concat(
        allColors[key].filter( item => item.id === colorToFilterBy)
      );
    };
    return shades;
  }; 

  render () {
    //console.log(this.props.palette, this.props.colorId); 
    return (
      <div>
        <h1>Single Color Palette</h1>
      </div>
    );
  };
};

export default SingleColorPalette; 

