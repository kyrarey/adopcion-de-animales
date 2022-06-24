import { useState, useEffect } from "react";
import pets from "../../assets/pets.json";
import find from "../../hooks/find";
import randElemArray from "../../hooks/randElemArray";
import s from "./Grid.module.css"
import PetCard from "../PetCard/PetCard";

const Grid = () => {
/*     const [pets, setPets] = useState([]);

    useEffect(() => {
        find("/pets")
        .then(petsObj => {
            let petsAux = randElemArray(7,petsObj)
            setPets(petsAux);
        })
        .catch(err => console.log(err));
    },[]) */

    let petsAux = randElemArray(pets.length,pets);

    return (
        <div>
            <ul className={s.grid}>
                {petsAux.map(pet => <PetCard key={pet.id} pet={pet}/>)}
            </ul>
        </div>
    )
}

export default Grid;