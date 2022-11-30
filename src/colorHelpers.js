import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]; 

export function generatePalette (startPalette) {
  let newPalette = {
      paletteName: startPalette.paletteName,
      id:  startPalette.id,
      emoji: startPalette.emoji,
      colors: {}
  };

  for(let level of levels) newPalette.colors[level] = []; 

  for (let color of startPalette.colors) {
    let scale = getScale(color, 10).reverse();
    for(let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"), //substiuir espaço por hifén
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      });
    };
  };

  return newPalette; 
};

function getRange (hexColor) {
  hexColor = hexColor.color;
  const end = "#ffff";
  return [
    chroma(hexColor).darken(1.4).hex(),
    hexColor,
    end 
  ]; 
};

function getScale (hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
} 