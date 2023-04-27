import React, { useState } from "react";
import SearchBar from "./SearchBar";
import data from "../data";
import { nanoid } from "nanoid";
import Selected from "./Selected";
import Selectors from "./Selectors";
import CallTranscript from "./CallTranscript";

const Filter = () => {
  // Extracting stock names from the data and create an array of unique stocks
  const stocknames = Array.from(new Set(data.map((el) => el["stock-name"])));
  // Creating an array of objects containing each stock and a 'checked' property
  const initialStock = stocknames.map((el) => ({ stock: el, checked: false }));

  const initialTime = [
    { time: "FY2022Q1", checked: false },
    { time: "FY2022Q2", checked: false },
    { time: "FY2022Q3", checked: false },
    { time: "FY2022Q4", checked: false },
    { time: "FY2023Q1", checked: false },
  ];

  const [stockdata, setStockdata] = useState(initialStock);
  const [timedata, setTimedata] = useState(initialTime);
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const el = event.target;

    if (el.checked) {
      console.log(el.checked);
      setSelected([...selected, { title: el.value, type: el.name }]);
    } else {
      console.log(el.checked);
      setSelected(selected.filter((el) => el.title !== event.target.value));
    }

    handleCheckBox(el.name, el.value);
  };

  const handleCheckBox = (type, title) => {
    if (type === "time") {
      setTimedata(
        timedata.map((el) => {
          if (el.time === title) {
            return { time: el.time, checked: !el.checked };
          }
          return el;
        })
      );
    } else {
      setStockdata(
        stockdata.map((el) => {
          if (el.stock === title) {
            return { stock: el.stock, checked: !el.checked };
          }
          return el;
        })
      );
    }
  };

  const filteredData = data.filter((el) => {
    if (selected.length !== 0) {
      for (let i = 0; i < selected.length; i++) {
        if (
          el["stock-name"] === selected[i].title ||
          el["time-periode"] === selected[i].title
        ) {
          return el;
        }
      }
    } else {
      return el;
    }
  });

  return (
    <section className="">
      <Selectors
        stockdata={stockdata}
        timedata={timedata}
        handleChange={handleChange}
      />
      <SearchBar />
      {selected.length > 0 && (
        <Selected
          selected={selected}
          setSelected={setSelected}
          initialTime={initialTime}
          setTimedata={setTimedata}
          initialStock={initialStock}
          setStockdata={setStockdata}
          filteredData={filteredData}
          handleCheckBox={handleCheckBox}
        />
      )}
      <CallTranscript filteredData={filteredData} />
    </section>
  );
};

export default Filter;
