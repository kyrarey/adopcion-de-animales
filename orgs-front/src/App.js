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




function App() {
  const path = useLocation().pathname.slice(1, 8)
  return (
    <GlobalProvider>
  
    <ToastContainer />
     <Navbar />
     {path === "account" ? <Sidebar /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundations/pages/:id" element={<Grid />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     <Footer /> 
      </GlobalProvider>
  )
}

export default App;
