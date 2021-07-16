import React from "react";
import "./App.css";
import Homepage from "./components/pages/homepage/homepage.component.jsx";
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
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
