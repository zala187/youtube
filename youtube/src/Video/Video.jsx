import React from 'react'
import "./Video.css"
import PlayVideo from '../Components/PlayVideo/PlayVideo'
import Recommended from '../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId , categoryId} = useParams();
  return (
    <div className='video-menu flex flex-col items-start px-10 gap-5'>
      <PlayVideo  videoId={videoId}/>
    
      <Recommended className="dataUpdate grid lg:grid-cols-2" categoryId={categoryId}/>
      
    </div>
  )
}

export default Video
