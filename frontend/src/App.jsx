import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from "./components/header"
import Projects from './pages/Projects'
import Resume from './pages/Resume'

function App() {

  return (
    <>
      <Header />
      <Resume/>
    </>
  )
}

export default App
