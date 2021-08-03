import datos from './data.js';
import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;

//Pokemon en pantalla inicial
window.onload = function () {
  pokePantallaInicial();

  document.getElementById("botonNuevaBusqueda").style.display = "none";
};

function pokePantallaInicial() {
  dataImportada.forEach(item => {
    //CREANDO div para las tarjetas
    const contenedorInicio = document.getElementById("pokeInicio");
    const contenedorImgyNombre = document.createElement("div");
    contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
    contenedorImgyNombre.setAttribute("class", "claseTarjeta");
    contenedorInicio.appendChild(contenedorImgyNombre);

    //CONDICIONAL PARA MOSTRAR SOLO N° POKEMONES

    const liNum = document.createElement("p");
    const num = item.num;

    liNum.textContent = "N° " + num;
    contenedorImgyNombre.appendChild(liNum);

    const images = item.img;
    const elementoImg = document.createElement("img");
    elementoImg.src = images;
    contenedorImgyNombre.appendChild(elementoImg);

    //tipo pokemon
    const liNombre = document.createElement("p");
    const nombre = item.name;
    liNombre.textContent = nombre;
    contenedorImgyNombre.appendChild(liNombre);

    //MODAL ABOUT 

    contenedorImgyNombre.addEventListener("click", function () {
      document.getElementById("about").style.visibility = "visible";
      document.getElementById("caracateristicas").style.display = "none";

      const modalP = document.getElementById("modalPoke");
      modalP.style.display = "block";
      const imagenP = document.getElementById("imgPoke");
      const nombreP = document.getElementById("namePoke");
      const aboutP = document.getElementById("about");

      const pokeSelec = item.img;
      imagenP.src = pokeSelec;

      const name = item.name;
      nombreP.textContent = name;

      const acerca = item.about;
      aboutP.textContent = acerca;
    });

    const cerrarP = document.getElementById("closePoke");
    cerrarP.addEventListener("click", function () {
      let modalP = document.getElementById("modalPoke");
      modalP.style.display = "none";

    });

  });
}

//BUSCADOR
document.getElementById("searchIcon").addEventListener("click", function () {

  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);
  document.getElementById("caracateristicas").style.display = "block";
  document.getElementById("about").style.display = "none";

  const nombres= buscadorFuncional.map(pokenombre=>pokenombre.name);
     if(searchUser!=nombres){
       alert("Pokemon no encontrado");
       throw TypeError("Pokemon no encontrado")
      
      }


  buscadorFuncional.forEach(item => {

    let modalP = document.getElementById("modalPoke");
    modalP.style.display = "block";
    const imagenP = document.getElementById("imgPoke");
    const tipoP = document.getElementById("tipo");
    const resistenciaP = document.getElementById("resistencia");
    const debilidadP = document.getElementById("debilidad");
    const nombreP = document.getElementById("namePoke");


    //NOMBRE
    const name = item.name;
    nombreP.textContent = name;
    //IMAGEN
    const pokeSelec = item.img;
    imagenP.src = pokeSelec;
    //TIPO
    const type = item.type;
    tipoP.textContent = type;
    //RESISTENCIA
    const resistant = item.resistant;
    resistenciaP.textContent = resistant;
    //DEBILIDAD
    const weaknesses = item.weaknesses;
    debilidadP.textContent = weaknesses;

  });
  const cerrarP = document.getElementById("closePoke");
  cerrarP.addEventListener("click", function () {
    let modalP = document.getElementById("modalPoke");
    modalP.style.display = "none";
    document.getElementById("about").style.display = "block";

  });



}),

  //RESULTADO MENU DESPLEGABLE

  document.getElementById("menuDesplegable").addEventListener("change", function () {
    recuperarSeleccionado();

    document.getElementById("pokeInicio").style.display = "none";
    //document.getElementById("pokeBuscador").style.display = "none";
    document.getElementById("menuDesplegable").style.display = "none";

    document.getElementById("botonNuevaBusqueda").style.display = "block";



  });

function recuperarSeleccionado() {
  const elementoSeleccionado = document.getElementById("menuDesplegable").value;
  const menuDesp = dataImportada.filter(poke => poke.type == elementoSeleccionado);

  //recupera imagen y nombre del objeto
  menuDesp.forEach(item => {

    const contenedorInicio = document.getElementById("pokeDesplegable");
    const contenedorImgyNombre = document.createElement("div");
    contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
    contenedorImgyNombre.setAttribute("class", "claseTarjeta");
    contenedorInicio.appendChild(contenedorImgyNombre);

    //IMAGEN POKEMON
    const images = item.img;
    const elementoImg = document.createElement("img");
    elementoImg.src = images;
    contenedorImgyNombre.appendChild(elementoImg);

    //NOMBRE POKEMON
    const liNombre = document.createElement("p");
    const nombre = item.name;
    liNombre.textContent = nombre;
    contenedorImgyNombre.appendChild(liNombre);
    contenedorImgyNombre.addEventListener("click", function () {
      document.getElementById("about").style.visibility = "visible";
      document.getElementById("caracateristicas").style.display = "none";

      const modalP = document.getElementById("modalPoke");
      modalP.style.display = "block";
      const imagenP = document.getElementById("imgPoke");
      const nombreP = document.getElementById("namePoke");
      const aboutP = document.getElementById("about");

      const pokeSelec = item.img;
      imagenP.src = pokeSelec;

      const name = item.name;
      nombreP.textContent = name;

      const acerca = item.about;
      aboutP.textContent = acerca;
    });

    const cerrarP = document.getElementById("closePoke");
    cerrarP.addEventListener("click", function () {
      let modalP = document.getElementById("modalPoke");
      modalP.style.display = "none";

    });
 
  });

}

document.getElementById("botonNuevaBusqueda").addEventListener("click", function () { location.reload() });

/*
cambio.style.visibility = 'hidden';

cambio.style.visibility = 'hidden';*/


