import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { filteredArray } from "../../hooks/arrGen";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import PetsIcon from "@mui/icons-material/Pets";
import RemoveIcon from "@mui/icons-material/Remove";
import { toast } from "react-toastify";
import "./Favorite.css";


const Favorite = () => {
  const { loggedUser } = useContext(AuthContext);
  const [animal, setAnimal] = useState([]);
  const [petsArr, setPetsArr] = useState([]);
  const navigate = useNavigate();
  const notify = (text) => toast(text);

/* 
  const userStorage = !!localStorage.getItem("newUser")
    ? JSON.parse(localStorage.getItem("newUser"))
    : {}; */

    //traer todos los animales favoritos
  useEffect(() => {
    if(loggedUser) {
      find(`/favorite/${loggedUser._id}`)
      .then(userFavs => setAnimal(userFavs))
      /* .catch(err => console.log(err)); */

      find("/animal/all")
      .then(allPets => setPetsArr(allPets))
      /* .catch(err => console.log(err)); */
    }
  }, );

  let favPets = filteredArray(animal, petsArr );


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
    <div className="container">
      <div className="favorite">
        <h2 className="p-3 fs-1 border-top border-bottom border-2">
          {" "}
          <PetsIcon fontSize="large" /> Tu cucha{" "}
        </h2>
        {animal.length === 0 ? (
          <p>No tienes animales agregados aun! </p>
        ) : (
          favPets.map((pet) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Favorite;
