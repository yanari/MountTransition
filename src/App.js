import './App.css';

import React, {useState} from 'react';
import MountTransition from './MountTransition/index';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button onClick = {() => setOpen(!open)}>{open ? 'CLOSE' : 'OPEN'}</button>
      <MountTransition isMounted = {open} preset = "slideTop">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </MountTransition>
    </div>
  );
}

export default App;
