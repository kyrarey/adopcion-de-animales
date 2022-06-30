import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import s from "./Account.module.css";

const Account = () => {
    const navigate = useNavigate();
    let id = useParams().id;
    const [user, setUser] = useState( {
       /*  name: "",
        lastname: "",
        username: "",
        email: "",
        bio: "",
        image: "",
        location: "", */
    })

    useEffect(() => {
        find(`/user/account/${id}`)
        .then(userObj => setUser(userObj))
        .catch(error => console.log(error))
    }, [id])

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/account/edit/${id}`)
    }

    return (
        <div className={s.container}>
            <div className={s.card}>
                <h1 className={s.title}>Mi cuenta</h1>
                <div className={s.data}>
                    <div className={s.imgContainer}>
                    <img className={s.userImage} 
                        src={user.image ? require(`../../assets/img/users${user.image}.jpg`) : require(`../../assets/img/users/no_user.jpg`)}
                        alt="Foto de perfil">
                    </img>
                    </div>
                    <h4 className={s.subTitle}>Nombre</h4>
                    <p  className={s.info}>{user.name && capitalizeFirst(user.name)}</p>
                    <h4 className={s.subTitle}>Apellido </h4>
                    <p  className={s.info}>{user.lastname && capitalizeFirst(user.lastname)}</p>
                    <h4 className={s.subTitle}>Usuario</h4>
                    <p  className={s.info}>{user.username}</p>
                    <h4 className={s.subTitle}>E-mail</h4>
                    <p  className={s.info}>{user.email}</p>
                    <h4 className={s.subTitle}>Contraseña</h4>
                    <p  className={s.info}>***********</p>
                    <h4 className={s.subTitle}>Dirección</h4>
                    <p  className={s.infoLarge}>{user.location}</p>
                    <h4 className={s.subTitle}>Acerca de mi (Reseña personal, tipo de vivienda, estilo de vida, etc.)</h4>
                    <p  className={s.infoLarger}>{user.bio}</p>
                </div>
            <button className={s.button} onClick={handleClick}>Editar info</button>
            </div>
        </div>
    )
}

export default Account;