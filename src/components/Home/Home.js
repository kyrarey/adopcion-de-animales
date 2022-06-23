import Slider from '../Slider/Slider';
import s from './Home.module.css';

const Home = () => {
    

    return (
        <div className={s.body}>
            <h1 >Conoce a nuestros pequeños</h1>
            <Slider />
        </div>
    )
}

export default Home;

