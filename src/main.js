import manipulacionData from './data.js';
// import data from './data/lol/lol.js';
import info from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


document.getElementById("tiposPokemon").addEventListener("change",function(){
 recuperarSeleccionado();  
  });
  
function recuperarSeleccionado(){
 const elementoSeleccionado= document.getElementById("tiposPokemon").value;

  info.pokemon.forEach(poke=>{
   const tipo= poke.type;
  
   if(elementoSeleccionado===tipo){
    alert("El elemento seleccionado es"+elementoSeleccionado);
  } else{ alert("esto no esta jalando");
  }
  })
}
