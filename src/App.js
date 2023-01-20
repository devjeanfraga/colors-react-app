import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition} from 'react-transition-group'; 
import seedColors from "./seed-colors";
import Palette from "./components/Palette";
import {generatePalette} from "./colorHelpers";  
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import Page from "./components/Page";


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
        <CSSTransition key={location.key} classNames='page' timeout={500}>

          <Switch location={location}>
            <Route exact path="/palette/new" render={(routeProps)=> (
              <Page>
                <NewPaletteForm savePalette={savePalette} palettes={palettes} {...routeProps}/>
              </Page>
            )}/>

            <Route exact path="/" render={(routeProps) => (
              <Page>
                <PaletteList palettes={palettes} deletePalette={deletePalette}   {...routeProps}/>
              </Page>
            )}/>

            <Route 
              exact 
              path="/palette/:paletteId" 
              render={(routeProps) => (
              <Page>
                <Palette palette={generatePalette(findPalette(routeProps.match.params.paletteId))}/>
              </Page>
              )} 
            />

            <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => (
                <Page>
                  <SingleColorPalette 
                  colorId={routeProps.match.params.colorId}
                  palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
                  />
                </Page>
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


