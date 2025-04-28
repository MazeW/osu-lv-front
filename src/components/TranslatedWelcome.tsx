import { useLanguage } from '../i18n/LanguageContext';

export function TranslatedWelcome() {
  const { t } = useLanguage();
  return (
    <>
      {t('welcome')}{' '}
      <div className="mt-2">
        <span className="text-[#9E3039]">Lat</span>
        <span className="text-white">vi</span>
        <span className="text-[#9E3039]">{t('ending')}</span>
      </div>
      <div className="mt-2">
        <span className="text-pink-500">osu!</span> {t('community')}
      </div>
    </>
  );
}