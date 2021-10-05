import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import TextField from "../UI/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    pass: Yup.string()
      .min(6, "Password must be at least 6 charcters")
      .max(15, "Password is too much characters"),
  });
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  const changeSignupHandler = () => {
    dispatch(authActions.checkLoginMode());
  };

  const changeLoginHandler = () => {
    dispatch(authActions.checkLoginMode());
  };

  const turnOffModalHandler = () => {
    dispatch(authActions.openModal(false));
  };

  const toSwitchCaseActions = isLogin ? (
    <p>
      Don't have an account?{" "}
      <span className="text-primary" onClick={changeSignupHandler}>
        Create a new Account
      </span>
    </p>
  ) : (
    <p>
      Already have an account?{" "}
      <span className="text-primary" onClick={changeLoginHandler}>
        Login
      </span>
    </p>
  );

  return (
    <Formik
      initialValues={{
        email: "",
        pass: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <div>
          <h2 className="d-inline">{isLogin ? "Login" : "Signup"}</h2>
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
              {isLogin ? "Login" : "Signup"}
            </button>
          </Form>
          <hr />
          {toSwitchCaseActions}
        </div>
      )}
    </Formik>
  );
};

export default Login;
