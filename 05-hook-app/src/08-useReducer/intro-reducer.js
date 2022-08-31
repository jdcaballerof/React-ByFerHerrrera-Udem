
// State inicial
const initialState = [{
    id: 1,
    toDo: 'recolectar las gemas del infinito',
    done: false,
}]


//? el reducer es una simple funcion que recibe 2 argumentos y regresa 1 estado 
const toDoReducer = (state=initialState, action={} ) => {

    if( action.type === '[TODO] add todo'){
        return [ ...state, action.payload]
    }

    return state
}


let porHacer = toDoReducer()
console.log('state inicial: ',porHacer);

// Se crea un nuevo toDo
const newToDo = {
    id: 2,
    toDo: 'poner las gemas en el guante',
    done: false,
}

// Se crea la accion añadir toDo
const addToDoAction = {
    type: '[TODO] add todo',    // Acción: "añadir"
    payload: newToDo,           // Que cosa?: "nuevo toDo"
}

// Se manda al Reducer (el estado anterior, la accion a realizar)
porHacer  = toDoReducer( porHacer, addToDoAction )

console.log({state: porHacer});