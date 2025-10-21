import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeProvider'

const ThemeButton = () => {

    const { clicked, toggleTheme, theme, handleColor} = useContext(ThemeContext);
  return (
    <>
    <div className={`theme-change ${theme}`}>
        <button className="toggle-button" onClick={toggleTheme} onMouseDown={handleColor} style={{backgroundColor: clicked ? 'white' : 'rgba(255, 255, 255, 0.51)'}}>
          {clicked ? (
            <>
          <svg id="moon-icon">
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          </>
          ) : (
          <svg className="sun-icon">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          )}
        </button>
        </div>
    </>
  )
}

export default ThemeButton
