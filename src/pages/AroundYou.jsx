import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  const url = import.meta.env.VITE_GEO_API_KEY;

  const getCountry = async () => {
    try {
      const response = await axios.get(url);
      setCountry(response?.data?.location?.country);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountry();
    console.log(country);
  }, [country]);

  if (isFetching && loading) return <Loader />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="">
        <h2 className="text-white font-bold">Around You</h2>

        <div className="flex flex-wrap gap-8">
          {data?.map((song, i) => (
            <SongCard
              key={i}
              data={data}
              song={song}
              playPause={playPause}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AroundYou;
