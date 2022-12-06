import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import {
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
} from "../redux/services/shazamCore";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  const { data: songData, isFetching: isFetchingSongData } =
    useGetSongDetailsQuery({ songid });

  const { data, isFetching: isFetchingRelatedSongs } = useGetRelatedSongsQuery({
    songid,
  });

  const handlePause = () => {
    dispatch(playPause(true));
  };

  const handlePlay = (song, i) => {
    dispatch(setActiveSong({ data, song, i }));
    dispatch(playPause(true));
  };

  if (isFetchingSongData || isFetchingRelatedSongs) return <Loader />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />

      <div className="mb-10">
        <h2 className="text-white font-bold">Lyrics</h2>

        <div className="mt-5 overflow-scroll h-[240px]">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p key={i} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400">Sorry, lyrics not found</p>
          )}
        </div>
      </div>

      <RelatedSongs
        artistId={artistId}
        data={data}
        handlePlay={handlePlay}
        handlePause={handlePause}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default SongDetails;
