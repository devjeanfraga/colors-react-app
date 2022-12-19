import React, {Component} from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from "react-router-dom";
import injectSheet from 'react-jss';
import chroma from 'chroma-js';
import './ColorBox.css';

const styles = {
  ColorBox: {
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    width: "20%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: 1
    }
  },
};


class ColorBox  extends Component {
  constructor (props) {
    super(props);
    this.state = { copied: false};
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  
  changeCopyState () {
    this.setState({copied: true});
    setTimeout(() => this.setState({copied: false}), 1500);
  };

  render () {
    const { background, name, moreUrl, showingFullPalette, classes } = this.props;
    console.log(classes)
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08; 
    const isLightColor = chroma(background).luminance() >= 0.4; 

    const linkMore = () => (
      <Link to={moreUrl} onClick={(e)=> e.stopPropagation() }>
      <span className={`see-more ${isLightColor && "dark-text"}`}>MORE</span>
      </Link>
    );

    return (

     <CopyToClipboard text={background} onCopy={this.changeCopyState}>
      <div className={classes.ColorBox/*"ColorBox"*/} style={{ background: background }}>
        <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>

        <div className= {`copy-msg ${copied && "show"}`}>
        <h1>COPIED!</h1>
        <p className={isLightColor && "dark-text"}>{background}</p>
        </div>

        <div className="copy-container">
          <div className="box-content">
            <span className= {isDarkColor && "light-text"}> {name} </span>
          </div>
          <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
        </div>
  
        {showingFullPalette && linkMore() /* Como toda boxColor está configurada para copiar a cor, o stopPropagation evita que o evento se propgague */ }
      </div>
     </CopyToClipboard>
    );
  }; 
};


export default injectSheet(styles)(ColorBox);


      /*
        ColorBox  contains an unique color, 
        in addtion, "more"  wrapped inside span
        has all variable about that color

        ----CLICKBOARD FUNCTION---- 
        //get the text field
        var copyText =  document.getElementById("any-id")
        
        //select the text field
        copyText.select();
        copyText.setSelectionRange(0,99999); // For mobile devices

        //copy the text inse the text field
        navigator.clipboard.writeText(copyText.value); 
      */ 