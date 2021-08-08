import React from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/homepage.component.jsx";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignupPage from "./components/pages/sigin and signup/signin_signup";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
