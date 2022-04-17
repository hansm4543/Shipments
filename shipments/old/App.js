import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import './App.css';

import Shipments from './component/shipments'
import Detailedpage from './component/detailedpage'

function App() {
  return (
    <BrowserRouter>
      

      <Routes>
        <Route exact path="/" element={<Shipments/>}/>
        <Route exact path='/item/:itemId' element={<Detailedpage/>}/>
        
      </Routes>

        


    </BrowserRouter>
  );
}

export default App;