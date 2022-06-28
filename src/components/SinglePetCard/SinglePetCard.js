import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import pets from "../../assets/pets.json";
import find from "../../hooks/find";
import SinglePetCardView from "../SinglePetCardView/SinglePetCardView";


const SinglePetCard = () => {
  const params = useParams();
  let id = params.id
  const [pet, setPet] = useState({});
  
    useEffect(() => {
        find(`/animal/${id}`)
        .then(petObj => setPet(petObj))
        .catch(error => console.log(error))
    }, [id])
  

  return (
    <div>
        <SinglePetCardView key={pet._id} pet={pet}/>
    </div>

  )
}


export default SinglePetCard;



