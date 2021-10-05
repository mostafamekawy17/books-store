import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDom from "react-dom";
import Login from "../Auth/Login";
import "./Modal.css";
import { authActions } from "../../store/auth-slice";

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
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>
          <Login />
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
