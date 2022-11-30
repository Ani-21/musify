import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => {
  return (
    <div className="flex-1 flex-start items-center justify-start">
      <div
        className={`${
          isActive && isPlaying ? "animate-[spin_3s_linear_infinite]" : ""
        } hidden sm:block h-16 w-16 mr-4 `}
      >
        <img
          src={activeSong?.images?.coverart}
          alt="cover art"
          className="rounded-full"
        />
      </div>

      <div className="w-[50%]">
        <p className="text-white font-bold truncate text-3xl">
          {activeSong?.title ? activeSong?.title : "No active song"}
        </p>
        <p className="truncate text-gray-300">
          {activeSong?.subtitle ? activeSong?.subtitle : "No active song"}
        </p>
      </div>
    </div>
  );
};

export default Track;
