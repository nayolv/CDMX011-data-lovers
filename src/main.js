import datos from './data.js';
import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;
let elementoSeleccionado;
//Pokemon en pantalla inicial
window.onload = function () {
  pokePantallaInicial();
};

//Trae el elemento seleccionado del menu desplegable.
document.getElementById("menuDesplegable").addEventListener("change", function () {
  elementoSeleccionado = document.getElementById("menuDesplegable").value;
});


function pokePantallaInicial() 
  menuDesp.forEach(item => {
    //CREANDO div para las tarjetas
    const contenedorInicio = document.getElementById("pokeInicio");
    const contenedorImgyNombre = document.createElement("div");
    contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
    contenedorImgyNombre.setAttribute("class", "claseTarjeta")
    contenedorInicio.appendChild(contenedorImgyNombre);
    //numero pokemon
    const parrafNumber = document.createElement("p");
    const number = item.num;
    const numero=parrafNumber.textContent = "N.°" + number;
    contenedorImgyNombre.innerHTML=numero;
    
    const images = item.img;
    const elementoImg = document.createElement("img");
    elementoImg.src = images;
    contenedorImgyNombre.appendChild(elementoImg);

    //nombre pokemon
    const liTipo = document.createElement("p");
    const nombre = item.name;
    liTipo.textContent = nombre;
    contenedorImgyNombre.appendChild(liTipo);
  });
}
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
    // Tipo
    const tipo= item.type
    document.getElementById("tipo").textContent="Tipo: "+ tipo;
    // Resistencia
    const resistencia = item.resistant;
    document.getElementById("resistencia").textContent = "Resisitencia: "+ resistencia;
    // Debilidad
    const debilidad = item.weaknesses;
    document.getElementById("debilidad").textContent = "Debilidad: "+debilidad;

  })

})

  //recupera el valor del select (MENU DESPLEGABLE)

  

function recuperarSeleccionado() {
  const elementoSeleccionado = document.getElementById("menuDesplegable").value;
  const menuDesp = dataImportada.filter(poke => poke.type == elementoSeleccionado);

  //recupera imagen y nombre del objeto
  menuDesp.forEach(item => {
    const contenedorInicio = document.getElementById("imagenes");
    const contenedorImgyNombre = document.createElement("div");
    contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
    contenedorImgyNombre.setAttribute("class", "claseTarjeta")
    
    contenedorInicio.appendChild(contenedorImgyNombre);
    //numero pokemon
    const parrafNumber = document.createElement("p");
    const number = item.num;
    parrafNumber.textContent = "N.°" + number;
    contenedorImgyNombre.append(number);
    //imagen pokemon
   
    const images = item.img;
    const elementoImg = document.createElement("img");
    elementoImg.src = images;
    contenedorImgyNombre.append(elementoImg);

    //nombre pokemon
    const liTipo = document.createElement("p");
    const nombre = item.name;
    liTipo.textContent = nombre;
    contenedorImgyNombre.append(liTipo);
  });

}
//trae el input del pokemon ingresado en la busqueda.
document.getElementById("botonNuevaBusqueda").addEventListener("click", function (){
});