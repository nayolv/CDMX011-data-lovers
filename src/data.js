
const datos = {
 pokePantallaInicial(dataImportada) {
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
  }

  export default datos;