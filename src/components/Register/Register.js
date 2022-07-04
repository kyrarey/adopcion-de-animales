import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { registered } from "../../hooks/alert";
import validator from "validator";

const Register = () => {
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    console.log(registerEmail);
    console.log(registerPassword);

    e.preventDefault();
    if (validator.isEmail(registerEmail)) {
      await axios.post("http://localhost:3030/user/register", {
        email: registerEmail,
        password: registerPassword,
      });
      registered();
      /* alert("Register Succesfull"); */
      navigate("/login");
    } else {
      alert("Set a valid email");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row content ">
          <div className="col-md-6 mb-">
            <img
              className="img-fluid"
              src="https://i0.wp.com/wipy.tv/wp-content/uploads/2019/01/Muri%C3%B3-el-perrito-m%C3%A1s-famosos-de-internet-2.jpg?fit=1000%2C600&ssl=1"
            ></img>
          </div>
          <div className="col-md-6">
            <h3 className="signin-text mb-3">Register</h3>
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
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
              <p class="mt-2">
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
