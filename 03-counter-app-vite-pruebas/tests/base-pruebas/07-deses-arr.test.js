import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

const [letras, numeros] = retornaArreglo();

describe('Prueba en 07', () => { 

    test('Debe retornar un string y un number con typeof y .toBe', () => { 
        // const [letras, numeros] = retornaArreglo();
        
        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');
    
    })
    test('Debe retornar string y number con ,toEqual y expect.any(String/Number)', () => { 
        // const [letras, numeros] = retornaArreglo(); 
        
        expect(letras).toEqual( expect.any(String) );
        expect(numeros).toEqual( expect.any(Number) );
    
    })
    test('Debe retornar  ABC y 123', () => { 
        // const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);
    
    })





})