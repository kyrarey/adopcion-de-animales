import React from 'react';
import { Route, Routes } from 'react-router';
import Home from "./components/Home/Home";
import SinglePetCard from "./components/SinglePetCard/SinglePetCard";
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const App = () => {
  return (
  <div >
    <Navbar />
    
    <Routes>

      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/animals/:id" element={<SinglePetCard />}></Route>
    </Routes>
  </div>
  )
}

export default App