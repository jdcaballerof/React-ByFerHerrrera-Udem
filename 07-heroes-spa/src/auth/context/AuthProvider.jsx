import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

import { types } from "../types/types"

/* const initialState = {
    logged: false
} */

const init = () => {
  const user = JSON.parse( localStorage.getItem('user'))

  return{
    logged: !!user,
    userInfo: user,
  }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer( authReducer, {}, init)


    const loginFunc = (name='' ) => {
      const user = {id: 'ABC123', name: name,}

      localStorage.setItem('user', JSON.stringify(user))

      dispatch({ type: types.login, payload: user })
    }

    const logoutFunc = () => {
      localStorage.removeItem('user')
      dispatch({type: types.logout})
    }


  return (
    <AuthContext.Provider value={{
      ...authState,
      logoutFunc: logoutFunc,
      loginFunc: loginFunc, //Tener cuidado con el nombre de las Key para no sobre escribir nada dentro del authState
    }} >
        {children}
    </AuthContext.Provider>
  )
}
