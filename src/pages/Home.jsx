import React from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";

const Home = () => {
  return (
    <>
      <div className="max-w-4xl mt-16 lg:mx-auto mx-4">
        {/* Welcome Section */}
        <div className="my-4">
          <h3 className="text-2xl mb-3 font-extrabold text-gray-900">
            Welcome to EquityGPT!
          </h3>
          <p className="font-semibold text-base text-gray-700">
            You can now ask questions to search through Earnings Call
            Transcripts!
          </p>
          <div className="border-l-4 text-sm border-green-300 p-2">
            {/* Beta Version Notice */}
            Please note: This is a beta version. We are in the progress of
            adding more data and improving the search
          </div>
        </div>

        {/* Filter Component */}
        <Filter />
      </div>
    </>
  );
};

export default Home;
