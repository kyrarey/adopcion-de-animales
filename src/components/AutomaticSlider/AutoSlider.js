import { motion } from "framer-motion";
import s from "./AutoSlider.module.css"

const AutoSlider = () => {
    const banners = ["01.jpg"]
    return (
        <div>
            <motion.div className={s.bannerContainer}>
                <div className={s.bannerLegend}>
                    <motion.h1 className={s.bannerTitle}>Adopta una mascota</motion.h1><br/>
                    <p className={s.bannerText}>Hay tantas mascotas amorosas esperando una familia que las acoja.</p>
                    <p className={s.bannerText}>Encuentra a tu nuevo mejor amigo aquí abajo.</p>
                </div>
                <motion.div className={s.bannerSlider} 
                initial={{ x: 0 }}
               /*  animate={{ translateX: -1860}}  */
                exit={{ x: 0 }}
                transition={{ duration: 10, repeat: Infinity }}> {banners.map((banner, i) => (
                    <motion.img className={s.bannerImg} 
                        key={i}
                        src={require(`../../assets/img/banners/${banner}`)} 
                        alt="banner">
                    </motion.img>
                ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default AutoSlider;