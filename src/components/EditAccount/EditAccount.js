import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import find from "../../hooks/find";
import { update } from "../../hooks/alert";
import s from "./EditAccount.module.css";
const FormData = require('form-data');

const EditAccount = () => {
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
                <h1 className={s.title}>Mi cuenta</h1>
                <Formik
                    initialValues= {{
                        username: "",
                        email: "",
                        password: "",
                        confirm_password: "",
                        photo: ""
                    }}
                    validationSchema= {Yup.object({
                        username: Yup.string("Debe ser una cadena de caracteres"),
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
                    })}
                    onSubmit={values => {
                        const body = new FormData();

                        if (values.username) body.append( "username", values.username);
                        if (values.email) body.append( "email", values.email.toLowerCase());
                        if (values.password) body.append( "password", values.password);
                        if (values.photo) {
                            body.append("image",`/${id}`)
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
                            //console.log("SERVER RESPONSE: ",serverAnswer);
                            update();
                            navigate(`/account/${serverAnswer.data.id}`);
                        })
                        .catch(err => console.log(err))
                    }}
                    >
                    {formProps => (
                    <Form className={s.form}>
                     
                        <div>Usuario</div>
                        <Field className={s.input} name="username" type="text" placeholder={user.username ? `${user.username}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="username" /> <br/>

                        <div>E-mail</div>
                        <Field className={s.input} name="email" type="text" placeholder={user.email ? `${user.email}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="email" /> <br/>

                        <div>Contraseña</div>
                        <Field className={s.input} name="password" type="text" /> <br/> 
                        <ErrorMessage className={s.error} name="password" /> <br/>

                        <div>Repetir contraseña</div>
                        <Field className={s.input} name="confirm_password" type="text" /> <br/> 
                        <ErrorMessage className={s.error} name="confirm_password" /> <br/>
    
                        <div>Foto</div>
                        <input name="photo" type="file" 
                        onChange={e => formProps.setFieldValue("photo", e.target.files[0])}/><br/><br/>
                        
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


