import { Switch, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import About from "./About";
import Projects from "./Projects";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import Education from "./Education"
import Experience from "./Experience"


const App = () => {


  

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about me" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/education" component={Education}></Route>
        <Route exact path="/experience" component={Experience}></Route>
      </Switch>
      <Footer />
    </>
  );

};
 
ReactDOM.render( <BrowserRouter><App /></BrowserRouter>,document.getElementById("app")
);
