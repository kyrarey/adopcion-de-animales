import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Comment.css";

const Comment = () => {
  const { foundationId } = useParams();
  const [comment, setComment] = useState("");

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
                <div class="row">
                  <div className="col-2">
                    <div>
                      <img
                        id="img"
                        src="https://moderncss.dev/img/posts/26/avatar1.png"
                      >
                        {" "}
                      </img>
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
          <button type="button" class="btn btn-default cart">
            Agregar comentario
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Comment;
