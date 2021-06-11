import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AutosaveInput from "./components/AutosaveInput"

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function HandleNameOnChange(value: string)
  {
      setName(preState => preState = value)
  }
  function HandleDescriptionOnChange(value: string)
  {
      setDescription(preState => preState = value)
  }


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
        <AutosaveInput initValue="Some text by default, double click to edit." onChangeDelegate={HandleNameOnChange}></AutosaveInput>
        <AutosaveInput initValue="Same here." onChangeDelegate={HandleDescriptionOnChange}></AutosaveInput>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
