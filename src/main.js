import datos from './data.js';
import info from './data/pokemon/pokemon.js';
//import data from './data/pokemon/pokemon.js';



//console.log(data);

const botonBuscar = document.getElementById("btnSearch");

botonBuscar.addEventListener("click", function () {

  info.pokemon.forEach(poke => {

    const filtradoPorNombre = poke.name;
    const tarjetaInfo = document.getElementById("buscador").value.toLowerCase();
    let tipoDiv =document.querySelector("#tipo")
    let resistenciaDiv = document.querySelector("#resistencia");
    let debilidadesDiv = document.querySelector("#debilidades");

    const imgSelec = poke.img;
    const busquedaTipo = "TIPO: " + poke.type; 
    const buesquedaResistencia = " RESISTENCIA: " + poke.resistant;
    const busqueaDebilidades = "DEBILIDAD: " + poke.weaknesses;
    if (filtradoPorNombre === tarjetaInfo) {
    

      tipoDiv.textContent = busquedaTipo.replaceAll(",", "\n");
      resistenciaDiv.textContent = buesquedaResistencia.replaceAll(",", "\n");
      debilidadesDiv.textContent = busqueaDebilidades.replaceAll(",", "     ")
     document.getElementById("imagen").src = imgSelec;

    }

  }
  )
})





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



})*/