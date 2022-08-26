import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('Pruebas en 11-async', () => { 

    test('Retornar url', async() => { 
        
        const link2 = await getImagen();
        console.log("El url es: ",link2);
        expect( typeof link2).toBe('string');
     });
     
    //  test('Checar catch', async() => { 
         
    //      const link = await getImagen();
    //      console.log("El url es: ",link);
    //      expect( link ).toEqual(expect.not.stringContaining ('No se pudo obtener link'));
    //   })

 })