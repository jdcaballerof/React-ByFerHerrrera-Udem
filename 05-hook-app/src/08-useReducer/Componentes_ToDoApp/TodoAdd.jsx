import { useForm } from "../../hooks"


export const TodoAdd = ({onNewTodo}) => {

    const { descripcion, onCambioDelInput, onResetearForm } = useForm({
        descripcion: '',
    })

    const onFormSubmit = ( event ) => {
        event.preventDefault()
        if ( descripcion.length < 1 ) return

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            descripcion: descripcion 
        }

        onNewTodo(newTodo)
        onResetearForm();
    }

  return (
    <>
        <form onSubmit={ onFormSubmit } >

            <input
              type="text"
              placeholder="Nueva tarea"
              className="form-control"
              name="descripcion"
              value={ descripcion }
              onChange={onCambioDelInput}
            />

            <button type="submit" className="btn btn-outline-primary mt-2">
              Agregar
            </button>

          </form>
    </>
  )
}
