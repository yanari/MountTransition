import React, {useState} from 'react';
import MountTransition from './MountTransition/index';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <MountTransition show = {open} preset = "fadeInOut">
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
      <button onClick = {() => setOpen(!open)}>a</button>
    </div>
  );
}

export default App;
