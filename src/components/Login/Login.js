import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
import validator from "validator";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();
  const notify = (text) => toast(text);

  const login = async (e) => {
    e.preventDefault();
    if (validator.isEmail(loginEmail)) {
      try {
        const user = await axios.post("http://localhost:3030/user/login", {
          email: loginEmail,
          password: loginPassword,
        });
        //console.log(user.data, " data")
        const newUser = {_id: user.data._id, email: user.data.email, fundation: user.data.fundation, token: user.data.token, isAuthenticated:true}
        localStorage.setItem('user', JSON.stringify(newUser));
        // console.log(user)
        navigate("/");
      } catch (error) {
        console.log(error.response);
      }
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
              src="https://i0.wp.com/wipy.tv/wp-content/uploads/2019/01/Muri%C3%B3-el-perrito-m%C3%A1s-famosos-de-internet-2.jpg?fit=1000%2C600&ssl=1"
            ></img>
          </div>
          <div className="col-md-6">
            <h3 className="signin-text mb-3">Log In</h3>
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setLoginEmail(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <input
                  className="form-control mt-3 mb-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                ></input>
              </div>
              <button onClick={login} className="btn btn-class">
                Login
              </button>
              <p class="mt-2">
                ¿No tenés cuenta?&nbsp;
                <a href="/register">Crear cuenta</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
