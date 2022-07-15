import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import find from "../../hooks/find";
import s from "./Sidebar.module.css";


const Sidebar = () => {
  const { loggedUser } = useContext(AuthContext);
  const id = loggedUser ? loggedUser._id : null;
  const [user, setUser] = useState({});

  /* let id = useLocation().pathname.slice(9,33) */

  useEffect(() => {
    //if(id){
    find(`/user/account/${id}`)
      .then((userObj) => setUser(userObj))
      .catch((error) => console.log(error));
    //}
  }, [id]);

  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={s.item}>
          <Link className={s.link} to={`/account/${id}`}>
            <h3 className={s.title}>Mi Cuenta</h3>
            <img
              className={s.img}
              src={
                user.image
                  ? user.image === "no_user"
                    ? require(`../../assets/img/users/no_user.jpg`) : require(`../../assets/img/users/${user.image}.jpg`)
                  : require(`../../assets/img/users/no_user.jpg`)
              }
              alt=""
            ></img>
          </Link>
        </div>
        <div className={s.item}>
          <Link className={s.link} to={`/account/form/${id}`}>
            <h3 className={s.title}>Mi Formulario</h3>
            <img
              className={s.img}
              src={require(`../../assets/img/form.jpg`)}
              alt="Favs"
            ></img>
          </Link>
        </div>
        <div className={s.item}>
          <Link className={s.link} to={`/account/favorite`}>
            <h3 className={s.title}>Mis Favoritos</h3>
            <img
              className={s.img}
              src={require(`../../assets/img/favs.jpg`)}
              alt="Favs"
            ></img>
          </Link>
        </div>
        <div className={s.item}>
          <Link className={s.link} to={`/chat/${id}`}>
            <h3 className={s.title}>Mis chats</h3>
            <img className={s.img} 
                src={require(`../../assets/img/chat.jpg`)}
                alt="">
            </img>
          </Link>
        </div>
        <div className={s.item}>
          <h3 className={s.title}>Mis Adoptados</h3>
          <img
            className={s.img}
            src={require(`../../assets/img/adopted.jpg`)}
            alt="Pets"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
