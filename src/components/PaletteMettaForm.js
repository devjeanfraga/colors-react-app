import React, { useEffect }from "react";
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function PaletteMetaForm (props) {
  const {palettes, handleSubmit} = props;
  const [paletteName, setPaletteName] = React.useState('');
  const [open, setOpen] = React.useState(false);



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
    setOpen(false);
  };


    return (
      <div>
        <Button
          variant='outlined'
          color='primary'
          onClick={handleClickOpen}
        >
          Open form dialog
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>

          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>

            <ValidatorForm onSubmit={ () => handleSubmit(paletteName) }>
              <TextValidator
                label='Palette Name'
                value={paletteName}
                name='paletteName'
                onChange={handleChangePaletteName}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['Enter Palette Name', 'Name already used']}
              />
              <Button type='submit'variant='contained' color='primary'>
                Save Palette
              </Button>
            </ValidatorForm>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>

        </Dialog>
      </div>
    );
};

export default PaletteMetaForm; 