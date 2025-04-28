import { useLanguage } from '../i18n/LanguageContext';
import { Button } from './Button';

export function TranslatedButton() {
  const { t } = useLanguage();
  return <Button onClick={() => window.open('https://discordapp.com/invite/AsWVbR9w', '_blank')}>{t('joinDiscord')}</Button>;
}