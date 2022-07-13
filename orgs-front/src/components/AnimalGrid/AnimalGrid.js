import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import find from "../../hooks/find";
import { fixedElemArray } from "../../hooks/arrGen";
import AnimalCard from "../../commons/AnimalCard/AnimalCard";
import s from "./AnimalGrid.module.css";
//import axios from "axios";

const AnimalGrid = () => {
    const [animals, setAnimals] = useState([]);
    const [totalAnimals, setTotalAnimals] = useState(0);
    const animalsPerPage = 6;
    const navigate = useNavigate();
    let count = useParams().id;
    let foundationId = useParams().foundationId;


    useEffect(() => {
        find(`/animal/foundation/${foundationId}`)
        .then(animalsArr => {
            setTotalAnimals(animalsArr.length);
            let animalsAux = [];
            animalsAux = fixedElemArray(animalsArr, animalsPerPage, count);
            setAnimals(animalsAux);
        })
        .catch(err => console.log(err));
    }, [count]); 

    const pagesQty = Math.ceil(totalAnimals/animalsPerPage);

    const addAnimalOnClick = () => {
        navigate(`/foundations/add-animal`)
    }

    const addOnClick = () => {
        count  < pagesQty  ? count++ : count = pagesQty;
        navigate(`/animals/pages/${count}`);
    }

    const subsOnClick = () => {
        count > 1 ? count-- : count = 1;
        navigate(`/animals/pages/${count}`);
    }

    return (
        <div className={s.container}>
            <button className={s.addButton} type="submit" onClick={addAnimalOnClick}>Añadir animal</button>
            <ul className={s.grid}>
                { animals.map((animal, index) => <AnimalCard key={index} animal={animal}/>)}
            </ul>
            {count > 1 ? <button className={s.button} type="submit" onClick={subsOnClick}>Anterior</button> : ""}
            {count < pagesQty ? <button className={s.button} type="submit" onClick={addOnClick}>Siguiente</button> : ""}
        </div>
    )
}

export default AnimalGrid;