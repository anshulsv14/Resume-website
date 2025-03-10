
import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Insert from './pages/Insert'
import Display from './pages/Display'
import Card from './pages/Card'



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='home' element={<Home />}/>
        <Route path='insert' element={<Insert/>}/>
        <Route path='display' element={<Display />}/>
        <Route path='card' element={<Card />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
