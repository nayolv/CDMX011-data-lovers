import {pokePantallaInicial, datitos, recuperarSeleccionado} from './data.js';
import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;

//Pokemon en pantalla inicial
window.onload = function () {
  pokePantallaInicial(dataImportada);
  document.getElementById("botonNuevaBusqueda").style.display = "none";
};

//BUSCADOR    
const clickBuscar = document.getElementById("searchIcon");

clickBuscar.addEventListener("click", function () {
  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const nombreP = document.getElementById("namePoke");
  const resultadoNomNum = datitos.pokeFiltroNameNum(dataImportada, searchUser);

  nombreP.textContent = resultadoNomNum;
  /*imagenP.src = resImg;
  tipoP.textContent = resType;*/

  document.getElementById("caracateristicas").style.display = "block";
  document.getElementById("about").style.display = "none";
  const modalP = document.getElementById("modalPoke");
  modalP.style.display = "block";

});

clickBuscar.addEventListener("click", function () {
  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const imagenP = document.getElementById("imgPoke");
  const resultadoImg = datitos.pokeFiltroImg(dataImportada, searchUser);


  imagenP.src = resultadoImg;

  document.getElementById("caracateristicas").style.display = "block";
  document.getElementById("about").style.display = "none";
  const modalP = document.getElementById("modalPoke");
  modalP.style.display = "block";

});

clickBuscar.addEventListener("click", function () {
  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const tipoP = document.getElementById("tipo");
  const resultadoType = datitos.pokeFiltroType(dataImportada, searchUser);


  tipoP.textContent = resultadoType;

  document.getElementById("caracateristicas").style.display = "block";
  document.getElementById("about").style.display = "none";
  const modalP = document.getElementById("modalPoke");
  modalP.style.display = "block";

});

clickBuscar.addEventListener("click", function () {
  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const resistenciaP = document.getElementById("resistencia");
  const resultadoResist = datitos.pokeFiltroResist(dataImportada, searchUser);


  resistenciaP.textContent = resultadoResist;

  document.getElementById("caracateristicas").style.display = "block";
  document.getElementById("about").style.display = "none";
  const modalP = document.getElementById("modalPoke");
  modalP.style.display = "block";

});
clickBuscar.addEventListener("click", function () {
  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const debilidadP = document.getElementById("debilidad"); 
   const resultadoDebil = datitos.pokeFiltroDebil(dataImportada, searchUser);


  debilidadP.textContent = resultadoDebil;

  document.getElementById("caracateristicas").style.display = "block";
  document.getElementById("about").style.display = "none";
  const modalP = document.getElementById("modalPoke");
  modalP.style.display = "block";

});



//RESULTADO MENU DESPLEGABLE

document.getElementById("menuDesplegable").addEventListener("change", function () {
  recuperarSeleccionado(dataImportada);
  document.getElementById("pokeInicio").style.display = "none";
  document.getElementById("menuDesplegable").style.display = "none";
  document.getElementById("botonNuevaBusqueda").style.display = "block";
});



document.getElementById("botonNuevaBusqueda").addEventListener("click", function () { location.reload() });
