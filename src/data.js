const datitos = {


  infoFiltrada: function (dataImportada,searchUser){
    return  dataImportada.filter(poke => poke.name == searchUser);
  },
   
  mapeandoData: function(buscadorFuncional){
    return buscadorFuncional.map(pokenombre => pokenombre.name);
  },

  pokeError(pokeData, searchUser) {
    if (searchUser != pokeData) {
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

  pokeFiltroImg: function (buscadorFuncional) {
    let resultadoImg = "";
    buscadorFuncional.forEach(item => {
      resultadoImg = item.img;
    });
    return resultadoImg
  },

  pokeFiltroType: function (buscadorFuncional) {
    let resultadoType = "";
    buscadorFuncional.forEach(item => {
      resultadoType = item.type;
    });
    return resultadoType
  },

  pokeFiltroResist: function (buscadorFuncional) {
    let resultadoResist = "";
    buscadorFuncional.forEach(item => {
      resultadoResist = item.resistant;
    });
    return resultadoResist
  },

  
  pokeFiltroDebil: function (buscadorFuncional) {
    let resultadoDebil = "";
    buscadorFuncional.forEach(item => {
      resultadoDebil = item.weaknesses;
    });
    return resultadoDebil
  },

  recuperarSeleccionado: function(dataImportada, elementoSeleccionado) {
  
    return dataImportada.filter(poke => poke.type[0] == elementoSeleccionado||poke.type[1] == elementoSeleccionado);
    
    }
};




  //recupera imagen y nombre del objeto
   


export default datitos