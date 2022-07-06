import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PetCard from "../../commons/PetCard/PetCard";
import S from "./Search.module.css";

const SearchResult = () => {
  const [search, setSearch] = useState([]);
  const type = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3030/search/${type.search}`)
      .then((res) => res.data)
      .then((search) => setSearch(search));
  }, []);

  return (
    <div>
      <h1 className={S.title}>Results</h1>
      <div className={S.container}>
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
