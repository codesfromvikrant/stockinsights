import React from "react";
import data from "../data";
import { nanoid } from "nanoid";

const CallTranscript = ({ filteredData }) => {
  const transcripts = filteredData.map((el) => {
    return (
      <div key={nanoid()} className="md:my-4 sm:my-5 my-6">
        <div className="flex justify-start items-center flex-wrap md:gap-4 sm:gap-3 gap-2">
          <p className="text-blue-600 underline font-semibold cursor-pointer">
            {el.heading}
          </p>

          <div className="flex justify-start items-center gap-2 text-gray-800 bg-gray-100 py-2 px-3 rounded-md">
            <p>Conference Call :</p>
            <div className="">FY{el["time-periode"]}</div>
          </div>

          <button className="p-2 shadow-xl border-2 border-gray-200 rounded-md">
            View insights
          </button>
        </div>
        <div className="mt-3 text-gray-800">{el.subheading}</div>
      </div>
    );
  });

  return (
    <div className="my-5">
      <h3 className="text-gray-900 font-extrabold text-xl">
        Latest Concall Transcripts
      </h3>
      {transcripts}
    </div>
  );
};

export default CallTranscript;
