import React, { useEffect, useState }from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import data from '@emoji-mart/data'
import Picker from "@emoji-mart/react";


function PaletteMetaForm (props) {
  const {palettes, handleSubmit, hideForm} = props;
  const [paletteName, setPaletteName] = useState('');
  const [stage, setStage] = useState('form');   

  useEffect(()=> {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => 
    palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  });

  const handleChangePaletteName = (evt) => {
    setPaletteName(evt.target.value);
  };

  const showEmojiPicker = () => {
    setStage('emoji');
  };

  const savePalette = (emoji) => {
    console.log(emoji); 
    let newPalette = { paletteName: paletteName, emoji: emoji.native };
    handleSubmit(newPalette); 
    setStage(''); 
  }

  const handleClose = () => {
    hideForm(); 
  };


    return (
      <div>
        <Dialog open={stage === 'emoji'} onClose={hideForm}>
        <DialogTitle id='form-dialog-title'> Choose a Palette Emoji </DialogTitle>
          <Picker data={data} theme='light' onEmojiSelect={savePalette}/>
        </Dialog>

        <Dialog
          open={stage === 'form'}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Choose your Palette Name</DialogTitle>

          <ValidatorForm onSubmit={showEmojiPicker}>
            <DialogContent>
              <DialogContentText>Please enter a name for your new beautiful palette. Make sure it's unique!</DialogContentText>

                <TextValidator
                  label='Palette Name'
                  value={paletteName}
                  name='paletteName'
                  fullWidth
                  margin='normal'
                  onChange={handleChangePaletteName}
                  validators={['required', 'isPaletteNameUnique']}
                  errorMessages={['Enter Palette Name', 'Name already used']}
                />

            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm}>Cancel</Button>
              <Button variant='contained' color='primary' type='submit'>Save Palette</Button>
            </DialogActions>
          </ValidatorForm>

        </Dialog>
      </div>
    );
};

export default PaletteMetaForm; 