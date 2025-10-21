import React, { useContext } from 'react'
import icon from '../assets/Images/menu1.png'
import { ThemeContext} from '../Context/ThemeProvider'

const MenuButton = () => {

  const { handleSidebar } = useContext(ThemeContext)
  return (
    <>
      <button className='menu-toggle' onClick={() => handleSidebar()}><img src={icon} alt="" /></button>
    </>
  )
}

export default MenuButton
