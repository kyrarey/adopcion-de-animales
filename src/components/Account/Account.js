import { useState, useEffect/* , useContext */ } from "react";
import { useParams, useNavigate  } from "react-router-dom";
//import { AuthContext } from "../../context/AuthContext";
import find from "../../hooks/find";
//import capitalizeFirst from "../../hooks/capitalizeFirst";
import s from "./Account.module.css";

const Account = () => {
    const navigate = useNavigate();
    //const { loggedUser } = useContext(AuthContext);
    //let id = loggedUser._id;
    let id = useParams().id;
    const [user, setUser] = useState({})

    useEffect(() => {
        if(id){
        find(`/user/account/${id}`)
        .then(userObj => setUser(userObj))
        .catch(error => console.log(error))
        }
    }, [id])

    //console.log("USER", user)
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
                        src={user.image 
                            ? user.image === "no_user" ? require(`../../assets/img/users/no_user.jpg`) : require(`../../assets/img/users/${user.image}.jpg`)
                            : require(`../../assets/img/users/no_user.jpg`)
                        }
                        alt="">
                    </img>
                    </div>
                    <h4 className={s.subTitle}>Usuario</h4>
                    <p  className={s.info}>{user.username}</p>
                    <h4 className={s.subTitle}>E-mail</h4>
                    <p  className={s.info}>{user.email}</p>
                    <h4 className={s.subTitle}>Contraseña</h4>
                    <p  className={s.info}>***********</p>
                </div>
            <button className={s.button} onClick={handleClick}>Editar info</button>
            </div>
        </div>
    )
}

export default Account;