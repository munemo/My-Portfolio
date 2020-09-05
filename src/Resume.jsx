import React from 'react'

const Resume = ({project}) => {
  return (
    <>
      <div class="ui card">
        <div class="image">
          <img src={project.image} />
        </div>

        <div class="content">
          <h4 class="ui header">{project.school}</h4>

          <p class="description">{project.period}</p>
          <p class="description">{project.program}</p>
          
        </div>
      </div>
    </>
  );
};

export default Resume
