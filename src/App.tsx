import { Hero } from './components/Hero';
import { PlayerStats } from './components/PlayerStats';
//import { ScrollIndicator } from './components/ScrollIndicator';
import { Header } from './components/Header';
import { LanguageProvider } from './i18n/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { TranslatedWelcome } from './components/TranslatedWelcome';
import { TranslatedButton } from './components/TranslatedButton';
import { ScrollIndicator } from './components/ScrollIndicator';
import { RankingsPage } from './components/RankingsPage';

function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <Hero>
          <LanguageSwitcher />
          <Header />
          <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 px-4">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                <TranslatedWelcome />
              </h1>
              <TranslatedButton />
            </div>
            <PlayerStats />
          </div>
        <ScrollIndicator /> 
        </Hero>
        <RankingsPage />
                {/* <div className="h-screen bg-gray-900 flex items-center justify-center">
          <h2 className="text-4xl text-white">More content below...</h2>
        </div> */}
      </div>
    </LanguageProvider>
  );
}

export default App;