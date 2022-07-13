import { Link } from "react-router-dom";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import s from "./FoundationCard.module.css";


const FoundationCard = ({ foundation }) => {

  return (
    <div className={s.container}>
    <div className={s.foundationCard}>
      <Link className={s.link} to={`/foundations/${foundation._id}`}>
        <img
          className={s.foundationImage}
          src={foundation.image 
            ? foundation.image === "no_pet" ? require(`../../assets/img/foundations/no_user.jpg`) : require(`../../assets/img/foundations/${foundation.image}.jpg`)
            : require(`../../assets/img/foundations/no_user.jpg`)
          }
          alt=""
        ></img>
        <div className={s.foundationInfo}>
          <span className={s.foundationName}>{capitalizeFirst(foundation.foundationName)}</span>
          <br />
          <span>{foundation.description}</span>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default FoundationCard;
