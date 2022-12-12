import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import './Palette.css'; 


export default class Palette extends Component {
  constructor (props) {
    super(props);
    this.state = {level: 500, format: "hex"};
    this.changeLevel =  this.changeLevel.bind(this); 
    this.changeFormat = this.changeFormat.bind(this)
  }

  changeFormat (val) {
   this.setState(set => ({...set, format: val}))
  }
  changeLevel (level) {
    this.setState({level});
    this.changeLevel =  this.changeLevel.bind(this);
  }
  //this.props.match.params.id
  render () {
    console.log(this.props)
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => ( 
    <ColorBox 
      background={color[format]} 
      name={color.name}  
      key={color.id} 
      id={color.id}
      paletteId={id}
      moreUrl={`${id}/${color.id}`}
      showLink={true}
    /> 
    ));
    return (
      <div className='Palette'>
        <Navbar level={level} changeLevel={this.changeLevel} handleChange ={this.changeFormat} isSingleColor={true}/>
        <div className='Palette-colors'>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    )
  }
}; 