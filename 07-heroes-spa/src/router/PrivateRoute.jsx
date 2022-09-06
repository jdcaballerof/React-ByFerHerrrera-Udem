import { useContext, useMemo } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"



export const PrivateRoute = ({children}) => {

  const { pathname, search } = useLocation();  

  const lastPath = pathname+search
  /* const lastPath = useMemo( () =>{
    console.log("re render memo");
    return pathname+search},[pathname,search]  )  */

  localStorage.setItem('lastPath', lastPath);
  // console.log("re render");


    const {logged} = useContext( AuthContext )

  return ( logged ) ? children : <Navigate to='/login' />
}

