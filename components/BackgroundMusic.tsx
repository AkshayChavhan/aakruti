"use client";

import { useRef, useState } from "react";

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current?.play();
    setPlaying(true);
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white/80 rounded-full shadow-lg flex items-center px-4 py-2">
      <audio ref={audioRef} src="/music.mp3" loop />
      {!playing ? (
        <button onClick={handlePlay} className="text-pink-600 font-bold">Play Music</button>
      ) : (
        <button onClick={handlePause} className="text-pink-600 font-bold">Pause Music</button>
      )}
    </div>
  );
}; 