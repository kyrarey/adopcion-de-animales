import s from "./About.module.css";

const About = () => {
    return (
        <div className={s.articleContainer}>
            <h1 className={s.articleTittle}>¿Qué es Pets Adoption?</h1>
            <article className={s.article}>
                <p>
                    La tarea diaria de rescatar y recibir animales sin hogar, abandonados, maltratados y en estado de indefensión, es en extremo demandante debido a su alto número. La idiosincrasia local que deriva en una mala tenencia de estos animales y que además se ve agravada por la falta de políticas públicas, constituyen un desafío mayor para todas las organizaciones que se dedican a esta noble labor. 
                </p>
                <p>
                    Pets Adoption es una web que facilita la comunicación entre la comunidad y las organizaciones de rescate, constituyéndose en una vitrina mediante la cual las personas que quieren adoptar una mascota pueden tener información actualizada de la misma, con tan solo dar un click en el animal de interés.
                </p>
                <p>
                    ¡Anímate a darle un hogar a uno de nuestros guerreros!
                </p>

            </article>
        </div>
    )
}

export default About;