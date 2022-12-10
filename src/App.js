import { Switch, Route } from "react-router-dom";
import seedColors from "./seed-colors";
import Palette from "./components/Palette";
import {generatePalette} from "./colorHelpers";  
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";


function App() {

  const findPalette = (id) => {
    return seedColors.find( palette => palette.id === id); 
  }

  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>} />
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


