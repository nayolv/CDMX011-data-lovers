import datos from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
console.log(datos);


let mostrarTarj = document.getElementById('mostrar');
mostrarTarj.style.visibility = 'hidden';

document.querySelector("#element").addEventListener("click", function () {
 const ocultarTarj = document.getElementById('ocultar');
 ocultarTarj.style.visibility = 'hidden';
   mostrarTarj.style.visibility ='visible';

})