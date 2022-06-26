import React from "react";
import {Link} from "react-router-dom";
import s from "./PetCard.module.css";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const PetCard = ({ pet }) => {
    let isFav = false;

    const addToFav = (e) => {
        e.preventDefault();
        isFav ? isFav= false : isFav=true;

        console.log(isFav)
    }
    
    return (
        <li className={s.petCard}>
            <Link to={`/animals/${pet.id}`}>
                <img className={s.petImage} 
                     src={require(`../../assets/img${pet.image[0]}`)} 
                     alt={pet.animalname}>
                </img>
            </Link>
            <div className={s.petInfo}>
                <span className={s.petName}>{capitalizeFirst(pet.animalname)}</span><br/>
                <span>{`${capitalizeFirst(pet.age)}, ${capitalizeFirst(pet.sex)}`}</span><br/>
                <span>{capitalizeFirst(pet.location)}</span>
            </div>
            
            <button className={s.favButton} type="submit" onClick={addToFav} >  {isFav? null: <FaRegHeart /> }</button>
        </li>
    )
}

export default PetCard;