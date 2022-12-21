import React from 'react'; 
import styles from '../styles/MiniPalettesStyles';
import injectSheet from 'react-jss';

function MiniPalettes (props) {
  const {classes, paletteName, emoji, colors, handleClick} = props;
  const miniColorBoxes =  colors.map(color => (
    <div 
      className={classes.miniColor} 
      style={{backgroundColor: color.color}}
      key={color.name} 
    >
    </div>
  ))
  return  (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default injectSheet(styles)(MiniPalettes);
