import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import find from "../../hooks/find";
import { update } from "../../hooks/alert";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import s from "./EditForm.module.css";
const FormData = require('form-data');

const EditForm = () => {
    const navigate = useNavigate();
    let id = useParams().id;
    const [user, setUser] = useState({});

    useEffect(() => {
        find(`/orgs/account/${id}`)
            .then(userObj => setUser(userObj))
            .catch(error => console.log(error))
    }, [id])


    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <h1 className={s.title}>Mi Info</h1>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        foundationName: user.foundationName ? `${capitalizeFirst(user.foundationName)}` : "",
                        location: user.location ? `${capitalizeFirst(user.location)}` : "",
                        description: user.description ? `${user.description}` : "",
                        
                    }}
                    validationSchema={Yup.object({
                        foundationName: Yup.string("Debe ser una cadena de caracteres")
                            .required("Campo requerido"),
                        location: Yup.string("Debe ser una cadena de caracteres")
                            .required("Campo requerido"),
                        description: Yup.string("Debe ser una cadena de caracteres")
                            .required("Campo requerido"),
                    })}
                    onSubmit={values => {
                        const body = new FormData();

                        body.append("isFormComplete", true);
                        if (values.foundationName) body.append("foundationName", values.foundationName.toLowerCase());
                        if (values.location) body.append("location", values.location.toLowerCase());
                        if (values.description) body.append("description", values.description.toLowerCase());
                                               
                        axios({
                            method: 'put',
                            url: `http://localhost:3030/orgs/${id}`,
                            data: body,
                            headers: {
                                "Content-Type": "multipart/form-data",
                            }
                        })
                            .then(serverAnswer => {
                                //console.log("SERVER RESPONSE: ",serverAnswer);
                                update();
                                navigate(`/account/form/${serverAnswer.data.id}`);
                            })
                            .catch(err => console.log(err))
                    }}
                >
                    {formProps => (
                        <Form className={s.form}>
                            <div>Nombre de la fundación</div>
                            <Field className={s.input} name="foundationName" type="text" placeholder="Ingrese el nombre de la fundación" /> <br />
                            <div className={s.error} >
                                <ErrorMessage name="foundationName" /> <br />
                            </div>

                            <div>Ubicación</div>
                            <Field className={s.input} name="location" type="text" placeholder="Ingrese su ubicación (Ciudad, provincia)" /> <br />
                            <div className={s.error} >
                                <ErrorMessage name="location" /> <br />
                            </div>

                            <div>Breve historia</div>
                            <Field className={s.largeInput} name="description" type="text" placeholder="Ingrese información acerca de la fundación" /> <br />
                            <div className={s.error} >
                                <ErrorMessage name="description" /> <br />
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