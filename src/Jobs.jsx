import axios from "axios";
import React, { Component } from "react";
import Experience from "./Experience";

class Work extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    axios.get('./src/data/experience.json')
      .then(response => {
        //  debugger
        this.setState({
          projects: response.data

        })

      }

      )


  }


  render() {
    const projects = this.state.projects;
    let projectsList;
    if (projects.length > 0) {
      projectsList = projects.map((project) => {
        return (

          <div id={"project-" + project.id} key={project.id}>
            <Experience project={project} />
          </div>

        );
      });
    }



    return (
      <div className="ui main container" >
        <div className="ui stackable two column grid">
          <div className="column">

          </div>

        </div>
        <div className="ui stackable four column grid">{projectsList}</div>
      </div>
    );
  }
}


export default Work;