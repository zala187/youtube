import React, { useEffect, useState } from 'react'
import "./Feed.css"
import { Link } from 'react-router-dom'
import { API_KEY, value_count } from "../../server.js";
import moment from 'moment';


const Feed = ({ category }) => {
  
  const [videoData, setVideoData] = useState([]);

  const fetchData = async () => {
    try {
      const video_list = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

      const res = await fetch(video_list);
      const data = await res.json();
      setVideoData(data.items || []);

    } catch (error) {
      console.log("API Error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className='feedMenu grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        {videoData.map((list, index) => {
          return (
            <Link to={`/video/${list.id}`} key={index}>
             <div className="bg-neutral-primary-soft w-full h-full border border-default rounded-base shadow-xs flex flex-col">

  <div className="w-full aspect-video overflow-hidden rounded-lg">
          <img
            src={list.snippet.thumbnails.medium.url}
            alt={list.snippet.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>


                <div className="p-3">
                  <p className="text-body">{list.snippet.title}</p>
                  <p>{list.snippet.channelTitle}</p>

                  <div className="flex items-center justify-between">
                    <p>{value_count(list.statistics.viewCount)} views &bull; {moment(list.snippet.publishedAt).fromNow()}</p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    
  )
}

export default Feed
