import React, {Component} from "react";
import './ColorBox.css';

export default class ColorBox  extends Component {
  render () {
    const {background, name} = this.props;
    return (
      /*
        ColorBox  contains an unique color, 
        in addtion, "more"  wrapped inside span
        has all variable about that color
      */ 
      <div className="ColorBox" style={{ background: background }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    );
  };
};