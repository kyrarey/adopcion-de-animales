import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import find from "../../hooks/find";
import s from "./Account.module.css";
const FormData = require('form-data');

const Account = () => {
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
                        name: "",
                        lastname: "",
                        username: "",
                        email: "",
                        password: "",
                        bio: "",
                        location: "",
                        photo: ""
                    }}
                    validationSchema= {Yup.object({
                        name: Yup.string("Debe ser una cadena de caracteres"),
                        lastname: Yup.string("Debe ser una cadena de caracteres"),
                        username: Yup.string("Debe ser una cadena de caracteres"),
                        email: Yup.string()
                                .email("Ingrese un email válido"),
                        password: Yup.string(""),
                        bio:Yup.string("Debe ser una cadena de caracteres"),
                        location:Yup.string("Debe ser una cadena de caracteres")
                    })}
                    onSubmit={values => {
                        const body = new FormData();
                        
                        if (values.name) body.append( "name", values.name.toLowerCase());
                        if (values.lastname) body.append( "lastname", values.lastname.toLowerCase());
                        if (values.username) body.append( "username", values.username);
                        if (values.email) body.append( "email", values.email.toLowerCase());
                        if (values.password) body.append( "password", values.password);
                        if (values.bio) body.append( "bio", values.bio);
                        if (values.location) body.append( "location", values.location);
                        if (values.photo) body.append( "photo", values.photo);

                        axios({
                            method: 'put',
                            url:`http://localhost:3030/user/${id}`,
                            data: body,
                            headers: {
                                "Content-Type": "multipart/form-data",
                            }
                        })
                        .then(serverAnswer => {
                            console.log("SERVER RESPONSE: ",serverAnswer);
                            navigate(`/account/${serverAnswer.data.id}`);
                        })
                        .catch(err => console.log(err))
                    }}
                    >
                    {formProps => (
                    <Form className={s.form}>
                        <div>Nombre</div>
                        <Field className={s.input} name="name" type="text" placeholder={user.name ? `${user.name}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="name" /> <br/>

                        <div>Apellido</div>
                        <Field className={s.input} name="lastname" type="text" placeholder={user.lastname ? `${user.lastname}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="lastname" /> <br/>
                        
                        <div>Usuario</div>
                        <Field className={s.input} name="username" type="text" placeholder={user.username ? `${user.username}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="username" /> <br/>

                        <div>E-mail</div>
                        <Field className={s.input} name="email" type="text" placeholder={user.email ? `${user.email}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="email" /> <br/>

                        <div>Contraseña</div>
                        <Field className={s.input} name="password" type="text" /> <br/> 
                        <ErrorMessage className={s.error} name="password" /> <br/>
                        
                        <div>Ubicación</div>
                        <Field className={s.input} name="location" type="text" placeholder={user.location ? `${user.location}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="location" /> <br/>

                        <div>Acerca de ti</div>
                        <Field className={s.largeInput} name="bio" type="text" placeholder={user.bio ? `${user.bio}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="bio" /> <br/>

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

export default Account;


