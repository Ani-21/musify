import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ song, activeSong, isPlaying, handlePause, handlePlay }) =>
  isPlaying && activeSong.title === song.title ? (
    <FaPauseCircle onClick={handlePause} size={35} className="text-gray-300" />
  ) : (
    <FaPlayCircle onClick={handlePlay} size={35} className="text-gray-300" />
  );

export default PlayPause;
