import React from 'react'; 
import styles from '../styles/PaletteFooterStyles';
import injectSheet from 'react-jss'; 

function PaletteFooter ( props ) {
  const {paletteName, emoji, classes} = props;
 return ( 
  <footer className={classes.PaletteFooter}>
    {paletteName}
    <span className={classes.emoji}>{emoji}</span>
  </footer>
 );
};

export default injectSheet(styles)(PaletteFooter);