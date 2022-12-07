import React, {Component} from "react";
import { Link } from "react-router-dom";
import MiniPalettes from "./miniPalettes";

export default class PaletteList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { palettes } = this.props;
    return (
      <div>
        <h1>REACT COLORS</h1>
       { palettes.map(palette => ( <MiniPalettes {...palette}/> )) }
      </div>
    )
  }
}