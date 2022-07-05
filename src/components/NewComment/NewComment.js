import React from "react";
import axios from "axios";
import "./NewComment.css";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router";
import { useState } from "react";

const NewComment = () => {
  const notify = (text) => toast(text);
  const { foundationId } = useParams();
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const user = !!localStorage.getItem("newUser")
    ? JSON.parse(localStorage.getItem("newUser"))
    : {};

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3030/comment/add`, {
        comment: comment,
        userId: user._id,
        /* foundationId: foundation._id, //? */
      })
      .then(() => {
        notify("Creaste exitosamente tu comentario");
        navigate(`http://localhost:3030/comment/${foundationId}`);
      })
      .catch(() => {
        notify("Ya dejaste tu comentario sobre este producto");
      });
  };

  return (
    <div className="container">
      <div className="col">
        <h1> Gracias por tu comentario!</h1>
      </div>
      <div className="col">
        <form onSubmit={handleSubmit}>
          <div className="col"></div>
          <div className="col-12" id="commentContainer" value={comment}>
            <input
              className="comment"
              name="comment"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Deja tu comentario aqui"
            />
          </div>
          <div className="col" id="button">
            <button className="btn btn-default"> Agregar comentario </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewComment;
