
function pokePantallaInicial(dataImportada) {

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
}


const datitos = {
  pokeError: function (dataImportada, searchUser) {
    const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);
    const nombres = buscadorFuncional.map(pokenombre => pokenombre.name);
    if (searchUser == nombres) {
      return true
    } else {
      alert("Pokemon no encontrado");
      return false
    }
  },

  pokeFiltroNameNum: function (dataImportada, searchUser) {
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
      resultadoType = item.type;
    });
    return resultadoType
  },

  pokeFiltroResist: function (dataImportada, searchUser) {
    const buscadorFuncional = dataImportada.filter(poke => poke.name == searchUser);
    let resultadoResist = "";
    buscadorFuncional.forEach(item => {
      resultadoResist = item.resistant;
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

    document.getElementById("closePoke").addEventListener("click", function () {
    document.getElementById("modalPoke").style.display = "none";
    });
  });

}


export { pokePantallaInicial, datitos, recuperarSeleccionado }

