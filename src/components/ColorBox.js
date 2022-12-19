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
  copyText: {
    color: props => chroma(props.background).luminance() >= 0.4 ? "black" : "white"
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.07 ? "white" : "black"
  },
  seeMore: {
    color: props => chroma(props.background).luminance() >= 0.4 ? "rgba(0,0,0,0.7)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props => (chroma(props.background).luminance() >= 0.4 ? "rgba(0,0,0,0.7)" : "white"),
    background: props => (chroma(props.background).luminance() >= 0.4 ? "rgba(73,78,90,0.2)" : "rgba(255, 255, 255, 0.3)"),
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: 0
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transform: "scale(0.1)"
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "15",
    position: "absolute",
    transition: "transform 0.6s ease-in-out",
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase"
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100"
    }
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
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
    const isDarkColor = chroma(background).luminance() <= 0.07; 
    const isLightColor = chroma(background).luminance() >= 0.4; 

    const linkMore = () => (
      <Link to={moreUrl} onClick={(e)=> e.stopPropagation() }>
        <span className={classes.seeMore /*`see-more ${isLightColor && "dark-text"}`*/}>
          MORE
        </span>
      </Link>
    );

    return (

    <CopyToClipboard text={background} onCopy={this.changeCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}/>

        <div className= {`${classes.copyMessage} ${copied && classes.showMessage}`}>
          <h1>COPIED!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>

        <div>
          <div className={classes.boxContent /*"box-content"*/}>
            <span className= {classes.colorName /*isDarkColor && "light-text"*/}> {name} </span>
          </div>
          <button className={classes.copyButton/*`copy-button ${isLightColor && "dark-text"}`*/}>Copy</button>
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