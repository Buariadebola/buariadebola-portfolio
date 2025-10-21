import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProjectPage from './PageComponents/ProjectPage'
import AboutPage from './PageComponents/AboutPage'
import ContactPage from './PageComponents/ContactPage'
import ServicesPage from './PageComponents/ServicesPage'
import { ThemeProvider } from './Context/ThemeProvider'
import { EmailProvider } from './Context/EmailProvider'
import HomePage from './components/HomePage'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <>
    <EmailProvider>
      <ThemeProvider>
        <AnimatePresence>
      <Routes>
          <Route path="/" element={<HomePage />}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path="/Projects" element={<ProjectPage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </AnimatePresence>
    </ThemeProvider>
    </EmailProvider>
    
    </>
  )
}

export default App
