import logo from './logo.svg';
import './App.css';

import { DesPerona, DesArrays } from "./desestructuracion";
import { PlayApi} from "./apis.js";

function App() {
  let name = "David";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn React
      </a> */}
        {/* <h2>Hi {name}</h2> */}
        <DesPerona />
        <div id='gif'></div>
        <button onClick={PlayApi}>Refresh Gif</button> 
      </header>

      <PlayApi/>
    </div>
  );
}

{/* <DesArrays /> */}
export default App;
