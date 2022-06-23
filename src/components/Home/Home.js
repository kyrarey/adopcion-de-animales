import React, { useState, useEffect }  from 'react';
import pets from "../../assets/pets.json";
import find from "../../hooks/find";

import PetCard from '../../components/PetCard/PetCard';
import s from './Home.module.css';

const Home = () => {
/*     const [pets, setPets] = useState([]);

    useEffect(() => {
        find("/pets")
        .then(petsObj => setPets(petsObj))
        .catch(err => console.log(err))

    }, []); */

    return (
        <div>
            <ul className={s.petsGrid}> 
                {pets.map(pet => <PetCard key={pet.id} pet={pet} />)}
            </ul>
        </div>
    )
}

export default Home;

