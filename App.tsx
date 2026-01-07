import React, { useState, useEffect, useMemo } from 'react';
import { RosterHeader } from './components/RosterHeader';
import { RosterGrid } from './components/RosterGrid';
import { AdminModal } from './components/AdminModal';
import { useRosterData } from './hooks/useRosterData';
import { generateDateRange } from './utils/rosterLogic';
import { DisplayMode } from './types';

const App: React.FC = () => {
  // Settings State (Persisted)
  const [daysToShow, setDaysToShow] = useState(() => parseInt(localStorage.getItem('protea_days') || '45', 10));
  const [displayMode, setDisplayMode] = useState<DisplayMode>(() => (localStorage.getItem('protea_display_mode') as DisplayMode) || 'dots');

  const { staff, loading, updateStaffData } = useRosterData();

  // Regenerate dates whenever daysToShow changes
  const dates = useMemo(() => generateDateRange(new Date(), daysToShow), [daysToShow]);

  const [darkMode, setDarkMode] = useState(false);

  // Admin UI State
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => localStorage.getItem('protea_admin_logged_in') === 'true');

  // Persist Settings
  useEffect(() => {
    localStorage.setItem('protea_days', daysToShow.toString());
    localStorage.setItem('protea_display_mode', displayMode);
  }, [daysToShow, displayMode]);

  // Persist admin login state
  useEffect(() => {
    localStorage.setItem('protea_admin_logged_in', isAdminLoggedIn.toString());
  }, [isAdminLoggedIn]);

  // Toggle Dark Mode Class on Body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-fashion-white', 'text-fashion-black');
      document.body.classList.add('bg-fashion-dark-brown', 'text-fashion-white');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-fashion-dark-brown', 'text-fashion-white');
      document.body.classList.add('bg-fashion-white', 'text-fashion-black');
    }
  }, [darkMode]);

  const handleUpdateSettings = (newDays: number, newDisplayMode: DisplayMode) => {
    setDaysToShow(newDays);
    setDisplayMode(newDisplayMode);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setIsAdminOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans tracking-widest uppercase text-xs animate-pulse">
        Loading Protea Collection...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-4 md:px-12 py-8 max-w-[1920px] mx-auto transition-colors duration-500 ease-in-out">
      <RosterHeader
        lastUpdated={new Date()}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        onLoginClick={() => setIsAdminOpen(true)}
        isAdmin={isAdminLoggedIn}
      />

      <main className="fade-in mb-20">
        <div className="flex justify-end mb-4 px-1">
          <div className="text-[9px] font-sans tracking-widest uppercase opacity-60 font-bold">
            Displaying {daysToShow} Days
          </div>
        </div>

        <RosterGrid
          staff={staff}
          dates={dates}
          isAdmin={isAdminLoggedIn}
          onUpdateStaff={updateStaffData}
          displayMode={displayMode}
        />

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-8 justify-center text-[10px] uppercase tracking-widest opacity-80 font-bold">
          {displayMode === 'dots' ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-fashion-black dark:bg-fashion-white"></div>
                <span>Normal Shift</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-fashion-black dark:border-fashion-white"></div>
                <span>Half Shift (Sat)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-px bg-fashion-black/50 dark:bg-fashion-white/50"></span>
                <span>Off</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500/60"></div>
                <span>Working</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-gray-300/60 dark:bg-gray-600/60"></div>
                <span>Off</span>
              </div>
            </>
          )}
        </div>

        <footer className="mt-16 border-t border-fashion-black dark:border-fashion-white pt-8 flex justify-between items-center text-[10px] font-sans tracking-widest uppercase font-bold opacity-80">
          <div>Protea Ridge &copy;</div>
          <div>All Rights Reserved</div>
        </footer>
      </main>

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        isLoggedIn={isAdminLoggedIn}
        onLogin={() => setIsAdminLoggedIn(true)}
        onLogout={handleLogout}
        currentDays={daysToShow}
        displayMode={displayMode}
        onSaveSettings={handleUpdateSettings}
        staffData={staff}
        onUpdateStaff={updateStaffData}
      />
    </div>
  );
};

export default App;