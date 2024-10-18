"use client";

import { CirclesWithBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <div className=" flex items-center justify-center flex-col h-screen">
        <CirclesWithBar
          height="80"
          width="80"
          color="#3491F5"
          outerCircleColor="#3491F5"
          innerCircleColor="#3491F5"
          barColor="#3491F5"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Loading;
