

export const TodoItem = ({toDo, onDeleteTodo, onCheckTodo}) => {
  return (
    <>
        <li key={toDo.id} className="list-group-item d-flex justify-content-between mt-2">
                <span onDoubleClick={ () => onCheckTodo(toDo.id) } className={ `align-self-center ${ toDo.done ? 'text-decoration-line-through' : '' }`}>  {toDo.descripcion}  </span>
                <button onClick={ () => onDeleteTodo( toDo.id ) } className="btn btn-danger">Borrar</button>
              </li>
    </>
  )
}

/* const handleDeleteTodo == onDeleteTodo = ( id ) => {
    dispatch( {
        type: '[TODOReducer] remove ToDo',
        payload: id
    } );
  } */
