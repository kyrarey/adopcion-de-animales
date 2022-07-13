import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FavContext } from "../../context/FavContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { notValid } from "../../hooks/alert";
import { toast } from "react-toastify";
import find from "../../hooks/find";
import validator from "validator";
import jwt_decode from "jwt-decode";

const Login = () => {
  const { toggleAuth } = useContext(AuthContext);
  const { getFavs } = useContext(FavContext);

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

        const loginUser = {
          _id: user.data._id,
          email: user.data.email,
          isFormComplete: user.data.isFormComplete,
          fundation: user.data.fundation,
          token: user.data.token,
        };
        localStorage.setItem("newUser", JSON.stringify(loginUser));
        toggleAuth(loginUser);
        find(`/favorite/${loginUser._id}`).then((animals) =>
          animals ? getFavs(animals) : getFavs([])
        );
        navigate("/");
      } catch (error) {
        notValid();
        console.log(error.response);
      }
    } else {
      notify("Email invalido");
    }
  };

  //google identity services

  async function handleCallbackResponse(response) {
    /* console.log("Encoded JWT ID token: ", response.credential); */
    let userObject = jwt_decode(response.credential);
    /* console.log("esto es userObject: ", userObject); */

    try {
      const user = await axios.post("http://localhost:3030/user/login", {
        email: userObject.email,
        password: userObject.sub,
      });
      /* console.log("esto es user en login: ", user) */

      const loginUser = {
        _id: user.data._id,
        email: user.data.email,
        isFormComplete: user.data.isFormComplete,
        fundation: user.data.fundation,
        token: user.data.token,
        /*           isAuthenticated: true, */
      };
      localStorage.setItem("newUser", JSON.stringify(loginUser));
      toggleAuth(loginUser);
      find(`/favorite/${loginUser._id}`).then((animals) =>
        animals ? getFavs(animals) : getFavs([])
      );
      navigate("/");
    } catch (error) {
      setLoginEmail(userObject.email); // no haria falta modificar ambos estados
      setLoginPassword(userObject.sub);
      await axios.post("http://localhost:3030/user/register", {
        email: userObject.email,
        password: userObject.sub,
        image: userObject.picture, // todavia no me toma la imagen
        name: userObject.given_name,
        lastname: userObject.family_name,
      });

      const user = await axios.post("http://localhost:3030/user/login", {
        email: userObject.email,
        password: userObject.sub,
      });

      const loginUser = {
        _id: user.data._id,
        email: user.data.email,
        isFormComplete: user.data.isFormComplete,
        fundation: user.data.fundation,
        token: user.data.token,
        /*           isAuthenticated: true, */
      };
      localStorage.setItem("newUser", JSON.stringify(loginUser));
      toggleAuth(loginUser);
      find(`/favorite/${loginUser._id}`).then((animals) =>
        animals ? getFavs(animals) : getFavs([])
      );
      navigate("/");
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "612122618522-uosm7c7e9t124jnulbmlitb1isotp1oq.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

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
              <p className="mt-2">
                ¿No tenés cuenta?&nbsp;
                <a href="/register">Crear cuenta</a>
              </p>
              <div id="signInDiv"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
