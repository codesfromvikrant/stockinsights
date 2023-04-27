import React, { useState } from "react";
import { nanoid } from "nanoid";

const Selectors = ({ stockdata, timedata, handleChange }) => {
  const [stocksearch, setStockSearch] = useState("");

  const stockResults = stockdata.filter((el) => {
    return el.stock.toLowerCase().includes(stocksearch.toLowerCase());
  });
  const stocks = stockResults.map((el) => {
    return (
      <div key={nanoid()} className="flex justify-start items-center gap-2 p-2">
        <input
          type="checkbox"
          value={el.stock}
          checked={el.checked}
          name="stock"
          className="w-4 h-4"
          onChange={handleChange}
        />
        <label htmlFor={el.stock}>{el.stock}</label>
      </div>
    );
  });

  const time = timedata.map((el) => {
    return (
      <div key={nanoid()} className="flex justify-start items-center gap-2 p-2">
        <input
          type="checkbox"
          value={el.time}
          checked={el.checked}
          name="time"
          className="w-4 h-4"
          onChange={handleChange}
        />
        <label htmlFor={el.time}>{el.time}</label>
      </div>
    );
  });

  const toggleDropdown = (event) => {
    const closest = event.target.closest(".drop");
    closest.nextSibling.classList.toggle("hidden");
  };

  return (
    <div className="flex justify-start items-center sm:gap-4 gap-2 flex-wrap">
      <p className="font-semibold">Search Within :</p>
      <div className="w-40 relative">
        <div
          onClick={toggleDropdown}
          className="drop bg-gray-200 py-2 px-4 rounded-md cursor-pointer flex justify-between items-center"
        >
          <p>Select Stocks</p>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="hidden w-40 bg-gray-100 absolute z-50 justify-start items-start flex-col shadow-md">
          <input
            type="text"
            placeholder="Search Stocks..."
            value={stocksearch}
            onChange={(e) => setStockSearch(e.target.value)}
            className="w-full p-2 outline-1 outline-blue-500"
          />
          {stocks}
        </div>
      </div>

      <div className="w-40 relative">
        <div
          onClick={toggleDropdown}
          className="drop bg-gray-200 py-2 px-4 rounded-md cursor-pointer flex justify-between items-center"
        >
          <p>Select Time</p>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="hidden w-40 bg-gray-100 absolute z-40 justify-start items-start flex-col shadow-md">
          {time}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Selectors);
