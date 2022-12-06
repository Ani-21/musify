import { useNavigate } from "react-router-dom";

const ArtistCard = ({ song }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/artists/${song.artists[0].adamid}`)}
      className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup cursor-pointer rounded-lg"
    >
      <img
        alt="song_img"
        src={song?.images?.coverart}
        className="w-full h-56 rounded-lg"
      />
      <p className="mt-4 text-white font-semibold text-lg truncate">
        {song?.title}
      </p>
    </div>
  );
};

export default ArtistCard;
