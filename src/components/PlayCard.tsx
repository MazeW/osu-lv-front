import { Score } from '../types/rankings';
import RankIcon from './RankIcon';
import { X, Link} from 'lucide-react';

interface PlayCardProps {
  score: Score;
  position: number;
}

export function PlayCard({ score, position }: PlayCardProps) {
  const scoreUrl = `https://osu.ppy.sh/scores/${score.mode}/${score.id}`;
  
  return (
    <div 
      className="group relative overflow-hidden rounded-xl"
      style={{
        backgroundImage: `url(${score.covers.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:bg-black/50" />
      
      <div className="relative p-4 md:p-6">
        <div className="absolute top-2 right-4 py-1">
          <RankIcon rank={score.rank} />
        </div>

        <div className="flex items-start gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <span 
              className={`text-2xl md:text-3xl font-bold`}
              title="Play rank"
            >
              #{position}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2">
                <img 
                  src={score.user.discordAvatar}
                  alt={score.stats.username}
                  className="w-8 h-8 rounded-full border border-white/20"
                />
                <span className="text-white font-medium">
                  {score.stats.username}
                </span>
              </div>
            </div>

            <div className="space-y-1 mb-3">
              <div className="flex items-center gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-white truncate">
                  {score.beatmapArtist} - {score.beatmapTitle}
                </h3>
                <a 
                  href={scoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Link size={16} />
                </a>
              </div>
              <p className="text-gray-300">
                [{score.beatmapDifficulty}]
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div title={`Raw weighted pp: ${Math.round(score.ppWeighted).toLocaleString()}`} className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {Math.round(score.pp).toLocaleString()}pp
              </div>
              
              <div className="flex items-center gap-2 text-xl text-gray-300">
                <span>{(score.accuracy * 100).toFixed(2)}%</span>
              </div>

              {score.mods.length > 0 && (
                <div className="text font-medium text-yellow-400">
                  +{score.mods.join(',')}
                </div>
              )}

              {score.statistics.count_miss > 0 && (
                <div className="flex items-center gap-1 text-sm font-medium px-2 py-0.5 bg-red-500/20 rounded">
                  <X size={14} className="text-red-400" />
                  <span className="text-red-400">{score.statistics.count_miss}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}