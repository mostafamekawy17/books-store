import { Fragment } from "react";
import Footer from "../../parts/Footer";
import Header from "../../parts/Header";
import "./Layout.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="layout__main container">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
