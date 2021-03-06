import axios from "axios";
import React, { Component } from "react";

class Education extends Component {
  state = {
  education: [],
  
  };


  componentDidMount() {
    
    axios.get("./src/data/education.json").then((response) => {
     
      this.setState({
        education: response.data,
      });
    });
  }
render () {

  const education = this.state.education
  
    let educationList 
    if (education.length > 0) {
      educationList = education.map((cv) => {
        return (
          <div id={"cv-" + cv.id} key={cv.id} className="skills">
            <div class="center-div">
</div>
            <h5 className="education school">{cv.school}</h5>
            <h5 className="education program">{cv.program}</h5>
            <h5 className="education period">{cv.period}</h5>
          </div>
        );
      });
    }

  return (
    <h1 className="education-tab">{educationList}</h1>

  
  )
}
 }

export default Education;
