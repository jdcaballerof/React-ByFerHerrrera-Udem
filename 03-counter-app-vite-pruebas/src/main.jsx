import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, AppReducida, LineasDiv } from './HelloApp';
import { TryProps } from './TryProps';
import './style.css';
import { CounterApp } from './ButtonAnduseState';
import { ArrayMap } from './ArrayMap';




ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App />
        <LineasDiv colorCSS={"red"} />
        <AppReducida />
        <LineasDiv />
        <TryProps title='Hola soy Goku ' phone={52555842} nombre={"Goku"} />
        <LineasDiv />
        <CounterApp valorInicial={0} />
        <LineasDiv />
        <ArrayMap />
    </React.StrictMode>
);

