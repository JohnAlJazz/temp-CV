import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

import {data} from '../data'

function Projects() {
  // eslint-disable-next-line
  const [projects, setProjects] = useState(data)
  const [idx, setIdx] = useState(0)  

  const { collaborate, language, desc, period, link } = projects[idx]

  return (
    <section className='section'>      
      <div className='jobs-center'>
        <div className='btn-container'>
          {projects.map((project, index) => {
            return (
              <button
                key={project.id}
                onClick={() => setIdx(index)}
                className={`job-btn ${index === idx && 'active-btn'}`}
              >
                {project.title}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{language}</h3>
          <h4>{collaborate}</h4>
          <p className='job-date'>{period}</p>
          <div className='job-desc'>
            <FaAngleDoubleRight className='job-icon' />
            <p>{desc}</p>
          </div>
          <div className='job-link'>
            {link && <FaGithub className='git-icon' />}
            {link &&
              <a href={link} target='_blank'>
                {link}
              </a>
            }
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects