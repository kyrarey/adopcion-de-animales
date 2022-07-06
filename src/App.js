import React from "react";
import { GlobalProvider } from "./GlobalContext";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import SinglePetCard from "./components/SinglePetCard/SinglePetCard";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Account from "./components/Account/Account";
import EditAccount from "./components/EditAccount/EditAccount";
import UserForm from "./components/UserForm/UserForm";
import EditForm from "./components/EditForm/EditForm";
import Favorite from "./components/Favorite/Favorite";
import Search from "./components/Search/Search";
import Association from "./components/Association/Association";
import Grid from "./components/Grid/Grid";
import Footer from "./components/Footer/Footer";
import AdoptantForm from "./components/Form/AdoptantForm";
import AssociationProfile from "./components/AssociationProfile/AssociationProfile";
import OrgGrid from "./components/FoundationGrid/FoundationGrid";
import NotFound from "./components/NotFound/NotFound";
import Comment from "./components/Comment/Comment";
import NewComment from "./components/NewComment/NewComment";

const App = () => {
  const path = useLocation().pathname.slice(1, 8);
  return (
    <GlobalProvider>
      <ToastContainer />
      <Navbar />
      {path === "account" ? <Sidebar /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals/:id" element={<SinglePetCard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/account/:id" element={<Account />} />
        <Route path="/account/edit/:id" element={<EditAccount />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/account/form/:id" element={<UserForm />} />
        <Route path="/account/form/edit/:id" element={<EditForm />} />
        <Route path="/account/favorite" element={<Favorite />} />
        <Route path="/association/pages/:id" element={<OrgGrid />} />
        <Route path="/animals/pages/:id" element={<Grid />} />
        <Route path="/form" element={<AdoptantForm />} />
        {/* <Route path="/orgs/pages/:id" element={<OrgGrid />} /> */}
        {/* fundacion */}
        <Route path="/associationProfile" element={<AssociationProfile />} />
        <Route path="/associationProfile/comment/:id" element={<Comment />} />
        <Route
          path="/associationProfile/comment/add/:id"
          element={<NewComment />}
        />
        <Route path="*" element={<Navigate to="404" />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
      <Footer />
    </GlobalProvider>
  );
};

export default App;
