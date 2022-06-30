import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
  const [user, setUser] = useState();

  const getUser= () => {
    // const local = JSON.parse(localStorage.getItem('user'))
  setUser(JSON.parse(localStorage.getItem('user')));
  }


  useEffect(()=> getUser(), []);
  console.log(user, "    user")
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <Link to="/">
          <span className="navbar-brand">Pet Adoption</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {user?.isAuthenticated ? (
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link to="/">
                  <span className="nav-link active">Home</span>
                </Link>

              </li>
              <li className="nav-item">

                <Link to={`/account/${user._id}`}>
                  <span className="nav-link">{user?.email?.split('@')[0]}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favorite/:userId">
                </Link>
              </li>
              <li className="nav-item">

                <Link to="/search">
                  <span className="nav-link">Buscar mascota</span>
                </Link>
              </li>
              <li className="nav-item">

                <Link to="/association/pages/1">
                  <span className="nav-link">Fundaciones</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Más
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>

                    <Link to="/contact">
                      <span className="dropdown-item">Contacto</span>
                    </Link>
                  </li>
                  <li>

                    <Link to="/aboutus">
                      <span className="dropdown-item">Sobre nosotros</span>
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>

                    <Link to="/feedback">
                      <span className="dropdown-item">Reportar un error</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <Link to="/">
                <button className="btn"
                      onClick={user => {
                        localStorage.removeItem('user', user);
                         }}>Logout</button>
              </Link>
            </ul>
          </div>
        ) : (
          <ul className="navbar-nav ms-auto">
            <Link to="/login">
              <button className="btn"> Login </button>
            </Link>
            <Link to="/register">
              <button className="btn"> Register </button>
            </Link>
          </ul>
  )}

      </div>
    </nav>
  );
};

export default Navbar;
