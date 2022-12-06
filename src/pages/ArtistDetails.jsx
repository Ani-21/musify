import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader } from "../components";
import { RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetching) return <Loader />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
