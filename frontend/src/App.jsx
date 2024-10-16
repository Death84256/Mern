import { useState } from 'react'
import './App.css'
import About from './pages/About'
import Header from "./components/header"
import Projects from './pages/Projects'
import Contact from './pages/Contacts'
import Experience from './pages/Experience'

function App() {

  return (
    <>
      <Header />
      <Experience/>
    </>
  )
}

export default App
