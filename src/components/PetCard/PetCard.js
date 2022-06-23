import React from "react"
import {Link} from "react-router-dom";
import s from "./PetCard.module.css";
import capitalizeFirst from "../../hooks/capitalizeFirst";

const PetCard = ({ pet }) => {
    
    return (
        <li className={s.petCard}>
            <Link to={`/${pet.id}` }>
                <img className={s.petImage} src={require(`../../assets/img${pet.url_path1}`)} alt={pet.name}></img>
            </Link>
            <div className={s.petInfo}>
                <span className={s.petName}>{capitalizeFirst(pet.name)}</span><br/>
                <span>{capitalizeFirst(pet.age)}</span><br/>
                <span>{capitalizeFirst(pet.gender)}</span><br/>
                <span>{capitalizeFirst(pet.location)}</span>
            </div>
        </li>
    )
}

export default PetCard;