

export const toDoReducer = (initialState, action) => {

    switch (action.type) {
        case '[TODOReducer] add ToDo':

            return [ ...initialState, action.payload ]
    
        default:
            break;
    }

}