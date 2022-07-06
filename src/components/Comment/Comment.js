import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import find from "../../hooks/find";
import { useGlobalContext } from "../../GlobalContext";
import "./Comment.css";

const Comment = () => {
  const [comment, setComment] = useState("");
  const [foundation, setFoundation] = useState({});
  const { newUser } = useGlobalContext();
  const { foundationId } = useParams().id;

  const userStorage = !!localStorage.getItem("newUser")
    ? JSON.parse(localStorage.getItem("newUser"))
    : {};

  useEffect(() => {
    find(`/user/account/${foundationId}`)
      .then((foundationObj) => setFoundation(foundationObj))
      .catch((error) => console.log(error));
  }, [foundationId]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/comment/${foundationId}`)
      .then((res) => res.data)
      .then((review) => setComment(review));
  }, []);

  return (
    <div>
      <ul>
        <div className="subtitle">
          <h3 align="center">Comentarios</h3>
        </div>

        {comment.length === 0 ? (
          <div align="center">
            <p>No hay comentarios aun</p>
          </div>
        ) : (
          comment.map((review) => (
            <li>
              {console.log(review)}
              <div className="container">
                <div className="row">
                  <div className="col-2">
                    <div>
                      <img
                        className="userImg"
                        src={
                          userStorage.image
                            ? userStorage.image === "no_user"
                              ? require(`../../assets/img/users/no_user.jpg`)
                              : require(`../../assets/img/users${userStorage.image}.jpg`)
                            : require(`../../assets/img/users/no_user.jpg`)
                        }
                        alt="Foto de perfil"
                      ></img>
                    </div>
                    <div id="date">
                      <p className="text-left">
                        {new Date(review.createdAt).toLocaleDateString("es-AR")}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-8" id="textReview">
                    <p>"{review.comment}"</p>
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="pb-5" align="center">
        <Link to={`/comment/add/${foundationId}`}>
          <button type="button" className="btn btn-default">
            Agregar comentario
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Comment;
