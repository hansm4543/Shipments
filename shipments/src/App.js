import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import './App.css';


import Main from './Pages/Main'
import DetailedView from './Pages/DetailedView'

function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path='/item/:itemId' element={<DetailedView/>}/>
      </Routes>

        


    </BrowserRouter>
  );
}

export default App;