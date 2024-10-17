import { useState } from 'react'
import './App.css'
import About from './pages/About'
import Header from "./components/header"
import Projects from './pages/Projects'
import Contact from './pages/Contacts'
import Experience from './pages/Experience'
import Card from  './components/card'

function App() {

  return (
    <>
      <Header />
      <Experience/>
    </>
  )
}

export default App
