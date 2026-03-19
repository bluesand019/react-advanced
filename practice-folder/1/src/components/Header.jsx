import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../store/ThemeContextProvider'

const Header = () => {
    const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default Header
