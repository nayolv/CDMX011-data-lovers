import datos from './data.js';
import info from './data/pokemon/pokemon.js';
//import data from './data/pokemon/pokemon.js';



//console.log(data);


const boton = document.getElementById("btn");
boton.addEventListener("click", function(){
   info.pokemon.forEach(poke => 
    
  {  let prueba = poke.name;
    const caja = document.getElementById("entrada").value;
    if (prueba === caja) {
        alert(poke.about)
        
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