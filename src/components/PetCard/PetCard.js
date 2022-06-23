import React from "react";
import { Modal } from "bootstrap";
import {Link} from "react-router-dom";
import s from "./PetCard.module.css";
import capitalizeFirst from "../../hooks/capitalizeFirst";

const PetCard = ({ pet }) => {


    const addToFav = (e) => {
        e.preventDefault();
    }
    
    return (
        <li className={s.petCard}>
            <Link to={`/animals/${pet.id}`} propiedades={'Hello'}>
                <img className={s.petImage} src={require(`../../assets/img${pet.url_path1}`)} alt={pet.name}></img>
            </Link>
            <div className={s.petInfo}>
                <span className={s.petName}>{capitalizeFirst(pet.name)}</span><br/>
                <span>{`${capitalizeFirst(pet.age)}, ${capitalizeFirst(pet.gender)}`}</span><br/>
{/*                 <span>{capitalizeFirst(pet.gender)}</span><br/> */}
                <span>{capitalizeFirst(pet.location)}</span>
            </div>
            <button className={s.favButton} type="submit" onClick={addToFav} > Add to favorites</button>
        </li>
    )
}

export default PetCard;