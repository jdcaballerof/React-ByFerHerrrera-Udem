

export const toDoReducer = (initialState, action) => {

    switch (action.type) {
        case '[TODOReducer] add ToDo':
            return [ ...initialState, action.payload ]  //Añade (todo el obj newToDo) = action.playload
            
        case '[TODOReducer] remove ToDo':
            return initialState.filter( todo => todo.id !== action.payload ) //Añade (el id) = action.playload, si se volviera a mandar todo el newTodo como en el anterior tendria que ser action.payload.id
            
        case '[TODOReducer] check ToDo':
            return initialState.map( todo => {

                if( todo.id === action.payload ){  //Si coinciden los id entonces retorna el obj { todo lo del objeto, cambia done por la negacion de done  }
                    return {
                        ...todo,
                        done: !todo.done 
                    }
                }

                return todo
            } )

    
        default:
            break;
    }

}