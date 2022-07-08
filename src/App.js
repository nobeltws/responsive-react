import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Breakpoint } from './constants.ts';

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });

    return () => {window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth);
    });
  }
  }, [])

  const appBySize = () => {
    if (innerWidth >= Breakpoint.LARGE) {
      return 'large';
    }
    if (innerWidth >= Breakpoint.MEDIUM) {
      return 'Medium';
    }
    if (innerWidth < Breakpoint.MEDIUM) {
      return 'Small';
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - {appBySize()} Size
        </a>
      </header>
    </div>
  );
}

export default App;
