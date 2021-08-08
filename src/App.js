import React from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/homepage.component.jsx";
import ShopPage from "./components/pages/shop/shop.component";
import { Route, Switch } from "react-router-dom";

function Hats() {
  return (
    <div>
      <h1>Henlo</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
