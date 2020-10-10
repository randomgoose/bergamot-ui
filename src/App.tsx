import React from "react";
import Components from "./components/pages/Components";
import Demo from "./components/pages/Demo";
import "./styles.scss";
import { Link, Switch, Route } from "react-router-dom";

const App = () => {
  const routes = (
    <Switch>
      <Route exact path="/components">
        <Components />
      </Route>
      <Route exact path="/demo">
        <Demo />
      </Route>
    </Switch>
  )


  return (
    <div className={"App"}>
      <Link to={"/components"}>Components</Link>
      <Link to={"/demo"}>Demo</Link>
      { routes }
    </div>
  )
}

export default App;