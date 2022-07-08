import React from "react";
import { useContext } from 'react';
// import { AuthContext } from "../../context/AuthContext";
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
  // const { loggedUser, favsUser } = useContext(AuthContext);
  const notify = (text) => toast(text);
/*   const { newUser, setNewUser } = useGlobalContext();

  const userStorage = !!localStorage.getItem("newUser")
    ? JSON.parse(localStorage.getItem("newUser"))
    : {}; */

  let isFav;

  const addToFav = (e) => {

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
      {/* <button className={s.favButton} type="submit" onClick={addToFav}>
        {" "}
        {isFav ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
      </button> */}
    </div>
  );
};

export default PetCard;
