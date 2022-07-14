import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { AuthContext } from "../../context/AuthContext";
import * as Yup from "yup";
import axios from "axios";
import find from "../../hooks/find";
import { update } from "../../hooks/alert";
import s from "./EditAccount.module.css";
const FormData = require('form-data');

const EditAccount = () => {
    const navigate = useNavigate();
    const { toggleAuth } = useContext(AuthContext);
    let id = useParams().id;
    const [user, setUser] = useState({});

    useEffect(() => {
        if(id){
        find(`/user/account/${id}`)
        .then(userObj => setUser(userObj))
        .catch(error => console.log(error))
        }
    }, [id])

    return (
        <div className={s.container}>
            <div className={s.formContainer}>
                <h1 className={s.title}>Mi cuenta</h1>
                <Formik
                enableReinitialize={true}
                    initialValues= {{
                        username: user.username ? user.username : "",
                        email: user.email ? user.email : "",
                        password: "",
                        confirm_password: "",
                        photo: ""
                    }}
                    validationSchema= {Yup.object({
                        username: Yup.string("Debe ser una cadena de caracteres")
                                 .max(25, "Máximo 25 caracteres"),
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

                        if (values.username) body.append( "username", values.username);
                        if (values.email) body.append( "email", values.email.toLowerCase());
                        if (values.password) body.append( "password", values.password);
                        if (values.photo) {
                            body.append("image",`${id}`)
                            body.append( "photo", values.photo)
                        };
          
                        axios({
                            method: 'put',
                            url:`http://localhost:3030/user/${id}`,
                            data: body,
                            headers: {
                                "Content-Type": "multipart/form-data",
                            }
                        })
                        .then(serverAnswer => {
                            //console.log("SERVER RESPONSE: ",serverAnswer.data);
                            localStorage.setItem("newUser", JSON.stringify(serverAnswer.data));
                            toggleAuth(serverAnswer.data);
                            update();
                            navigate(`/account/${serverAnswer.data.id}`);
                        })
                        .catch(err => console.log(err))
                    }}
                    >
                    {formProps => (
                    <Form className={s.form}>
                     
                        <div>Usuario</div>
                        <Field className={s.input} name="username" type="text" placeholder="Ingrese su usuario"/> <br/>
                        <div className={s.error} >
                            <ErrorMessage name="username" /> <br/>
                        </div>
                        
                        <div>E-mail</div>
                        <Field className={s.input} name="email" type="text" placeholder="Ingrese su email"/> <br/>
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


