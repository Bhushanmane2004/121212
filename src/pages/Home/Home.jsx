import React, { useState } from 'react'
import "./Home.css"
import Header from '../../compound/Header/Header.jsx'
import ExploreMenu from '../../compound/ExploreMenu/ExploreMenu.jsx'
import Footer from '../../compound/Footer/Footer.jsx'
import Patterns from '../../compound/Parterns/Patterns.jsx'

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Patterns />
    </div>
  )
}

export default Home
