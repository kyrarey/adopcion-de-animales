import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import find from "../../hooks/find";
import { fixedElemArray } from "../../hooks/arrGen";
import PetCard from "../../commons/PetCard/PetCard";
import NotAvailable from "../NotAvailable/NotAvailable";
import s from "./FoundationAnimalsGrid.module.css";

const FoundationAnimalsGrid = () => {
    const [pets, setPets] = useState([]);
    const [totalPets, setTotalPets] = useState(0);
    const petsPerPage = 6;
    const navigate = useNavigate();
    let count = useParams().id;
    let foundationId = useParams().foundationId;
    
    useEffect(() => {
        find(`/animal/foundation/${foundationId}`)
        .then(petsArr => {
            setTotalPets(petsArr.length);
            let petsAux = [];
            petsAux = fixedElemArray(petsArr, petsPerPage, count);
            setPets(petsAux);
        })
        .catch(err => console.log(err));
    }, [count]); 

    const pagesQty = Math.ceil(totalPets/petsPerPage);

    const addOnClick = () => {
        count  < pagesQty  ? count++ : count = pagesQty;
        navigate(`/association/animals/${foundationId}/${count}`);
    }

    const subsOnClick = () => {
        count > 1 ? count-- : count = 1;
        navigate(`/association/animals/${foundationId}/${count}`);
    }

    return (
        <div className={s.container}>
            {pets.length !== 0 
            ? ( <>
                    <ul className={s.grid}>
                        {pets.map((pet, index) => <PetCard key={index} pet={pet}/>)}
                    </ul>
                    {count > 1 ? <button className={s.button} type="submit" onClick={subsOnClick}>Anterior</button> : ""}
                    {count < pagesQty ? <button className={s.button} type="submit" onClick={addOnClick}>Siguiente</button> : ""}
                </>
              )
            : ( <NotAvailable /> )

            }
        </div>
    )
}

export default FoundationAnimalsGrid;