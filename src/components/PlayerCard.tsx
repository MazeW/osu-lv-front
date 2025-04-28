import { PlayerRanking } from '../types/rankings';
import { Globe2, Link} from 'lucide-react';

interface PlayerCardProps {
  ranking: PlayerRanking;
}

export function PlayerCard({ ranking }: PlayerCardProps) {

  return (
    <div className="group bg-[#2A2A2A] hover:bg-[#333333] transition-all duration-200 rounded-xl p-4 md:p-5">
      <div className="flex items-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 md:gap-3 min-w-[60px] md:min-w-[80px]">
          <span 
            className={`text-xl md:text-2xl font-bold`}
            title="Country rank"
          >
            #{ranking.stats.countryRank.toLocaleString()}
          </span>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6 flex-1">
          <img 
            src={ranking.user.discordAvatar || `https://a.ppy.sh/${ranking.user.osuId}`}
            alt={ranking.user.username}
            className="w-12 h-12 md:w-16 md:h-16 rounded border-2 border-gray-700 group-hover:border-gray-600 transition-colors"
          />
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
              <span 
                className="font-semibold text-base md:text-lg text-white truncate cursor-help"
                title={`Discord: @${ranking.user.discordUsername}`}
              >
                {ranking.user.username}
              </span>
              <a
                href={`https://osu.ppy.sh/users/${ranking.user.osuId}`}
                target="_blank"
                rel="noopener noreferrer"
                title="View osu! profile"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                tabIndex={-1}
              >
                <Link size={16} />
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 md:gap-6">
              <div 
                className="flex items-center gap-2 text-xs md:text-sm text-gray-400 cursor-help"
                title="Global rank"
              >
                <Globe2 size={16} />
                <span>#{ranking.stats.globalRank.toLocaleString()}</span>
              </div>
              <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">
                {Math.round(ranking.stats.performancePoints).toLocaleString()}pp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}