import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import AuthContext from "./store/auth-context";
import { getCart } from "./store/cart-slice";

function App() {
  const modalModeIsOn = useSelector((state) => state.auth.modalMode);
  const tokenId = useContext(AuthContext).token;
  const dispatch = useDispatch();
  useEffect(() => {
    if (tokenId) {
      dispatch(getCart());
    }
  }, [dispatch, tokenId]);
  return (
    <Layout>
      {modalModeIsOn && <Modal />}
      <Route path="/" exact>
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
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Layout>
  );
}

export default App;
