import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 bg-black w-full left-0 flex">
      <div className="flex w-3/12 items-center justify-center font-bold bg-red-500">
        <h1 className="text-white text-3xl py-2">Freshly</h1>
        <h1 className="text-green-500 text-3xl py-2">Harvested</h1>
      </div>
    </div>
  );
};

export default Header;
