import About from '../About/About';
import Slider from '../Slider/Slider';
import AllCard from '../AllCard/AllCard';
import AutoSlider from '../AutomaticSlider/AutoSlider';
import s from './Home.module.css';

const Home = () => {
    
    return (
        <div className={s.homeContainer}>
            <AutoSlider />
            <div className={s.violetRectangle}></div>
            <h1 className={s.title}>Tu nuevo compañero está esperando por ti</h1>
            <div className={s.sliderDiv}>
                <Slider />
            </div>
            <div className={s.violetRectangle}></div>
            <div className={s.articleGrid}>
                <About />
                <AllCard />
            </div>
        </div>
    )
}

export default Home;

