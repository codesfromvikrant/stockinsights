import React from 'react'
import data from './data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'

const App = () => {
  return (
    // Wrap entire app in React Router component
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* Set home page */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;