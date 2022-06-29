import React from "react";
import { Link } from "react-router-dom";
import s from "./PetCard.module.css";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const PetCard = ({ pet }) => {
  let isFav = false;

  const addToFav = (e) => {
    e.preventDefault();
    isFav ? (isFav = false) : (isFav = true);

    console.log(isFav);
  };

  return (
    // Cambie de un LI a un DIV para que el link quede por fuera del boton de fav
    <div className={s.petCard}>
      {/* Cambiar de lugar el link para que se pueda clickear en toda la card */}
      <Link to={`/animals/${pet._id}`}>
        <img
          className={s.petImage}
          src={require(`../../assets/img${pet.image[0]}`)}
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
        {isFav ? null : <FaRegHeart />}
      </button>
    </div>
  );
};

export default PetCard;
