import seedColors from "./seed-colors";
import Palette from "./components/Palette";
import {generatePalette} from "./colorHelpers";  


function App() {
  //console.log(generatePalette(seedColors[6]))
  return (
    
    <div className="App">
        <Palette palette={generatePalette(seedColors[6])}/>
    </div>
  );
}

export default App;
