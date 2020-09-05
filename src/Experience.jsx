import React from 'react'

const Experience = ({project}) => {
  return (
    <>
      <div class="ui card">
        <div class="image">
          <img src={project.company} />
        </div>

        <div class="content">
          <h3 class="ui header">{project.job}</h3>

          <div class="description">{project.period}</div>
        </div>
      </div>
    </>
  )
}

export default Experience