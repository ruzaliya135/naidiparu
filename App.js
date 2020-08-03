import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ControlPanel from "./components/ControlPanel";
import Header from "./components/Header";
import Map from "./components/Map";

const App = () => {
  return (
    <div className="App">
        <Header/>
        <ControlPanel/>
        <Map/>
    </div>
  );
}

export default App;
