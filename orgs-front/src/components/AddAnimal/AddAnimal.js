import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { update } from "../../hooks/alert";
import s from "./AddAnimal.module.css";
//const FormData = require('form-data');

const AddAnimal = () => {
    const navigate = useNavigate();
    const fundationId = JSON.parse(localStorage.getItem("newUser"))
    // let id = useParams().id;
    const [animalId, setAnimalId] = useState();
    // console.log(fundationId, "fundationid")
    // useEffect(() => {
    //     find(`/user/account/${id}`)
    //     .then(userObj => setUser(userObj))
    //     .catch(error => console.log(error))
    // }, [id])

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <h1 className={s.title}>Agregue un amigo nuevo</h1>
                <Formik
                    initialValues= {{
                        animalname: "",
                        history: "",
                        location: "",
                        size: "",
                        species: "",
                        sex: "",
                        personality: "",
                        age: "",
                        vaccines: "",
                    }}
                    validationSchema= {Yup.object({
                        animalname: Yup.string("Debe ser una cadena de caracteres")
                        .required("Campo requerido"),
                        history: Yup.string("Debe ser una cadena de caracteres")
                        .required("Campo requerido"),
                        location: Yup.string("Debe ser una cadena de caracteres")
                        .required("Campo requerido"),
                        size: Yup.string("Debe ser una cadena de caracteres")
                        .required("Campo requerido"),
                        species: Yup.string("Debe ser una cadena de caracteres")
                        .required("Campo requerido"),
                        sex: Yup.string("Debe ser una cadena de caracteres")
                        .required("Campo requerido"),
                        personality: Yup.string("Debe ser una cadena de caracteres")
                        .required("Campo requerido"),
                        age: Yup.string("Debe ser una cadena de caracteres")
                        .required("Campo requerido"),
                        vaccines: Yup.string("Debe ser una cadena de caracteres")
                        .required("Campo requerido"),
                    })}
                     onSubmit={values => {
/*                         const body = new FormData();

                        if (values.personality) body.append( "personality", values.personality);
                        if (values.location) body.append( "location", values.location);
                        if (values.size) body.append( "size", values.size);
                        if (values.species) body.append( "species", values.species);
                        if (values.sex) body.append( "sex", values.sex); */
                        values.fundationId = fundationId._id
                         axios.post("http://localhost:3030/animal", values)
                        .then(res => res.data)
                        .then(animal => setAnimalId(animal._id))
                         .then(()=>{axios.post(`http://localhost:3030/orgs/addpets/${fundationId._id}`, animalId)
                        .then(res => {
                            console.log(animalId)
                            update();
                            navigate(`/foundations/edit-animal/${animalId}`)
                            //console.log(res.data)
                        })} )

                        // cambiar el foundations de abajo por account cuando este el resto listo
                        //navigate(`/foundations/edit-animal/${animalId}`)
                    }}
                    >
                    {formProps => (
                    <Form className={s.form}>
                     
                        <div>Nombre del animal</div>
                        <Field className={s.input} name="animalname" placeholder="Ingrese el nombre del animal" type="text"/> <br/>
                        <div className={s.error} >
                            <ErrorMessage name="animalname" /> <br/>
                        </div>

                        <div>Historia</div>
                        <Field className={s.input} name="history" placeholder="Ingrese una reseña del animal" type="text"/> <br/>
                        <div className={s.error} >
                            <ErrorMessage name="history" /> <br/>
                        </div>
                        
                        <div>Ubicacion</div>
                        <Field className={s.input} name="location" placeholder="Ciudad, provincia" type="text"/> <br/>
                        <div className={s.error} >
                            <ErrorMessage name="location" /> <br/>
                        </div>

                        <div>Tamaño</div>
                        <Field as="select" className={s.input} name="size" type="text">
                                <option value="">Seleccionar</option>
                                <option value="pequeño">Pequeño</option>
                                <option value="mediano">Mediano</option>
                                <option value="grande">Grande</option>
                        </Field>
                        <div className={s.error} >
                            <ErrorMessage name="size" /> <br/>
                        </div>

                        <div>Especie</div>
                        <Field className={s.input} name="species" placeholder="¿Cuál es la especie del animal?" type="text"/> <br/>
                        <div className={s.error} >
                            <ErrorMessage name="species" /> <br/>
                        </div>

                        <div>Sexo</div>
                        <Field as="select" className={s.input} name="sex" type="text">
                                <option value="">Seleccionar</option>
                                <option value="macho">Macho</option>
                                <option value="hembra">Hembra</option>
                        </Field>
                        <div className={s.error} >
                            <ErrorMessage name="sex" /> <br/>
                        </div>

                        <div>Personalidad</div>
                        <Field className={s.input} name="personality" placeholder="Rasgos característicos de ayuda para el adoptante" type="text"/> <br/>
                        <div className={s.error} >
                            <ErrorMessage name="personality" /> <br/>
                        </div>

                        <div>Edad</div>
                        <Field as="select" className={s.input} name="age" type="text">
                                <option value="">Seleccionar</option>
                                <option value="cachorro">Cachorro</option>
                                <option value="jóven">Jóven</option>
                                <option value="adulto">Adulto</option>
                                <option value="senior">Senior</option>
                        </Field>
                        <div className={s.error} >
                            <ErrorMessage name="age" /> <br/>
                        </div>

                        <div>Vacunas</div>
                        <Field as="select" className={s.input} name="vaccines" type="text">
                                <option value="">Seleccionar</option>
                                <option value="Al día">Al día</option>
                                <option value="No requeridas para esta especie">No requeridas</option>
                                <option value="Incompletas">Incompletas</option>
                        </Field> 
                        <div className={s.error} >
                            <ErrorMessage name="vaccines" /> <br/>
                        </div>

                        <button className={s.button} 
                            type="submit">
                            LISTO
                        </button>
                    </Form>
                        )}
                </Formik>
        </div>
        </div>
    )
}

export default AddAnimal;


