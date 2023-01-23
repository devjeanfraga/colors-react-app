import React, {useState, createRef} from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography'; 
import IconButton from '@mui/material/IconButton'; 
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import DraggableColorList from './DraggableColorList ';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

import seedColors from '../seed-colors';

import { styled } from '@mui/material/styles';
import {arrayMoveImmutable} from 'array-move';
import {withStyles} from '@mui/styles'; 
import  {styles, sx, mainStyles, drawerHeaderStyles } from '../styles/NewPaletteFormStyles';
import { color } from '@mui/system';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })( mainStyles );
const DrawerHeader = styled('div')( drawerHeaderStyles );


function NewPaletteForm ( props ) {
  const maxColors = 20; 
  const  { savePalette, palettes, classes } = props;
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState([...seedColors[0].colors]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const handleSubmitSavePalette = (newPalette) => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g,'-');
    newPalette.colors = colors;
    newPalette.nodeRef = createRef(null);
    savePalette(newPalette);
    props.history.push('/'); 
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };
  
  const removeColor = (colorName) => {
    setColors(colors.filter(color => color.name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
      let updatedColors = arrayMoveImmutable(colors, oldIndex, newIndex);
      setColors(updatedColors); 
  };

  const clearColors = () => {
    setColors([]); 
  };

  const addRandomColor = () => {
    let allColors = palettes.map(p => p.colors).flat(); 
    let isDuplicate = true;
    let randomIndex;
    let randomColor;
    while (isDuplicate) {
      randomIndex = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[randomIndex]; 
      isDuplicate = colors.some(color => color.name === randomColor.name); 
    };
    setColors([...colors, randomColor]); 
  }; 

  const isFullPalette = colors.length >= maxColors; 

  return (
    <Box sx={{ display: 'flex' }}>
      <PaletteFormNav
        palettes={palettes} 
        handleSubmitSavePalette={handleSubmitSavePalette} 
        handleDrawerOpen={handleDrawerOpen} 
        open={open}
      />

      <Drawer sx={sx} variant="persistent" anchor="left" open={open}>

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className={classes.container}>
          <Typography variant='h4'> Design your Palette </Typography>

          <div className={classes.buttons}>
            <Button className={classes.button} variant='contained' color='secondary' onClick={clearColors}> Clear Palette </Button>
            <Button className={classes.button} variant='contained' color='primary' onClick={addRandomColor} disabled={isFullPalette}> Random Color </Button>
          </div>

          <ColorPickerForm
            colors={colors}
            addNewColor={addNewColor} 
            isFullPalette={isFullPalette}
          />
        </div>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList
          colors={colors}
          deleteColor={removeColor}
          axis='xy'
          onSortEnd={onSortEnd}
          distance={20}
          
        />
      </Main>

    </Box>
  );
};

export default withStyles(styles)(NewPaletteForm);