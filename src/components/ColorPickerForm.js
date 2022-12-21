import React, {useEffect} from 'react'; 
import Button from '@mui/material/Button'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from 'react-color';

function ColorPickerForm (props) {
  const {colors, addNewColor, isFullPalette} = props;
  const [colorName, setColorName] = React.useState(''); 
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

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  const handleChangecolorName = (evt) => { 
    setColorName(evt.target.value);
  };

  const handleSubmit = () => {
    let newColor = {name: colorName, color: currentColor};
    addNewColor(newColor);
    setColorName('');
  }

  return (
    <div>
      <ChromePicker color={currentColor} onChangeComplete={updateCurrentColor}/>
      <ValidatorForm onSubmit={handleSubmit}>
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
    </div>
  );
};

export default ColorPickerForm; 