function pokePantallaInicial(dataImportada) {

  dataImportada.forEach(item => {
    //CONDICIONAL PARA MOSTRAR SOLO N° POKEMONES
    const num = item.num;
    if (num <= "030") {
      //CREANDO div para las tarjetas
      const contenedorInicio = document.getElementById("pokeInicio");
      const contenedorImgyNombre = document.createElement("div");
      contenedorImgyNombre.setAttribute("id", "pokeTarjeta");
      contenedorImgyNombre.setAttribute("class", "claseTarjeta");
      contenedorInicio.appendChild(contenedorImgyNombre);

      const liNum = document.createElement("p");
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
    }

  });

 
}

    
  
const datitos = {

      /*const nombres = buscadorFuncional.map(pokenombre => pokenombre.name);
        if (searchUser != nombres) {
          alert("Pokemon no encontrado");
          throw TypeError("Pokemon no encontrado")*/

      pokeFiltroNameNum:function (dataImportada, searchUser) {
        const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);

        let resultadoNomNum = "";
        buscadorFuncional.forEach(item => {
          resultadoNomNum = "Nombre: " + item.name + " N°" + item.num;
        });
        return resultadoNomNum
      },

      pokeFiltroImg: function (dataImportada, searchUser) {
        const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);
        let resultadoImg = "";
        buscadorFuncional.forEach(item => {
          resultadoImg = item.img;
        });
        return resultadoImg
      },

      pokeFiltroType: function (dataImportada, searchUser) {
        const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);
        let resultadoType = "";
        buscadorFuncional.forEach(item => {
          resultadoType = item.type //+ item.resistant + item.weaknesses;
        });
        return resultadoType
      },

      pokeFiltroResist: function (dataImportada, searchUser) {
        const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);
        let resultadoResist = "";
        buscadorFuncional.forEach(item => {
          resultadoResist = item.resistant // + item.weaknesses;
        });
        return resultadoResist
      },

      pokeFiltroDebil: function (dataImportada, searchUser) {
        const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);
        let resultadoDebil = "";
        buscadorFuncional.forEach(item => {
          resultadoDebil = item.weaknesses;
        });
        return resultadoDebil
      },
};


  
  function recuperarSeleccionado(dataImportada) {
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


  export{pokePantallaInicial, datitos, recuperarSeleccionado}
