import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { selectGenreListId } from "../redux/features/playerSlice";

const Discover = () => {
  const dispatch = useDispatch();
  // state
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player
  );

  // fetching data
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );

  if (isFetching) return <Loader />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ">
        <h2 className="font-bold text-white text-2xl text-left">Discover</h2>
        <select
          className="bg-[#382B47] text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          value={genreListId}
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={i}
            i={i}
            song={song}
            data={data}
            activeSong={activeSong}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
