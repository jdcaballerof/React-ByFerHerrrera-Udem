const Cursos = ["JS", "React", "Git", "Node.JS"]

export const ArrayMap = () => {

    return ( <>
    <h2>Cursos</h2>
    <ul>
        {
            Cursos.map((curso, indice) => {
                return (<li key={indice}> {curso} </li> );
            })
        }
    </ul>
    </>)
}