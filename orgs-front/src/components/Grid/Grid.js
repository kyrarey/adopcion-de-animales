import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import orgs from "../../assets/foundations.json";
import find from "../../hooks/find";
import { fixedElemArray } from "../../hooks/arrGen";
import FoundationCard from "../../commons/FoundationCard/FoundationCard";
import s from "./Grid.module.css";

const Grid = () => {
/*     const [foundations, setFoundations] = useState([]);
    const [totalFoundations, setTotalFoundations] = useState(0); */
    const foundationsPerPage = 6;
    const navigate = useNavigate();
    let count = useParams().id;

/*     useEffect(() => {
        find("/orgs/all")
        .then(foundationsArr => {
            setTotalFoundations(foundationsArr.length);
            let foundationsAux = [];
            foundationsAux = fixedElemArray(foundationsArr, foundationsPerPage, count);
            setFoundations(foundationsAux);
        })
        .catch(err => console.log(err));
    }, [count]);  */

    let totalFoundations = orgs.length;
    let foundationsAux = fixedElemArray(orgs, foundationsPerPage, count);
    let foundations = foundationsAux;

    const pagesQty = Math.ceil(totalFoundations/foundationsPerPage);

    const addOnClick = () => {
        count  < pagesQty  ? count++ : count = pagesQty;
        navigate(`/foundations/pages/${count}`);
    }

    const subsOnClick = () => {
        count > 1 ? count-- : count = 1;
        navigate(`/foundations/pages/${count}`);
    }

    return (
        <div className={s.container}>
            <ul className={s.grid}>
                { foundations.map(foundation => <FoundationCard key={foundation.foundationName} foundation={foundation}/>)}
            </ul>
            {count > 1 ? <button className={s.button} type="submit" onClick={subsOnClick}>Anterior</button> : ""}
            {count < pagesQty ? <button className={s.button} type="submit" onClick={addOnClick}>Siguiente</button> : ""}
        </div>
    )
}

export default Grid;