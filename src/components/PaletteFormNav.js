import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { withStyles } from '@mui/styles'; 
import CssBaseline from '@mui/material/CssBaseline'; 
import MuiAppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar'; 
import Typography from '@mui/material/Typography'; 
import IconButton from '@mui/material/IconButton'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import Button from '@mui/material/Button';
import PaletteMetaForm from './PaletteMettaForm';
import {styles, stylesAppBar} from '../styles/PaletteFormNavStyles';

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open'} )( stylesAppBar );

function PaletteFormNav (props) {
  const {palettes, handleSubmitSavePalette, handleDrawerOpen, classes, open} = props;
  const [formShowing, setFormShowing] = useState(false);

  const showForm = () => setFormShowing(!formShowing);
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color='default' open={open}>
        
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }) }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"> Create a Palette </Typography>
        </Toolbar>
          
        <div className='navBtns'>

          <Link to='/'>
            <Button variant='contained' color='secondary' className='button'>
              Go Back
            </Button>
          </Link>

          <Button variant='contained' color='primary' onClick={showForm} className='button'>
            Save
          </Button>

          { formShowing && <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmitSavePalette} hideForm={showForm}/> }
        </div>
      </AppBar>
    </div> 
  );
};

export default withStyles(styles, {withTheme: true})(PaletteFormNav); 