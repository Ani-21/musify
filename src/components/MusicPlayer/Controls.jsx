import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handleNextSong,
  handlePrevSong,
}) => {
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
      <BsArrowRepeat
        size={20}
        color={repeat ? "red" : "white"}
        onClick={() => setRepeat((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
      {currentSongs?.length && (
        <MdSkipPrevious
          size={30}
          onClick={handlePrevSong}
          color="#fff"
          className="cursor-pointer"
        />
      )}
      {isPlaying ? (
        <BsFillPauseFill
          size={45}
          color="#fff"
          className="cursor-pointer"
          onClick={handlePlayPause}
        />
      ) : (
        <BsFillPlayFill
          size={45}
          color="#fff"
          className="cursor-pointer"
          onClick={handlePlayPause}
        />
      )}
      {currentSongs?.length && (
        <MdSkipNext
          size={30}
          onClick={handleNextSong}
          color="#fff"
          className="cursor-pointer"
        />
      )}
      <BsShuffle
        size={20}
        color={shuffle ? "red" : "white"}
        onClick={() => setShuffle((prev) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
    </div>
  );
};

export default Controls;
