import React from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/homepage.component.jsx";
import ShopPage from "./components/pages/shop/shop.component";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
