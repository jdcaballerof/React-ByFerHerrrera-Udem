import { UserContext } from "./UserContext"

const  user = {
    name: 'Dav',
    id: 12543,
    married: false
}

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{Saludo:'Hola Mundo', user:user }}> {/* Value es la info que cualquier hijo del User.Provider va a poder obtener del UserContext, puede ser funciones, propiedades, 1 solo valor */}
        {children}
    </UserContext.Provider>
  )
}
