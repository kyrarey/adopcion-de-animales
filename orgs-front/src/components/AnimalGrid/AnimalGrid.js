import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import find from "../../hooks/find";
import { fixedElemArray } from "../../hooks/arrGen";
import PetCard from "../../commons/PetCard/PetCard";
import s from "./AnimalGrid.module.css";
import axios from "axios";

const Grid = () => {
    const [animals, setAnimals] = useState([]);
    const [totalAnimals, setTotalAnimals] = useState(0);
    const animalsPerPage = 6;
    const navigate = useNavigate();
    let count = useParams().id;
    const fundationId = JSON.parse(localStorage.getItem("newUser"))


    useEffect(() => {
        axios.get("http://localhost:3030/animal/all")
        .then(res => res.data)
        .then(animalsArr => {
            setTotalAnimals(animalsArr.length);
            let animalsAux = [];
            animalsAux = fixedElemArray(animalsArr, animalsPerPage, count);
            setAnimals(animalsAux);
        })
        .catch(err => console.log(err));
    }, [count]);  

    console.log(animals, "all animals")
    console.log(fundationId, "fundationId")
    // let totalFoundations = orgs.length;
    let animalsAux = fixedElemArray(animals, animalsPerPage, count);
    // let pets = animalsAux;

    const pagesQty = Math.ceil(totalAnimals/animalsPerPage);

    const addOnClick = () => {
        count  < pagesQty  ? count++ : count = pagesQty;
        // navigate(`/account/animals/pages/${count}`);
    }

    const subsOnClick = () => {
        count > 1 ? count-- : count = 1;
        // navigate(`/account/animals/pages/${count}`);
    }

    return (
        <div className={s.container}>
            <ul className={s.grid}>
                {/* { pets.map(pet => <PetCard pet={pet}/>)} */}
            </ul>
            {count > 1 ? <button className={s.button} type="submit" onClick={subsOnClick}>Anterior</button> : ""}
            {count < pagesQty ? <button className={s.button} type="submit" onClick={addOnClick}>Siguiente</button> : ""}
        </div>
    )
}

export default Grid;