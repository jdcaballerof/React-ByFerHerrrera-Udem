import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

  
  
  export const FormWithCustomHook = () => {

    const {estadoFormulario, onCambioDelInput, username, email, contraseña1, onResetearForm} = useForm({
        username: "Goku",
        email: "",
        contraseña1: ''
       }) 


    return (
      <>
        <h2>Formulario con CustomHook</h2>

        <input type="text" className='form-control m-2' placeholder='Usuario' name='username' value={username} onChange={ onCambioDelInput }  />

        <input type="email" className='form-control m-2' placeholder='Usuario@email.com' name='email' value={email} onChange={ onCambioDelInput } />

        <input type="password" className='form-control m-2' placeholder='Contraseña' name='contraseña1' value={contraseña1} onChange={ onCambioDelInput } />

        <button onClick={ onResetearForm } >Borrar</button>
     
      </>
    );
  }
  