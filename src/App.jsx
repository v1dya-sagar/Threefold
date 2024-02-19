import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Navbar} from "./Components" ;
import {Homepage , SearchMap } from "./Pages" ;
import State from './context/State';

const App = () => {
  return (
    <div>
      <State>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/search" element={<SearchMap/>} />
        </Routes>
  
      </Router>
      </State>
    </div>
  )
}

export default App