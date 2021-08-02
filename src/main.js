import datos from './data.js';
import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;

//Pokemon en pantalla inicial
window.onload = function () {
  pokePantallaInicial();
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
    if (num <= "030") {
       liNum.textContent = "N° " + num;
    contenedorImgyNombre.appendChild(liNum);
    console.log(num);
    
    const images = item.img;
    const elementoImg = document.createElement("img");
    elementoImg.src = images;
    contenedorImgyNombre.appendChild(elementoImg);

    //tipo pokemon
    const liTipo = document.createElement("p");
    const nombre = item.name;
    liTipo.textContent = nombre;
    contenedorImgyNombre.appendChild(liTipo);
      
    }
    //POPUP ABOUT 
    let modal = document.getElementById("miModal");
    let flex = document.getElementById("flex");
    let cerrar = document.getElementById("close");

    contenedorImgyNombre.addEventListener("click", function () {
      modal.style.display = "block";
      const contenedorModal = document.getElementById("informacion");
      const acercaDe =item.about;
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

//BUSCADOR
document.getElementById("btnSearch").addEventListener("click", function () {

  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);

  document.getElementById("pokeInicio").style.display = "none";


  buscadorFuncional.forEach(item => {

    //imagen pokemon
    const imgSelec = item.img;
    document.getElementById("imagen").src = imgSelec;

    const tipo = item.type;
    document.getElementById("tipo").textContent = tipo;

    const resistencia = item.resistant;
    document.getElementById("resistencia").textContent = resistencia;

    const debilidad = item.weaknesses;
    document.getElementById("debilidad").textContent = debilidad;

    /*const contenedorInicio = document.getElementById("pokeInicio");
    contenedorInicio.style.visibility = 'hidden';*/
  });

}),

  //recupera el valor del select (MENU DESPLEGABLE)

  document.getElementById("menuDesplegable").addEventListener("change", function () {
    recuperarSeleccionado();

    document.getElementById("pokeInicio").style.display = "none";
  });

function recuperarSeleccionado() {
  const elementoSeleccionado = document.getElementById("menuDesplegable").value;
  const menuDesp = dataImportada.filter(poke => poke.type == elementoSeleccionado);

  //recupera imagen y nombre del objeto
  menuDesp.forEach(item => {
    let contenedor = document.getElementById("imagenes");

    const images = item.img;
    const elementoImg = document.createElement("img");
    elementoImg.src = images;
    contenedor.appendChild(elementoImg);

    const names = document.createElement("p");
    const nombres = item.name;

    names.innerHTML = nombres;
    contenedor.appendChild(names);
  });

}

document.getElementById("botonNuevaBusqueda").addEventListener("click", function () { location.reload() });

/*
cambio.style.visibility = 'hidden';

cambio.style.visibility = 'hidden';*/


