const datitos = {
  infoFiltrada: function (dataImportada, searchUser) {
    const prueba1 = dataImportada.filter(poke => searchUser == poke.name);
    return prueba1;
  },

  mapeandoData: function (dataFiltrada) {
    const prueba = dataFiltrada.map(pokenombre => pokenombre.name);
    return prueba;
  },

  pokeError(pokeData, searchUser) {
    if (searchUser != pokeData || searchUser == "") {
      return false
    }
  },
  pokeFiltroNameNum: function (dataFiltrada) {
    let resultadoNomNum = "";
    dataFiltrada.forEach(item => {
      resultadoNomNum = "Nombre: " + item.name + " N°" + item.num;

    });
    return resultadoNomNum
  },

  pokeFiltroImg: function (dataFiltrada) {
    let resultadoImg = "";
    dataFiltrada.forEach(item => {
      resultadoImg = item.img;
    });
    return resultadoImg
  },

  pokeFiltroType: function (dataFiltrada) {
    let resultadoType = "";
    dataFiltrada.forEach(item => {
      resultadoType = item.type;
    });
    return resultadoType
  },

  pokeFiltroResist: function (dataFiltrada) {
    let resultadoResist = "";
    dataFiltrada.forEach(item => {
      resultadoResist = item.resistant;
    });
    return resultadoResist
  },


  pokeFiltroDebil: function (dataFiltrada) {
    let resultadoDebil = "";
    dataFiltrada.forEach(item => {
      resultadoDebil = item.weaknesses;
    });
    return resultadoDebil
  },

  recuperarSeleccionado: function (dataImportada, elementoSeleccionado) {

    return dataImportada.filter(poke => elementoSeleccionado == poke.type[0] || elementoSeleccionado == poke.type[1]);


  },

  
  //Organiza de la a a la z
  az: function (dataImportada) {
    
    const az= dataImportada.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a > b) {
        return 1
      }
      return 0
    });
    return az;
  },
  //Organiza de la z a la a

  za: function (dataImportada) {
  
    const za= dataImportada.sort((a, b) => {
      if (a.name < b.name) {
        return 1
      }
      if (a.name > b.name) {
        return -1
      }
      return 0
    });
    return za;
  }
};

//Botones de organizacion de AZ y ZA



//recupera imagen y nombre del objeto



export { datitos }
