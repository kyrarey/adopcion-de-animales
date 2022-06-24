import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Pet Adoption</a> */}
    <Link to="/">
            <span className="navbar-brand">Pet Adoption</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link to="/">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          </Link> */}
          <Link to="/">
            <span className="nav-link active">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Mi Perfil</a> */}
          <Link to="/profile">
            <span className="nav-link">Mi Perfil</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/favorite/:userId">
          </Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Buscar mascota</a> */}
          <Link to="/search">
            <span className="nav-link">Buscar mascota</span>
          </Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Fundaciones</a> */}
          <Link to="/asociation">
            <span className="nav-link">Fundaciones</span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Más
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              {/* <a className="dropdown-item" href="#">Contacto</a> */}
              <Link to="/contact">
                <span className="dropdown-item">Contacto</span>
              </Link>
            </li>
            <li>
              {/* <a className="dropdown-item" href="#">Sobre nosotros</a> */}
              <Link to="/aboutus">
                <span className="dropdown-item">Sobre nosotros</span>
              </Link>
            </li>
            <li><hr className="dropdown-divider"/></li>
            <li>
              {/* <a className="dropdown-item" href="#">Reportar un error</a> */}
              <Link to="/feedback">
                <span className="dropdown-item">Reportar un error</span>
              </Link>
              </li>
          </ul>
        </li>
        {/* <li>
          <button className="btn btn-outline-success">Search</button>
        </li> */}
      </ul>

      <ul className="navbar-nav ms-auto">

        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>

      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
