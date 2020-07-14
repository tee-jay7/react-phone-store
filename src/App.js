import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route>
          <Default />
        </Route>
      </Switch>
    </>
  );
}

export default App;
