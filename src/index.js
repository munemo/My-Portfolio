import { Switch, Route, BrowserRouter } from "react-router-dom"
import React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import Projects from "./Projects";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {

  return (
 <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Hello}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/projects" component={Projects}></Route>
    </Switch>
    <Footer />
</>
  );

};
 
ReactDOM.render( <BrowserRouter><App /></BrowserRouter>,document.getElementById("app")
);
