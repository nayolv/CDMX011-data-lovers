import datos from './data.js';
import data from './data/pokemon/pokemon.js';
//import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;


const botonBuscar = document.getElementById("btnSearch");

botonBuscar.addEventListener("click", function () {
    
  const tarjetaInfo = document.getElementById("buscador").value.toLowerCase();
    let tipoDiv = document.querySelector("#tipo");
    let resistenciaDiv = document.querySelector("#resistencia");
    let debilidadesDiv = document.querySelector("#debilidades");

  dataImportada.forEach(poke => {

    
    const filtradoPorNombre = poke.name;
    const imgSelec = poke.img;
    const busquedaTipo = "TIPO: " + poke.type;
    const buesquedaResistencia = " RESISTENCIA: " + poke.resistant;
    const busqueaDebilidades = "DEBILIDAD: " + poke.weaknesses;

    if (filtradoPorNombre === tarjetaInfo) {

      tipoDiv.textContent = busquedaTipo.replaceAll(",", "\n");
      resistenciaDiv.textContent = buesquedaResistencia.replaceAll(",", "\n");
      debilidadesDiv.textContent = busqueaDebilidades.replaceAll(",", " ");
      document.getElementById("imagen").src = imgSelec;

    }

  }
  );
});

 
document.getElementById("tiposPokemon").addEventListener("change",function(){
  recuperarSeleccionado();  
   });
   
 function recuperarSeleccionado(){
  const elementoSeleccionado= document.getElementById("tiposPokemon").value;
  const listaPokeTipo = dataImportada.filter(poke =>elementoSeleccionado==poke.type);
  let tipoDiv = document.querySelector("#tipo");
  const names = listaPokeTipo.map(nombres => nombres.name);
  const imgSelec = listaPokeTipo.map(imagenes => imagenes.img) 

tipoDiv.innerHTML = names;


  console.log(imgSelec)
}

  

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
  

