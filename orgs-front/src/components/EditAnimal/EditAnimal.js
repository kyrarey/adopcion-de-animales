import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import find from "../../hooks/find";
import capitalizeFirst from "../../hooks/capitalizeFirst";
import { update } from "../../hooks/alert";
import s from "./EditAnimal.module.css";
const FormData = require("form-data");

const EditAccount = () => {
  const navigate = useNavigate();
  let id = useParams().id;
  const [user, setUser] = useState({});

  useEffect(() => {
    find(`/animal/${id}`)
      .then((obj) => setUser(obj))
      .catch((error) => console.log(error));
  }, [id]);

  // console.log(user, "user");

  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <h1 className={s.title}>Edite la informacion del animal</h1>
        <Formik
          enableReinitialize={true}
          initialValues={{
            animalname: user.animalname ? capitalizeFirst(user.animalname) : "",
            history: user.history,
            location: user.location ? capitalizeFirst(user.location) : "",
            size: user.size,
            species: user.species ? capitalizeFirst(user.species) : "",
            sex: user.sex,
            personality: user.personality,
            age: user.age,
            vaccines: user.vaccines,
            photo: "",
          }}
          validationSchema={Yup.object({
            animalname: Yup.string("Debe ser una cadena de caracteres"),
            history: Yup.string("Debe ser una cadena de caracteres"),
            location: Yup.string("Debe ser una cadena de caracteres"),
            size: Yup.string("Debe ser una cadena de caracteres"),
            species: Yup.string("Debe ser una cadena de caracteres"),
            sex: Yup.string("Debe ser una cadena de caracteres"),
            personality: Yup.string("Debe ser una cadena de caracteres"),
            age: Yup.string("Debe ser una cadena de caracteres"),
            vaccines: Yup.string("Debe ser una cadena de caracteres"),
            // image: Yup.mixed()
            //   .test(
            //     "fileSize",
            //     "El archivo es demasiado grande",
            //     (value) => !value || (value && value.size <= 160 * 1024)
            //   )
            //   .test(
            //     "fileFormat",
            //     "El archivo debe tener formato .jpg",
            //     (value) =>
            //       !value ||
            //       ((value) =>
            //         value && ["image/jpg", "image/jpeg"].includes(value.type))
            //   ),
          })}
          onSubmit={(values) => {
            const body = new FormData();

            if (values.animalname) body.append("animalname", values.animalname);
            if (values.history) body.append("history", values.history);
            if (values.location) body.append("location", values.location);
            if (values.size) body.append("size", values.size);
            if (values.species) body.append("species", values.species); 
            if (values.sex) body.append("sex", values.sex);
            if (values.personality) body.append("personality", values.personality);
            if (values.age) body.append("age", values.age);
            if (values.vaccines) body.append("vaccines", values.vaccines);
            if (values.photo) {
              body.append("image", [`/${id}-${user.image.length}`]);
              body.append("photo", values.photo);
            }
            console.log(
              values,
              "body y esta la imagen como string, la necesitamos como objeto"
            );
            axios({
              method: "put",
              url: `http://localhost:3030/animal/${id}`,
              data: body,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
              .then((res) =>
                console.log(res.data, "recibimos la data de la db sin imagen")
              )
              .then((serverAnswer) => {
                // console.log("SERVER RESPONSE: ",serverAnswer);
                update();

                //navigate(`/account/${serverAnswer.data.id}`);
              })
              .catch((err) => console.log(err));
          }}
        >
          {(formProps) => (
            <Form className={s.form}>
              <div>Nombre del animal</div>
              <Field className={s.input} name="animalname" type="text"/> <br />
              <div className={s.error}>
                <ErrorMessage name="animalname" /> <br />
              </div>
              <div>Historia</div>
              <Field className={s.input} name="history" type="text" /> <br />
              <div className={s.error}>
                <ErrorMessage name="history" /> <br />
              </div>
              <div>Ubicacion</div>
              <Field className={s.input} name="location" type="text" /> <br />
              <div className={s.error}>
                <ErrorMessage name="location" /> <br />
              </div>
              <div>Tamaño</div>
              <Field as="select" className={s.input} name="size" type="text">
                <option value="">Seleccionar</option>
                <option value="pequeño">Pequeño</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
              </Field>
              <div className={s.error}>
                <ErrorMessage name="size" /> <br />
              </div>
              <div>Especie</div>
              <Field className={s.input} name="species" type="text" /> <br />
              <div className={s.error}>
                <ErrorMessage name="species" /> <br />
              </div>
              <div>Sexo</div>
              <Field as="select" className={s.input} name="sex" type="text">
                  <option value="">Seleccionar</option>
                  <option value="macho">Macho</option>
                  <option value="hembra">Hembra</option>
              </Field>
              <div className={s.error}>
                <ErrorMessage name="sex" /> <br />
              </div>
              <div>Personalidad</div>
              <Field className={s.input} name="personality" type="text" />{" "}
              <br />
              <div className={s.error}>
                <ErrorMessage name="personality" /> <br />
              </div>
              <div>Edad</div>
              <Field as="select" className={s.input} name="age" type="text">
                  <option value="">Seleccionar</option>
                  <option value="cachorro">Cachorro</option>
                  <option value="jóven">Jóven</option>
                  <option value="adulto">Adulto</option>
                  <option value="senior">Senior</option>
              </Field>
              <div className={s.error}>
                <ErrorMessage name="age" /> <br />
              </div>
              <div>Vacunas</div>
              <Field as="select" className={s.input} name="vaccines" type="text">
                  <option value="">Seleccionar</option>
                  <option value="Al día">Al día</option>
                  <option value="No requeridas para esta especie">No requeridas</option>
                  <option value="Incompletas">Incompletas</option>
              </Field> 
              <div className={s.error}>
                <ErrorMessage name="vaccines" /> <br />
              </div>
              <div>Foto</div>
              <input
                className={s.input}
                name="photo"
                type="file"
                onChange={(e) =>
                  formProps.setFieldValue("photo", e.target.files[0])
                }
              />
              <br />
              <div className={s.error}>
                <ErrorMessage name="photo" /> <br />
              </div>
              <button className={s.button} type="submit">
                LISTO
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditAccount;
