import axios from "axios";
import React, { Component } from "react";
import ProjectCard from "./ProjectCard"
import { UndrawDashboard } from "react-undraw-illustrations";

class Projects extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        debugger
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
            <ProjectCard project={project} />
          </div>

        );
      });
    }



    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            
          </div>
          <div className="column">
            <h1 className="ui header">My Projects</h1>
            <p className ="ui text">
              Thank you for visiting my projects page. These are the projects that are part of my portfolio.
           </p>
          </div>
        </div>
        <div className="ui stackable four column grid">{projectsList}</div>
      </div>
    );
  }
}


export default Projects;