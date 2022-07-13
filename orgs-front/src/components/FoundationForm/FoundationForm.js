import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import s from "./FoundationForm.module.css";

const FoundationForm = () => {
    const navigate = useNavigate();
    let id = useParams().id;
    const [user, setUser] = useState({})

    useEffect(() => {
        find(`/orgs/account/${id}`)
        .then(userObj => setUser(userObj))
        .catch(error => console.log(error))
    }, [id])

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/account/form/edit/${id}`)
    }

    return (
        <div className={s.container}>
            <div className={s.card}>
                <h1 className={s.title}>Mi Info</h1>
                <div className={s.data}>
                    <h4 className={s.subTitle}>Nombre de la fundación</h4>
                    <p  className={s.info}>{user.foundationName && capitalizeFirst(user.foundationName)}</p>
                    <h4 className={s.subTitle}>Ubicación</h4>
                    <p  className={s.info}>{user.location && capitalizeFirst(user.location) }</p>
                    <h4 className={s.subTitle}>Breve historia</h4>
                    <p  className={s.infoLarger}>{user.description}</p>
                </div>
            <button className={s.button} onClick={handleClick}>Editar info</button>
            </div>
        </div>
    )
}

export default FoundationForm;