import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Searchbar from './components/Searchbar/Searchbar'
import BuildingGrid from './components/BuildingGrid/BuildingGrid'


function App() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <BuildingGrid />

    </>
  )
}

export default App
