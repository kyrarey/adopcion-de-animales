import { Link } from "react-router-dom";
import s from "./AllCard.module.css";

const AllCard = () => {
    return (
        <div className={s.cardContainer}>
            <div className={s.card}>
                <Link className={s.link} to={"/foundations/pages/1"}>
                    <img className={s.cardImage} 
                        src={require(`../../assets/img/logo.jpg`)} 
                        alt="logo">
                    </img>
                    <p className={s.cardMore}>Hay otros como tú</p>
                    <p className={s.cardHere}>¡Conócelos aquí!</p>
                </Link>
            </div>
        </div>
    )
}

export default AllCard;