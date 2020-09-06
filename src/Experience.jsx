import axios from "axios";
import React, { Component } from "react";

class Experience extends Component {
  state = {
    experience: [],
  };

  componentDidMount() {
    axios.get("./src/data/experience.json").then((response) => {
      this.setState({
        experience: response.data,
      });
    });
  }
  render() {
    const experience = this.state.experience;

    let educationList;
    if (experience.length > 0) {
      educationList = experience.map((cv) => {
        return (
          <div id={"cv-" + cv.id} key={cv.id }className="skills">
            <h5>{cv.job}</h5>
            <h5>{cv.company}</h5>
            <h5>{cv.period}</h5>
          </div>
        );
      });
    }

    return <h1 className="skills">{educationList}</h1>;
  }
}

export default Experience;
