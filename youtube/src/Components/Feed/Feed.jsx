import React, { useEffect, useState } from 'react';
import "./Feed.css";
import { Link } from 'react-router-dom';
import moment from 'moment';
import { value_count } from '../../server';

const Feed = ({ category }) => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const [videoData, setVideoData] = useState([]);

  const fetchData = async () => {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;


      const res = await fetch(url);
      const data = await res.json(); // ✅ FIXED (await required)

      console.log(data);

      setVideoData(data.items || []); // ✅ FIXED (set data to state)
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className='feedMenu grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-4'>
      {videoData.map((list, index) => (
        <Link to={`/video/${list.id}`} key={index}>
          <div className="bg-neutral-primary-soft w-full h-full border border-default rounded-base shadow-xs flex flex-col">

            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <img
                src={list.snippet?.thumbnails?.medium?.url}
                alt={list.snippet?.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-3">
              <p className="text-body">{list.snippet?.title}</p>
              <p>{list.snippet?.channelTitle}</p>
              <p>
                {value_count(list.statistics?.viewCount)} views •{" "}
                {moment(list.snippet?.publishedAt).fromNow()}
              </p>
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
