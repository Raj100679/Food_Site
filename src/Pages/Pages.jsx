import React from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Details from './Details'
import Home from './Home'
import Search from './Search'
import { AnimatePresence } from "framer-motion"

function Pages() {
  const location= useLocation();

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cuisine/:type' element={<Cuisine />}></Route>
          <Route path='/search/:search' element={<Search />}></Route>
          <Route path='/details/:name' element={<Details />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Pages