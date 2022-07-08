import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FavContext } from "../../context/FavContext";
import { notLoggedIn } from "../../hooks/alert";
import axios from "axios";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import s from "./PetCard.module.css";


const PetCard = ({ pet }) => {
  const { loggedUser } = useContext(AuthContext);
  const { favPets, getFavs } = useContext(FavContext);
  const [favId, setFavId] = useState("");
  const navigate = useNavigate();
  const notify = (text) => toast(text);
  let isFav;

  const addToFav = (e) => {
    e.preventDefault();
    if (loggedUser) {
      if(favPets) favPets.filter(animal => animal.animalId === pet._id).length > 0 ? isFav = true : isFav = false;
      if (!isFav) {
        axios.post("http://localhost:3030/favorite/add", {
          animalId: pet._id,
          userId: loggedUser._id,
        })
        .then(user => {
          setFavId(user.data._id)
          find(`/favorite/${user.data.userId}`)
          .then(favs => getFavs(favs))
          .catch(err => console.log(err));
        })
      } else {
        axios.delete(`http://localhost:3030/favorite/${favId}`)
        .then(() => {
          isFav = false;
          notify("Eliminado de favoritos"); 
        })
        .catch(err => {
          console.log(err);
        });
        ;
      }
    } else {
      notLoggedIn();
      navigate("/login");
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
      <button className={s.favButton} type="submit" onClick={addToFav}>{
      favPets 
        ? favPets.filter(animal => animal.animalId === pet._id).length > 0 ? <FaHeart /> : <FaRegHeart />
        : <FaRegHeart />
      }
      </button>
    </div>
  );
};

export default PetCard;
