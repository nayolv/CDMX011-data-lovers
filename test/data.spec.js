import { datitos } from '../src/data.js';


describe('datitos', () => {
  it('Debería ser un objeto', () => {
    expect(typeof datitos).toBe('object');
  });
  });
  
  describe('datitos.infoFiltrada',() => {
it('Debería ser una función', () => {
  expect(typeof datitos.infoFiltrada).toBe("function");
});


it('Debería retornar "bulbasaur"', () => {
  expect(datitos.infoFiltrada('bulbasaur')).toEqual('bulbasaur');
});
});


  describe('datitos.pokeFiltroNameNum', () => {
    it('Debería ser una función', () => {
      expect(typeof datitos.pokeFiltroNameNum).toBe("function");
  });
  it('Debería ser definida', () => {
    expect(datitos.pokeFiltroNameNum).toBeDefined();
  });
  it('No debe ser null', () => {
    expect(datitos.pokeFiltroNameNum).not.toBeNull();
  });
});

describe('datitos.mapeandoData', () => {
  it('debería ser una funcion', () => {
    expect(typeof datitos.mapeandoData).toBe('function');
  });

  
  });
  
  describe('datitos.pokeError', () => {
    it('debería ser una funcion', () => {
      expect(typeof datitos.pokeError).toBe('function');
    });
  
  it('debería retornar false para "pikachuy"', () => {
    expect(datitos.pokeError('pikachuy')).toBe(false);
  });
});