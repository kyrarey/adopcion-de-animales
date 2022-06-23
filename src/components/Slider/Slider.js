import React, { useRef, useState, useEffect }  from 'react';
import { motion  } from "framer-motion";
import pets from "../../assets/pets.json";
import find from "../../hooks/find";
import PetCard from '../../components/PetCard/PetCard';
import s from './Slider.module.css';

const Slider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    
    useEffect(() => {
        console.log(carousel)
        //setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, [])

    /*     const [pets, setPets] = useState([]);

    useEffect(() => {
        find("/pets")
        .then(petsObj => setPets(petsObj))
        .catch(err => console.log(err))

    }, []); */

    return (
        <motion.div className={s.sliderContainer}>
            <motion.div className={s.slider} drag="x" dragConstraints={{ right: 0, left: -950 }}>
                {pets.map(pet => (
                    <motion.div className={s.item}>
                            <PetCard key={pet.id} pet={pet} />
                    </motion.div>)
                )}
            </motion.div>
        </motion.div>
    )
}

export default Slider;