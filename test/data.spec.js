import { datitos } from '../src/data.js';
import { pokemonesMock, squirtleMock } from './dataMock.js'


const pokemones = pokemonesMock;
const pokemonAgua = squirtleMock;

describe('Testeando filtro por tipo', () => {
  it('Debería filtrar tipos', () => {
    expect(datitos.filtradoPorTipo(pokemones, 'water')).toHaveLength(1);
  });
  it('Debería ser una función', () => {
    expect(typeof datitos.filtradoPorTipo).toBe('function');
  });
  it('Debería retornar un pokemon de agua', () => {
    expect(datitos.filtradoPorTipo(pokemones, 'water')).toEqual(pokemonAgua)
  });
});

describe('Testeando filtro por nombre', () =>{
  it('Debería filtrar por nombre', () => {
expect(datitos.infoFiltrada(pokemones, 'squirtle')).toEqual(pokemonAgua)
  });
});

describe('Testeando mapeandoData', () =>{
  it('Debería retornar solo los nombres', () => {
expect(datitos.mapeandoData(pokemones, ['bulbasaur', 'charmander', 'squirtle'])).toEqual(['bulbasaur', 'charmander', 'squirtle'])
  });
});

describe('Testeando error', () => {
it('Debería retornar false para "pikachuy"', () => {
  expect(datitos.pokeError('picachuy')).toBe(false);
});
});

describe('Testeando ordenado de A-Z', () =>{
  it('Debería retornar pokemones ordenados A-Z', () =>{
    const pokeOrdenados = datitos.sortAz(pokemones);
    expect(pokeOrdenados).toHaveLength(3);
    expect(pokeOrdenados[2]).toEqual(squirtleMock[0]);
  });
});

describe('Testeando ordenado de Z-A', () =>{
  it('Debería retornar pokemones ordenados Z-A', () =>{
    const pokeOrdenados = datitos.sortZa(pokemones);
    expect(pokeOrdenados).toHaveLength(3);
    expect(pokeOrdenados[2]).toEqual(pokemonesMock[2]);
  });
});