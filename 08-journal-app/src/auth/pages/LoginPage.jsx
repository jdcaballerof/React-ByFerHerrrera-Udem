import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { AuthLayout } from '../layout/AuthLayout';
import { checkingAutenticacion, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: 'david@google.com',
      password: 1235
    },
  });

  const googleSubmit = (e) => {
    console.log('google Sign In');
    dispatch( startGoogleSignIn() );
  }

  const submit = (event) => {
    console.log(event);
    dispatch( checkingAutenticacion() );
  }


  return (
    <AuthLayout title="Login">
      <form onSubmit={ handleSubmit(submit) }>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                {...register("email", { required: true })}
              />
              {errors.email && <span style={ {color:'red'} } >Este campo es requerido</span>}
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                {...register("password", { required: true })}
              />
              {errors.password && <span style={ {color:'red'} } >Este campo es requerido</span>}
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button type='submit' variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button onClick={googleSubmit} variant='contained' fullWidth>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
