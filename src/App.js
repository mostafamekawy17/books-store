import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Modal from "./components/UI/Modal";
import BookDetails from "./pages/BookDetails";
import HomePage from "./pages/Home";
import NewPage from "./pages/New";
import PopularPage from "./pages/Popular";
import SearchPage from "./pages/SearchPage";
import ShoppingCartPage from "./pages/ShoppingCart";

function App() {
  const modalModeIsOn = useSelector((state) => state.auth.modalMode);
  return (
    <Layout>
      {modalModeIsOn && <Modal />}
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact>
        <HomePage />
      </Route>
      <Route path="/new">
        <NewPage />
      </Route>
      <Route path="/popular">
        <PopularPage />
      </Route>
      <Route path="/shopping-cart">
        <ShoppingCartPage />
      </Route>
      <Route path="/search/:name">
        <SearchPage />
      </Route>
      <Route path="/book/:id">
        <BookDetails />
      </Route>
    </Layout>
  );
}

export default App;
