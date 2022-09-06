import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../auth"


// Impedir que vaya a LoginPage si esta autenticado

export const PublicRoute = ({children}) => {
    const lastPath = localStorage.getItem('lastPath') || '/'

    const {logged} = useContext( AuthContext )

    // return ( !logged ) ? children : <Navigate to="/dc" />
    return ( !logged ) ? children : <Navigate to={`${lastPath}`} />
}
