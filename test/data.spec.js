import { buscadorInicial } from '../src/data.js';


describe('buscadorInicial', () => {
  it('Debería ser funcion', () => {
    expect(typeof buscadorInicial).toBe('function');
  });

  it('Debería retornar true para PIKACHU', () => {
    expect(buscadorInicial.searchUser("PIKACHU")).toBe(true);
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