import React from 'react'
import MenuBox from './MenuBox'
import Service from './Service'
import Projects from './Projects'
import PageUp from './PageUp'
import UI from './UI'
import Social from './Social'
import NavBar from '../components/NavBar'
import Hero from './Hero'
import SideBar from './SideBar'
import RecentProject from './RecentProject'


const HomePage = () => {
     
  return (
    <div style={{position: 'relative', overflow: 'hidden'}}>
    <div className='home-page'>
      <NavBar/>
      <SideBar/>
    <Hero />
    <MenuBox />
    <Service />
    <Projects />
    <RecentProject/>
    <PageUp />
    <UI/>
    <Social />
    </div>
    </div>

  )
}

export default HomePage
