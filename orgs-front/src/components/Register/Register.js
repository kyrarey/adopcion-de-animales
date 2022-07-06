import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { registered } from "../../hooks/alert";
import validator from "validator";
import { toast } from "react-toastify";

const Register = () => {
  const [foundationName, setFoundationName] = useState("")
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const navigate = useNavigate();
  const notify = (text) => toast(text);

  const register = async (e) => {
    console.log(registerEmail);
    console.log(registerPassword);

    e.preventDefault();
    if (validator.isEmail(registerEmail)) {
      await axios.post("http://localhost:3030/orgs/register", {
        foundationName: foundationName,
        email: registerEmail,
        password: registerPassword,
      });
      /*  notify("Registro exitoso"); */
      registered();
      navigate("/login");
    } else {
      notify("Email invalido");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row content ">
          <div className="col-md-6 mb-">
            <img
              className="img-fluid"
              src="https://nupec.com/wp-content/uploads/2020/07/Captura-de-pantalla-2020-07-02-a-las-15.19.50.png"
            ></img>
          </div>
          <div className="col-md-6">
            <h3 className="signin-text mb-3">Register</h3>
            <form>
            <div className="form-group">
                <input
                  className="form-control mt-3 mb-2"
                  type="fundacion"
                  name="text"
                  placeholder="Nombre de la fundacion"
                  onChange={(e) => setFoundationName(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <input
                  className="form-control mt-3 mb-2"
                  type="email"
                  name="email"
                  placeholder="Email de Fundacion"
                  onChange={(e) => setRegisterEmail(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <input
                  className="form-control mt-3 mb-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setRegisterPassword(e.target.value)}
                ></input>
              </div>
              <button onClick={register} className="btn btn-class">
                Login
              </button>
              <p className="mt-2">
                ¿Ya tenés una cuenta?&nbsp;
                <a href="/login">Ingresá acá</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
