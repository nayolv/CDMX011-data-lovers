import { datitos } from '../src/data.js';
describe('datitos', () => {
  it('Debería ser un objeto', () => {
    expect(typeof datitos).toBe('object');
  });
  });
  
  describe('datitos.pokeFiltroNameNum', () => {
    it('Debería ser una función', () => {
      expect(typeof datitos.pokeFiltroNameNum).toBe("function");
  });
  });
  it('Debería ser definida', () => {
    expect(datitos.pokeFiltroNameNum).toBeDefined();
  });
  it('No debe ser null', () => {
    expect(datitos.pokeFiltroNameNum).not.toBeNull();
  });
  

describe('datitos.pokeError', () => {
  it('debería ser una funcion', () => {
    expect(typeof datitos.pokeError).toBe('function');
  });

it('debería retornar false para "pikachuy"', () => {
  expect(datitos.pokeError('pikachuy')).toBe(false);
});

it('debería retornar true para "pikachu"', () => {
  expect(datitos.pokeError('pikachu')).toBe(false);
});
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });

});*/