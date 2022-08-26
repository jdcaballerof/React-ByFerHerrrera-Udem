import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => { 
    test('Debe de retornar "Hola  {name} " ', () => { 
        const name = 'Goku';
        const mensaje = getSaludo(name) ;

        expect( mensaje ).toBe(`Hola ${name}`)
     });

 });