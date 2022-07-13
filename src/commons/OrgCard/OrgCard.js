import { Link } from "react-router-dom";
import s from "./OrgCard.module.css";
import capitalizeFirst from "../../hooks/capitalizeFirst";


const OrgCard = ({ org }) => {

  return (
    <div className={s.orgCard}>
      <Link className={s.link} to={`/association/${org._id}`}>
        <img
          className={s.orgImage}
          src={org.image 
            ? org.image === "no_user" ? require(`../../assets/img/foundations/no_user.jpg`) : require(`../../assets/img/foundations/${org.image}.jpg`)
            : require(`../../assets/img/foundations/no_user.jpg`)
          }
          alt=""
        ></img>
        <div className={s.orgInfo}>
          <span className={s.orgName}>{capitalizeFirst(org.foundationName)}</span>
          <br />
          <span>{org.description}</span>
        </div>
      </Link>
    </div>
  );
};

export default OrgCard;
