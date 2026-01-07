import React from 'react';

interface RosterHeaderProps {
  lastUpdated: Date;
  darkMode: boolean;
  toggleDarkMode: () => void;
  onLoginClick: () => void;
  isAdmin: boolean;
}

export const RosterHeader: React.FC<RosterHeaderProps> = ({
  lastUpdated,
  darkMode,
  toggleDarkMode,
  onLoginClick,
  isAdmin
}) => {
  return (
    <header className="mb-12 pt-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center border-b border-fashion-black/20 dark:border-fashion-white/20 pb-2 mb-8 animate-fade-in">
        <div className="text-[10px] font-sans tracking-widest uppercase flex gap-4 font-bold opacity-90">
          <span>Est. 2024</span>
          {isAdmin && <span className="text-fashion-accent font-bold">ADMIN ACCESS</span>}
        </div>

        <div className="text-[10px] font-sans tracking-widest uppercase font-bold opacity-90">
          {lastUpdated.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </div>

        <div className="flex gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-[10px] font-sans tracking-widest uppercase hover:underline font-bold opacity-90 hover:opacity-100"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
          <button
            onClick={onLoginClick}
            className="text-[10px] font-sans tracking-widest uppercase hover:underline font-bold opacity-90 hover:opacity-100"
          >
            {isAdmin ? 'Portal' : 'Admin'}
          </button>
        </div>
      </div>

      {/* Main Title */}
      <div className="text-center relative">
        <h1 className="font-vogue text-5xl md:text-7xl mb-2 tracking-[0.3em] animate-blur-in text-fashion-black dark:text-fashion-white font-semibold uppercase">
          Protea Ridge
        </h1>
        <div className="h-px w-24 bg-fashion-black dark:bg-fashion-white mx-auto my-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}></div>
        <p className="font-sans text-xs tracking-[0.3em] uppercase mt-4 animate-fade-in-up font-bold opacity-80" style={{ animationDelay: '0.5s' }}>
          Staff Roster & Schedule
        </p>
      </div>
    </header>
  );
};