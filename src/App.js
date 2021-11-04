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
      <Route path="/books-store" exact>
        <Redirect to="/books-store/home" />
      </Route>
      <Route path="/books-store/home" exact>
        <HomePage />
      </Route>
      <Route path="/books-store/new">
        <NewPage />
      </Route>
      <Route path="/books-store/popular">
        <PopularPage />
      </Route>
      <Route path="/books-store/shopping-cart">
        <ShoppingCartPage />
      </Route>
      <Route path="/search/:name">
        <SearchPage />
      </Route>
      <Route path="/books-store/book/:id">
        <BookDetails />
      </Route>
      <Route path="*">
        <Redirect to="/books-store/home" />
      </Route>
    </Layout>
  );
}

export default App;
