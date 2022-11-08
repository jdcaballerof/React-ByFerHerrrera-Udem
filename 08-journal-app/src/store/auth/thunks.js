import { crearCuenta, signInWithGoogle } from "../../firebase/providers"
import { chekingCredentials } from "./authSlice"

export const checkingAutenticacion = (email, password) => {
   return async( dispatch ) => {
     dispatch( chekingCredentials() )
   }
}

export const startGoogleSignIn = () => {
   return async( dispatch ) => {
     dispatch( chekingCredentials() );
     const res = await signInWithGoogle();
     console.log('insidestartGoogleSignIn', res);
   }
}

export const startCrearCuenta = ({email, password, name}) => {
  return async( dispatch ) => {
    dispatch( chekingCredentials() );
    const resp = await crearCuenta({email, password, name});
    console.log('resp startCrearCuenta', resp)
  }
}