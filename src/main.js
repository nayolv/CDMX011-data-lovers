import datos from './data.js';
import info from './data/pokemon/pokemon.js';
//import data from './data/pokemon/pokemon.js';



//console.log(data);

const boton = document.getElementById("btn");
boton.addEventListener("click", function () {
  info.pokemon.forEach(poke => {
    let prueba = poke.name;
    const caja = document.getElementById("entrada").value.toLowerCase();
    let res =document.querySelector("#element");
    let  resist = poke.resistant + poke.about;

    if (prueba === caja) {

     res.textContent = resist;
console.log(res.textContent)
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