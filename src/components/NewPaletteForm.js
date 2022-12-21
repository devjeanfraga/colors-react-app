import React, {useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar'; 
import Typography from '@mui/material/Typography'; 
import IconButton from '@mui/material/IconButton'; 
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import DraggableColorList from './DraggableColorList ';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PaletteFormNav from './PaletteFormNav';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from 'react-color';
import { arrayMove } from 'react-sortable-hoc'; 

const drawerWidth = 400;

const sx = {
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
};

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function NewPaletteForm ( props ) {
  const theme = useTheme();
  const maxColors = 20; 
  const  { savePalette, palettes } = props;
  const [open, setOpen] = React.useState(false);
  const [colorName, setColorName] = React.useState(''); 
  const [colors, setColors] = React.useState([]);
  const [currentColor, setCurrentColor]= React.useState('#4285F4'); 

  useEffect(()=> {
    //Check if all color names are diff
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
       colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    //Check if all colors are diff
    ValidatorForm.addValidationRule("isColorUnique", value =>
     colors.every(({ color }) => color !== currentColor)
    );
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangecolorName = (evt) => { 
    setColorName(evt.target.value);
  };
  
  const handleSubmitSavePalette = (newPaletteName) => {
    let newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g,'-'),
      colors: colors
    };

    savePalette(newPalette);
    props.history.push('/'); 
  };

  const addNewColor = () => {
    let newColor = {name: colorName, color: currentColor};
    setColors([...colors, newColor]);
    setColorName("");
  };
  
  const removeColor = (colorName) => {
    let updatedColors = colors.filter(color =>  color.name !== colorName);
    setColors(updatedColors);
  };

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
      let updatedColors = arrayMove(colors, oldIndex, newIndex);
      setColors(updatedColors); 
  };

  const clearColors = () => {
    setColors([]); 
  };

  const addRandomColor = () => {
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
        
        <Typography variant='h4'> Design your Palette </Typography>

        <div>
          <Button variant='contained' color='secondary' onClick={clearColors}> Clear Palette </Button>
          <Button variant='contained' color='primary' onClick={addRandomColor} disabled={isFullPalette}> Random Color </Button>
        </div>

        <ChromePicker color={currentColor} onChangeComplete={updateCurrentColor}/>

        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={colorName}
            onChange={handleChangecolorName}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={["Enter a color name", "Color name must be unique", "Color already used!"]}
          />
          <Button  
            variant='contained' 
            type='submit' 
            color='primary' 
            disabled={isFullPalette} 
            style={{backgroundColor: isFullPalette ? 'grey': currentColor }}
          > 
            { isFullPalette ? 'Palette Full': 'Add Color' } 
          </Button>
        </ValidatorForm>

      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis='xy'
          onSortEnd={onSortEnd}
        />
      </Main>

    </Box>
  );
};