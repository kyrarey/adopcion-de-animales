import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import "./Favorite.css";
import PetsIcon from "@mui/icons-material/Pets";
import RemoveIcon from "@mui/icons-material/Remove";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../GlobalContext";

const Favorite = () => {
  const notify = (text) => toast(text);
  const navigate = useNavigate();
  const [animal, setAnimal] = useState([]);
  const [petsArr, setPetsArr] = useState([]);
  const { newUser } = useGlobalContext();
  const filterAnimals = [];

  const userStorage = !!localStorage.getItem("newUser")
    ? JSON.parse(localStorage.getItem("newUser"))
    : {};

  //borrar un animal de la lista
  const deleteAnimal = (pet) => {
    deletePet(pet);
    //console.log("pet :", pet);
    axios
      .delete(`http://localhost:3030/favorite/${animal._id}`, {
        data: { animalId: pet },
      })
      .then(() => {
        /*    let index = 0; */
        for (let i = 0; i < filterAnimals.length; i++) {
          if (filterAnimals[i]._id === pet._id) filterAnimals.splice(i, i + 1);
          console.log("filterAnimals :", filterAnimals);
          if (i > filterAnimals.length) return filterAnimals;
          console.log("i :", i);
        }
        /* console.log("index :", index);
        filterAnimals.slice(index, index + 1); */
        notify("Eliminado con exito");
      })
      .catch(() => {
        notify("No se pudo eliminar");
      });
  };

  const deletePet = (params) => {
    //console.log("params :", params._id);
    const newAnimal = animal.filter((pet) => pet._id !== params._id);
    setAnimal(newAnimal);
  };

  //traer todos los animales favoritos
  useEffect(() => {
    axios
      .get(`http://localhost:3030/favorite/${userStorage._id}`)
      .then((res) => res.data)
      .then((pet) => {
        setAnimal(pet);
      });

    find("/animal/all")
      .then((petsArr) => {
        setPetsArr(petsArr);
      })
      .catch((err) => console.log(err));
  }, []);

  const filter = () => {
    for (let j = 0; j < petsArr.length; j++) {
      for (let i = 0; i < animal.length; i++) {
        if (petsArr[j]._id === animal[i].animalId) {
          filterAnimals.push(petsArr[j]);
        }
      }
    }
    console.log("animal :", animal);
    console.log("filterAnimals :", filterAnimals);
  };
  filter();

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
          filterAnimals.map((pet) => (
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
                  onClick={() => {
                    deleteAnimal(pet);
                  }}
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
