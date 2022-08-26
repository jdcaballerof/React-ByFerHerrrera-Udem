const usuario = {
    name: "David",
    age: 22,
    casado: false,
    family: ["Dave", "Mar","El"],
    address:{
        state: "Mexico",
        city: "CDMX",
        number: 2
    }
};


export function DesPerona() {
    const {name, age,address:{city, number:numeroExt},casado} = usuario       //ya que es un objeto hay que desestructurarlo 
    // const {city, number:numeroExt} = address  //Tambien se puede desestructurar address por separado asi 


    return( 
        <>
        <h2>Hola {name}</h2>
        <h3>Tienes {age} años</h3>
        <p>Tu domicilio es: {city}, numero {numeroExt} </p>
        <p>{casado ? "Estas casado":"Eres soltero"}  </p>
        </>
        // console.log("Domicilio:", city+"," , " numero",numeroExt)
    );
}



export function DesArrays(){
    const funcRetornaArray1 = (valor) => [valor, ()=>{console.log("Hola",valor)} ];

    const [nombre, setNombre] = funcRetornaArray1("goku"); //esta funcion retorna un array el cual se desestructura
    console.log(nombre);
    setNombre();
}

