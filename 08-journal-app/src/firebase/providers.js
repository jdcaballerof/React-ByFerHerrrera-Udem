import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
  
    try{
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const credenciales = GoogleAuthProvider.credentialFromResult( result );
        // console.log('credenciales (Firebase/providers/signInWithGoogle)', {credenciales});
        // console.log(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, 
            email, 
            photoURL, 
            uid
        }

    } catch(error) {
        const errorMsg = error.message;

        return{
            ok: false,
            errorMsg
        }
    }
}

export const crearCuenta = async({email, password, name}) => {

    try{
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        console.log('resp crearCuenta Prov', resp)
    } catch(error) {
        const errorMsg = error.message;
        console.log(error)

        return{ 
            ok: false, 
            errorMsg 
        }
    }
}