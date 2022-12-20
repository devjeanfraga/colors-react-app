import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px"
  }
};

function DraggableColorBox (props) {
  const {color, name, classes} = props;

  return (
    <div className={classes.root} style={{backgroundColor: color}}>
      {name}
    </div>
  );
};

export default injectSheet(styles)(DraggableColorBox); 