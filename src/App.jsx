import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProjectPage from './PageComponents/ProjectPage'
import AboutPage from './PageComponents/AboutPage'
import ContactPage from './PageComponents/ContactPage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/Projects" element={<ProjectPage />}/>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </>
  )
}

export default App
