import React, { useState } from 'react';
import { Sparkles, Layers, Zap } from 'lucide-react';
import Welcome from './components/Welcome';
import HooksList from './components/HooksList';
import Hacks from './components/Hacks';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.WELCOME);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.WELCOME:
        return <Welcome />;
      case Tab.HOOKS:
        return <HooksList />;
      case Tab.HACKS:
        return <Hacks />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-2">
            GANCHO VIRAL
          </h1>
          <p className="text-zinc-400 text-sm md:text-base font-light tracking-wide max-w-lg">
            Sua central premium de ganchos, hacks e criação inteligente de conteúdos.
          </p>
        </div>
        
        {/* Navigation Tabs */}
        <nav className="flex justify-center mt-2 px-4">
          <div className="flex space-x-1 md:space-x-2 bg-zinc-900/50 p-1 rounded-full border border-white/5 mb-4 backdrop-blur-sm overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab(Tab.WELCOME)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeTab === Tab.WELCOME
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Boas-vindas
            </button>
            <button
              onClick={() => setActiveTab(Tab.HOOKS)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeTab === Tab.HOOKS
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              127 Ganchos
            </button>
            <button
              onClick={() => setActiveTab(Tab.HACKS)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeTab === Tab.HACKS
                  ? 'bg-white text-black shadow-lg shadow-white/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Zap className="w-4 h-4" />
              Hacks
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-[240px] px-6 animate-fade-in">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-white/5 mt-auto">
        <p className="text-zinc-600 text-sm font-light tracking-widest uppercase">
          Método de Maressa Araujo
        </p>
      </footer>
    </div>
  );
};

export default App;