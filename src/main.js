import datos from './data.js';
import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;

//Pokemon en pantalla inicial
window.onload = function () {
  pokePantallaInicial();
},

pokePantallaInicial(){
  
}

//BUSCADOR
document.getElementById("btnSearch").addEventListener("click", function () {
  const searchUser = document.getElementById("buscador").value.toLowerCase();
     const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser); 
     const nombres= buscadorFuncional.map(pokenombre=>pokenombre.name);
     if(searchUser!=nombres){alert("Pokemon no encontrado");}

  buscadorFuncional.forEach(item => {

    let modalP = document.getElementById("modalPoke");
    modalP.style.display = "block";
    const imagenP = document.getElementById("imgPoke");
    const tipoP = document.getElementById("tipo");
    const resistenciaP = document.getElementById("resistencia");
    const debilidadP = document.getElementById("debilidad");

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
  let cerrarP = document.getElementById("closePoke");
  cerrarP.addEventListener("click", function () {
    let modalP = document.getElementById("modalPoke");
    modalP.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    let flexP = document.getElementById("flexPoke");
    if (e.target == flexP) {
      let modalP = document.getElementById("modalPoke");
      modalP.style.display = "none";
    }

  });

}),

  //RESULTADO MENU DESPLEGABLE

  document.getElementById("menuDesplegable").addEventListener("change", function () {
    recuperarSeleccionado();

    document.getElementById("pokeInicio").style.display = "none";
    //document.getElementById("pokeBuscador").style.display = "none";
    document.getElementById("menuDesplegable").style.visibility = "visible";


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

    //POPUP ABOUT 
    let modal = document.getElementById("miModal");
    let flex = document.getElementById("flex");
    let cerrar = document.getElementById("close");

    contenedorImgyNombre.addEventListener("click", function () {
      modal.style.display = "block";
      const contenedorModal = document.getElementById("informacion");
      const acercaDe = item.about;
      contenedorModal.textContent = acercaDe;

    });
    cerrar.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target == flex) {
        modal.style.display = "none";
      }
    });
  });

}

document.getElementById("botonNuevaBusqueda").addEventListener("click", function () { location.reload() });

/*
cambio.style.visibility = 'hidden';
cambio.style.visibility = 'hidden';*/