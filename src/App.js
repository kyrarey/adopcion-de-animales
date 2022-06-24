import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SinglePetCard from "./components/SinglePetCard/SinglePetCard";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Account from "./components/Account/Account";
import Favorite from "./components/Favorite/Favorite";
import Search from "./components/Search/Search";
import Association from "./components/Association/Association";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/animals/:id" element={<SinglePetCard />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/favorite/:userId" element={<Favorite />} />
        <Route path="/search" element={<Search />} />
        <Route path="/association" element={<Association />} />
      </Routes>
    </>
  );
};

export default App;
