import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BsWhatsapp } from "react-icons/bs";
import { notLoggedIn, notFormCompleted } from "../../hooks/alert";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import SingleSlider from "../SingleSlider/SingleSlider";
import s from "./SingleOrgCard.module.css";


const SingleOrgCard = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const { loggedUser, isAuthenticated } = useContext(AuthContext);

  const [org, setOrg] = useState({
    "_id": "",
    "foundationName": "",
    "petsForAdoption": [],
    "internUsers": {},
    "image": "",
    "location": "",
    "description": ""
  });
  
  useEffect(() => {
    if(id) {
    find(`/orgs/account/${id}`)
      .then(orgObj => {/* console.log(orgObj) */
        setOrg(orgObj)})
      .catch(error => console.log(error))
    }
  }, [id]);

/*   const handleClick = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      if (loggedUser.isFormComplete) {
        navigate("/form")
      } else {
        notFormCompleted();
        navigate(`/account/form/edit/${id}`)
      }
    } else {
        notLoggedIn();
        navigate("/login");
    }
  } */


  return (
    <div className={s.container}>
      <div className={s.card}>
        <h1 className={s.title}>{org.foundationName}</h1>
        <div className={s.content}>
            <img className={s.image}
            src={org.image && require(`../../assets/img/foundations/${org.image}.jpg`)}
            alt={org.foundationName}
            ></img>
          {/* <SingleSlider images={org.image}/> */}
            <div className={s.text}>
                <h4 className={s.subTitle}>Historia</h4>
                <p  className={s.info}>{org.description}</p>
                <h4 className={s.subTitle}>Ubicación </h4>
                <p  className={s.info}>{org.location && capitalizeFirst(org.location)}</p>
                <h4 className={s.subTitle}>Contacto</h4>
                <p  className={s.info}>{org.email}</p>
                <h4 className={s.subTitle}>Nuestros animalitos</h4>
            </div>
          {/* <button className={s.button} onClick={handleClick}>
            {`Adoptar a ${org.animalname && capitalizeFirst(org.animalname)}`}
          </button> */}

        </div>
      </div>

    </div>

  )
}

export default SingleOrgCard;



