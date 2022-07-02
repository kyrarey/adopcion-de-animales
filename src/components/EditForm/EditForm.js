import { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
import find from "../../hooks/find";
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
                <h1 className={s.title}>Mi cuenta</h1>
                <Formik
                    initialValues= {{
                        name: "",
                        lastname: "",
                        age: "",
                        city: "",
                        location: "",
                        housing: "",
                        houseIsRented: "",
                        havePets: "",
                        isAllergic: "",
                        bio: "",
                        isFormComplete: "",
                    }}
                    validationSchema= {Yup.object({
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
                        housing: Yup.boolean()
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
                        
                        body.append( "isFormComplete", true);
                        if (values.name) body.append( "name", values.name.toLowerCase());
                        if (values.lastname) body.append( "lastname", values.lastname.toLowerCase());
                        if (values.age) body.append( "age", values.age);
                        if (values.city) body.append( "city", values.city.toLowerCase());
                        if (values.location) body.append( "location", values.location);
                        if (values.housing) body.append( "housing", values.housing);
                        if (values.houseIsRented) body.append( "isRented", values.houseIsRented);
                        if (values.havePets) body.append( "havePets", values.havePets);
                        if (values.isAllergic) body.append( "isAllergic", values.isAllergic);
                        if (values.bio) body.append( "bio", values.bio);
                                
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
                            navigate(`/account/form/${serverAnswer.data.id}`);
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
                        
                        <div>Edad</div>
                        <Field className={s.input} name="age" type="text" placeholder={user.age? `${user.age}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="age" /> <br/>

                        <div>Ciudad</div>
                        <Field className={s.input} name="city" type="text" placeholder={user.city? `${user.city}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="city" /> <br/>

                        <div>Dirección</div>
                        <Field className={s.input} name="location" type="text" placeholder={user.location ? `${user.location}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="location" /> <br/>

                        <div>Vivienda</div>
                        <Field className={s.input} name="housing" type="text" placeholder={user.housing ? `${user.housing}` : ""}/> <br/> 
                        <ErrorMessage className={s.error} name="housing" /> <br/>

                        <div>Vivienda alquilada</div>
                        <Field className={s.input} name="houseIsRented" type="text" placeholder={user.houseIsRented ? `${user.houseIsRented}` : ""}/> <br/> 
                        <ErrorMessage className={s.error} name="houseIsrented" /> <br/>

                        <div>Otras mascotas</div>
                        <Field className={s.input} name="havePets" type="text" placeholder={user.havePets ? `${user.havePets}` : ""}/> <br/> 
                        <ErrorMessage className={s.error} name="havePets" /> <br/>
                        
                        <div>Alergias de algún tipo</div>
                        <Field className={s.input} name="isAllergic" type="text" placeholder={user.isAllergic ? `${user.isAllergic}` : ""}/> <br/> 
                        <ErrorMessage className={s.error} name="isAllergic" /> <br/>

                        <div>Acerca de mi</div>
                        <Field className={s.largeInput} name="bio" type="text" placeholder={user.bio ? `${user.bio}` : ""}/> <br/>
                        <ErrorMessage className={s.error} name="bio" /> <br/>
                       
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