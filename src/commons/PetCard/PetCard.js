import React from "react";
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import s from "./PetCard.module.css";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
/* import { useGlobalContext } from "../../GlobalContext"; */

const PetCard = ({ pet }) => {
  const { loggedUser, favsUser } = useContext(AuthContext);
  const notify = (text) => toast(text);
/*   const { newUser, setNewUser } = useGlobalContext();
  
  const userStorage = !!localStorage.getItem("newUser")
    ? JSON.parse(localStorage.getItem("newUser"))
    : {}; */

  let isFav;
  console.log(pet, "pet PetCard")
  const addToFav = (e) => {
    e.preventDefault();
    console.log(favsUser)
    if(favsUser) favsUser.filter(animal => animal.animalId === pet._id).length > 0 ? isFav = true : isFav = false;
    console.log(isFav)
    if (!isFav) {
    axios
      .post("http://localhost:3030/favorite/add", {
        animalId: pet._id,
        userId: /* userStorage */loggedUser._id,
      })
      .then(() => {
        /* isFav ? (isFav = false) : (isFav = true); */
        notify("Agregado con exito");
      })
    }
  };


  return (
    <div className={s.petCard}>
      <Link className={s.link} to={`/animals/${pet._id}`}>
        <img
          className={s.petImage}
          src={require(`../../assets/img/pets${pet.image[0]}`)}
          alt={pet.animalname}
        ></img>
        <div className={s.petInfo}>
          <span className={s.petName}>{capitalizeFirst(pet.animalname)}</span>
          <br />
          <span>{`${capitalizeFirst(pet.age)}, ${capitalizeFirst(
            pet.sex
          )}`}</span>
          <br />
          <span>{capitalizeFirst(pet.location)}</span>
        </div>
      </Link>
      <button className={s.favButton} type="submit" onClick={addToFav}>
        {" "}
        {isFav ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
      </button>
    </div>
  );
};

export default PetCard;
