import './App.css';
import {Info} from "./Info";
import img from "./img.png";
import React from "react";
import {Buttons} from "./Buttons";

function App() {
  return (
    <div className="App">
        <img className="img" alt="Profile" src={img}/>
        <Info />
        <Buttons />
    </div>
  );
}

export default App;
