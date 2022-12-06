import SongBar from "./SongBar";

const RelatedSongs = ({
  artistId,
  data,
  handlePlay,
  handlePause,
  isPlaying,
  activeSong,
}) => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-white font-bold text-3xl">Related Songs</h1>

      {data?.map((song, i) => (
        <SongBar
          key={`${artistId}-${song?.key}-${i}`}
          i={i}
          artistId={artistId}
          song={song}
          handlePlay={handlePlay}
          handlePause={handlePause}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      ))}
    </div>
  );
};

export default RelatedSongs;
