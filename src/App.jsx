import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/nav'

function App() {
  return (
    <div>
      
       <Router>
    
            <Routes>
              <Route path='/' element={<Home/>} />
            </Routes>
       </Router>
    </div>
  )
}

export default App