import React from "react";
import { Link } from "react-router-dom";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import s from "./AnimalCard.module.css";

const AnimalCard = ({ animal }) => {

  return (
    <div className={s.animalCard}>
      <Link className={s.link} to={`/account/animal/${animal._id}`}>
        <img
          className={s.animalImage}
          src={animal.image[0] 
            ? animal.image[0] === "no_pet" ? require(`../../assets/img/pets/no_pet.jpg`) : require(`../../assets/img/pets${animal.image[0]}`)
            : require(`../../assets/img/pets/no_pet.jpg`)
          }
          alt=""
        ></img>
        <div className={s.animalInfo}>
          <span className={s.animalName}>{animal.animalname && capitalizeFirst(animal.animalname)}</span>
          <br />
          <span>{`${animal.age && capitalizeFirst(animal.age)}, ${animal.sex && capitalizeFirst(
            animal.sex
          )}`}</span>
          <br />
          <span>{capitalizeFirst(animal.location)}</span>
        </div>
      </Link>
    </div>
  );
};

export default AnimalCard;
