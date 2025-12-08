import React from 'react'
import "./Video.css"
import PlayVideo from '../Components/PlayVideo/PlayVideo'
import Recommended from '../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId , categoryId} = useParams();
  return (
    <div className='video-menu flex items-start px-10 gap-5'>
      <PlayVideo  videoId={videoId}/>
    
      <Recommended className="dataUpdate" categoryId={categoryId}/>
      
    </div>
  )
}

export default Video
