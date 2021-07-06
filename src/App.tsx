import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RootState, useAppSelector } from './state';
import PackageSearch from './components/PackageSearch';
import PackageList from './components/PackageList';

function App() {
  const name = useAppSelector((state: RootState) => state.search.name)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <PackageSearch />
        <PackageList name={name} />
      </header>
    </div>
  );
}

export default App;
