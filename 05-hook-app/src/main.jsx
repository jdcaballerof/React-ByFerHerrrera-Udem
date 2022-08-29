import React from 'react'
import ReactDOM from 'react-dom/client'
import { SimpleForm } from './02-useEffect/SimpleForm'
import CounterApp from './CounterApp'
import { CounterApp2 } from './CounterApp2'
import { CounterWithCustomHook } from './CounterWithCustomHook'
import { HooksApp } from './HooksApp'
import './main.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HooksApp />
    {/* <CounterApp /> */}
    {/* <CounterApp2 /> */}
    <CounterWithCustomHook />
    <SimpleForm />

  </React.StrictMode>
);
