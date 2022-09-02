import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { CallBackHook } from './06-memos/CallBackHook'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import { Padre } from './07-tarea-memo/Padre'
import CounterApp from './CounterApp'
import { CounterApp2 } from './CounterApp2'
import { CounterWithCustomHook } from './CounterWithCustomHook'
import { HooksApp } from './HooksApp'
import { TodoApp } from './08-useReducer/TodoApp'
import { TodoApp2 } from './08-useReducer/TodoApp2'
import { MainApp } from './09-useContext/MainApp'

/* import './08-useReducer/intro-reducer'; */

import './main.css'

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
            {/* <MultipleCustomHooks />  BreakingBad Quotes 03-examples */}
        <MainApp />
    </BrowserRouter>
);

