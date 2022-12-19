import React, {Component} from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";

import "rc-slider/assets/index.css";
import styles from "../styles/NavbarStyles";
import injectSheet from 'react-jss';
import Slider from 'rc-slider';

class Navbar  extends Component {
  constructor (props) {
    super(props);
    this.state = {format: "hex", open: false};
    this.handleFormatChange =  this.handleFormatChange.bind(this);
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
  }

  handleFormatChange (e) {
    this.setState(setFormat => ({
      format: e.target.value,
      open: true
    }))
    this.props.handleChange(e.target.value); 
  }

  handleCloseSnackbar () {
    this.setState({open: false})
  }
  
  render () {
    const {level, changeLevel, isSingleColor, classes } = this.props;
    const {format, open} = this.state;

    const levelBar = () => (
      <div>
        <span>Level: {level}</span>
        <div className={classes.slider}>
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
    );

    return  (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <a href="#">reactcolorpicker</a>
        </div>
        { isSingleColor && levelBar()}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem  value="hex">HEX-#ffff</MenuItem>
            <MenuItem  value="rgb">RGB-rgb(255,255,255)</MenuItem>
            <MenuItem  value="rgba">RGBA-rgba(255,255,255,1,0)</MenuItem>
          </Select>
          <Snackbar
            onClose={this.handleCloseSnackbar}
            anchorOrigin={{vertical: "bottom", horizontal: "left"}}
            open={open}
            autoHideDuration={3000}
            message={<span id="message-id">Format Changed To {format.toUpperCase()}!</span>}
            ContentProps={{
              "aria-describedby": "message-id"
            }}
            action={[
              <IconButton 
                onClick={this.handleCloseSnackbar} 
                color="inherit" 
                key="close" 
                aria-label="close"
              >
                <Close/>
              </IconButton>
            ]}
          />
        </div>
      </header>
    );
  };
};
export default injectSheet(styles)(Navbar);