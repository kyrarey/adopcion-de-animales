import React, { useRef, useState, useEffect }  from 'react';
import { motion  } from "framer-motion";
import pets from "../../assets/pets.json";
import find from "../../hooks/find";
import randElemArray from "../../hooks/randElemArray";
import PetCard from '../../components/PetCard/PetCard';
import s from './Slider.module.css';

const Slider = () => {
    /*     const [pets, setPets] = useState([]);

    useEffect(() => {
        find("/pets")
        .then(petsObj => {
            let petsAux = randElemArray(7,petsObj)
            setPets(petsAux);
        })
        .catch(err => console.log(err));
    }, []); */

    let petsAux = randElemArray(7,pets);

    return (
        <motion.div className={s.sliderContainer}>
            <motion.div className={s.slider} drag="x" dragConstraints={{ right: 0, left: -1350 }}>
                {petsAux.map(pet => (
                    <motion.div key={pet.id} className={s.item}>
                            <PetCard  pet={pet} />
                    </motion.div>)
                )}
            </motion.div>
        </motion.div>
    )
}

export default Slider;