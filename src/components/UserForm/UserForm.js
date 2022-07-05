import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import s from "./UserForm.module.css";

const UserForm = () => {
    const navigate = useNavigate();
    let id = useParams().id;
    const [user, setUser] = useState({})

    useEffect(() => {
        find(`/user/account/${id}`)
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
                <h1 className={s.title}>Mi Formulario</h1>
                <div className={s.data}>
                    <h4 className={s.subTitle}>Nombre</h4>
                    <p  className={s.info}>{user.name && capitalizeFirst(user.name)}</p>
                    <h4 className={s.subTitle}>Apellido </h4>
                    <p  className={s.info}>{user.lastname && capitalizeFirst(user.lastname)}</p>
                    <h4 className={s.subTitle}>Edad</h4>
                    <p  className={s.info}>{user.age}</p>
                    <h4 className={s.subTitle}>Ciudad de residencia</h4>
                    <p  className={s.info}>{user.city&& capitalizeFirst(user.city)}</p>
                    <h4 className={s.subTitle}>Dirección</h4>
                    <p  className={s.infoLarge}>{user.location && capitalizeFirst(user.location)}</p>
                    <h4 className={s.subTitle}>Tipo de vivienda</h4>
                    <p  className={s.info}>{user.housing && capitalizeFirst(user.housing)}</p>
                    <h4 className={s.subTitle}>Vivienda alquilada</h4>
                    <p  className={s.info}>{user.houseIsRented ? "Si" : "No"}</p>
                    <h4 className={s.subTitle}>Otras mascotas</h4>
                    <p  className={s.info}>{user.havePets ? "Si" : "No"}</p>
                    <h4 className={s.subTitle}>Alergias de algún tipo</h4>
                    <p  className={s.info}>{user.isAllergic ? "Si" : "No"}</p>
                    <h4 className={s.subTitle}>Acerca de mi (Reseña personal, estilo de vida, etc.)</h4>
                    <p  className={s.infoLarger}>{user.bio}</p>
                </div>
            <button className={s.button} onClick={handleClick}>Editar info</button>
            </div>
        </div>
    )
}

export default UserForm;