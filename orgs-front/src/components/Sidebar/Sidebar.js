import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import find from "../../hooks/find";
import s from "./Sidebar.module.css";
import axios from "axios";


const Sidebar = () => {
    let id = useLocation().pathname.slice(9,33)
    const [user, setUser] = useState({});
    

    useEffect(() => {
        // find(`/orgs/account/${id}`)
        axios.get(`http://localhost:3030/orgs/account/${id}`)
        .then(userObj => setUser(userObj))
        .catch(error => console.log(error))
    }, [id])

    return (
        <div className={s.container}>
            <div className={s.card}>
                <div className={s.item}>
                    <Link className = {s.link} to={`/account/${id}`}> 
                        <h3 className={s.title}>Mi Cuenta</h3>
                        <img className={s.img} 
                            src={user.image 
                            ? user.image === "no_user" ? require(`../../assets/img/accounts/no_user.jpg`) : require(`../../assets/img/users${user.image}.jpg`)
                            : require(`../../assets/img/accounts/no_user.jpg`)
                        }
                        alt="Foto de perfil">
                        </img>
                    </Link>
                </div>
                <div className={s.item}>
                    {/* <Link className={s.link}> */}
                    <h3 className={s.title}>Animales</h3>
                    <img className={s.img} 
                        src={require(`../../assets/img/animals.jpg`)}
                        alt="">
                    </img>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
