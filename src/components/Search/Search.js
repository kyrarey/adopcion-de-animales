import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PetCard from "../../commons/PetCard/PetCard";
import S from "./Search.module.css";

const SearchResult = () => {
  const [search, setSearch] = useState([]);
  const [type, setType] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3030/search/${type}/${input}`)
      .then((res) => res.data)
      .then((animals) => setSearch(animals));
  }, [input]);

  return (
    <div>
      <div className={S.container}>
        <h1 className={S.title}>Busqueda de mascotas</h1>
        <h3> Categorias </h3>
        <div className="dropdown">
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

        <div class="dropdown">
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
              <button class="dropdown-item" onClick={() => setInput("hembra")}>
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

        <div class="dropdown">
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
              <button class="dropdown-item" onClick={() => setInput("hamster")}>
                Hamster
              </button>
            </li>
          </ul>
        </div>

        <div class="dropdown">
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
              <button class="dropdown-item" onClick={() => setInput("adulto")}>
                Adulto
              </button>
            </li>
            <li>
              <button class="dropdown-item" onClick={() => setInput("senior")}>
                Senior
              </button>
            </li>
          </ul>
        </div>

        <ul className={S.grid}>
          {search.map((item) => (
            <PetCard pet={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResult;
