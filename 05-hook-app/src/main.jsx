import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import CounterApp from './CounterApp'
import { CounterApp2 } from './CounterApp2'
import { CounterWithCustomHook } from './CounterWithCustomHook'
import { HooksApp } from './HooksApp'
import './main.css'

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <Memorize />

);

