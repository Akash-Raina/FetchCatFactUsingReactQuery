import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import About from './pages/About'
import DogFacts from './pages/DogFacts'
import CatFacts from './pages/CatFacts'
import Navbar from './pages/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

function App() {
  
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/about' element = {<About/>}/>
            <Route path = '/dogfacts' element = {<DogFacts/>}/>
            <Route path = '/catfacts' element = {<CatFacts/>}/>
          </Routes>
        </Router>
      </QueryClientProvider>

    </>
  )
}

export default App
