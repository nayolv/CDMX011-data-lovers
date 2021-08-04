import { pokePantallaInicial, buscadorInicial, recuperarSeleccionado } from './data.js';
import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;

//Pokemon en pantalla inicial
window.onload = function () {
  pokePantallaInicial(dataImportada);
  document.getElementById("botonNuevaBusqueda").style.display = "none";
};


//BUSCADOR
document.getElementById("searchIcon").addEventListener("click", function () {
  buscadorInicial(dataImportada)
  document.getElementById("caracateristicas").style.display = "block";
  document.getElementById("about").style.display = "none";
});

//RESULTADO MENU DESPLEGABLE

document.getElementById("menuDesplegable").addEventListener("change", function () {
  recuperarSeleccionado(dataImportada);
  document.getElementById("pokeInicio").style.display = "none";
  document.getElementById("menuDesplegable").style.display = "none";
  document.getElementById("botonNuevaBusqueda").style.display = "block";
});



document.getElementById("botonNuevaBusqueda").addEventListener("click", function () { location.reload() });

