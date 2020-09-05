
import axios from "axios";
import React, { Component } from "react";

class Education extends Component {
  state = {
    education: []
  };


  componentDidMount() {
    
    axios.get("./src/data/experience.json").then((response) => {

      this.setState({
        education: response.data,
      });
    });
  }
render () {

  const education = this.state.education
  
  
    let cvList 
    if (education.length > 0) {
      cvList = education.map(cv => {
        return (
          <div id={'cv-' + cv.id} key={cv.id}>
          
            <h1 >{cv.company}</h1>
            <h1 >{cv.period}</h1>
            <h1 >{cv.job}</h1>
                      </div>
        );
      });
    }

  return (<h1 className="ui header">{cvList}</h1>  )
}
}
 


export default Education;
