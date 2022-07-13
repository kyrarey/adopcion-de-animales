import React, { useState, useEffect }  from 'react';
import { motion  } from "framer-motion";
//import pets from "../../assets/pets.json";
import find from "../../hooks/find";
import { randElemArray } from '../../hooks/arrGen';
import PetCard from "../../commons/PetCard/PetCard";
import s from './Slider.module.css';

const Slider = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        find("/animal/all")
        .then(petsObj => {
            let petsAux = randElemArray(petsObj, 7)
            setPets(petsAux);
        })
        .catch(err => console.log(err));
    }, []); 

    //let petsAux = randElemArray(7,pets);

    return (
        <motion.div className={s.sliderContainer}>
            <motion.div className={s.slider} drag="x" dragConstraints={{ right: 0, left: -1350 }}>
                {pets.map((pet, index) => (
                    <motion.div key={index} className={s.item}>
                            <PetCard  pet={pet} />
                    </motion.div>)
                )}
            </motion.div>
        </motion.div>
    )
}

export default Slider;