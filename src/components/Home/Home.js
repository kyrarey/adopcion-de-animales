import About from '../About/About';
import Slider from '../Slider/Slider';
import s from './Home.module.css';
import AllCard from '../AllCard/AllCard';

const Home = () => {
    
    return (
        <div className={s.homeContainer}>
            <div className={s.sliderDiv}>
                <h1 className={s.title}>Algunos de nuestros guerreros</h1>
                <Slider />
            </div >
            <div className={s.violetRectangle}></div>
            <div className={s.whiteRectangle}></div>
            <div className={s.violetRectangle}></div>
            <div className={s.articleGrid}>
                <About />
                <AllCard />
            </div>
        </div>
    )
}

export default Home;

