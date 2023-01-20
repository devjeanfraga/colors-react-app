import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition} from 'react-transition-group'; 
import seedColors from "./seed-colors";
import Palette from "./components/Palette";
import {generatePalette} from "./colorHelpers";  
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import "../src/styles/App.css";


function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));

  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  const findPalette = (id) => {
    return palettes.find( palette => palette.id === id); 
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = (id) => {
    let updatedPalettes = palettes.filter(palette => palette.id !== id);
    setPalettes(updatedPalettes);
  };

  useEffect( () => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  return (
    <Route render={({location})=> (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames='fade' timeout={500}>

          <Switch location={location}>
            <Route exact path="/palette/new" render={(routeProps)=> (
              <div className="page">
                <NewPaletteForm savePalette={savePalette} palettes={palettes} {...routeProps}/>
              </div>
            )}/>

            <Route exact path="/" render={(routeProps) => (
              <div className="page">
                <PaletteList palettes={palettes} deletePalette={deletePalette}   {...routeProps}/>
              </div>
            )}/>

            <Route 
              exact 
              path="/palette/:paletteId" 
              render={(routeProps) => (
              <div className="page">
                <Palette palette={generatePalette(findPalette(routeProps.match.params.paletteId))}/>
              </div>
              )} 
            />

            <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => (
                <div className="page">
                  <SingleColorPalette 
                  colorId={routeProps.match.params.colorId}
                  palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
                  />
                </div>
                )
              } 
            />
          </Switch>

        </CSSTransition>
      </TransitionGroup>

    )}
    
    />

    
    // <div className="App">
    //     <Palette palette={generatePalette(seedColors[6])}/>
    // </div>
  );
}

export default App;


