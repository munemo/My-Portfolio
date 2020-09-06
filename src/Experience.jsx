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
          <div id={"cv-" + cv.id} key={cv.id}>
            <h1>{cv.job}</h1>
            <h1>{cv.company}</h1>
            <h1>{cv.period}</h1>
          </div>
        );
      });
    }

    return <h1>{educationList}</h1>;
  }
}

export default Experience;
