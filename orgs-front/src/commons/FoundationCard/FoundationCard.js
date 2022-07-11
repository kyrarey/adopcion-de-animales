import { Link } from "react-router-dom";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import s from "./FoundationCard.module.css";


const FoundationCard = ({ foundation }) => {

  return (
    <div className={s.container}>
    <div className={s.foundationCard}>
      <Link className={s.link} to={"#" /* `/foundations/${foundation._id}` */}>
        <img
          className={s.foundationImage}
          src={require(`../../assets/img/foundations${foundation.image}`)}
          alt=""
        ></img>
        <div className={s.foundationInfo}>
          <span className={s.foundationName}>{capitalizeFirst(foundation.foundationName)}</span>
          <br />
          {/* <span>{capitalizeFirst(foundation.location)}</span>
          <br /> */}
          <span>{foundation.description}</span>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default FoundationCard;
