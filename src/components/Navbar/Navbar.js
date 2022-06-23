import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pet Adoption</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mi Perfil</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Buscar mascota</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Fundaciones</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Más
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Contacto</a></li>
            <li><a className="dropdown-item" href="#">Sobre nosotros</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Reportar un error</a></li>
          </ul>
        </li>
        {/* <li>
          <button className="btn btn-outline-success">Search</button>
        </li> */}
      </ul>

      <ul className="navbar-nav ms-auto">
        <button className="btn">Login</button>
        <button className="btn">Register</button>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
