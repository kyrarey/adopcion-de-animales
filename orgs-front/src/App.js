import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Grid from "./components/Grid/Grid";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "./GlobalContext";
import AddAnimal from "./components/AddAnimal/AddAnimal"
import EditAnimal from "./components/EditAnimal/EditAnimal"
import Account from "./components/Account/Account";
import AnimalGrid from "./components/AnimalGrid/AnimalGrid"


function App() {
  const path = useLocation().pathname.slice(1, 8)
  return (
    <GlobalProvider>
    <ToastContainer />
     <Navbar />
     {path === "account" ? <Sidebar /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Hay que hacer el individual de cada fundacion */}
        <Route path="/account/:id" element={<Account />} />
        {/* <Route path="/account/edit/:id" element={<EditAccount />} /> */}
        {/* grilla con todos los perros */}
        <Route path="/foundations/pages/:id" element={<Grid />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* estas de aca abajo van con /account que no se por que no funciona*/}
        {/* <Route path="/foundations/pages/:id" element={< />} /> */}
        <Route path="/foundations/add-animal" element={<AddAnimal />} />
        <Route path="/foundations/edit-animal/:id" element={<EditAnimal />} />
        <Route path="/foundations/petsToAdopt/:id" element={<AnimalGrid />} />
      </Routes>
     <Footer /> 
      </GlobalProvider>
  )
}

export default App;
