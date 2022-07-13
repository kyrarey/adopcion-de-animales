import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
//import find from "../../hooks/find";
import { update } from "../../hooks/alert";
import s from "./EditAccount.module.css";
//import capitalizeFirst from "../../hooks/capitalizeFirst";
const FormData = require('form-data');

const EditAccount = () => {
    const navigate = useNavigate();
    let id = useParams().id;
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3030/orgs/account/${id}`)
        //find(`/orgs/${id}`)
        .then(userObj => setUser(userObj.data))
        .catch(error => console.log(error))
    }, [id])

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <h1 className={s.title}>Mi cuenta</h1>
                <Formik
                    enableReinitialize={true}
                    initialValues= {{
                        email: user.email,
                        password: "",
                        confirm_password: "",
                        photo: ""
                    }}
                    validationSchema= {Yup.object({
                        email: Yup.string()
                                .email("Ingrese un email válido"),
                        password: Yup.string("")
                                .min (8)
                                .matches(
                                    /^(?=.*[!@#$%^&*])/,
                                    "Debe tener al menos 8 caracteres y 1 caracter especial"
                                  ),
                        confirm_password: Yup.string("")
                                .oneOf([Yup.ref('password'), null], 'La contraseña no coincide'),
                        photo: Yup.mixed()
                                .test(
                                    "fileSize",
                                    "El archivo es demasiado grande",
                                    value => !value || (value && value.size <= 160*1024)
                                )
                                .test(
                                    "fileFormat",
                                    "El archivo debe tener formato .jpg",
                                    value => !value || (value => value && ["image/jpg", "image/jpeg"].includes(value.type))
                                ),
                    })}
                    onSubmit={values => {
                        const body = new FormData();

                        if (values.email) body.append( "email", values.email.toLowerCase());
                        if (values.password) body.append( "password", values.password);
                        if (values.photo) {
                            body.append("image",`${id}`)
                            body.append( "photo", values.photo)
                        };
          
                        axios({
                            method: 'put',
                            url:`http://localhost:3030/orgs/${id}`,
                            data: body,
                            headers: {
                                "Content-Type": "multipart/form-data",
                            }
                        })
                        .then(serverAnswer => {
                            //console.log("SERVER RESPONSE: ",serverAnswer);
                            update();
                            navigate(`/account/${serverAnswer.data.id}`);
                        })
                        .catch(err => console.log(err))
                    }}
                    >
                    {formProps => (
                    <Form className={s.form}>
                        <div>E-mail</div>
                        <Field className={s.input} name="email" type="text" placeholder={user.email ? `${user.email}` : ""}/> <br/>
                        <div className={s.error} >
                            <ErrorMessage name="email" /> <br/>
                        </div>

                        <div>Contraseña</div>
                        <Field className={s.input} name="password" type="password" /> <br/> 
                        <div className={s.error} >
                            <ErrorMessage name="password" /> <br/>
                        </div>

                        <div>Repetir contraseña</div>
                        <Field className={s.input} name="confirm_password" type="password" /> <br/> 
                        <div className={s.error} >
                            <ErrorMessage name="confirm_password" /> <br/>
                        </div>

                        <div>Foto</div>
                        <input className= {s.input} name="photo" type="file" 
                        onChange={e => formProps.setFieldValue("photo", e.target.files[0])}/><br/>
                        <div className={s.error} >
                            <ErrorMessage name="photo" /> <br/>
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

export default EditAccount;


