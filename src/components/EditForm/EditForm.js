import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
//import { HistoryContext } from "../../context/HistoryContext";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import s from "./EditForm.module.css";
const FormData = require('form-data');

const EditForm = () => {
    const navigate = useNavigate();
    let id = useParams().id;
    const [user, setUser] = useState({});

    useEffect(() => {
        find(`/user/account/${id}`)
            .then(userObj => setUser(userObj))
            .catch(error => console.log(error))
    }, [id])

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <h1 className={s.title}>Mi formulario</h1>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        name: user.name ? `${capitalizeFirst(user.name)}` : "",
                        lastname: user.lastname ? `${capitalizeFirst(user.lastname)}` : "",
                        age: user.age ? `${user.age}` : "",
                        city: user.city ? `${capitalizeFirst(user.city)}` : "",
                        location: user.location ? `${capitalizeFirst(user.location)}` : "",
                        housing: user.housing ? `${user.housing}` : "",
                        houseIsRented: user.houseIsRented ? `${user.houseIsRented}` : "",
                        havePets: user.havePets ? `${user.havePets}` : "",
                        isAllergic: user.isAllergic ? `${user.isAllergic}` : "",
                        bio: user.bio ? `${user.bio}` : "",
                        isFormComplete: "",
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string("Debe ser una cadena de caracteres")
                            .required("Campo requerido"),
                        lastname: Yup.string("Debe ser una cadena de caracteres")
                            .required("Campo requerido"),
                        age: Yup.number("Debe ser un número")
                            .required("Campo requerido"),
                        city: Yup.string("Debe ser una cadena de caracteres")
                            .required("Campo requerido"),
                        location: Yup.string("Debe ser una cadena de caracteres")
                            .required("Campo requerido"),
                        housing: Yup.string()
                            .required("Campo requerido"),
                        houseIsRented: Yup.boolean()
                            .required("Campo requerido"),
                        havePets: Yup.boolean()
                            .required("Campo requerido"),
                        isAllergic: Yup.boolean()
                            .required("Campo requerido"),
                        bio: Yup.string("Debe ser una cadena de caracteres")
                            .required("Campo requerido"),
                    })}
                    onSubmit={values => {
                        const body = new FormData();

                        body.append("isFormComplete", true);
                        if (values.name) body.append("name", values.name.toLowerCase());
                        if (values.lastname) body.append("lastname", values.lastname.toLowerCase());
                        if (values.age) body.append("age", values.age);
                        if (values.city) body.append("city", values.city.toLowerCase());
                        if (values.location) body.append("location", values.location.toLowerCase());
                        if (values.housing) body.append("housing", values.housing);
                        if (values.houseIsRented) body.append("houseIsRented", values.houseIsRented);
                        if (values.havePets) body.append("havePets", values.havePets);
                        if (values.isAllergic) body.append("isAllergic", values.isAllergic);
                        if (values.bio) body.append("bio", values.bio);

                        axios({
                            method: 'put',
                            url: `http://localhost:3030/user/${id}`,
                            data: body,
                            headers: {
                                "Content-Type": "multipart/form-data",
                            }
                        })
                            .then(serverAnswer => {
                                //console.log("SERVER RESPONSE: ",serverAnswer);
                                //console.log("HISTORY", window.history.go(-1))
                                navigate(`/account/form/${serverAnswer.data._id}`);
                            })
                            .catch(err => console.log(err))
                    }}
                >
                    {formProps => (
                        <Form className={s.form}>
                            <div>Nombre</div>
                            <Field className={s.input} name="name" type="text" placeholder="Ingrese su nombre" /> <br />
                            <div className={s.error} >
                                <ErrorMessage name="name" /> <br />
                            </div>

                            <div>Apellido</div>
                            <Field className={s.input} name="lastname" type="text" placeholder="Ingrese su apellido" /> <br />
                            <div className={s.error} >
                                <ErrorMessage name="lastname" /> <br />
                            </div>

                            <div>Edad</div>
                            <Field className={s.input} name="age" type="text" placeholder="Ingrese su edad" /> <br />
                            <div className={s.error} >
                                <ErrorMessage name="age" /> <br />
                            </div>
                            <div>Ciudad</div>
                            <Field className={s.input} name="city" type="text" placeholder="Ingrese la ciudad en la que vive" /> <br />
                            <div className={s.error} >
                                <ErrorMessage name="city" /> <br />
                            </div>

                            <div>Dirección</div>
                            <Field className={s.input} name="location" type="text" placeholder="Ingrese su dirección" /> <br />
                            <div className={s.error} >
                                <ErrorMessage name="location" /> <br />
                            </div>

                            <div>Vivienda</div>
                            <Field as="select" className={s.input} name="housing" type="text">
                                <option value="">Seleccionar</option>
                                <option value="casa">Casa</option>
                                <option value="departamento">Departamento</option>
                                <option value="estudio">Monoambiente</option>
                            </Field>
                            <div className={s.error} >
                                <ErrorMessage name="housing" /> <br />
                            </div>

                            <div>Vivienda alquilada</div>
                            <Field as="select" className={s.input} name="houseIsRented" type="text">
                                <option value="">Seleccionar</option>
                                <option value="true">Si</option>
                                <option value="false">No</option>
                            </Field>
                            <div className={s.error} >
                                <ErrorMessage name="houseIsrented" /> <br />
                            </div>

                            <div>Otras mascotas</div>
                            <Field as="select" className={s.input} name="havePets" type="text">
                                <option value="">Seleccionar</option>
                                <option value="true">Si</option>
                                <option value="false">No</option>
                            </Field>
                            <div className={s.error} >
                                <ErrorMessage name="havePets" /> <br />
                            </div>

                            <div>Alergias de algún tipo</div>
                            <Field as="select" className={s.input} name="isAllergic" type="text">
                                <option value="">Seleccionar</option>
                                <option value="true">Si</option>
                                <option value="false">No</option>
                            </Field>
                            <div className={s.error} >
                                <ErrorMessage name="isAllergic" /> <br />
                            </div>

                            <div>Acerca de mi</div>
                            <Field className={s.largeInput} name="bio" type="text" placeholder={user.bio ? `${user.bio}` : ""} /> <br />
                            <div className={s.error} >
                                <ErrorMessage name="bio" /> <br />
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

export default EditForm;