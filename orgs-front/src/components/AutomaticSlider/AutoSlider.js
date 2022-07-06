import { motion } from "framer-motion";
import s from "./AutoSlider.module.css"

const AutoSlider = () => {
    const banners = ["01.jpg"]
    return (
        <div>
            <motion.div className={s.bannerContainer}>
                <div className={s.bannerLegend}>
                    <motion.h1 className={s.bannerTitle}>Sé parte de Pets Adoption</motion.h1><br/>
                    <p className={s.bannerText}>La primera comunidad creada para facilitar el proceso de adopción de animales de compañía.</p>
                </div>
                <motion.div className={s.bannerSlider} 
                initial={{ x: 0 }}
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