import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import seedColors from "./seed-colors";
import Palette from "./components/Palette";
import {generatePalette} from "./colorHelpers";  
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";


function App() {
  const [palettes, setPalettes] = useState(seedColors); 

  const findPalette = (id) => {
    return palettes.find( palette => palette.id === id); 
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };


  return (
    <Switch>
      <Route exact path="/palette/new" render={(routeProps)=> <NewPaletteForm savePalette={savePalette} {...routeProps}/>}/>
      <Route exact path="/" render={(routeProps) => <PaletteList palettes={palettes} {...routeProps}/>} />
      <Route 
        exact 
        path="/palette/:paletteId" 
        render={(routeProps) => (<Palette palette={generatePalette(findPalette(routeProps.match.params.paletteId))}/>)} 
      />
      <Route 
        exact 
        path="/palette/:paletteId/:colorId" 
        render={(routeProps) => <SingleColorPalette 
          colorId={routeProps.match.params.colorId}
          palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
        />} 
      />
    </Switch>
    
    // <div className="App">
    //     <Palette palette={generatePalette(seedColors[6])}/>
    // </div>
  );
}

export default App;


