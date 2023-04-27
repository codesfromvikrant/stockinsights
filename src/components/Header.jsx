import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 border-b-2 border-gray-200 py-4">
      <div className="flex justify-between items-center flex-wrap max-w-4xl mx-auto">
        <div className="flex justify-start items-center gap-2">
          <p className="text-2xl font-semibold text-gray-900">StockInsights</p>
          <div className="bg-gray-900 text-white font-normal py-1 px-4 text-xs tracking-widest rounded-md">
            Beta
          </div>
        </div>
        <button className="text-gray-900 text-sm border-gray-900 border-2 rounded-md font-medium py-2 px-4">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
