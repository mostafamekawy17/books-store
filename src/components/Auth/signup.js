import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import TextField from "../UI/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Signup = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    pass: Yup.string()
      .min(6, "Password must be at least 6 charcters")
      .max(15, "Password is too much characters"),
  });

  const authCtx = useContext(AuthContext);

  const dispatch = useDispatch();
  const changeLoginHandler = () => {
    dispatch(authActions.checkLoginMode());
  };

  const turnOffModalHandler = () => {
    dispatch(authActions.openModal(false));
  };

  const signupRequest = (email, pass) => {
    axios({
      method: "POST",
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCLDi951vIW0tJrvCBbR08F-LOOlBfMv50",
      data: {
        email: email,
        password: pass,
        returnSecureToken: true,
      },
      headers: { "content-type": "application/json" },
    })
      .then(() => {
        authCtx.signup();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        pass: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        signupRequest(values.email, values.pass);
        dispatch(authActions.createLoading);
      }}
    >
      {(formik) => (
        <div>
          <h2 className="d-inline">Signup</h2>
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

            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
          </Form>
          <hr />
          <p>
            Already have an account?
            <span
              style={{ cursor: "pointer" }}
              className="text-primary"
              onClick={changeLoginHandler}
            >
              Login
            </span>
          </p>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
