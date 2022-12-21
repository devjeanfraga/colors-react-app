import React, { useEffect } from 'react'; 
import { styled, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; 
import MuiAppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography'; 
import IconButton from '@mui/material/IconButton'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import Button from '@mui/material/Button'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const drawerWidth = 400;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function PaletteFormNav (props) {
  const {palettes, handleSubmitSavePalette, handleDrawerOpen, open} = props;
  const [paletteName, setPaletteName] = React.useState('');
  const handleChangePaletteName = (evt) => {
    setPaletteName(evt.target.value); 
  };

  useEffect(()=> {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => 
    palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  });

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" color='default' open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>

          <ValidatorForm onSubmit={ () => handleSubmitSavePalette(paletteName) }>
            <TextValidator
              label='Palette Name'
              value={paletteName}
              name='newPaletteName'
              onChange={handleChangePaletteName}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
            />
            <Button type='submit'variant='contained' color='primary'>
              Save Palette
            </Button>
          </ValidatorForm>

        </Toolbar>
      </AppBar>
    </div> 
  );
};

export default PaletteFormNav; 