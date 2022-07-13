import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { fixedElemArray } from "../../hooks/arrGen";
import find from "../../hooks/find";
import OrgCard from "../../commons/OrgCard/OrgCard";
import s from "./FoundationGrid.module.css";

const Grid = () => {
    const [orgs, setOrgs] = useState([]);
    const [totalOrgs, setTotalOrgs] = useState(0);
    const orgsPerPage = 6;
    const navigate = useNavigate();
    let count = useParams().id;

    useEffect(() => {
        find("/orgs/all")
        .then(orgsArr => {
            setTotalOrgs(orgsArr.length);
            let orgsAux = [];
            orgsAux = fixedElemArray(orgsArr, orgsPerPage, count);
            //console.log(orgsAux, " aauuux")
            setOrgs(orgsAux);
        })
        .catch(err => console.log(err));
    }, [count]); 

    const pagesQty = Math.ceil(totalOrgs/orgsPerPage);

    const addOnClick = () => {
        count  < pagesQty  ? count++ : count = pagesQty;
        navigate(`/association/pages/${count}`);
    }

    const subsOnClick = () => {
        count > 1 ? count-- : count = 1;
        navigate(`/association/pages/${count}`);
    }
    




        return (
        <div className={s.container}>
            <ul className={s.grid}>
                { orgs.map(org => <OrgCard key={org.foundationName} org={org}/>)}
            </ul>
            {count > 1 ? <button className={s.button} type="submit" onClick={subsOnClick}>Anterior</button> : ""}
            {count < pagesQty ? <button className={s.button} type="submit" onClick={addOnClick}>Siguiente</button> : ""}
        </div>
    )
}

export default Grid;