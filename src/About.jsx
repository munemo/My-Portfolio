import { UndrawDesignerLife } from "react-undraw-illustrations";
import React from "react";

const About = () => {
  return (
    
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawDesignerLife/>
        </div>
        <div class="column"> 
          <h1 className="ui-header">About Me</h1> 
      <p >Here i will write a little about myself</p>
        </div>
      </div>
      </div>
    
  );
};

export default About;
