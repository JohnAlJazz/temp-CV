import React, { useState, useEffect } from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { pages } from '../data'
import { Link } from 'react-router-dom'

const getLocalStorage = () => {
  const mode = localStorage.getItem('mode')
  if (mode) {
    return mode
  }
  return 'dark-mode'
}

const Navbar = () => {
  const [mode, setMode] = useState(getLocalStorage())

  useEffect(() => {
    document.documentElement.className = mode
    localStorage.setItem('mode', mode)
  }, [mode])

  const changeMode = () => {
    mode === 'light-mode'
    ? setMode('dark-mode')
    : setMode('light-mode')
  }

  return (
    <>
      <button className='btn' onClick={changeMode}>
        <FaLightbulb />
      </button>
      <div className='title'>
        <h2>Yonatan Aloni CV</h2>
        <div className='underline' />
      </div>
      {pages.map((page, i) => (
        <div className='nav-links' key={i}>
          <Link to={page.url}>{page.page}</Link>
        </div>
      ))}
    </>
  )
}

export default Navbar
