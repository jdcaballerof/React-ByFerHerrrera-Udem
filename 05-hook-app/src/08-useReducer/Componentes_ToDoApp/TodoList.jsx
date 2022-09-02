import { TodoItem } from "./TodItem"


export const TodoList = ({toDos=[], onDeleteTodo, onCheckTodo}) => {


  return (
    <>
        <ul>
            {toDos.map((toDo) => (
              <TodoItem key={toDo.id } toDo={toDo} onDeleteTodo={onDeleteTodo} onCheckTodo={onCheckTodo} />
            ))}
          </ul>
    </>
  )
}
