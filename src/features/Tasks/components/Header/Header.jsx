import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between w-100">
      <div></div>
      <div className="flex">
        <button className="bg-blue-500 flex justify-center items-center p-3 text-blue-100">
          Day
        </button>
        <button>Year</button>
        <button>Settings</button>
      </div>
    </div>
  );
};

export default Header;
