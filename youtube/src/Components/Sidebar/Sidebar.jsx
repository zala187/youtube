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

const categories = [
  { id: 0, name: "Home", icon: home },
  { id: 20, name: "Game", icon: game_icon },
  { id: 2, name: "AutoMobiles", icon: autoMobiles },
  { id: 17, name: "Sports", icon: sports },
  { id: 24, name: "Entertainment", icon: entertainment },
  { id: 28, name: "Technology", icon: tech },
  { id: 10, name: "Music", icon: music },
  { id: 22, name: "Blogs", icon: blogs },
  { id: 25, name: "News", icon: news },
];

const subscribed = [
  { name: "PewDiePie", icon: jack },
  { name: "MrBeast", icon: simon },
  { name: "Justin Bieber", icon: tom },
  { name: "5-minute Crafts", icon: megan },
  { name: "Nas Daily", icon: cameron },
];

const Sidebar = ({ category, setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Mobile toggle */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-gray-200 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl">{isOpen ? "✖" : "☰"}</span>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 mt-20 w-64 h-full bg-white border-r border-gray-200 p-4 transition-transform transform z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => {
                  setCategory(cat.id);
                  setIsOpen(false); // close on mobile
                }}
                className={`flex items-center gap-3 w-full p-2 rounded hover:bg-gray-200 ${
                  category === cat.id ? "bg-gray-300 font-semibold" : ""
                }`}
              >
                <img src={cat.icon} alt={cat.name} className="w-6 h-6" />
                {cat.name}
              </button>
            </li>
          ))}
        </ul>

        <hr className="my-4" />
        <p className="text-gray-500 font-semibold mb-2">Subscribed</p>
        <ul className="flex flex-col gap-2">
          {subscribed.map((sub, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <img
                src={sub.icon}
                alt={sub.name}
                className="w-8 h-8 rounded-full"
              />
              <span>{sub.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 sm:ml-64 p-4 mt-14">
        <Feed category={category} />
      </main>
    </div>
  );
};

export default Sidebar;
