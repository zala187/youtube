import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Video from './Video/Video';

const App = () => {
  const [sidebar , setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path="/video/:videoId" element={<Video/>} />
      </Routes>
    </div>
  );
};

export default App;