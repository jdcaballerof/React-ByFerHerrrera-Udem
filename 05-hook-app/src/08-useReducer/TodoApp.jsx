import { useEffect, useReducer } from "react"
import { TodoAdd } from "./Componentes_ToDoApp/TodoAdd";
import { TodoList } from "./Componentes_ToDoApp/TodoList";
import { toDoReducer } from "./toDoReducer";


const initialState = [
   /*  {
        id: new Date().getTime(),
        descripcion: 'obtener la piedra',
        done: false
    }, */
    
]

const init = () =>  JSON.parse( localStorage.getItem( 'toDos' ))  || [];


export const TodoApp = () => {

  const [toDos, dispatch] = useReducer(toDoReducer, initialState, init );

  useEffect(() => {   //Ejecutar algo cuando los ToDos cambian
    localStorage.setItem( 'toDos', JSON.stringify(toDos) ) 
  
  }, [toDos])
  

  const handleNewTodo = (newToDo) => {
    const action = {
        type: '[TODOReducer] add ToDo',
        payload: newToDo
    }

    dispatch( action );
  }
  
  const handleDeleteTodo = (id) => {
    dispatch( {
        type: '[TODOReducer] remove ToDo',
        payload: id
    } );
  }

  const onCheckTodo = (id) => {
    dispatch( {
      type: '[TODOReducer] check ToDo',
      payload: id
  } );
  }

  return (
    <>
      <h1>
        App tareas: 10, <small>pendientes: 2</small>{" "}
      </h1>
      <hr /* className="cyan" */ />

      <div className="row">
        <div className="col-6">
          <TodoList toDos={toDos} onDeleteTodo={ handleDeleteTodo } onCheckTodo={onCheckTodo} /> {/* Se manda aqui la func handleDeleteTodo para poder mandarla y uasarla al TodoItem */}
        </div>

        <div className="col-5">
          <h4>Agregar Tarea</h4>
          <hr />
          <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div>
    </>
  );
};
