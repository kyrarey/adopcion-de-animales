import React, { useState, useEffect }  from 'react';
import { motion  } from "framer-motion";
//import foundations from "../../assets/foundations.json";
import FoundationCard from "../../commons/FoundationCard/FoundationCard";
import find from "../../hooks/find";
import { randElemArray } from '../../hooks/arrGen';
import s from './Slider.module.css';

const Slider = () => {
    const [foundations, setFoundations] = useState([]);

    useEffect(() => {
        find("/orgs/all")
        .then(foundationsObj => {
            let foundationsAux = randElemArray(foundationsObj, 7)
            setFoundations(foundationsAux);
        })
        .catch(err => console.log(err));
    }, []); 

    //let foundationsAux = randElemArray(foundations, 7);
   

    return (
        <motion.div className={s.sliderContainer}>
            <motion.div className={s.slider} drag="x" dragConstraints={{ right: 0, left: -1350 }}>
                {foundations.map(foundation => (
                    <motion.div key={foundation.foundationName} className={s.item}>
                            <FoundationCard foundation={foundation} />
                    </motion.div>)
                )}
            </motion.div>
        </motion.div>
    )
}

export default Slider;