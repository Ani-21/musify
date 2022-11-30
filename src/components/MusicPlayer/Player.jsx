import { useRef, useEffect } from "react";

const Player = ({
  activeSong,
  volume,
  isPlaying,
  seekTime,
  repeat,
  currentIndex,
  onEnded,
  onTimeUpdate,
  onLoadedData,
}) => {
  const ref = useRef(null);

  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      ref={ref}
      src={activeSong?.hub?.actions[1]?.uri}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    >
      Player
    </audio>
  );
};

export default Player;
