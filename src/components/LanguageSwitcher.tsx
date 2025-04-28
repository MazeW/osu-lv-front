import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang: 'lv' | 'en') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-1 rounded bg-black/30 text-white hover:bg-black/40"
      >
        <Languages className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute mt-2 right-0 bg-white rounded shadow-lg">
          <button
            onClick={() => handleLanguageChange('lv')}
            className={`flex items-center gap-2 px-3 py-1 w-full text-left rounded ${language === 'lv' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
          >
            🇱🇻
          </button>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`flex items-center gap-2 px-3 py-1 w-full text-left rounded ${language === 'en' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
          >
            🇬🇧
          </button>
        </div>
      )}
    </div>
  );
}
