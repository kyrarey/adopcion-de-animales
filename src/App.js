import React from 'react';
import { Route, Routes } from 'react-router';
import Home from "./components/Home/Home"

const App = () => {
  return (
    <div>Hola mundo!
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App