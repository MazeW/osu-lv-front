export function Header() {
  return (
    <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-10">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <div className="w-16 md:w-32 h-[1px] bg-white/70" />
          <img 
            src="https://r2.maze.lv/public/osulv.webp" 
            alt="osu!LV logo" 
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <div className="w-16 md:w-32 h-[1px] bg-white/70" />
        </div>
      </div>
    </div>
  );
}