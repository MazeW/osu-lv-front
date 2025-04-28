import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function ScrollIndicator() {
  const { t } = useLanguage();

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center cursor-pointer"
      onClick={handleScroll}
    >
      <p className="text-sm mb-2 text-gray-300">{t('scrollToExplore')}</p>
      <ChevronDown className="animate-bounce mx-auto" size={24} />
    </div>
  );
}
