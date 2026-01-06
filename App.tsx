import React, { useState, useEffect, useMemo } from 'react';
import { RosterHeader } from './components/RosterHeader';
import { RosterGrid } from './components/RosterGrid';
import { AdminModal } from './components/AdminModal';
import { useRosterData, DEMO_CSV_URL } from './hooks/useRosterData';
import { generateDateRange } from './utils/rosterLogic';

const App: React.FC = () => {
  // Admin Settings State (Persisted)
  const [csvUrl, setCsvUrl] = useState(() => localStorage.getItem('protea_csv_url') || DEMO_CSV_URL);
  const [daysToShow, setDaysToShow] = useState(() => parseInt(localStorage.getItem('protea_days') || '45', 10));

  const { staff, loading, isUsingLocalData, updateStaffData, resetToCsv } = useRosterData(csvUrl);
  
  // Regenerate dates whenever daysToShow changes
  const dates = useMemo(() => generateDateRange(new Date(), daysToShow), [daysToShow]);

  const [darkMode, setDarkMode] = useState(false);
  
  // Admin UI State
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Persist Settings
  useEffect(() => {
    localStorage.setItem('protea_csv_url', csvUrl);
    localStorage.setItem('protea_days', daysToShow.toString());
  }, [csvUrl, daysToShow]);

  // Toggle Dark Mode Class on Body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      // Replace light bg with dark brown bg
      document.body.classList.remove('bg-fashion-white', 'text-fashion-black');
      document.body.classList.add('bg-fashion-dark-brown', 'text-fashion-white');
    } else {
      document.documentElement.classList.remove('dark');
      // Replace dark brown bg with light bg
      document.body.classList.remove('bg-fashion-dark-brown', 'text-fashion-white');
      document.body.classList.add('bg-fashion-white', 'text-fashion-black');
    }
  }, [darkMode]);

  const handleUpdateSettings = (newUrl: string, newDays: number) => {
    setCsvUrl(newUrl);
    setDaysToShow(newDays);
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
            Displaying {daysToShow} Days {isUsingLocalData && '(Local Override Active)'}
          </div>
        </div>

        <RosterGrid 
          staff={staff} 
          dates={dates} 
          isAdmin={isAdminLoggedIn}
          onUpdateStaff={updateStaffData}
        />
        
        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-8 justify-center text-[10px] uppercase tracking-widest opacity-80 font-bold">
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
            <span>Casual/Off</span>
          </div>
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
        currentCsvUrl={csvUrl}
        currentDays={daysToShow}
        onSaveSettings={handleUpdateSettings}
        staffData={staff}
        onUpdateStaff={updateStaffData}
        onResetData={resetToCsv}
        isUsingLocalData={isUsingLocalData}
      />
    </div>
  );
};

export default App;