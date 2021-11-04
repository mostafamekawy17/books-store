import { Fragment, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDom from "react-dom";
import Login from "../Auth/Login";
import "./Modal.css";
import { authActions } from "../../store/auth-slice";
import Signup from "../Auth/signup";
import Loading from "./Loading";
import AuthContext from "../../store/auth-context";

const Backdrop = () => {
  const dispatch = useDispatch();
  const turnOffModalHandler = () => {
    dispatch(authActions.openModal(false));
  };
  return <div className="backdrop" onClick={turnOffModalHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal__overlay">
      <div className="content">{props.children}</div>
    </div>
  );
};

const Modal = () => {
  const portalElement = document.getElementById("overlays");
  const isLogin = useSelector((state) => state.auth.isLogin);
  const isLoading = useContext(AuthContext).isLoading;

  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>
          {isLoading ? <Loading /> : isLogin ? <Login /> : <Signup />}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
