import { datitos } from './data.js';

import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;

//Pokemon en pantalla inicial
window.onload = function () {
  document.getElementById("botonNuevaBusqueda").style.display = "none";
  dataImportada.forEach(item => {
    //CONDICIONAL PARA MOSTRAR SOLO N° POKEMONES
    if (item.num <= "030") {
      //CREANDO div para las tarjetas
      const contenedorInicio = document.getElementById("pokeInicio");
      const contenedorImgyNombre = document.createElement("div");
      contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
      contenedorImgyNombre.setAttribute("class", "claseTarjeta");
      contenedorInicio.appendChild(contenedorImgyNombre);

      const liNum = document.createElement("p");
      liNum.textContent = "N° " + item.num;
      contenedorImgyNombre.appendChild(liNum);

      const elementoImg = document.createElement("img");
      elementoImg.src = item.img;
      contenedorImgyNombre.appendChild(elementoImg);

      //tipo pokemon
      const liNombre = document.createElement("p");
      liNombre.textContent = item.name;
      contenedorImgyNombre.appendChild(liNombre);

      //MODAL ABOUT 
      contenedorImgyNombre.addEventListener("click", function () {

        document.getElementById("modalPoke").style.display = "block";
        const imagenP = document.getElementById("imgPoke");
        const nombreP = document.getElementById("namePoke");
        const tipoP = document.getElementById("tipo");
        const resistenciaP = document.getElementById("resistencia");
        const debilidadP = document.getElementById("debilidad");

        imagenP.src = item.img;
        nombreP.textContent = item.name;
        tipoP.textContent = item.type;
        resistenciaP.textContent = item.resistant;
        debilidadP.textContent = item.weaknesses;
      });


      document.getElementById("closePoke").addEventListener("click", function () {
        document.getElementById("modalPoke").style.display = "none";
      });
    }
  });
};

const clickBuscar = document.getElementById("searchIcon");
document.getElementById("botonNuevaBusqueda").addEventListener("click", function () { location.reload() });
//BUSCADOR    


clickBuscar.addEventListener("click", function () {

  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const nombreP = document.getElementById("namePoke");
  const imagenP = document.getElementById("imgPoke");
  const dataFiltrada = datitos.infoFiltrada(dataImportada, searchUser);
  const pokeData= datitos.mapeandoData(dataFiltrada);
  const resultadoE = datitos.pokeError(pokeData, searchUser);
  if (resultadoE==false){ alert("pokemon no encontrado")}
  const resultadoNomNum = datitos.pokeFiltroNameNum(dataFiltrada);
  const resultadoImg = datitos.pokeFiltroImg(dataFiltrada);
  const tipoP = document.getElementById("tipo");
  const resultadoType = datitos.pokeFiltroType(dataFiltrada);
  const resistenciaP = document.getElementById("resistencia");
  const resultadoResist = datitos.pokeFiltroResist(dataFiltrada);
  const debilidadP = document.getElementById("debilidad");
  const resultadoDebil = datitos.pokeFiltroDebil(dataFiltrada);
  
  
  
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
  const elementoSeleccionado = document.getElementById("menuDesplegable").value;
  const menuDesp = datitos.recuperarSeleccionado(dataImportada, elementoSeleccionado);

  document.getElementById("pokeInicio").style.display = "none";
  document.getElementById("menuDesplegable").style.display = "none";
  document.getElementById("botonNuevaBusqueda").style.display = "block";
  
  menuDesp.forEach(item => {

    const contenedorInicio = document.getElementById("pokeDesplegable");
    const contenedorImgyNombre = document.createElement("div");
    contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
    contenedorImgyNombre.setAttribute("class", "claseTarjeta");
    contenedorInicio.appendChild(contenedorImgyNombre);

    //IMAGEN POKEMON
    const elementoImg = document.createElement("img");
    elementoImg.src = item.img;
    contenedorImgyNombre.appendChild(elementoImg);

    //NOMBRE POKEMON
    const liNombre = document.createElement("p");
    liNombre.textContent = item.name;
    contenedorImgyNombre.appendChild(liNombre);
    contenedorImgyNombre.addEventListener("click", function () {
      document.getElementById("modalPoke").style.display = "block";
      const imagenP = document.getElementById("imgPoke");
      const nombreP = document.getElementById("namePoke");
      const tipoP = document.getElementById("tipo");
      const resistenciaP = document.getElementById("resistencia");
      const debilidadP = document.getElementById("debilidad");

      imagenP.src = item.img;
      nombreP.textContent = item.name;
      tipoP.textContent = item.type;
      resistenciaP.textContent = item.resistant;
      debilidadP.textContent = item.weaknesses;
    });
  });
    document.getElementById("closePoke").addEventListener("click", function () {
    document.getElementById("modalPoke").style.display = "none";
    });
  });