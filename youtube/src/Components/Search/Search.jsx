import React, { useState } from "react";
import searchIcon from "../../assets/search.png"; // aapka search icon

const SidebarSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative mb-4">
      {/* Search Icon for small screens */}
      <button
        className="sm:hidden p-2"
        onClick={() => setOpen(!open)}
      >
        <img src={searchIcon} alt="Search" className="w-6 h-6" />
      </button>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className={`border border-gray-300 rounded-md p-2 w-full transition-all duration-300
          ${open ? "block absolute top-0 left-0 z-50 sm:relative sm:block" : "hidden sm:block"}
        `}
      />
    </div>
  );
};

export default SidebarSearch;
