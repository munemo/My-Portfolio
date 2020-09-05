import axios from "axios";
import React, { Component } from "react";
import Resume from "./Resume";

class CV extends Component {
  state = {
  experience: [],
    cv: []
  };


  componentDidMount() {
    
    axios.get("./src/data/education.json").then((response) => {
    console.log(response.data);  
      this.setState({
        cv: response.data,
      });
    });
  }
render () {

  const cv = this.state.cv
  
    let cvList 
    if (cv.length > 0) {
      cvList = cv.map(cv => {
        return (
          <div id={'cv-' + cv.id} key={cv.id}>
            <h1>{cv.school}</h1>
            <h1>{cv.program}</h1>
            <h1>{cv.period}</h1>
          </div>
        );
      });
    }

  return (
    <h1>{cvList}</h1>)
}
 }

export default CV;
