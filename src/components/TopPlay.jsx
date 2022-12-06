import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import { useDispatch, useSelector } from "react-redux";
import PlayPause from "./PlayPause";

import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

const TopChartCard = ({
  i,
  song,
  isPlaying,
  activeSong,
  handlePause,
  handlePlay,
}) => {
  return (
    <div className="flex flex-row w-full items-center mb-2 py-2 px-4 hover:bg-[#4c426e] rounded-lg">
      <h3 className="text-white font-bold mr-3">{i + 1}.</h3>
      <img
        alt={song?.title}
        src={song?.images?.coverart}
        className="h-20 w-20 rounded-lg"
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`songs/${song.key}`}>
          <p className="text-white font-bold">{song.title}</p>
        </Link>
        <Link to={`artists/${song?.artists[0].adamid}`}>
          <p className="text-gray-300 text-base mt-1">{song.subtitle}</p>
        </Link>
      </div>

      <PlayPause
        song={song}
        activeSong={activeSong}
        isPlaying={isPlaying}
        handlePause={handlePause}
        handlePlay={handlePlay}
      />
    </div>
  );
};

const TopPlay = () => {
  const divRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handlePause = () => {
    dispatch(playPause(true));
  };
  const handlePlay = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(false));
  };

  const { isPlaying, isActive, activeSong } = useSelector(
    (state) => state.player
  );
  const { data } = useGetTopChartsQuery();

  const topPlays = data?.slice(0, 5);

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 mb-6 flex-1 flex flex-col xl:max-w-[500px] max-w-full"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row items-center justify-between ">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              i={i}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePause={handlePause}
              handlePlay={() => handlePlay(song, i)}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row items-center justify-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.map((artist, i) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img
                  alt="name"
                  src={artist?.images?.background}
                  className="rounded-full w-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
