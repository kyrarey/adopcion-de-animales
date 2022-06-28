import { Link } from "react-router-dom";
import s from "./AllCard.module.css";

const AllCard = () => {
    return (
        <div className={s.cardContainer}>
            <div className={s.card}>
                <Link to={"/animals/pages/1"}>
                    <img className={s.cardImage} 
                        src={require(`../../assets/img/logo.jpg`)} 
                        alt="logo">
                    </img>
                </Link>
                <p className={s.cardMore}>Hay muchos más guerreros</p>
                <p className={s.cardHere}>¡Conócelos aquí!</p>
            </div>
        </div>
    )
}

export default AllCard;