import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import TextField from "../UI/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { useHistory } from "react-router";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    pass: Yup.string()
      .min(6, "Password must be at least 6 charcters")
      .max(15, "Password is too much characters"),
  });

  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

  const history = useHistory();

  const changeLoginHandler = () => {
    dispatch(authActions.checkLoginMode());
  };

  const turnOffModalHandler = () => {
    dispatch(authActions.openModal(false));
  };

  const loginRequest = (email, pass) =>
    axios({
      method: "POST",
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLDi951vIW0tJrvCBbR08F-LOOlBfMv50",
      data: {
        email: email,
        password: pass,
        returnSecureToken: true,
      },
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        authCtx.login(res.data.idToken);
        history.push("/books-store/home");
      })
      .catch((err) => {
        authCtx.errorMessageHandler();
      });

  return (
    <Formik
      initialValues={{
        email: "",
        pass: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        loginRequest(values.email, values.pass);
      }}
    >
      {(formik) => (
        <div>
          <h2 className="d-inline">Login</h2>
          <button
            onClick={turnOffModalHandler}
            type="button"
            className="btn-close float-end"
            aria-label="Close"
          ></button>

          <hr />
          <Form className="mb-3">
            <TextField label="Email address" type="email" name="email" />

            <TextField label="Password" type="password" name="pass" />

            <button type="submit" className="btn btn-primary w-100 mb-2">
              Login
            </button>
            {authCtx.errorMessage && (
              <div style={{ color: "red" }}>{authCtx.errorMessage}</div>
            )}
          </Form>
          <hr />
          <p>
            Don't have an account?
            <span
              style={{ cursor: "pointer" }}
              className="text-primary"
              onClick={changeLoginHandler}
            >
              Create a new Account
            </span>
          </p>
        </div>
      )}
    </Formik>
  );
};

export default Login;
