import { useServerRankings } from '../hooks/useServerRankings';
import { PlayerCard } from './PlayerCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';
import { Trophy } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function ServerRankings() {
  const { rankings, loading, error } = useServerRankings();
  const { t } = useLanguage();

  if (loading) {
    return <LoadingState />;
  }

  if (error || !rankings) {
    return <ErrorState message={error?.message || t('loadingError')} />;
  }

  return (
    <div className="bg-[#1F1F1F] rounded-2xl p-4 md:p-8">
      <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
        <Trophy className="w-6 h-6 md:w-7 md:h-7 text-yellow-500" />
        <h2 className="text-xl md:text-2xl font-bold text-white">{t('serverRankings')}</h2>
      </div>
      <div className="space-y-3 md:space-y-4 max-h-[600px] md:max-h-[700px] overflow-y-auto custom-scrollbar pr-2">
        {rankings.rankings.map((ranking) => (
          <PlayerCard 
            key={ranking.user.osuId} 
            ranking={ranking} 
          />
        ))}
      </div>
    </div>
  );
}