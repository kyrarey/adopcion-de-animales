import s from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiFacebook, FiMail } from "react-icons/fi";

const Footer = () => {
    return(
        <div className={s.footerContainer}>
            <div>© 2022 pets adoption</div>
            <div className={s.icons}> 
                <div className={s.iconContainer}>
                    <div className={s.instagramIcon}>
                        <a className={s.link} href="https://www.instagram.com/">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className={s.iconContainer}>
                    <div className={s.facebookIcon}>
                        <a className={s.link} href="https://www.facebook.com/">
                            <FiFacebook />
                        </a>
                    </div>
                </div>
                <div className={s.iconContainer}>
                    <div className={s.twitterIcon}>
                        <a className={s.link} href="https://twitter.com/?lang=es">
                            <FiTwitter/>
                        </a>
                    </div>
                </div>
                <div className={s.iconContainer}>
                    <div className={s.emailIcon}>
                        <a className={s.link} href="mailto:info@petsadoption.org?Subject=Info%20sobre%20proceso%20de%20adopcion">
                            <FiMail/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;