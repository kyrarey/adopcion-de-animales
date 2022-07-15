import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PetCard from "../../commons/PetCard/PetCard";
import S from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PetsIcon from "@mui/icons-material/Pets";
import capitalizeFirst from "../../hooks/capitalizeFirst";

const SearchResult = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState([]);
  /*   const [search, setSearch] = useState({
     slug: "",
     results: [],
   }); */
  console.log("search :", search);
  const [text, setText] = useState("");
  console.log("text :", text);
  const [type, setType] = useState("");
  const [input, setInput] = useState("");

  let inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setText(capitalizeFirst(lowerCase));
  };

  const onSearch = () => {
    axios
      .get(`http://localhost:3030/search/${text}`)
      .then((res) => res.data)
      .then((animals) => setSearch(animals))
      .catch((error) => console.log(error));
    /* navigate(`/search/${search}`); */
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3030/search/${type}/${input}`)
      .then((res) => res.data)
      .then((animals) => setSearch(animals));
  }, [input]);

  return (
    <div>
      <div className={S.container}>
        <h1 className={S.title}>
          {" "}
          <PetsIcon fontSize="large" /> Búsqueda de mascotas
        </h1>
        {/*  <ul className="searchBarOut row">
          <form className="nav-item d-flex align-self-center col-4">
            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Busqueda"
                onChange={inputHandler}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
                onClick={onSearch}
              >
                <SearchIcon />
              </button>
            </div>
          </form>
        </ul> */}
        <h3> Categorias </h3>
        <div className="row">
          <div className="dropdown col">
            <button
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setType("location")}
            >
              Locación
            </button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => setInput("buenos aires, argentina")}
                >
                  Buenos Aires
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => setInput("cordoba, argentina")}
                >
                  Córdoba
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => setInput("neuquén, neuquén")}
                >
                  Neuquén
                </button>
              </li>
            </ul>
          </div>

          <div class="dropdown col">
            <button
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setType("sex")}
            >
              Sexo
            </button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => setInput("hembra")}
                >
                  Hembra
                </button>
              </li>
              <li>
                <button class="dropdown-item" onClick={() => setInput("macho")}>
                  Macho
                </button>
              </li>
            </ul>
          </div>

          <div class="dropdown col">
            <button
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setType("species")}
            >
              Especie
            </button>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <button class="dropdown-item" onClick={() => setInput("gato")}>
                  Gato
                </button>
              </li>
              <li>
                <button class="dropdown-item" onClick={() => setInput("perro")}>
                  Perro
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => setInput("hamster")}
                >
                  Hamster
                </button>
              </li>
            </ul>
          </div>

          <div class="dropdown col">
            <button
              class="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setType("age")}
            >
              Edad
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => setInput("cachorro")}
                >
                  Cachorro
                </button>
              </li>
              <li>
                <button class="dropdown-item" onClick={() => setInput("joven")}>
                  Joven
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => setInput("adulto")}
                >
                  Adulto
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  onClick={() => setInput("senior")}
                >
                  Senior
                </button>
              </li>
            </ul>
          </div>
        </div>

        <ul className={S.grid}>
          {search.map((item, index) => (<PetCard key={index} pet={item} />))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResult;
