import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import SingleFoundationCard from "./components/SingleFoundationCard/SingleFoundationCard";
import Grid from "./components/Grid/Grid";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import AddAnimal from "./components/AddAnimal/AddAnimal";
import EditAnimal from "./components/EditAnimal/EditAnimal";
import Account from "./components/Account/Account";
import EditAccount from "./components/EditAccount/EditAccount";
import FoundationForm from "./components/FoundationForm/FoundationForm";
import EditForm from "./components/EditForm/EditForm";
import AnimalGrid from "./components/AnimalGrid/AnimalGrid";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "./GlobalContext";
import Socket from "./components/Chat/Socket"

function App() {
  const path = useLocation().pathname.slice(1, 8)
  return (
    <GlobalProvider>
    <ToastContainer />
     <Navbar />
     {path === "account" ? <Sidebar /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundations/:id" element={<SingleFoundationCard />} />
        <Route path="/account/:id" element={<Account />} />
        <Route path="/account/edit/:id" element={<EditAccount />} />
        <Route path="/account/form/:id" element={<FoundationForm />} />
        <Route path="/account/form/edit/:id" element={<EditForm />} />
        {/* grilla con todos los animales  */}
        <Route path="/foundations/pages/:id" element={<Grid />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* estas de aca abajo van con /account que no se por que no funciona*/}
        <Route path="/foundations/add-animal" element={<AddAnimal />} />
        <Route path="/foundations/edit-animal/:id" element={<EditAnimal />} />
        <Route path="/foundations/petsToAdopt/:id" element={<AnimalGrid />} />
        <Route path="/chat/:foundationId" element={<Socket />} />
      </Routes>
     <Footer /> 
      </GlobalProvider>
  )
}

export default App;
