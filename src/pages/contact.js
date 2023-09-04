import { Link } from "react-router-dom"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelopeOpen,
  FaMap,
  FaPhone,
} from 'react-icons/fa6'

import {personalData} from '../data'

const Contact = () => {
  return (
    <main>
      <div className='title'>
        {/* <h3>Contact:</h3> */}
      </div>
      <div className='personal-data'>
        <FaEnvelopeOpen className='git-icon' />
        <p className='personal-desc'>{personalData.email}</p>
        <FaMap className='git-icon' />
        <p className='personal-desc'>{personalData.location}</p>
        <FaPhone className='git-icon' />
        <p className='personal-desc'>{personalData.phone}</p>
        <FaLinkedin className='git-icon' />
        <p className='personal-desc'>
          {
            <a href={personalData.linkedin} target='_balnk'>
              Linkedin
            </a>
          }
        </p>
        <FaGithub className='git-icon' />
        <p className='personal-desc'>
          {
            <a href={personalData.github} target='_balnk'>
              Github
            </a>
          }
        </p>
      </div>  
    </main>
  )
}

export default Contact