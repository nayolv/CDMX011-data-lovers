import manipulacionData from './data.js';
// import data from './data/lol/lol.js';
import datos from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(manipulacionData);
//trae el nombre del pokemon
//const imagenes = document.querySelector("#habilidades").innerHTML = dato.pokemon[0]["name"];
//imprime los keys del primer pokemon
//const imagen=dato.pokemon[0]["img"];
/*const imagenes= ()=>{
    document.getElementById("imagenP1").src=;
  }*/

//console.log(imagen);

/*const imagenes= ()=>{
    document.getElementById("imagenP1").src=;
  }*/
//se incerta en el src de la imagen :,D
  /*document.getElementById("imagenP1").src=datos.pokemon[0]["img"];
  document.getElementById("imagenP2").src=datos.pokemon[1]["img"];
  document.getElementById("imagenP3").src=datos.pokemon[2]["img"];
  document.getElementById("imagenP4").src=datos.pokemon[3]["img"];
  document.getElementById("imagenP5").src=datos.pokemon[4]["img"];
  document.getElementById("imagenP6").src=datos.pokemon[5]["img"];*/

/*const imagenes= datos.pokemon.map(function(imagen){
   return imagen;
})

console.log(imagenes);*/

datos.pokemon.forEach(poke=>{
  //let imagen= poke.img;

  //document.getElementById("imagenP2").src= imagen;
  console.log(poke.img);
}
);

