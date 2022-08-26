// Puedes cambiar en package.json en scripts de "test": "jest" a "test": "jest --watchAll" para no tener que estar actualizando la termianl con npm run test

describe('Primera prueba demo <SinComponente /> ', () => { 
    test('Esta prueba no debe fallar', () => {
    
        // 1. Inicializacion    (lectura de algun componente)
        const cte = "Hola mundo";
        
        // 2. estimulo  
        const cte2 = cte.trim();
    
        // 3. Observar el comportamiento... esperando    (En vez de escribir if se usa expect)
        // expect( cte ).toBe( cte2 );
        expect( cte ).toBe(cte2);
    
        })    
 })

 