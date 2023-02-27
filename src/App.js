import './App.css';
import Create from "./Components/create";
import Read from "./Components/read";
import Update from "./Components/update";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import React from "react";
import Home from "./Components/Home";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <h2 className="main-header">React Crud Operations</h2>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route exact path='/create' element={<Create/>} />
                <Route exact path='/read' element={<Read/>} />
                <Route path='/update' element={<Update/>} />
            </Routes>
            </div>
      </BrowserRouter>
  )
}

export default App;
