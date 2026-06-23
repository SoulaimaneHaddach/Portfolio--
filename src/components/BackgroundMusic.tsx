"use client";

import React, { useEffect, useRef, useState } from "react";
import { Music, Play, Pause, Volume2, VolumeX, SkipForward, SkipBack } from "lucide-react";

// Music playlist
const TRACKS = [
  { name: "Velvet Sutra", src: "/music/Velvet Sutra - Ruck P.mp3" },
  { name: "Keep Going - Swørn", src: "/music/Keep Going - Swørn.mp3" },
];

const STORAGE_KEYS = {
  enabled: "bgm_enabled",
  volume: "bgm_volume",
  muted: "bgm_muted",
  currentTrack: "bgm_current_track",
};

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [error, setError] = useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = useState(0);

  const nextTrack = () => {
    const next = (currentTrack + 1) % TRACKS.length;
    setCurrentTrack(next);
    localStorage.setItem(STORAGE_KEYS.currentTrack, String(next));
  };

  const prevTrack = () => {
    const prev = (currentTrack - 1 + TRACKS.length) % TRACKS.length;
    setCurrentTrack(prev);
    localStorage.setItem(STORAGE_KEYS.currentTrack, String(prev));
  };

  // Initialize audio element and load saved preferences
  useEffect(() => {
    const audio = new Audio(TRACKS[currentTrack].src);
    audio.loop = false;
    audio.preload = "auto";
    audioRef.current = audio;

    // restore prefs
    try {
      const savedVol = localStorage.getItem(STORAGE_KEYS.volume);
      const savedMuted = localStorage.getItem(STORAGE_KEYS.muted);
      const savedEnabled = localStorage.getItem(STORAGE_KEYS.enabled);
      const savedTrack = localStorage.getItem(STORAGE_KEYS.currentTrack);

      if (savedTrack !== null) {
        const trackIdx = parseInt(savedTrack, 10);
        if (trackIdx >= 0 && trackIdx < TRACKS.length) {
          setCurrentTrack(trackIdx);
        }
      }

      if (savedVol !== null) {
        const v = Math.min(1, Math.max(0, parseFloat(savedVol)));
        setVolume(v);
        audio.volume = v;
      } else {
        audio.volume = 0.3;
      }
      if (savedMuted === "true") {
        setMuted(true);
        audio.muted = true;
      }
      
      // Attempt autoplay
      const shouldAttemptAutoplay = savedEnabled !== "false";
      if (shouldAttemptAutoplay) {
        audio
          .play()
          .then(() => {
            setPlaying(true);
            localStorage.setItem(STORAGE_KEYS.enabled, "true");
          })
          .catch(() => {
            setPlaying(false);
            setError("Click play to start");
          });
      }
    } catch {}

    const onCanPlay = () => setReady(true);
    const onError = () => setError("Audio file not found");
    const onEnded = () => nextTrack();

    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("error", onError);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };

  }, [currentTrack]);  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setError(null);

    if (playing) {
      audio.pause();
      setPlaying(false);
      localStorage.setItem(STORAGE_KEYS.enabled, "false");
    } else {
      audio.play()
        .then(() => {
          setPlaying(true);
          localStorage.setItem(STORAGE_KEYS.enabled, "true");
        })
        .catch(() => {
          setError("Unable to play audio");
          setPlaying(false);
        });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
    localStorage.setItem(STORAGE_KEYS.muted, audio.muted ? "true" : "false");
  };

  const handleVolume = (v: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const clamped = Math.min(1, Math.max(0, v));
    audio.volume = clamped;
    setVolume(clamped);
    if (clamped > 0 && audio.muted) {
      audio.muted = false;
      setMuted(false);
      localStorage.setItem(STORAGE_KEYS.muted, "false");
    }
    localStorage.setItem(STORAGE_KEYS.volume, String(clamped));
  };

  return (
    <div className="fixed bottom-24 right-8 z-50 group">
      {/* Track Info */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-md text-white px-4 py-2 rounded-xl shadow-2xl border border-white/20">
          <p className="text-sm font-semibold whitespace-nowrap">
            {TRACKS[currentTrack].name}
          </p>
          <p className="text-xs opacity-80">
            {currentTrack + 1} / {TRACKS.length}
          </p>
        </div>
      </div>

      {/* Main Player */}
  <div className="bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/95 dark:to-gray-900/95 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 shadow-2xl rounded-2xl p-3 flex flex-col gap-2 min-w-[220px] text-sm transition-all duration-300 hover:shadow-blue-500/20">
        
        {/* Controls Row */}
        <div className="flex items-center justify-center gap-2">
          {/* Previous Track */}
          <button
            onClick={prevTrack}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg"
            aria-label="Previous track"
          >
            <SkipBack className="w-3.5 h-3.5" />
          </button>

          {/* Play / Pause*/}
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all relative overflow-hidden group/btn"
            aria-label={playing ? "Pause" : "Play"}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            {playing ? <Pause className="w-5 h-5 relative z-10" /> : <Play className="w-5 h-5 relative z-10 ml-0.5" />}
          </button>

          {/* Next Track */}
          <button
            onClick={nextTrack}
            className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg"
            aria-label="Next track"
          >
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center gap-3 px-2">
          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Volume*/}
          <div className="flex-1 flex items-center gap-2">
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={muted ? 0 : volume}
              onChange={(e) => handleVolume(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-purple-500 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-purple-500 [&::-webkit-slider-thumb]:shadow-lg hover:[&::-webkit-slider-thumb]:scale-110 [&::-webkit-slider-thumb]:transition-transform"
              aria-label="Volume"
            />
            <Music className="w-4 h-4 text-purple-500" />
          </div>
        </div>

        {/* Progress */}
        <div className="flex justify-center gap-1 pt-1">
          {TRACKS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentTrack
                  ? 'w-4 bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'w-1.5 bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
      {error && (
        <div className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
}
