import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import find from "../../hooks/find";
import { update } from "../../hooks/alert";
import s from "./AddAnimalImages.module.css";
const FormData = require("form-data");

const AddAnimalImages = () => {
  const navigate = useNavigate();
  let id = useParams().animalId;
  const [user, setUser] = useState({});

  useEffect(() => {
    find(`/animal/${id}`)
      .then((obj) => setUser(obj))
      .catch((error) => console.log(error));
  }, [id]);
  
  if (user){
    console.log("ARRAY IMAGE LENGTH",user)
  }

  // console.log(user, "user");

  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <h1 className={s.title}>Agregue un amigo nuevo</h1>
        <h4>Parte 2  de 2 </h4>
        <Formik
          enableReinitialize={true}
          initialValues={{
            photo1: "",
            photo2: "",
            photo3: "",
          }}
          validationSchema={Yup.object({
            photo1: Yup.mixed()
             .required(),
            photo2: Yup.mixed()
             .required(),
            photo3: Yup.mixed()
            .required(),
          })}
          onSubmit={(values) => {
            console.log(values)
            const body = new FormData();
            //body.append("image", [`/${id}-01.jpg`, `/${id}-02.jpg`, `/${id}-03.jpg` ]);
/*             body.append("image", [`/${id}-01.jpg`]);
            body.append("image", [`/${id}-02.jpg`]);
            body.append("image", [`/${id}-03.jpg`]); */
            if (values.photo1) {
               body.append("image0", [`/${id}-01.jpg` ]);
               body.append("photo1", values.photo1);
            }
            if (values.photo2) {
                body.append("image1", [`/${id}-02.jpg`]);
                body.append("photo2", values.photo2);
            }
            if (values.photo3) {
                body.append("image2", [`/${id}-03.jpg`]);
                body.append("photo3", values.photo3);
            }
            /* console.log(
              values,
              "body y esta la imagen como string, la necesitamos como objeto"
            );
            console.log("BODY", body) */

            axios({
              method: "put",
              url: `http://localhost:3030/animal/${id}`,
              data: body,
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
/*               .then((res) =>
                console.log(res.data, "recibimos la data de la db sin imagen")
              ) */
              .then((serverAnswer) => {
                //console.log("SERVER RESPONSE: ",serverAnswer);
                update();
                navigate(`/account/animal/${id}`);
              })
              .catch((err) => console.log(err));
          }}
        >
          {(formProps) => (
            <Form className={s.form}>
              <div>Foto principal</div>
              <input
                className={s.input}
                name="photo1"
                type="file"
                onChange={(e) =>
                  formProps.setFieldValue("photo1", e.target.files[0])
                }
              />
              <br />
              <div className={s.error}>
                <ErrorMessage name="photo1" /> <br />
              </div>

              <div>Foto 2</div>
              <input
                className={s.input}
                name="photo2"
                type="file"
                onChange={(e) =>
                  formProps.setFieldValue("photo2", e.target.files[0])
                }
              />
              <br />
              <div className={s.error}>
                <ErrorMessage name="photo2" /> <br />
              </div>

              <div>Foto 3</div>
              <input
                className={s.input}
                name="photo3"
                type="file"
                onChange={(e) =>
                  formProps.setFieldValue("photo3", e.target.files[0])
                }
              />
              <br />
              <div className={s.error}>
                <ErrorMessage name="photo3" /> <br />
              </div>

              <button className={s.button} type="submit">
                AGREGAR FOTOS
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddAnimalImages;


