import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const LoginPage = () => {

  const { Saludo, user } = useContext( UserContext )
  console.log(Saludo);
  console.log(user);

  return (
    <>
        <h1>LoginPage</h1>
        <hr />

    </>
  )
}
