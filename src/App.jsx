import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Chat from './pages/Chat'
import About from './pages/About'
import Privacy from './pages/Privacy'

function AnimatedRoutes() {
  const location = useLocation()
  const isChatPage = location.pathname === '/chat'

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </AnimatePresence>
      {/* Only show footer on non-chat pages */}
      {!isChatPage && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative">
        <div className="islamic-pattern"></div>
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  )
}

export default App
