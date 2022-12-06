import React from 'react'
import Popular from '../Components/Popular'
import Veggies from '../Components/Veggies'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      <Popular />
      <Veggies />
    </motion.div>
  )
}

export default Home