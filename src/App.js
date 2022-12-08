import { Switch, Route } from "react-router-dom";
import seedColors from "./seed-colors";
import Palette from "./components/Palette";
import {generatePalette} from "./colorHelpers";  
import PaletteList from "./components/PaletteList";


function App() {

  const findPalette = (id) => {
    return seedColors.find( palette => palette.id === id); 
  }

  return (
    <Switch>
      <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>} />
      <Route 
        exact 
        path="/palette/:id" 
        render={(routeProps) => (<Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>)} 
      />
      <Route 
        exact 
        path="/palette/:paletteId/:colorId" 
        render={() => (<h1>Single Color Page</h1>)} 
      />
    </Switch>
    
    // <div className="App">
    //     <Palette palette={generatePalette(seedColors[6])}/>
    // </div>
  );
}

export default App;


