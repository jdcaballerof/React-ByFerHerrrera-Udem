
const user = {
    name: "JanC",
    age:  21,
    married: false,
    address:{
        state: "CDMX",
        city: "GAM",
        number: 78,
        entreCalles: ["Cervantes", "calle 5"] 
    }
}
const {address, married,address:{state,city, entreCalles}}=user;
const [calle1, calle2]=entreCalles;



export function App() { //Todos los fnctional Componets deben empezar con MAYUSCULA
    const i = 1;
    const nombre = "RTP";
    return(
        <> 
        <h1>Hola desde {nombre} </h1>
        <h3>Recuerda:</h3>
        <p>no olvides que solo se puede regresar {i} elemento por lo que debe estar todo guardado en un div o un frame (etiqueta sin nada) </p>
        <br/>
        <p>Para renderizarlo debes crear el Root con ReacDOOM.createRoot(document.getElementbyId('root')).render el ID se encuentra en index.html</p>
        <h4>Mostrando un objeto</h4>
        <code>{ JSON.stringify(user) } </code>
        </>
    )
}


export const AppReducida = () => ( <>
        <h2>Hola {user.name} </h2>
        <h3>Recuerda: {married ? "Estas casado!": "Te gusta la solteria"}</h3>
        <p>Vives en {state}, {city}, en el numero {address.number} entre calles {calle1} y {calle2} </p>
        <br/>
        </> )


export const LineasDiv = ({colorCSS}) => <div className={"lineas" + " " + colorCSS}>--------------------------------------------</div>
