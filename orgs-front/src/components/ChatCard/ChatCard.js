import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { notLoggedIn } from "../../hooks/alert";
import axios from "axios";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
//import { FaHeart, FaRegHeart } from "react-icons/fa";
import s from "./ChatCard.module.css";



const ChatCard = ({ pet }) => {
  const { loggedUser } = useContext(AuthContext);
  //const { favPets, getFavs } = useContext(FavContext);
  const [favId, setFavId] = useState("");
  const navigate = useNavigate();
  let isFav;
  //console.log(pet, "pet ChatCard")
/*   const addToFav = (e) => {
    e.preventDefault();
    if (loggedUser) {
      if(favPets) favPets.filter(animal => animal.animalId === pet._id).length > 0 ? isFav = true : isFav = false;
      if (!isFav) {
        axios.post("http://localhost:3030/favorite/add", {
          animalId: pet._id,
          userId: loggedUser._id,
        })
        .then(user => {
          //console.log(user)
          setFavId(user.data._id)
          find(`/favorite/${user.data.userId}`)
          .then(favs => getFavs(favs))
          .catch(err => console.log(err));
        })
      } else {
        axios.delete(`http://localhost:3030/favorite/${favId}`)
        .then(() => {
          find(`/favorite/${loggedUser._id}`)
          .then(favs => getFavs(favs))
          .catch(err => console.log(err));

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
  }; */


  return (
    <div className={s.ChatCard}>
      <Link className={s.link} to={`/animals/${pet._id}`}>
        <img className={s.petImage}
          src={pet.image[0] 
            ? pet.image[0] === "/no_pet.jpg" ? require(`../../assets/img/pets/no_pet.jpg`) : require(`../../assets/img/pets${pet.image[0]}`)
            : require(`../../assets/img/pets/no_pet.jpg`)
          }
          alt=""
        ></img>
        <div className={s.petInfo}>
          <span className={s.petName}>{pet.animalname && capitalizeFirst(pet.animalname)}</span>
          <br />
          <span>{`${pet.age && capitalizeFirst(pet.age)}, ${pet.sex && capitalizeFirst(pet.sex)}`}</span>
          <br />
          <span>{pet.location && capitalizeFirst(pet.location)}</span>
        </div>
      </Link>
      {/* <button className={s.favButton} type="submit" onClick={addToFav}>{
      favPets 
        ? favPets.filter(animal => animal.animalId === pet._id).length > 0 ? <FaHeart /> : <FaRegHeart />
        : <FaRegHeart />
      }
      </button> */}
    </div>
  );
};

export default ChatCard;
