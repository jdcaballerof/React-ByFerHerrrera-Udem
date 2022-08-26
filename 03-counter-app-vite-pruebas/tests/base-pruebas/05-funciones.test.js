import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Prueba en 05-funciones', () => { 
    test('getUser debe retornar un obj', () => { 

        const testUser ={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toEqual(user);
     });

     
     test('getUsuarioActivo de retornar un objeto', () => { 
        const name = 'dav';

        const testUser = {
            uid: 'ABC567',
        username: name
        }

        const user = getUsuarioActivo(name);

        expect(testUser).toEqual(user);

      })
 });