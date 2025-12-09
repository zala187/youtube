import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import save from "../../assets/save.png";
import share from "../../assets/share.png";
import user from "../../assets/user_profile.jpg";
import moment from "moment";
import { value_count } from "../../server";

const PlayVideo = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const fetchVideoData = async () => {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );
      const data = await res.json();
      if (data.items && data.items.length > 0) {
        setVideoData(data.items[0]);
      } else {
        console.warn("No video data returned, using mock");
        setVideoData(mockVideo); // fallback mock
      }
    } catch (error) {
      console.error("Video API error:", error);
      setVideoData(mockVideo); // fallback mock
    }
  };

  const fetchChannelData = async (channelId) => {
    if (!channelId) return;
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`
      );
      const data = await res.json();
      if (data.items && data.items.length > 0) {
        setChannelData(data.items[0]);
      } else {
        console.warn("No channel data returned, using fallback");
      }
    } catch (error) {
      console.error("Channel API error:", error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (videoData?.snippet?.channelId) {
      fetchChannelData(videoData.snippet.channelId);
    }
  }, [videoData]);

  // --- MOCK fallback if API fails ---
  const mockVideo = {
    snippet: {
      title: "Sample Video",
      description: "This is a mock description",
      channelTitle: "Sample Channel",
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      publishedAt: new Date().toISOString(),
      thumbnails: { default: { url: "https://via.placeholder.com/120" } },
    },
    statistics: { viewCount: 12345, likeCount: 456, commentCount: 12 },
  };

  return (
    <div className="playVideo-container w-full mt-25">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full h-[500px] rounded-lg"
      ></iframe>

      <h3 className="mt-6 mb-2 text-2xl font-semibold tracking-tight">
        {videoData?.snippet?.title || "Title Here"}
      </h3>

      <p>
        {value_count(videoData?.statistics?.viewCount || 0)} views •{" "}
        {moment(videoData?.snippet?.publishedAt || new Date()).fromNow()}
      </p>

      <div className="flex items-center justify-between gap-4 mt-4">
        <div className="flex items-center gap-3">
        <img
          src={videoData?.snippet?.thumbnails?.default?.url || user}
          className="w-12 h-12 rounded-full"
          alt=""
        />
        <div className="flex-col">
          <p>{videoData?.snippet?.channelTitle || "Channel Name"}</p>
          <p>{value_count(channelData?.statistics?.subscriberCount || 0)} Subscribers</p>
          </div>
       </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Subscribe</button>
      </div>

      <p className="mt-4">
        {videoData?.snippet?.description?.slice(0, 250) || "Description here"}
      </p>
    </div>
  );
};

export default PlayVideo;
