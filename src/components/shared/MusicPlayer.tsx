import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
 PlayIcon,
 PauseIcon,
 Cancel01Icon,
 NextIcon
} from "@hugeicons/core-free-icons";

const songs = [
 {
  title: "Indecisive",
  artist: "Kidwild",
  cover: "/music-covers/indecisive_cover.jpeg",
  url: "/music-files/indecisive.mp3"
 },
 {
  title: "Lovely",
  artist: "Billie Eilish ft. Khalid",
  cover: "/music-covers/lovely_cover.jpeg",
  url: "/music-files/lovely.mp3"
 },
 {
  title: "Runaway",
  artist: "Aurora",
  cover: "/music-covers/runaway_cover.jpeg",
  url: "/music-files/runaway.mp3"
 },
 {
  title: "Ocean Eyes",
  artist: "Billie Eilish",
  cover: "/music-covers/ocean_eyes_cover.jpeg",
  url: "/music-files/ocean_eyes.mp3"
 }
];

const MusicPlayer = () => {
 const [isPlaying, setIsPlaying] = useState(false);
 const [isExpanded, setIsExpanded] = useState(false);
 const [progress, setProgress] = useState(0);
 const [currentTime, setCurrentTime] = useState(0);
 const [duration, setDuration] = useState(0);
 const [currentSong, setCurrentSong] = useState(songs[0]);

 const audioRef = useRef<HTMLAudioElement | null>(null);
 const holdTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

 useEffect(() => {
  const randomIndex = Math.floor(Math.random() * songs.length);
  setCurrentSong(songs[randomIndex]);
 }, []);

 const formatTime = (time: number) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
 };

 const togglePlay = (e?: React.MouseEvent) => {
  e?.stopPropagation();
  if (isPlaying) {
   audioRef.current?.pause();
  } else {
   audioRef.current?.play();
  }
  setIsPlaying(!isPlaying);
 };

 const handleNext = () => {
  const currentIndex = songs.indexOf(currentSong);
  const nextIndex = (currentIndex + 1) % songs.length;

  setCurrentSong(songs[nextIndex]);

  if (isPlaying) {
   setTimeout(() => audioRef.current?.play(), 100);
  }
 };

 const onLoadedMetadata = () => {
  if (audioRef.current) {
   setDuration(audioRef.current.duration);
  }
 };

 const handleTimeUpdate = () => {
  if (audioRef.current) {
   setCurrentTime(audioRef.current.currentTime);
   const currentProgress =
    (audioRef.current.currentTime / audioRef.current.duration) * 100;
   setProgress(currentProgress || 0);
  }
 };

 const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if (audioRef.current) {
   const rect = e.currentTarget.getBoundingClientRect();
   const x = e.clientX - rect.left;
   const clickedValue = (x / rect.width) * audioRef.current.duration;
   audioRef.current.currentTime = clickedValue;
  }
 };

 const handlePointerDown = () => {
  holdTimeout.current = setTimeout(() => {
   setIsExpanded(true);
  }, 400);
 };

 const handlePointerUp = () => {
  if (holdTimeout.current) clearTimeout(holdTimeout.current);
 };

 return (
  <div className="fixed bottom-8 right-8 z-[100] flex items-end justify-end">
   <audio
    ref={audioRef}
    src={currentSong.url}
    onTimeUpdate={handleTimeUpdate}
    onLoadedMetadata={onLoadedMetadata}
    onEnded={handleNext}
    loop={false}
   />

   <AnimatePresence mode="wait">
    {!isExpanded ? (
     <motion.div
      key="vinyl"
      layoutId="player-container"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className="relative w-16 h-16 cursor-pointer group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
     >
      <motion.div
       animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
       transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
       className="w-full h-full rounded-full bg-zinc-950 border-[5px] border-zinc-900 shadow-2xl flex items-center justify-center relative overflow-hidden"
      >
       <div className="absolute inset-0 opacity-20 bg-[conic-gradient(from_0deg,transparent,white,transparent)]" />
       <img
        src={currentSong.cover}
        alt="cover"
        className="w-7 h-7 rounded-full object-cover border border-white/10"
       />
      </motion.div>

      <motion.button
       onClick={togglePlay}
       className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]"
      >
       <HugeiconsIcon
        icon={isPlaying ? PauseIcon : PlayIcon}
        size={20}
        className="text-white"
       />
      </motion.button>
     </motion.div>
    ) : (
     <motion.div
      key="card"
      layoutId="player-container"
      className="w-80 p-6 bg-card/60 backdrop-blur-3xl border border-border/40 rounded-[2rem] shadow-2xl overflow-hidden"
     >
      <div className="flex flex-col gap-6">
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
         <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
         <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest">
          {isPlaying ? "now playing" : "paused"}
         </span>
        </div>
        <button
         onClick={() => setIsExpanded(false)}
         className="p-1.5 hover:bg-foreground/5 rounded-full transition-colors"
        >
         <HugeiconsIcon
          icon={Cancel01Icon}
          size={16}
          className="text-muted/40"
         />
        </button>
       </div>

       <div className="flex items-center gap-5">
        <motion.div
         key={currentSong.title}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.8 }}
         className="w-20 h-20 shrink-0 rounded-full border-[6px] border-zinc-900 shadow-xl overflow-hidden relative"
        >
         <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="w-full h-full"
         >
          <img src={currentSong.cover} className="w-full h-full object-cover" />
         </motion.div>
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-3 h-3 rounded-full bg-background border border-white/5" />
         </div>
        </motion.div>

        <div className="flex-1 min-w-0">
         <motion.h4
          key={currentSong.title}
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-lg font-light text-foreground truncate lowercase tracking-tight"
         >
          {currentSong.title}
         </motion.h4>
         <motion.p
          key={currentSong.artist}
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs text-soft truncate lowercase italic opacity-70"
         >
          {currentSong.artist}
         </motion.p>
        </div>
       </div>

       <div className="space-y-3">
        <div
         className="relative h-1 w-full bg-foreground/10 rounded-full cursor-pointer group/progress"
         onClick={handleProgressClick}
        >
         <motion.div
          className="absolute top-0 left-0 h-full bg-accent rounded-full"
          style={{ width: `${progress}%` }}
         />
        </div>

        <div className="flex justify-between items-center px-0.5">
         <span className="text-[10px] font-mono text-muted/40">
          {formatTime(currentTime)}
         </span>
         <span className="text-[10px] font-mono text-muted/40">
          {formatTime(duration)}
         </span>
        </div>

        <div className="flex justify-center items-center gap-8 pt-2">
         <button
          onClick={() => togglePlay()}
          className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-all active:scale-95 shadow-lg"
         >
          <HugeiconsIcon icon={isPlaying ? PauseIcon : PlayIcon} size={22} />
         </button>

         <button
          onClick={handleNext}
          className="p-2 hover:bg-foreground/5 rounded-full transition-colors group/next"
         >
          <HugeiconsIcon
           icon={NextIcon}
           size={20}
           className="text-muted/40 group-hover:text-foreground transition-colors"
          />
         </button>
        </div>
       </div>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </div>
 );
};

export default MusicPlayer;
