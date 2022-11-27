import './App.css';
import {Info} from "./Info";
import img from "./img.png";
import React from "react";
import {Buttons} from "./Buttons";
import {About} from "./About";
import {Social} from "./Social";

function App() {
  return (
    <div className="App">
        <img className="img" alt="Profile" src={img}/>
        <Info />
        <Buttons />
        <About />
        <Social />
    </div>
  );
}

export default App;
