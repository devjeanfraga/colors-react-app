import React, {Component} from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css';

export default class ColorBox  extends Component {
  constructor (props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  
  changeCopyState () {
    this.setState({copied: true});
    setTimeout(() => this.setState({copied: false}), 1500);
  };

  render () {
    const {background, name} = this.props;
    const { copied } = this.state;
    return (
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
     <CopyToClipboard text={background} onCopy={this.changeCopyState}>
      <div className="ColorBox" style={{ background: background }}>

        <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>

        <div className= {`copy-msg ${copied && "show"}`}>
        <h1>COPIED!</h1>
        <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>

        <span className="see-more">MORE</span>
      </div>
     </CopyToClipboard>
    );
  }; 
};