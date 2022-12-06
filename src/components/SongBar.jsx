import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";

const SongBar = ({
  i,
  artistId,
  song,
  handlePause,
  handlePlay,
  isPlaying,
  activeSong,
}) => {
  return (
    <div
      className={`w-full flex flex-row px-4 py-2 my-1 items-center hover:bg-[#4c426e] rounded-lg ${
        activeSong?.title === song?.title ? "bg-[#4c426e]" : "bg-transparent"
      } cursor-pointer`}
    >
      <h3 className="text-white front-semibold mr-4">{i + 1}.</h3>
      <div className="flex-1 flex flex-row items-center justify-between">
        <img
          src={
            artistId
              ? song?.attributes?.artwork?.url
                  .replace("{w}", "125")
                  .replace("{h}", "125")
              : song?.images?.coverart
          }
          alt={song?.title}
          className="w-20 h-20 rounded-lg"
        />

        <div className="flex-1 flex flex-col justify-center ml-4">
          {!artistId ? (
            <Link to={`/songs/${song?.key}`}>
              <p className="text-white text-semibold mb-1">{song?.title}</p>
            </Link>
          ) : (
            <p className="text-xl font-bold text-white">
              {song?.attributes?.name}
            </p>
          )}

          <p className="text-base text-gray-300 mt-1">
            {artistId ? song?.attributes?.albumName : song?.subtitle}
          </p>
        </div>
      </div>

      {!artistId ? (
        <PlayPause
          song={song}
          activeSong={activeSong}
          isPlaying={isPlaying}
          handlePause={handlePause}
          handlePlay={() => handlePlay(song, i)}
        />
      ) : null}
    </div>
  );
};

export default SongBar;
