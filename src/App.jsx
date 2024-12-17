import React from 'react'
import Header from './components/Navbar'
import "./app.scss"
import Hero from './components/Hero'
import About from './components/About'
import Border from './components/Border'

const App = () => {
  return (
    <div className="app">
      
    <Header/>
    <Hero/>
    <Border/>
    <About/>
    </div>

  )
}

export default App