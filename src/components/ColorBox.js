import React, {Component} from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from "react-router-dom";
import styles from '../styles/ColorBoxStyles';
import injectSheet from 'react-jss';


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
    const { copied } = this.state;
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
          <div className={classes.boxContent}>
            <span className= {classes.colorName}> {name} </span>
          </div>
          <button className={classes.copyButton}> Copy </button>
        </div>
  
        {showingFullPalette && linkMore()}
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