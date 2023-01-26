import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Style from "./Style.css";
import Home from "./Home";
import Feedback from "./Feedback";
import Login from "./Login";
import About from "./About";
import Menubar from "./Menubar";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <Menubar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/:uname" component={About} />
        <Route path="/feedback" component={Feedback} />
      </Switch>
    </>
  );
};
export default App;
