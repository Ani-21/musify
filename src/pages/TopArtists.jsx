import React from "react";
import { ArtistCard, Loader, Error } from "../components";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col ">
      <h2 className="text-white font-bold text-3xl">Top Artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
        {data?.map((song) => (
          <ArtistCard key={song.key} song={song} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
