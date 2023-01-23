import React from 'react'; 
import injectSheet from 'react-jss';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../styles/MiniPalettesStyles';

function MiniPalettes (props) {
  const {classes, paletteName, emoji, colors, goToPalette, openDialog, id} = props;
  
  const deletePalette = (evt) => {
    evt.stopPropagation();
    openDialog(id);
  };

  const handleClick = () => goToPalette(id);

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
      <div className={classes.delete}>
        <DeleteIcon className={classes.deleteIcon} style={{ transition: "all 0.3s ease-in-out" }} onClick={deletePalette}/>
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default injectSheet(styles)(MiniPalettes);
