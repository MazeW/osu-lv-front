import { Users } from 'lucide-react';
import { StatItem } from './StatItem';
import { useLanguage } from '../i18n/LanguageContext';
import { useDiscordMembers } from '../hooks/useDiscordMembers';
import { ActivePlayers } from './ActivePlayers';

export function PlayerStats() {
  const { t } = useLanguage();

  const { data, loading, error } = useDiscordMembers();
  if (loading) {
    return (
      <div className="text-white/80 animate-pulse">
        Loading players...
      </div>
    );
  }

  if (error || (!data?.onlinePlayerCount)) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 bg-black/30 px-4 md:px-6 py-3 md:py-4 rounded-2xl w-full lg:w-auto">
      <StatItem
        icon={<Users className="text-green-400" size={24} />}
        text={t('joinPlayers')}
        value={data.onlinePlayerCount.toString()}
        suffix={t('playersOnline')}
        className="text-white"
      />
      <ActivePlayers />
    </div>
  );
}