import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import s from "./SinglePetCard.module.css";
import SingleSlider from "../SingleSlider/SingleSlider";


const SinglePetCard = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [pet, setPet] = useState({
    "_id": "",
    "animalname": "",
    "history": "",
    "image": [],
    "fundationId": "",
    "location": "",
    "size": "",
    "species": "",
    "sex": "",
    "personality": "",
    "age": "",
    "vaccines": ""
  });
  
  useEffect(() => {
    find(`/animal/${id}`)
      .then(petObj => setPet(petObj))
      .catch(error => console.log(error))
  }, [id]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/account/form")
  }


  return (
    <div className={s.container}>
      <div className={s.card}>
        <h1 className={s.title}>{pet.animalname}</h1>
        <div className={s.content}>
          <SingleSlider images={pet.image}/>
          <div className={s.text}>
            <p >{`${pet.species && capitalizeFirst(pet.species)} • ${pet.sex && capitalizeFirst(pet.sex)}`}</p>
            <h4 className={s.subTitle}>Edad</h4>
            <p  className={s.info}>{pet.age && capitalizeFirst(pet.age)}</p>
            <h4 className={s.subTitle}>Tamaño </h4>
            <p  className={s.info}>{pet.size && capitalizeFirst(pet.size)}</p>
            <h4 className={s.subTitle}>Vacunas</h4>
            <p  className={s.info}>{pet.vaccines}</p>
            <h4 className={s.subTitle}>Carácter</h4>
            <p  className={s.info}>{pet.personality}</p>
            <h4 className={s.subTitle}>Historia</h4>
            <p  className={s.info}>{pet.history}</p>
            <h4 className={s.subTitle}>Ubicación</h4>
            <p  className={s.info}>{pet.location && capitalizeFirst(pet.location)}</p>
          </div>
          <button className={s.button} onClick={handleClick}>
            {`Adoptar a ${pet.animalname && capitalizeFirst(pet.animalname)}`}
          </button>
        </div>
      </div>

    </div>

  )
}


export default SinglePetCard;



