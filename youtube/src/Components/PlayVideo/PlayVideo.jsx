import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png"
import save from "../../assets/save.png";
import share from "../../assets/share.png"
import jack from "../../assets/jack.png"
import user from "../../assets/user_profile.jpg"
import { API_KEY, value_count } from "../../server.js";


const PlayVideo = ({videoId}) => {

  const [ apidata , setApiData] = useState();

  const fetchData = async ()=>{
  const api_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}=${API_KEY}`;
    await fetch(api_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
  }

  useEffect(()=>{
    fetchData();
  })

  return (

    <div className="flex">
    
    <div className="playVideo-container mt-25">
      
       
      <div className="bg-neutral-primary-soft block w-240  left-20 p-6 border border-default rounded-base shadow-xs">
        <a href="#">
         <iframe
  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
  className="w-full h-[500px] rounded-lg"
></iframe>

        </a>
        <a href="#">
          <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
          {apidata?apidata.snippet.title:"Title Here"}
          </h5>
        </a>
        
      <div className="info flex justify-between items-center">
        <div className="left flex items-center">
            <p>1525 Views</p>
            <p>.2 days ago</p>
        </div>
        <div className="right flex items-center gap-5">
            <div className="flex items-center gap-2">
            <img src={like} className="w-5 h-5" alt="" />
            <p>125</p>
            </div>
            <div className="flex items-center gap-2">

            <img src={dislike} className="w-5 h-5" alt="" />
            <p>2</p>
            </div>
            <div className="flex items-center gap-2">

            <img src={share} className="w-5 h-5" alt="" />
            <p>Share</p>
            </div>
            <div className="flex items-center gap-2">

            <img src={save} className="w-5 h-5" alt="" />
            <p>Save</p>
            </div>

        </div>
      </div>
      <hr className="mt-3"/>
      <div className="left flex justify-between items-center gap-3 mt-10">
        <div className="flex items-center gap-2">
        <img src={jack} className="w-15 h-15 rounded-full" alt="" />
        <div className="flex flex-col mt-2 mb-5">
        <p>GreatStack</p>
        <p>1M Subscribers</p>
       
        </div>
        </div>
        <button type="button" class="text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Subscribe</button>
      </div>

      <p>Channel that makes learning Easy</p>
      <p>Subscribe GreatStack to Watch More Tutorials on web Development</p>
      <hr  className="mt-2"/>
      <div className="comments">
        <p className="mt-5">130 Comments</p>
        <div className="flex items-center gap-3">
        <img src={user} className="rounded-full w-12 h-12" alt="" />
        <div className="flex flex-col mt-15">
            <div className="flex items-center gap-3">
        <p>Jack Nicholson</p>
        <p>1 day ago</p>
        </div>
        <p>A global computer network providing a variety of information and communication facillities , consisting of interconnected networks using standardized communication protocols.</p>
        <div className="like flex items-center gap-3 mt-3">
            <img src={like} className="w-5 h-5" alt="" />
            <p>244</p>
            <img src={dislike} className="w-5 h-5" alt="" />
        </div>
        </div>
        </div>

      </div>
       <div className="comments">
        <div className="flex items-center gap-3">
        <img src={user} className="rounded-full w-12 h-12" alt="" />
        <div className="flex flex-col mt-15">
        <div className="flex items-center gap-3">
        <p>Jack Nicholson</p>
        <p>1 day ago</p>
        </div>
        <p>A global computer network providing a variety of information and communication facillities , consisting of interconnected networks using standardized communication protocols.</p>
        <div className="like flex items-center gap-3 mt-3">
            <img src={like} className="w-5 h-5" alt="" />
            <p>244</p>
            <img src={dislike} className="w-5 h-5" alt="" />
        </div>
        </div>
        </div>

      </div>
       <div className="comments">
        <div className="flex items-center gap-3">
        <img src={user} className="rounded-full w-12 h-12" alt="" />
        <div className="flex flex-col mt-15">
        <div className="flex items-center gap-3">
        <p>Jack Nicholson</p>
        <p>1 day ago</p>
        </div>
        <p>A global computer network providing a variety of information and communication facillities , consisting of interconnected networks using standardized communication protocols.</p>
        <div className="like flex items-center gap-3 mt-3">
            <img src={like} className="w-5 h-5" alt="" />
            <p>244</p>
            <img src={dislike} className="w-5 h-5" alt="" />
        </div>
        </div>
        </div>

      </div>
       <div className="comments">
        <div className="flex items-center gap-3">
        <img src={user} className="rounded-full w-12 h-12" alt="" />
        <div className="flex flex-col mt-15">
        <div className="flex items-center gap-3">
        <p>Jack Nicholson</p>
        <p>1 day ago</p>
        </div>
        <p>A global computer network providing a variety of information and communication facillities , consisting of interconnected networks using standardized communication protocols.</p>
        <div className="like flex items-center gap-3 mt-3">
            <img src={like} className="w-5 h-5" alt="" />
            <p>244</p>
            <img src={dislike} className="w-5 h-5" alt="" />
        </div>
        </div>
        </div>

      </div>
       <div className="comments">
        <div className="flex items-center gap-3">
        <img src={user} className="rounded-full w-12 h-12" alt="" />
        <div className="flex flex-col mt-15">
        <div className="flex items-center gap-3">
        <p>Jack Nicholson</p>
        <p>1 day ago</p>
        </div>
        <p>A global computer network providing a variety of information and communication facillities , consisting of interconnected networks using standardized communication protocols.</p>
        <div className="like flex items-center gap-3 mt-3">
            <img src={like} className="w-5 h-5" alt="" />
            <p>244</p>
            <img src={dislike} className="w-5 h-5" alt="" />
        </div>
        </div>
        </div>

      </div>
       <div className="comments">
        <div className="flex items-center gap-3">
        <img src={user} className="rounded-full w-12 h-12" alt="" />
        <div className="flex flex-col mt-15">
        <div className="flex items-center gap-3">
        <p>Jack Nicholson</p>
        <p>1 day ago</p>
        </div>
        <p>A global computer network providing a variety of information and communication facillities , consisting of interconnected networks using standardized communication protocols.</p>
        <div className="like flex items-center gap-3 mt-3">
            <img src={like} className="w-5 h-5" alt="" />
            <p>244</p>
            <img src={dislike} className="w-5 h-5" alt="" />
        </div>
        </div>
        </div>

      </div>
       <div className="comments">
        <div className="flex items-center gap-3">
        <img src={user} className="rounded-full w-12 h-12" alt="" />
        <div className="flex flex-col mt-15">
         <div className="flex items-center gap-3">
        <p>Jack Nicholson</p>
        <p>1 day ago</p>
        </div>
        <p>A global computer network providing a variety of information and communication facillities , consisting of interconnected networks using standardized communication protocols.</p>
        <div className="like flex items-center gap-3 mt-3">
            <img src={like} className="w-5 h-5" alt="" />
            <p>244</p>
            <img src={dislike} className="w-5 h-5" alt="" />
        </div>
        </div>
        </div>

      </div>
       <div className="comments">
        <div className="flex items-center gap-3">
        <img src={user} className="rounded-full w-12 h-12" alt="" />
        <div className="flex flex-col mt-15">
        <div className="flex items-center gap-3">
        <p>Jack Nicholson</p>
        <p>1 day ago</p>
        </div>
        <p>A global computer network providing a variety of information and communication facillities , consisting of interconnected networks using standardized communication protocols.</p>
        <div className="like flex items-center gap-3 mt-3">
            <img src={like} className="w-5 h-5" alt="" />
            <p>244</p>
            <img src={dislike} className="w-5 h-5" alt="" />
        </div>
        </div>
        </div>

      </div>
      </div>
    

    </div>
    </div>
    
  );
};

export default PlayVideo;
