import { ServerRankings } from './ServerRankings';
import { TopPlays } from './TopPlays';
import { useLanguage } from '../i18n/LanguageContext';

export function RankingsPage() {
    const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-zinc-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-[1800px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('rankingsPageTitle')}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ServerRankings />
          <TopPlays />
        </div>
      </div>
    </section>
  );
}