import datos from './data.js';
import data from './data/pokemon/pokemon.js';
//import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;

document.getElementById("btnSearch").addEventListener("click", function () {

  const tarjetaInfo = document.getElementById("buscador").value.toLowerCase();
  let tipoP = document.querySelector("#tipo");
  let resistenciaP = document.querySelector("#resistencia");
  let debilidadesP = document.querySelector("#debilidades");

  datos.searching(dataImportada, tarjetaInfo, tipoP, resistenciaP, debilidadesP);//Mandando parametros a otro archivo js
});


document.getElementById("tiposPokemon").addEventListener("change", function () {
  
  
  const elementoSeleccionado = document.getElementById("tiposPokemon").value;
  let tipoP = document.querySelector("#tipo");

  datos.dropdown(dataImportada, elementoSeleccionado, tipoP)

  /*const listaPokeTipo = dataImportada.filter(poke => elementoSeleccionado == poke.type);
  const names = listaPokeTipo.map(nombres => nombres.name);

  //const imgSelec = listaPokeTipo.map(imagenes => imagenes.img)


  tipoP.innerHTML = names;*/


  //console.log(imgSelec)
});



//---------------------------pruebas-----------------------------------------------------------

//document.querySelector('#prueba').innerHTML = info.pokemon[0]["about"];

/*
console.log(datos);

let cambio = document.getElementById('cambioTarj');
cambio.style.visibility = 'hidden';


document.querySelector("#element").addEventListener("click", function () {
 const ocultarTarj = document.getElementById('element');
 ocultarTarj.style.visibility = 'hidden';

let tipos = document.getElementById('types');

tipos.style.visibility = 'visible';



*/
/*;


document.getElementById("tiposPokemon").addEventListener("change",function(){

 let valorSelect = elementoSeleccionado.value;*/


 //info.pokemon.forEach(poke=>{})


//let prueba = dataImportada.map(tipos => tipos.type);



/*const filtradoElectrico = dataImportada.filter(tipos => tipos.type == 'fire')


console.log(filtradoElectrico)*/


