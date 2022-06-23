import React from 'react';
import { Route, Routes } from 'react-router';
import Home from "./components/Home/Home"
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
  <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      </div>
  )
}

export default App