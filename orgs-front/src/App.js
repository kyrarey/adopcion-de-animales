import { Route, Routes, useLocation } from "react-router-dom";
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "./GlobalContext";




function App() {
  const path = useLocation().pathname.slice(1, 8)
  return (
    <GlobalProvider>
  
    <ToastContainer />
     <Navbar />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      </GlobalProvider>
  )
}

export default App;
