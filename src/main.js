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
    liTipo.textContent = "TIPO: " + tipos;
    listaTipo.appendChild(liTipo);

    const listaResistencia = document.getElementById("resistantPokemon");
    const liResistencia = document.createElement("li");

    const resistencia = item.resistant;

    liResistencia.textContent = "RESISTENCIA " + resistencia;
    listaResistencia.appendChild(liResistencia);

    const listaDebilidad = document.getElementById("weaknessesPokemon");
    const liDebilidad = document.createElement("li");

    const debilidad = item.weaknesses;
    liDebilidad.textContent = "DEBILIDAD " + debilidad;
    listaDebilidad.appendChild(liDebilidad);

 
  buscadorFuncional.forEach(item =>{

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

  menuDesp.forEach(item => {

    const images = item.img;
    let contenedorImg = document.getElementById("imagenes");
    const elementoImg = document.createElement("img");

    elementoImg.src = images;
    contenedorImg.appendChild(elementoImg);
    
    const nombres = item.name;
    contenedorImg = document.getElementById("imagenes");
    const names = document.createElement("h3");

    names.textContent = nombres;
    contenedorImg.appendChild(names);

  })

 
  const names = menuDesp.map(nombres => nombres.name);

  names.forEach(item => {
    console.log(item)

    const creandoLista = document.getElementById("lista");
    const creandoLi = document.createElement("li");

    creandoLi.textContent = item;

    creandoLista.appendChild(creandoLi);


  });



});




