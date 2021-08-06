
import { pokePantallaInicial, datitos, recuperarSeleccionado } from './data.js';

import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;

//Pokemon en pantalla inicial
window.onload = function () {
  pokePantallaInicial(dataImportada);
  document.getElementById("botonNuevaBusqueda").style.display = "none";
};
const clickBuscar = document.getElementById("searchIcon");
//BUSCADOR    


clickBuscar.addEventListener("click", function () {

  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const nombreP = document.getElementById("namePoke");
  const imagenP = document.getElementById("imgPoke");
  const resultadoNomNum = datitos.pokeFiltroNameNum(dataImportada, searchUser);
  const resultadoImg = datitos.pokeFiltroImg(dataImportada, searchUser);
  const tipoP = document.getElementById("tipo");
  const resultadoType = datitos.pokeFiltroType(dataImportada, searchUser);
  const resistenciaP = document.getElementById("resistencia");
  const resultadoResist = datitos.pokeFiltroResist(dataImportada, searchUser);
  const debilidadP = document.getElementById("debilidad");
  const resultadoDebil = datitos.pokeFiltroDebil(dataImportada, searchUser);
  const resultadoE = datitos.pokeError(dataImportada, searchUser);


  imagenP.src = resultadoImg;
  nombreP.textContent = resultadoNomNum;
  tipoP.textContent = resultadoType;
  resistenciaP.textContent = resultadoResist;
  debilidadP.textContent = resultadoDebil;

  document.getElementById("caracateristicas").style.display = "block";
  document.getElementById("about").style.display = "none";
  const modalP = document.getElementById("modalPoke");
  modalP.style.display = "block";

  if (resultadoE == false) {
    modalP.style.display = "none";
  }


});



//RESULTADO MENU DESPLEGABLE

document.getElementById("menuDesplegable").addEventListener("change", function () {
  recuperarSeleccionado(dataImportada);
  document.getElementById("pokeInicio").style.display = "none";
  document.getElementById("menuDesplegable").style.display = "none";
  document.getElementById("botonNuevaBusqueda").style.display = "block";
});


document.getElementById("botonNuevaBusqueda").addEventListener("click", function () { location.reload() });
