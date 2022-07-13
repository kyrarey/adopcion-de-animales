import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import find from "../../hooks/find";
import s from "./Sidebar.module.css";


const Sidebar = () => {
    //let id = useLocation().pathname.slice(9,33)
    const { loggedUser } = useContext(AuthContext);
    const id = loggedUser ? loggedUser._id : null;
    const [user, setUser] = useState({});
    
    useEffect(() => {
        find(`/orgs/account/${id}`)
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
                            ? user.image === "no_user" ? require(`../../assets/img/foundations/no_user.jpg`) : require(`../../assets/img/foundations/${user.image}.jpg`)
                            : require(`../../assets/img/foundations/no_user.jpg`)
                        }
                        alt="">
                        </img>
                    </Link>
                </div>
                <div className={s.item}>
                    <Link className={s.link} to={`/account/form/${id}`}>
                        <h3 className={s.title}>Mi info</h3>
                        <img
                        className={s.img}
                        src={require(`../../assets/img/form.jpg`)}
                        alt="Info"
                        ></img>
                    </Link>
                </div>
                <div className={s.item}>
                    <Link className={s.link} to={`/account/petsToAdopt/${id}/1`}>
                    <h3 className={s.title}>Mis animales</h3>
                    <img className={s.img} 
                        src={require(`../../assets/img/animals.jpg`)}
                        alt="">
                    </img>
                    </Link>
                </div>
                <div className={s.item}>
                    <Link className={s.link} to={"#"/* `/account/petsToAdopt/${id}/1` */}>
                    <h3 className={s.title}>Mis chats</h3>
                    <img className={s.img} 
                        src={require(`../../assets/img/chat.jpg`)}
                        alt="">
                    </img>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
