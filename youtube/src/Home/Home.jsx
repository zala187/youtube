import React, { useState } from 'react'
import "./Home.css"
import Sidebar from '../Components/Sidebar/Sidebar'

const Home = () => {
  const [category , setCategory] = useState(0);
  return (
    <div>
      <Sidebar category={category} setCategory={setCategory} />
     
    </div>
  )
}

export default Home
