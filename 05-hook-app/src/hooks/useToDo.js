import { useEffect, useReducer } from "react"
import { toDoReducer } from "./toDoReducer";


const initialState = []
const init = () =>  JSON.parse( localStorage.getItem( 'toDos' ))  || [];


export const useToDo = () => {

  const [toDos, dispatch] = useReducer(toDoReducer, initialState, init);

  useEffect(() => {
    //Ejecutar algo cuando los ToDos cambian
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const handleNewTodo = (newToDo) => {
    const action = {
      type: "[TODOReducer] add ToDo",
      payload: newToDo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODOReducer] remove ToDo",
      payload: id,
    });
  };

  const onCheckTodo = (id) => {
    dispatch({
      type: "[TODOReducer] check ToDo",
      payload: id,
    });
  };



  return {
    toDos,
    handleDeleteTodo,
    handleNewTodo,
    onCheckTodo,
    toDosCount: toDos.length,
    pendingToDosCount: toDos.filter( todo => !todo.done ).length

  };
};
