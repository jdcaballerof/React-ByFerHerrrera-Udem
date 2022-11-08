import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { startCrearCuenta } from '../../store/auth';


export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: 'david@google.com',
    },
  });

  const mySubmit = (data) => {
    console.log(data);
    dispatch( startCrearCuenta(data) );
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={handleSubmit(mySubmit)}>
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                error={Boolean(errors.name)}
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
                {...register("name", { required: true })}
              />
              {errors.name && <span style={ {color:'red'} } >Este campo es requerido</span>}
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                error={Boolean(errors.email)}
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
              error={Boolean(errors.password)}
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && <span style={ {color:'red'} } >Este campo es requerido con minimo 6 caracteres</span>}
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button type='submit' variant='contained' fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
