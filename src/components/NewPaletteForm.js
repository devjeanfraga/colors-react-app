import React, {useState, createRef} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography'; 
import IconButton from '@mui/material/IconButton'; 
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DraggableColorList from './DraggableColorList ';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PaletteFormNav from './PaletteFormNav';
import {arrayMoveImmutable} from 'array-move';
import ColorPickerForm from './ColorPickerForm';
import {withStyles} from '@mui/styles'; 
import  {styles, sx, mainStyles, drawerHeaderStyles } from '../styles/NewPaletteFormStyles';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })( mainStyles );
const DrawerHeader = styled('div')( drawerHeaderStyles );


function NewPaletteForm ( props ) {
  const maxColors = 20; 
  const  { savePalette, palettes, classes } = props;
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState([]);

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
    console.log(palettes)
    let allColors = palettes.map(p => p.colors).flat(); 
    let randIndex = Math.floor( allColors.length * Math.random());
    let randColor = allColors[randIndex]; 
    setColors([...colors, randColor]); 
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