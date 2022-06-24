import React from 'react';
import { Route, Routes } from 'react-router';
import Home from "./components/Home/Home";
import SinglePetCard from "./components/SinglePetCard/SinglePetCard";
import Navbar from './components/Navbar/Navbar';
import Grid from "./components/Grid/Grid";

const App = () => {
  return (
  <div >
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/animals" element={<Grid />}></Route>
      <Route path="/animals/:id" element={<SinglePetCard />}></Route>
    </Routes>
  </div>
  )
}

export default App