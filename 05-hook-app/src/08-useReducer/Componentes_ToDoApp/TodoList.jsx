

export const TodoList = ({toDos=[]}) => {
  return (
    <>
        <ul>
            {toDos.map((toDo) => (
              <li key={toDo.id} className="list-group-item d-flex justify-content-between mt-2">
                <span className="align-self-center">h1 {toDo.descripcion}</span>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
    </>
  )
}
