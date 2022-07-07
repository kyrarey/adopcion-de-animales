import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import orgs from "../../assets/foundations.json";
import find from "../../hooks/find";
import { fixedElemArray } from "../../hooks/arrGen";
import PetCard from "../../commons/PetCard/PetCard";
import s from "./AnimalGrid.module.css";

const Grid = () => {
    const [animals, setFoundations] = useState([]);
    const [totalAnimals, setTotalFoundations] = useState(0);
    const animalsPerPage = 6;
    const navigate = useNavigate();
    let count = useParams().id;

    // useEffect(() => {
    //     axios.get()
    //     .then(foundationsArr => {
    //         setTotalFoundations(foundationsArr.length);
    //         let foundationsAux = [];
    //         foundationsAux = fixedElemArray(foundationsArr, foundationsPerPage, count);
    //         setFoundations(foundationsAux);
    //     })
    //     .catch(err => console.log(err));
    // }, [count]);  

    // let totalFoundations = orgs.length;
    // let animalsAux = fixedElemArray(foundations, foundationsPerPage, count);
    // let pets = animalsAux;

    // const pagesQty = Math.ceil(totalFoundations/foundationsPerPage);

    const addOnClick = () => {
        count  < pagesQty  ? count++ : count = pagesQty;
        navigate(`/account/animals/pages/${count}`);
    }

    const subsOnClick = () => {
        count > 1 ? count-- : count = 1;
        navigate(`/account/animals/pages/${count}`);
    }

    return (
        <div className={s.container}>
            <ul className={s.grid}>
                { pets.map(pet => <PetCard pet={pet}/>)}
            </ul>
            {count > 1 ? <button className={s.button} type="submit" onClick={subsOnClick}>Anterior</button> : ""}
            {count < pagesQty ? <button className={s.button} type="submit" onClick={addOnClick}>Siguiente</button> : ""}
        </div>
    )
}

export default Grid;