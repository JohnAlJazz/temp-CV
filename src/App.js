import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Projects, Contact} from './pages'
import {Navbar, Home} from "./components"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
