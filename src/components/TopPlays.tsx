import { useScores } from '../hooks/useScores';
import { PlayCard } from './PlayCard';
import { ChevronsUp } from 'lucide-react';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';
import { useLanguage } from '../i18n/LanguageContext';

export function TopPlays() {
  const { scores, loading, error } = useScores();
    const { t } = useLanguage();

  if (loading) {
    return <LoadingState />;
  }

  if (error || !scores) {
    return <ErrorState message={error?.message || 'Failed to load scores'} />;
  }

  return (
    <div className="bg-[#1F1F1F] rounded-2xl p-4 md:p-8">
      <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
        <ChevronsUp className="w-6 h-6 md:w-7 md:h-7 text-pink-500" />
        <h2 className="text-xl md:text-2xl font-bold text-white">{t('topPlays')}</h2>
      </div>
      <div className="space-y-3 md:space-y-4 max-h-[600px] md:max-h-[700px] overflow-y-auto custom-scrollbar pr-2">
        {scores.scores.map((score, index) => (
          <PlayCard key={score.id} score={score} position={index + 1} />
        ))}
      </div>
    </div>
  );
}