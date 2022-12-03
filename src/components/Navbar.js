import React, {Component} from "react";
import "rc-slider/assets/index.css";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "./Navbar.css"; 
import Slider from 'rc-slider';

class Navbar  extends Component {
  constructor (props) {
    super(props);
    this.state = {format: "hex"};
    this.handleChange =  this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState(setFormat => ({
      format: e.target.value
    }))
    this.props.handleChange(e.target.value); 
  }
  render () {
    const {level, changeLevel} = this.props;
    const {format} = this.state;
    return  (
      <header className="Navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider 
              className='rc-slider'
              defaultValue={level} 
              min={100}
              max={900}
              step={100}
              onChange={changeLevel}
            />
          </div>   
        </div>

        <Select value={format} onChange={this.handleChange}>
          <MenuItem  value="hex">HEX-#ffff</MenuItem>
          <MenuItem  value="rgb">RGB-rgb(255,255,255)</MenuItem>
          <MenuItem  value="rgba">RGBA-rgba(255,255,255,1,0)</MenuItem>
        </Select>
      </header>
    );
  };
};
export default Navbar;