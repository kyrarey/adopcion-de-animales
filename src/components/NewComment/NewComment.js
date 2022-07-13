import React, { useState, useContext } from "react";
import axios from "axios";
import "./NewComment.css";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const NewComment = () => {
  const notify = (text) => toast(text);
  const params = useParams();
  const foundationId = params.id;
  const [comment, setComment] = useState("");
  const { loggedUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3030/comment/add/${foundationId}`, {
        comment: comment,
        userId: loggedUser._id,
        foundationId: foundationId,
      })
      .then(() => {
        notify("Comentario publicado");
        navigate(`/association/${foundationId}`);
      })
      .catch(() => {
        notify("Error al publicar comentario");
      });
  };

  return (
    <div className="container">
      <div className="new-comment">
        <div className="row">
          <div className="col-8">
            <h1> Gracias por tu comentario!</h1>

            <form onSubmit={handleSubmit}>
              <div id="commentContainer" value={comment}>
                <input
                  className="comment"
                  name="comment"
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Deja tu comentario aqui"
                />
              </div>
              <div id="button">
                <button className="btn btn-dark"> Agregar comentario </button>
              </div>
            </form>
          </div>

          <div className="col">
            <img src={require(`./cat.jpg`)} alt="Gato" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
