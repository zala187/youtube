import React, { useState } from "react";
import Feed from "../Feed/Feed";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import autoMobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";


const subscribed = [
  { name: "PewDiePie", icon: jack },
  { name: "MrBeast", icon: simon },
  { name: "Justin Bieber", icon: tom },
  { name: "5-minute Crafts", icon: megan },
  { name: "Nas Daily", icon: cameron },
];

const Sidebar = ({ category, setCategory }) => {
  

  return (
   <aside id="top-bar-sidebar" className="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
      <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
         <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3" alt="Flowbite Logo" />
         <span className="self-center text-lg text-heading font-semibold whitespace-nowrap">Flowbite</span>
      </a>
      <ul className="space-y-2 font-medium">
         <li>
          <div className={`${category===0?"active":""}`}>
            <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
              <img src={home} alt="" />
               <span className="ms-3" onClick={()=>setCategory(0)}>Home</span>
            </a>
            </div>
         </li>
         <li>
          <div className={`${category===0?"active":""}`}>

            <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
              <img src={game_icon} className="w-6 h-6" alt="" />
               <span className="ms-3" onClick={()=>setCategory(20)}>Gaming</span>
            </a>
            </div>
         </li>
          <li>
          <div className={`${category===2?"active":""}`}>

            <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
              <img src={autoMobiles}  className="w-6 h-6" alt="" />
               <span className="ms-3" onClick={()=>setCategory(2)}>Automobiles</span>
            </a>
            </div>
         </li>
          <li>
          <div className={`${category===17?"active":""}`}>

            <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
              <img src={sports}  className="w-6 h-6" alt="" />

               <span className="ms-3" onClick={()=>setCategory(17)}>Sports</span>
            </a>
            </div>
         </li>
          <li>
          <div className={`${category===24?"active":""}`}>

            <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
              <img src={entertainment}  className="w-6 h-6" alt="" />

               <span className="ms-3" onClick={()=>setCategory(24)}>Entertainment</span>
            </a>
            </div>
         </li>
          <li>
          <div className={`${category===28?"active":""}`}>

            <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
              <img src={tech}  className="w-6 h-6" alt="" />

               <span className="ms-3" onClick={()=>setCategory(28)}>Technology</span>
            </a>
            </div>
         </li>
          <li>
          <div className={`${category===10?"active":""}`}>

            <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
              <img src={music}  className="w-6 h-6" alt="" />

               <span className="ms-3" onClick={()=>setCategory(10)}>Music</span>
            </a>
            </div>
         </li>
          <li>
          <div className={`${category===22?"active":""}`}>

            <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
              <img src={blogs}  className="w-6 h-6" alt="" />

               <span className="ms-3" onClick={()=>setCategory(22)}>Blogs</span>
            </a>
            </div>
         </li>
          <li>
          <div className={`${category===25?"active":""}`}>

            <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
              <img src={news}  className="w-6 h-6" alt="" />

               <span className="ms-3" onClick={()=>setCategory(25)}>News</span>
            </a>
            </div>
         </li>
         <li>
            <a href="#" className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
               <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
  );
};

export default Sidebar;
