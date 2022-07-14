//import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
/* import { AuthContext } from "../../context/AuthContext";
import { filteredArray } from "../../hooks/arrGen";
import find from "../../hooks/find"; */
import capitalizeFirst from "../../hooks/capitalizeFirst";
//import PetsIcon from "@mui/icons-material/Pets";
import RemoveIcon from "@mui/icons-material/Remove";
import { toast } from "react-toastify";
import "./FavoriteCard.css";


const FavoriteCard = ( {pet, animal} ) => {
  const navigate = useNavigate();
  const notify = (text) => toast(text);

    //borrar un animal de la lista
    const deleteAnimal = (pet) => {
      const favToDelete = animal.filter(animal => animal.animalId === pet._id);
      const favId = favToDelete[0]._id;
        axios.delete(`http://localhost:3030/favorite/${favId}`)
        .then(() => {
          /* favPets = animal.filter(animal => animal.animalId !== pet._id); */
          notify("Eliminado con exito");
        })
        .catch(err => {
          console.log(err);
          notify("No se pudo eliminar");
        });
    };
  
  return (
      <>
      <div className="row">
              <div
                className="col-2"
                onClick={() => {
                  navigate(`/animals/${pet._id}`);
                }}
              >
                {pet.image[0] ? (
                  <img
                    src={require(`../../assets/img/pets${pet.image[0]}`)}
                    alt={pet.animalname}
                    width="150"
                  ></img>
                ) : null}
              </div>
              <div className="col-9">
                <p>
                  <strong> Nombre: </strong>{" "}
                  {pet.animalname && capitalizeFirst(pet.animalname)}
                </p>
                <p>
                  <strong> Locacion: </strong>{" "}
                  {pet.location && capitalizeFirst(pet.location)}
                </p>
                <p>
                  {pet.sex && capitalizeFirst(pet.sex)}, {pet.age},{" "}
                  {pet.species}
                </p>
              </div>
              <div className="col-1">
                <button
                  type="button"
                  className="btn"
                  onClick={() => deleteAnimal(pet)}
                >
                  <RemoveIcon />
                </button>
              </div>
            </div>
      </>
  );
};

export default FavoriteCard;
