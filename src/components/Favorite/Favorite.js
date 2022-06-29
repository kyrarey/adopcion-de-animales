import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Favorite.css";
import PetsIcon from "@mui/icons-material/Pets";
import RemoveIcon from "@mui/icons-material/Remove";

const Favorite = () => {
  const [animal, setAnimal] = useState([]);
  const [user, setUser] = useState({});

  setUser(JSON.parse(localStorage.getItem("user")));

  //traer todos los animales favoritos
  useEffect(() => {
    axios
      .get(`http://localhost:3030/favorite/${user.id}`)
      .then((res) => res.data)
      .then((pet) => setAnimal(pet));
  }, [animal]);

  //borrar un animal de la lista
  /*  const deleteAnimal = (id) => {
    axios
      .delete(`http://localhost:3030/favorite/${favorite.id}`, {
        data: { animalId: id },
      })
      .then(() => {
        alert("eliminado con exito"); //esto se saca despues
      })
      .catch(() => {
        alert("no se pudo eliminar");
      });
  }; */


  return (
    <div className="container">
      <div className="favorite">
        <h2 class="p-3 fs-2 border-top border-bottom border-2">
          {" "}
          <PetsIcon fontSize="large" /> Tu cucha{" "}
        </h2>
        {animal.length === 0 ? (
          <p>No tienes animales agregados aun! </p>
        ) : (
          animal.map((pet) => (
            <div className="row">
              <div className="col-2">
                <img src={pet.animal.img} width="150"></img>
              </div>
              <div className="col-9">
                <p>
                  <strong> Nombre: </strong> {pet.animal.name}
                </p>
                <p>
                  <strong> Fundacion: </strong> {pet.association}
                </p>
              </div>

              <div className="col-1">
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    /* deleteAnimal(pet.id); */
                  }}
                >
                  <RemoveIcon />
                </button>
              </div>
              <div></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorite;
