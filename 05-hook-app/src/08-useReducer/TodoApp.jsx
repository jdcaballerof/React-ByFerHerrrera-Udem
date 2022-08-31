import { useReducer } from "react"
import { TodoAdd } from "./Componentes_ToDoApp/TodoAdd";
import { TodoList } from "./Componentes_ToDoApp/TodoList";
import { toDoReducer } from "./toDoReducer";


const initialState = [
    {
        id: new Date().getTime(),
        descripcion: 'obtener la piedra',
        done: false
    },
    {
        id: new Date().getTime() +100, // +100 ms
        descripcion: 'obtener la otra piedra',
        done: false
    }
]

export const TodoApp = () => {

  const [toDos, dispatch] = useReducer(toDoReducer, initialState);

  const handleNewTodo = (newToDo) => {
    const action = {
        type: '[TODOReducer] add ToDo',
        payload: newToDo
    }

    dispatch( action );
  }


  return (
    <>
      <h1>
        App tareas: 10, <small>pendientes: 2</small>{" "}
      </h1>
      <hr /* className="cyan" */ />

      <div className="row">
        <div className="col-6">
          <TodoList toDos={toDos} />
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
