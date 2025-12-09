import React, { useState } from 'react'
import "./Home.css"
import Sidebar from '../Components/Sidebar/Sidebar'
import Feed from '../Components/Feed/Feed';

const Home = () => {
  const [category , setCategory] = useState(0);
  return (
    <div>
      <Sidebar category={category} setCategory={setCategory} />
      <div className="p-4 sm:ml-64 mt-14">
      <Feed category={category}/>
      </div>
     
    </div>
  )
}

export default Home
