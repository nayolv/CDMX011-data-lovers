import { datitos } from '../src/data.js';


describe('pokeFiltroNameNum', () => {
  it('is a function', () => {
    expect(typeof datitos.pokeFiltroNameNum).toBe('function');
  });

  it('deberia retornar `001`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
