import { Link } from "react-router-dom";
import s from "./Sidebar.module.css";
import find from "../../hooks/find";
import { useState, useEffect } from "react";

const Sidebar = () => {
    let id = localStorage.getItem('user').slice(8,32)
    const [user, setUser] = useState({});

    useEffect(() => {
        find(`/user/account/${id}`)
        .then(userObj => setUser(userObj))
        .catch(error => console.log(error))
    }, [id])

    return (
        <div className={s.container}>
            <div className={s.card}>
                <div className={s.item}>
                    <h3 className={s.title}>Mi Cuenta</h3>
                    <Link to={`/account/${id}`}> 
                        <img className={s.img} 
                            link to={`/account/${id}`}
                            src={user.image ? require(`../../assets/img/users${user.image}.jpg`) : require(`../../assets/img/users/no_user.jpg`)}
                            alt="Foto de perfil">
                        </img>
                    </Link>
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Mis Favoritos</h3>
                    <Link to={`favorite/${id}`}>
                        <img className={s.img} 
                            src={require(`../../assets/img/favs.jpg`)}
                            alt="Favs">
                        </img>
                    </Link>
                </div>
                <div className={s.item}>
                    <h3 className={s.title}>Mis Adoptados</h3>
                    <img className={s.img} 
                        src={require(`../../assets/img/adopted.jpg`)}
                        alt="Pets">
                    </img>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;