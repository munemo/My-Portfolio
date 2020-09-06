import { NavLink, Link } from "react-router-dom";
import React from "react";
 


const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          My Portfolio
        </Link>
      </div>
      <div className="right menu">
        <NavLink
          id="about-tab"
          className="ui item"
          activeStyle={{ fontWeight: "bold" }}
          to="/about me"
        >
          About Me
        </NavLink>
        <NavLink
          id="projects-tab"
          className="ui item"
          activeStyle={{ fontWeight: "bold" }}
          to="/projects"
        >
          My Projects
        </NavLink>
        <NavLink
          id="education-tab"
          className="ui item"
          activeStyle={{ fontWeight: "bold" }}
          to="/education"
        >
          Education
        </NavLink>
        <NavLink
          id="experience-tab"
          className="ui item"
          activeStyle={{ fontWeight: "bold" }}
          to="/experience"
        >  Experience
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
