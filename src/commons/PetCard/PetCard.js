import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import s from "./PetCard.module.css";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PetCard = ({ pet }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  //console.log("user :", user);

  let isFav = false;

  const addToFav = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/favorite/add", {
        animalId: pet._id,
        userId: user._id,
      })
      .then(() => {
        isFav ? (isFav = false) : (isFav = true);
        alert("agregado con exito");
      });
  };

  /* const addToFav = (e) => {
    e.preventDefault();
    isFav ? (isFav = false) : (isFav = true);

    console.log(isFav);
  }; */

  return (
    <div className={s.petCard}>
      <Link className={s.link} to={`/animals/${pet._id}`}>
        <img className={s.petImage}
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
