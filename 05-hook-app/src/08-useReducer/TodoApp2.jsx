
import { useToDo } from "../hooks";
import { TodoAdd } from "./Componentes_ToDoApp/TodoAdd";
import { TodoList } from "./Componentes_ToDoApp/TodoList";



export const TodoApp2 = () => {

  const { toDos, handleDeleteTodo, handleNewTodo, onCheckTodo, toDosCount, pendingToDosCount } = useToDo()

  return (
    <>
      <h1>App Todo</h1>
      <h2 className="d-flex justify-content-between mt-2" > Tareas: {toDosCount}  <small>Pendientes: {pendingToDosCount}</small> </h2>

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
