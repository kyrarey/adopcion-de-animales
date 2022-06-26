import { Link } from "react-router-dom";
import s from "./AllCard.module.css";

const AllCard = () => {
    return (
        <div className={s.cardContainer}>
            <Link to={"/animals/pages/1"}>
                <img className={s.cardImage} 
                     src={require(`../../assets/img/logo.jpg`)} 
                     alt="logo">
                </img>
            </Link>
            <p className={s.cardMore}>Hay más guerreros esperando por ti.</p>
            <p className={s.cardHere}>¡Conócelos aquí!</p>
        </div>
    )
}

export default AllCard;