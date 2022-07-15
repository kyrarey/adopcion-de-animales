import React, { useState, useEffect, useContext } from "react";
/* import { useNavigate } from "react-router-dom";
import axios from "axios"; */
import { AuthContext } from "../../context/AuthContext";
import { filteredArray } from "../../hooks/arrGen";
import find from "../../hooks/find";
//import capitalizeFirst from "../../hooks/capitalizeFirst";
import PetsIcon from "@mui/icons-material/Pets";
/* import RemoveIcon from "@mui/icons-material/Remove";
import { toast } from "react-toastify"; */
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import "./Favorite.css";


const Favorite = () => {
  const { loggedUser } = useContext(AuthContext);
  const [animal, setAnimal] = useState([]);
  const [petsArr, setPetsArr] = useState([]);


/* 
  const userStorage = !!localStorage.getItem("newUser")
    ? JSON.parse(localStorage.getItem("newUser"))
    : {}; */

    //traer todos los animales favoritos
  useEffect(() => {
    if(loggedUser) {
      find(`/favorite/${loggedUser._id}`)
      .then(userFavs => setAnimal(userFavs))
      .catch(err => console.log(err));

      find("/animal/all")
      .then(allPets => setPetsArr(allPets))
      .catch(err => console.log(err));
    }
  }, );

  let favPets = filteredArray(animal, petsArr );




  return (
    <div className="container">
      <div className="favorite">
        <h2 className="p-3 fs-1 border-top border-bottom border-2">
          {" "}
          <PetsIcon fontSize="large" /> Tu cucha{" "}
        </h2>
        {animal.length === 0 ? (
          <p>No tienes animales agregados aun! </p>
        ) : (
          favPets.map((pet, index) => (<FavoriteCard key={index} pet={pet} animal={animal}/>
            
          ))
        )}
      </div>
    </div>
  );
};

export default Favorite;
