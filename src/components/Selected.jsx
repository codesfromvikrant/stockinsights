import React from "react";
import { nanoid } from "nanoid";

const Selected = ({
  selected,
  setSelected,
  initialTime,
  setTimedata,
  initialStock,
  setStockdata,
  filteredData,
  handleCheckBox,
}) => {
  // Handle click event for removing a selected stock
  const handleClick = (event) => {
    // Getting the stock name from the previous sibling of the clicked element
    const stockName = event.target.previousSibling.textContent;
    // Removing the selected stock from the state
    setSelected(selected.filter((el) => el.title !== stockName));
    handleCheckBox(event.target.dataset.type, stockName);
  };

  const selectedStocks = selected.map((el) => {
    console.log(el.type);
    return (
      <div
        key={nanoid()}
        className="flex justify-between items-center gap-4 bg-gray-200 py-2 px-4 rounded-full"
      >
        <p className="text-sm">{el.title}</p>
        <i
          onClick={handleClick}
          data-type={el.type}
          className="fa-solid fa-xmark cursor-pointer"
        ></i>
      </div>
    );
  });

  return (
    <div className="flex justify-start items-center flex-wrap gap-2 p-2">
      {selectedStocks}
      {selectedStocks.length && (
        <button
          onClick={() => {
            setSelected([]);
            setTimedata(initialTime);
            setStockdata(initialStock);
          }}
          className="text-red-500 font-semibold bg-red-100 shadow-md py-2 px-4 rounded-full"
        >
          close all {filteredData.length} results
        </button>
      )}
    </div>
  );
};

export default Selected;
