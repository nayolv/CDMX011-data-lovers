import datitos from './data.js';
import data from './data/pokemon/pokemon.js';

const dataImportada = data.pokemon;


const templateCard = (arrayData) => {

  const contenedorInicio = document.getElementById("pokeInicio");
  const contenedorTarjetas = document.createElement("div")

  arrayData.forEach(item => {

    //const contenedorImgyNombre = document.createElement("div");
    contenedorTarjetas.setAttribute("id", "pokeTarjeta");
    contenedorTarjetas.setAttribute("class", "claseTarjeta");
    contenedorInicio.appendChild(contenedorTarjetas);

    const numeros = item.num;
    const liNum = document.createElement("p");
    console.log(liNum)
    liNum.textContent = "N° " + numeros;
    contenedorTarjetas.appendChild(liNum);

    const elementoImg = document.createElement("img");
    elementoImg.src = item.img;
    contenedorTarjetas.appendChild(elementoImg);

    //tipo pokemon
    const liNombre = document.createElement("p");
    liNombre.textContent = item.name;
    contenedorTarjetas.appendChild(liNombre);

  })
  contenedorInicio.innerHTML = contenedorTarjetas
}

console.log

/*
//ORDENADOS AZ
document.getElementById("ordenAZ").addEventListener("click", function(){
   
  dataImportada.sort((a, b)=>{
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
 }); 
 document.getElementById("botonNuevaBusqueda").style.display = "none";
 document.getElementById("pokeInicio").style.display = "none";
 document.getElementById("ordenAZ").style.display = "none";
 document.getElementById("botonNuevaBusqueda").style.display = "block"

 dataImportada.forEach(item => {
  
  //CREANDO div para las tarjetas
  let contenedorInicio = document.getElementById("pokeInicio2");
  const contenedorImgyNombre = document.createElement("div");
  contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
  contenedorImgyNombre.setAttribute("class", "claseTarjeta");
  contenedorInicio.appendChild(contenedorImgyNombre);
  
  const numeros = item.num;
  const liNum = document.createElement("p");
  liNum.textContent = "N° " + numeros;
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
    nombreP.textContent = "Nombre: " + item.name;
    tipoP.textContent = item.type;
    resistenciaP.textContent = item.resistant;
    debilidadP.textContent = item.weaknesses;
    
  });
  
  document.getElementById("closePoke").addEventListener("click", function () {
    document.getElementById("modalPoke").style.display = "none";
  });
 });
});

//ORDENADOS ZA
document.getElementById("ordenZA").addEventListener("click", function(){
   
  dataImportada.sort((a, b)=>{
  if (a.name < b.name) {
    return 1
  }
  if (a.name > b.name) {
    return -1
  }
  return 0
 });

 document.getElementById("botonNuevaBusqueda").style.display = "none";
 document.getElementById("pokeInicio2").style.display = "none";
 document.getElementById("pokeInicio").style.display = "none";
 document.getElementById("ordenZA").style.display = "none";
 document.getElementById("botonNuevaBusqueda").style.display = "block"


 dataImportada.forEach(item => {
  
  //CREANDO div para las tarjetas
  let contenedorInicio = document.getElementById("pokeInicio3");
  const contenedorImgyNombre = document.createElement("div");
  contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
  contenedorImgyNombre.setAttribute("class", "claseTarjeta");
  contenedorInicio.appendChild(contenedorImgyNombre);
  
  const numeros = item.num;
  const liNum = document.createElement("p");
  liNum.textContent = "N° " + numeros;
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
    nombreP.textContent = "Nombre: " + item.name;
    tipoP.textContent = item.type;
    resistenciaP.textContent = item.resistant;
    debilidadP.textContent = item.weaknesses;
    
  });
  
  document.getElementById("closePoke").addEventListener("click", function () {
    document.getElementById("modalPoke").style.display = "none";
  });
 });
});*/

//Pokemon en pantalla inicial/*/*
/*
document.getElementById("ordenZA").addEventListener("click", function(){
dataImportada.sort((a, b)=>{
if (a.name < b.name) {
 return 1
}
if (a.name > b.name) {
 return -1
}
return 0
});
console.log(dataImportada)
});

document.getElementById("botonNuevaBusqueda").style.display = "none";

dataImportada.forEach(item => {
 
//CREANDO div para las tarjetas
let contenedorInicio = document.getElementById("pokeInicio");
const contenedorImgyNombre = document.createElement("div");
contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
contenedorImgyNombre.setAttribute("class", "claseTarjeta");
contenedorInicio.appendChild(contenedorImgyNombre);
 
const numeros = item.num;
const liNum = document.createElement("p");
liNum.textContent = "N° " + numeros;
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
nombreP.textContent = "Nombre: " + item.name;
tipoP.textContent = item.type;
resistenciaP.textContent = item.resistant;
debilidadP.textContent = item.weaknesses;
 
});
 
document.getElementById("closePoke").addEventListener("click", function () {
document.getElementById("modalPoke").style.display = "none";
});
 
});*/

document.getElementById("botonNuevaBusqueda").addEventListener("click", function () {
  location.reload()
});

//BUSCADOR 
const clickBuscar = document.getElementById("searchIcon");
clickBuscar.addEventListener("click", function () {

  const searchUser = document.getElementById("buscador").value.toLowerCase();
  const nombreP = document.getElementById("namePoke");
  const imagenP = document.getElementById("imgPoke");
  const dataFiltrada = datitos.infoFiltrada(dataImportada, searchUser);
  const pokeData = datitos.mapeandoData(dataFiltrada);
  const resultadoE = datitos.pokeError(pokeData, searchUser);
  if (resultadoE == false) {
    alert("Ingresa un nombre válido")
  }
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
  const modalP = document.getElementById("modalPoke");
  modalP.style.display = "block";

  if (resultadoE == false) {
    modalP.style.display = "none";
  }
});



//RESULTADO MENU DESPLEGABLE

document.getElementById("menuDesplegable").addEventListener("change", function () {
  const elementoSeleccionado = document.getElementById("menuDesplegable").value;
  const pokePorTipo = datitos.recuperarSeleccionado(dataImportada, elementoSeleccionado);
  templateCard(pokePorTipo)

});