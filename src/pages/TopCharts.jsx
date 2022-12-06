import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();

  return (
    <div className="flex flex-col">
      <h2 className="text-white font-bold text-3xl p-4">Top Charts</h2>
      <div className="flex flex-wrap w-full gap-8 sm:justify-start justify-center ">
        {data?.map((song, i) => (
          <SongCard
            key={i}
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

export default TopCharts;
