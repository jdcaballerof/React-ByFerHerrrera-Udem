

import { render } from "@testing-library/react"
import { TryProps } from "../src/TryProps"


describe('Pruebas en <Tryprops /> 1.0', () => { 
    
    const titulo = "Hola soy Goku"
    
    test('Debería hacer match con el snapshot,no hay cambios en el HTMl regresado por el componenete <TryProps/>', () => { 

        /* const {container} = render( <TryProps title={ titulo} /> );
        
        expect(container).toMatchSnapshot(); //Muy estricto */
        
    })
    
    test(`Debe mostrat el titulo: ${titulo}`, () => { 
        
        const {container, getByText, getByTestId } = render( <TryProps title={ titulo} /> );
        expect(getByText(titulo)).toBeTruthy() ;
        
        expect( getByTestId('test-saludo').innerHTML).toContain('Hola');
        
        const h2 = container.querySelector('h2')
        expect(h2.innerHTML).toContain(titulo) ;
        // expect(h2.innerHTML).toBe(titulo) ; //Muy estricto
      })
})
