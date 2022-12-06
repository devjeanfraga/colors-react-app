import {Route, Routes} from "react-router-dom"
import seedColors from "./seed-colors";
import Palette from "./components/Palette";
import {generatePalette} from "./colorHelpers";  


function App() {
  //console.log(generatePalette(seedColors[6]))
  return (
    <Routes>
      <Route exact path="/" element={<h1>PALETTE LIST GOES HERE</h1>} />
      <Route exact path="/palette/:id" element={<h1>PALETTE ID GOES HERE</h1>} />
    </Routes>
    
    // <div className="App">
    //     <Palette palette={generatePalette(seedColors[6])}/>
    // </div>
  );
}

export default App;
