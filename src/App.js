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
import Grid from "./components/Grid/Grid";
import Footer from "./components/Footer/Footer";
import AdoptantForm from "./components/Form/AdoptantForm"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/animals/:id" element={<SinglePetCard />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account/:id" element={<Account />} />
        <Route path="/favorite/:userId" element={<Favorite />} />
        <Route path="/search" element={<Search />} />
        <Route path="/association" element={<Association />} />
        <Route path="/animals/pages/:id" element={<Grid />} />
        <Route path="/account/form" element={<AdoptantForm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

