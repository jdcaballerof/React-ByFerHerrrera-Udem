import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
       estatus: 'no-autenticado',  //checking, autenticado 
       uid: null,       // unico y obtenido de firebase
       email: null,
       displayName: null,
       photoURL: null,
       errorMsg: null,
   },
   reducers: {
       login: (state, action ) => {
           
       },
       logout: (state, payload ) => {
           
       },
       chekingCredentials: ( state ) => {
           state.estatus = 'checking'
       },
   }
});

export const { login, logout, chekingCredentials } = authSlice.actions;