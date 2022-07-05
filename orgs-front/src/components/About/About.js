import s from "./About.module.css";

const About = () => {
    return (
        <div className={s.articleContainer}>
            <h1 className={s.articleTittle}>¿Quiénes somos?</h1>
            <article className={s.article}>
                <p>
                    Pets Adoption facilita la comunicación entre las personas y las organizaciones de rescate de animales, nuestro objetivo es lograr que los animalitos acogidos por cada una de las fundaciones consigan un buen hogar lo más pronto posible, para lo cual contamos con dos plataformas.
                </p>
                    <ol>
                        <li>Plataforma diseñada específicamente para la adopción de mascotas.</li>
                        <li>Plataforma dirigida únicamente a las fundaciones que forman parte de nuestra comunidad.</li>
                    </ol>

                <p>
                    Pets Adoption está conformada por un grupo de voluntarios comprometidos con la causa de la defensa animal. No cobramos por nuestros servicios y hacemos que la comunicación entre las partes fluya de manera dinámica.
                </p>
                <p>
                    ¡Únete a la comunidad!
                </p>

            </article>
        </div>
    )
}

export default About;