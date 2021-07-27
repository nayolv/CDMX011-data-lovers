const datos = {
/*
searching:function(dataImportada, tarjetaInfo, tipoP, resistenciaP, debilidadesP){

  dataImportada.forEach(poke => {

    
    const filtradoPorNombre = poke.name;
    const imgSelec = poke.img;
    const busquedaTipo = "TIPO: " + poke.type;
    const buesquedaResistencia = " RESISTENCIA: " + poke.resistant;
    const busqueaDebilidades = "DEBILIDAD: " + poke.weaknesses;

    if (filtradoPorNombre === tarjetaInfo) {

      tipoP.textContent = busquedaTipo.replaceAll(",", " ");
      resistenciaP.textContent = buesquedaResistencia.replaceAll(",", " ");
      debilidadesP.textContent = busqueaDebilidades.replaceAll(",", " ");

      document.getElementById("imagen").src = imgSelec;

    }

  });
},


/*
dropdown:function(dataImportada, elementoSeleccionado, tipoP){

  const listaPokeTipo = dataImportada.filter(poke => elementoSeleccionado == poke.type);
  const names = listaPokeTipo.map(nombres => nombres.name);

  tipoP.textContent = names;

}*/

};

export default datos
