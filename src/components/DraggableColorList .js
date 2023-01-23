import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';

import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer( (props) => {
  const { colors, deleteColor} = props;
  console.log(deleteColor)
  return (
    <div style={{height: '100%'}}>
      {colors.map( (color, index) => (
      <DraggableColorBox 
        index={index} 
        key={color.name} 
        color={color.color} 
        name={color.name} 
        handleClick={() => deleteColor(color.name)}
      />
      ))}
    </div>
  )
});

export default DraggableColorList; 