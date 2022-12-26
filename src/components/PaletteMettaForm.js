import React, { useEffect }from "react";
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function PaletteMetaForm (props) {
  const {palettes, handleSubmit, showForm} = props;
  const [paletteName, setPaletteName] = React.useState('');
  const [open, setOpen] = React.useState(true);



  useEffect(()=> {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => 
    palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  });

  const handleChangePaletteName = (evt) => {
    setPaletteName(evt.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!true);
    showForm(); 
  };


    return (
      <div>
        {/* <Button
          variant='outlined'
          color='primary'
          onClick={handleClickOpen}
        >
          Open form dialog
        </Button> */}

        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle id='form-dialog-title'>Choose your Palette Name</DialogTitle>

          <ValidatorForm onSubmit={ () => handleSubmit(paletteName) }>
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
                {/* <Button type='submit'variant='contained' color='primary'>
                  Save Palette
                </Button> */}
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button variant='contained' color='primary' type='submit' onClick={handleClose}>Save Palette</Button>
            </DialogActions>
          </ValidatorForm>

        </Dialog>
      </div>
    );
};

export default PaletteMetaForm; 