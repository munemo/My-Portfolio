import {UndrawDashboard} from "react-undraw-illustrations"
import ProjectCard from "./ProjectCard";
import React, { Component } from "react";
import axios from "axios";

class Projects extends Component {
  state = {
    projects: [ ],
  };
  
  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map((project) => {
        return (

          <div className="ui main container ">
            <h1 id="projects-header" className="ui header">
              My Projects
               </h1>
            <div className="ui stackable four column grid">{projectsList}</div>
          </div>
        );

      });

    }

    return (
      

      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            <UndrawDashboard />
          </div>
          <div className="column">
            <h1 className="ui header">My projects</h1>
            <p>hha hahah hahaha</p>
          </div>
        </div>
        <div className="ui stackable four column grid">{projectsList}</div>
      </div>


    );
  }
}


export default Projects;