import React from "react";

const SideBar = () => {
  return (
    <div className="w-96 bg-gray-500 text-white min-h-screen">
      <h3 className="text-center text-2xl font-semibold">Dashboard</h3>
      <div className="text-center">
        <button className="btn w-11/12 mt-4">Setting</button>
        <button className="btn w-11/12 mt-4">Menu</button>
      </div>
    </div>
  );
};

export default SideBar;
