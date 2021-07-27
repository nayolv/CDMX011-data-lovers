import datos from './data.js';
import data from './data/pokemon/pokemon.js';
//import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;


document.getElementById("btnSearch").addEventListener("click", function () {

  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);


  buscadorFuncional.forEach(item => {

    const imgSelec = item.img;
    document.getElementById("imagen").src = imgSelec;


    const listaTipo = document.getElementById("typePokemon");
    const liTipo = document.createElement("li");

    const tipos = item.type;
    liTipo.textContent = tipos;
    listaTipo.appendChild(liTipo);

    const listaResistencia = document.getElementById("resistantPokemon");
    const liResistencia = document.createElement("li");

    const resistencia = item.resistant;

    liResistencia.textContent = resistencia;
    listaResistencia.appendChild(liResistencia);

    const listaDebilidad = document.getElementById("weaknessesPokemon");
    const liDebilidad = document.createElement("li");

    const debilidad = item.weaknesses;
    liDebilidad.textContent = debilidad;
    listaDebilidad.appendChild(liDebilidad);



  })
})

//MENU DESPLEGABLE

document.getElementById("menuDesplegable").addEventListener("change", function () {


  const elementoSeleccionado = document.getElementById("menuDesplegable").value;
  const menuDesp = dataImportada.filter(poke => poke.type == elementoSeleccionado);
  const images = menuDesp.map(imagenes => imagenes.img);

  images.forEach(item => {


    const contenedorImg = document.getElementById("imagenes");
    const elementoImg = document.createElement("img");

    elementoImg.src = item;
    contenedorImg.appendChild(elementoImg);

  });


});


/*const names = menuDesp.map(nombres => nombres.name);

    const creandoLista = document.getElementById("lista");
    const creandoLi = document.createElement("li");

    creandoLi.textContent = item;
    creandoLista.appendChild(creandoLi);*/



//console.log(creandoLista)





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


