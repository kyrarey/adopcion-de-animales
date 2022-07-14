import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
//import pets from "../../assets/pets.json";
import find from "../../hooks/find";
import { fixedElemArray } from "../../hooks/arrGen";
import ChatCard from "../ChatCard/ChatCard";
import s from "./ChatGrid.module.css";

const ChatGrid = () => {
    const [pets, setPets] = useState([]);
    const [totalPets, setTotalPets] = useState(0);
    const petsPerPage = 6;
    const navigate = useNavigate();
    let count = useParams().id;

    useEffect(() => {
        find("/animal/all")
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
        navigate(`/animals/pages/${count}`);
    }

    const subsOnClick = () => {
        count > 1 ? count-- : count = 1;
        navigate(`/animals/pages/${count}`);
    }
    //console.log(pets, "pets grid")
    return (
        <div className={s.container}>
            <ul className={s.grid}>
                { pets.map((pet, index) => <ChatCard key={index} pet={pet}/>)}
            </ul>
            {count > 1 ? <button className={s.button} type="submit" onClick={subsOnClick}>Anterior</button> : ""}
            {count < pagesQty ? <button className={s.button} type="submit" onClick={addOnClick}>Siguiente</button> : ""}
        </div>
    )
}

export default ChatGrid;