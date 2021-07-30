import datos from './data.js';
import data from './data/pokemon/pokemon.js';
//import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;
//Pokemon en pantalla inicial
window.onload= function(){
  pokePantallaInicial();
};

function pokePantallaInicial(){
  dataImportada.forEach(item => {
    //div para las tarjetas
    const contenedorInicio = document.getElementById("pokeInicio");
    const contenedorImgyNombre = document.createElement("div");
    contenedorImgyNombre.setAttribute("id","pokeTarjeta");
    contenedorImgyNombre.setAttribute("class","claseTarjeta");
  
    contenedorInicio.appendChild(contenedorImgyNombre);

    //imagen pokemon
    const images = item.img;
    const elementoImg = document.createElement("img");
    elementoImg.src = images;
    contenedorImgyNombre.appendChild(elementoImg);

    //tipo pokemon
    const liTipo = document.createElement("p");
    const nombre = item.name;
    liTipo.textContent = nombre;
    contenedorImgyNombre.appendChild(liTipo);
  
});
}

/*function pokePantallaInicial(){
  dataImportada.forEach(item => {
    //div para las tarjetas
    const contenedorInicio = document.getElementById("pokeInicio");
    const contenedorImgyNombre = document.createElement("div");
    contenedorImgyNombre.setAttribute("id","pokeTarjeta");
    contenedorInicio.appendChild(contenedorImgyNombre);

    //imagen pokemon
    const contenedorImg = document.getElementById("pokeTarjeta");
    const images = item.img;
    const elementoImg = document.createElement("img");
    elementoImg.src = images;
    contenedorImg.appendChild(elementoImg);

    //tipo pokemon
    const liTipo = document.createElement("p");
    const tipos = item.type;
    liTipo.textContent = "TIPO: " + tipos;
    contenedorImg.appendChild(liTipo);
    
});
}*/

//BUSCADOR
document.getElementById("btnSearch").addEventListener("click", function () {

  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);

  buscadorFuncional.forEach(item => {
    //imagen pokemon
    const imgSelec = item.img;
    document.getElementById("imagen").src = imgSelec;
    //tipo pokemon
    const contenedorPokeInfo = document.getElementById("info");
    const liTipo = document.createElement("p");
    const tipos = item.type;
    liTipo.textContent = "TIPO: " + tipos;
    contenedorPokeInfo.appendChild(liTipo);
    //resistencia pokemon
    const liResistencia = document.createElement("p");
    const resistencia = item.resistant;
    liResistencia.textContent = "RESISTENCIA " + resistencia;
    contenedorPokeInfo.appendChild(liResistencia);
    //debilidades pokemon    
    const liDebilidad = document.createElement("p");
    const debilidad = item.weaknesses;
    liDebilidad.textContent = "DEBILIDAD " + debilidad;
    contenedorPokeInfo.appendChild(liDebilidad);
  })
  
}),
  //recupera el valor del select

  document.getElementById("menuDesplegable").addEventListener("change", function () {
    recuperarSeleccionado();

  });

function recuperarSeleccionado() {
  const elementoSeleccionado = document.getElementById("menuDesplegable").value;
  const menuDesp = dataImportada.filter(poke => poke.type == elementoSeleccionado);

  //recupera imagen y nombre del objeto
  menuDesp.forEach(item => {

    const images = item.img;
    const contenedorImg = document.getElementById("imagenes");
    const elementoImg = document.createElement("img");

    elementoImg.src = images;
    contenedorImg.appendChild(elementoImg);

    const nombres = item.name;
    const names = document.createElement("h3");

    names.textContent = nombres;
    contenedorImg.appendChild(names);
  });

}