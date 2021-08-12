import datitos  from '../src/data.js';

describe('Datitos debería ser un objeto', () => {
it('Debería ser un objeto', () => {
  expect(typeof datitos).toBe('object');
});
});
describe('datitos.infoFiltrada', () => {
  it('Debería ser una función', () => {
    expect(typeof datitos.infoFiltrada).not.toBeNull();
});
});
describe('datitos.mapeandoData', () => {
  it('Debería ser una función', () => {
    expect(typeof datitos.mapeandoData).toBeDefined();
});
});

describe('datitos.pokeFiltroNameNum', () => {
  it('Debería ser una función', () => {
    expect(typeof datitos.pokeFiltroNameNum).toBe('function');
});
it('Debería ser definida', () => {
  expect(datitos.pokeFiltroNameNum).toBeDefined();
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

describe('recuperarSeleccionado', () => {
  it('debería ser una funcion', () => {
    expect(typeof datitos.recuperarSeleccionado).toBe("function");
  });
});