import React, { useState } from 'react';
import { StaffMember, DayStatus, ShiftType, DisplayMode } from '../types';
import { calculateShiftState, getShiftTimes } from '../utils/rosterLogic';
import { clsx } from 'clsx';

interface RosterGridProps {
  staff: StaffMember[];
  dates: DayStatus[];
  isAdmin?: boolean;
  onUpdateStaff?: (newStaff: StaffMember[]) => void;
  displayMode?: DisplayMode;
}

interface SelectedShift {
  staffId: string;
  dateStr: string;
  staffName: string;
  shiftType: ShiftType | 'Off';
  label: string;
  start: string;
  end: string;
  isDayOff: boolean;
}

// Helper to format 24h time to 12h nicely (e.g. 08:00 -> 8am)
const formatTimeDisplay = (timeStr: string) => {
  if (!timeStr) return '';
  const [h, m] = timeStr.split(':');
  const hour = parseInt(h, 10);
  const ampm = hour >= 12 ? 'pm' : 'am';
  const hour12 = hour % 12 || 12;
  // If minutes are 00, omit them for cleaner look
  return `${hour12}${m === '00' ? '' : ':' + m}${ampm}`;
};

export const RosterGrid: React.FC<RosterGridProps> = ({
  staff,
  dates,
  isAdmin = false,
  onUpdateStaff,
  displayMode = 'dots'
}) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedShift, setSelectedShift] = useState<SelectedShift | null>(null);
  const [editStart, setEditStart] = useState('');
  const [editEnd, setEditEnd] = useState('');

  // Quick cycle handler for admin mode: Normal → Half → Off → Normal
  const handleQuickCycle = (person: StaffMember, day: DayStatus, shiftState: any) => {
    if (!onUpdateStaff) return;

    const newStaff = staff.map(p => {
      if (p.id !== person.id) return p;

      const currentOverrides = p.overrides ? [...p.overrides] : [];
      const existingIndex = currentOverrides.findIndex(o => o.date === day.fullDateStr);
      const currentOverride = existingIndex >= 0 ? currentOverrides[existingIndex] : null;

      // Determine current state and cycle to next
      // States: Normal (solid) → Half (hollow) → Off (dash) → Normal
      let nextOverride: any = null;

      if (currentOverride?.isDayOff) {
        // Currently Off → Back to Normal (remove override to restore pattern default)
        if (existingIndex >= 0) {
          currentOverrides.splice(existingIndex, 1);
        }
      } else if (currentOverride?.shiftType === 'Half' || (!currentOverride && shiftState.shiftType === 'Half')) {
        // Currently Half → Switch to Off
        nextOverride = {
          date: day.fullDateStr,
          isDayOff: true,
          shiftType: undefined
        };
      } else {
        // Currently Normal (or default) → Switch to Half
        nextOverride = {
          date: day.fullDateStr,
          startTime: '08:00',
          endTime: '13:00',
          isDayOff: false,
          shiftType: 'Half'
        };
      }

      if (nextOverride) {
        if (existingIndex >= 0) {
          currentOverrides[existingIndex] = nextOverride;
        } else {
          currentOverrides.push(nextOverride);
        }
      }

      return { ...p, overrides: currentOverrides };
    });

    onUpdateStaff(newStaff);
  };

  const handleShiftClick = (person: StaffMember, day: DayStatus, shiftState: any) => {
    // Admin mode: quick cycle through states
    if (isAdmin && onUpdateStaff) {
      handleQuickCycle(person, day, shiftState);
      return;
    }

    // Non-admin: only show modal for working shifts
    if (!shiftState.isWorking) return;

    const times = shiftState.isWorking
      ? getShiftTimes(person, day.fullDateStr, shiftState.shiftType as ShiftType)
      : { start: '08:00', end: '17:00' };

    // Check if there's an override marking this as a manual day off
    const override = person.overrides?.find(o => o.date === day.fullDateStr);
    const isDayOff = override?.isDayOff || !shiftState.isWorking;

    setSelectedShift({
      staffId: person.id,
      dateStr: day.fullDateStr,
      staffName: person.name,
      shiftType: shiftState.shiftType as ShiftType,
      label: shiftState.label,
      start: times.start,
      end: times.end,
      isDayOff
    });
    setEditStart(times.start);
    setEditEnd(times.end);
  };

  const handleToggleDayOff = () => {
    if (!selectedShift || !onUpdateStaff) return;

    const newStaff = staff.map(p => {
      if (p.id !== selectedShift.staffId) return p;

      const currentOverrides = p.overrides ? [...p.overrides] : [];
      const existingIndex = currentOverrides.findIndex(o => o.date === selectedShift.dateStr);

      if (selectedShift.isDayOff) {
        // Currently off -> remove override to restore pattern
        if (existingIndex >= 0) {
          currentOverrides.splice(existingIndex, 1);
        }
      } else {
        // Currently working -> mark as day off
        const newOverride = {
          date: selectedShift.dateStr,
          isDayOff: true
        };
        if (existingIndex >= 0) {
          currentOverrides[existingIndex] = newOverride;
        } else {
          currentOverrides.push(newOverride);
        }
      }

      return { ...p, overrides: currentOverrides };
    });

    onUpdateStaff(newStaff);
    setSelectedShift(null);
  };

  // Handler to set shift type: Normal, Half, or Off
  const handleSetShiftType = (type: ShiftType | 'Off') => {
    if (!selectedShift || !onUpdateStaff) return;

    const newStaff = staff.map(p => {
      if (p.id !== selectedShift.staffId) return p;

      const currentOverrides = p.overrides ? [...p.overrides] : [];
      const existingIndex = currentOverrides.findIndex(o => o.date === selectedShift.dateStr);

      if (type === 'Off') {
        // Mark as day off
        const newOverride = {
          date: selectedShift.dateStr,
          isDayOff: true,
          shiftType: undefined
        };
        if (existingIndex >= 0) {
          currentOverrides[existingIndex] = newOverride;
        } else {
          currentOverrides.push(newOverride);
        }
      } else {
        // Set specific shift type (Normal or Half)
        const defaultTimes = type === 'Half'
          ? { start: '08:00', end: '13:00' }
          : { start: '08:00', end: '17:00' };

        const newOverride = {
          date: selectedShift.dateStr,
          startTime: defaultTimes.start,
          endTime: defaultTimes.end,
          isDayOff: false,
          shiftType: type
        };
        if (existingIndex >= 0) {
          currentOverrides[existingIndex] = newOverride;
        } else {
          currentOverrides.push(newOverride);
        }
      }

      return { ...p, overrides: currentOverrides };
    });

    onUpdateStaff(newStaff);
    setSelectedShift(null);
  };

  const handleSaveTime = () => {
    if (!selectedShift || !onUpdateStaff) return;

    const newStaff = staff.map(p => {
      if (p.id !== selectedShift.staffId) return p;

      const currentOverrides = p.overrides ? [...p.overrides] : [];
      const existingIndex = currentOverrides.findIndex(o => o.date === selectedShift.dateStr);

      const newOverride = {
        date: selectedShift.dateStr,
        startTime: editStart,
        endTime: editEnd,
        isDayOff: false // Saving times means it's a working day
      };

      if (existingIndex >= 0) {
        currentOverrides[existingIndex] = newOverride;
      } else {
        currentOverrides.push(newOverride);
      }

      return { ...p, overrides: currentOverrides };
    });

    onUpdateStaff(newStaff);
    setSelectedShift(null);
  };

  return (
    <>
      <div className="w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="overflow-x-auto pb-12 custom-scrollbar">
          <table className="w-full border-collapse text-left">

            {/* Header */}
            <thead>
              <tr>
                <th className="sticky left-0 z-30 bg-fashion-white dark:bg-fashion-dark-brown p-5 min-w-[240px] border-b border-fashion-black dark:border-fashion-white text-left align-bottom shadow-[4px_0_15px_-5px_rgba(0,0,0,0.05)] transition-colors">
                  <span className="font-sans text-[10px] tracking-widest uppercase font-bold text-fashion-black dark:text-fashion-white">The Personnel</span>
                </th>

                {dates.map((day) => {
                  const isToday = day.fullDateStr === todayStr;
                  const isWeekend = day.dayName === 'SAT' || day.dayName === 'SUN';

                  return (
                    <th
                      key={day.fullDateStr}
                      className={clsx(
                        "min-w-[48px] px-1 py-5 text-center align-bottom border-b font-normal group transition-all duration-300",
                        // Borders: Darker in light mode (black/20) for better contrast
                        "border-fashion-black/20 dark:border-fashion-white/20",
                        isToday ? "bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black" : "text-fashion-black dark:text-fashion-white"
                      )}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className={clsx(
                          "text-[10px] font-sans tracking-widest uppercase -rotate-90 origin-center translate-y-2 mb-6 transition-opacity font-bold",
                          isToday ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                        )}>
                          {day.dayName}
                        </span>
                        <span className={clsx(
                          "text-sm font-serif",
                          isWeekend && !isToday && "italic font-bold"
                        )}>
                          {day.dayNumber}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {staff.map((person, index) => {
                const isCasual = person.status === 'Casual';

                return (
                  <tr
                    key={person.id}
                    className="group transition-colors duration-200 hover:bg-fashion-black/5 dark:hover:bg-fashion-white/10"
                    style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
                  >
                    {/* Name Column */}
                    <td className={clsx(
                      "sticky left-0 z-20 p-5 border-b shadow-[4px_0_15px_-5px_rgba(0,0,0,0.05)] transition-colors duration-200 bg-fashion-white dark:bg-fashion-dark-brown group-hover:bg-fashion-black/5 dark:group-hover:bg-fashion-white/10",
                      "border-fashion-black/20 dark:border-fashion-white/20"
                    )}>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-xl leading-none tracking-tight font-bold text-fashion-black dark:text-fashion-white">{person.name}</span>
                          {isCasual && (
                            <span className="text-[9px] border border-fashion-black dark:border-fashion-white px-1.5 py-0.5 uppercase tracking-widest font-bold opacity-90">
                              Casual
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="font-sans text-[10px] tracking-widest uppercase font-bold opacity-90 text-fashion-gray dark:text-fashion-white">{person.role}</span>
                        </div>
                      </div>
                    </td>

                    {/* Grid Cells */}
                    {dates.map((day) => {
                      const shiftState = calculateShiftState(person, day);
                      const { visualType, isWorking } = shiftState;
                      const isWeekend = day.dayName === 'SAT' || day.dayName === 'SUN';
                      const isToday = day.fullDateStr === todayStr;

                      return (
                        <td
                          key={`${person.id}-${day.fullDateStr}`}
                          onClick={() => handleShiftClick(person, day, shiftState)}
                          className={clsx(
                            "text-center p-0 border-b h-20 w-12 relative transition-colors",
                            "border-fashion-black/20 dark:border-fashion-white/20",
                            isWeekend && !isCasual && "bg-fashion-gray/30 dark:bg-fashion-white/5",
                            isToday && !isCasual && "bg-fashion-accent/10",
                            (isAdmin || isWorking) && "cursor-pointer hover:bg-fashion-black/10 dark:hover:bg-fashion-white/20"
                          )}
                        >
                          {/* Cell Content */}
                          <div className="w-full h-full flex items-center justify-center relative">
                            {displayMode === 'dots' ? (
                              <>
                                {visualType === 'Solid' && (
                                  <div className="w-3 h-3 rounded-full bg-fashion-black dark:bg-fashion-white"></div>
                                )}

                                {visualType === 'Hollow' && (
                                  <div className="w-3 h-3 rounded-full border-2 box-border border-fashion-black dark:border-fashion-white ring-1 ring-fashion-white dark:ring-fashion-dark-brown"></div>
                                )}

                                {visualType === 'Dash' && (
                                  <div className="w-3 h-px bg-fashion-black/50 dark:bg-fashion-white/50"></div>
                                )}
                              </>
                            ) : (
                              <div className={clsx(
                                "w-10 h-16 rounded",
                                !isWorking && "bg-gray-300/50 dark:bg-gray-600/40",
                                isWorking && shiftState.shiftType === 'Half' && "bg-orange-400/60 dark:bg-orange-500/50",
                                isWorking && shiftState.shiftType === 'Normal' && "bg-green-500/50 dark:bg-green-500/40"
                              )}></div>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Shift Detail Modal / Small Box */}
      {selectedShift && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop - lighter touch */}
          <div
            className="absolute inset-0 bg-fashion-white/60 dark:bg-fashion-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedShift(null)}
          />

          {/* Compact Modal Card */}
          <div className="bg-fashion-white dark:bg-fashion-dark-brown border border-fashion-black dark:border-fashion-white p-6 shadow-2xl w-full max-w-xs relative z-10 animate-fade-in-up flex flex-col items-center text-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedShift(null)}
              className="absolute top-3 right-3 p-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="stroke-fashion-black dark:stroke-fashion-white">
                <path d="M1 1L11 11M1 11L11 1" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>

            {/* Header Info */}
            <div className="mb-4 space-y-1">
              <div className="text-[9px] uppercase tracking-widest opacity-60 font-bold text-fashion-black dark:text-fashion-white">
                {new Date(selectedShift.dateStr).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
              </div>
              <h3 className="font-serif text-2xl font-bold text-fashion-black dark:text-fashion-white">
                {selectedShift.staffName}
              </h3>
              <div className="inline-block border border-fashion-black dark:border-fashion-white px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold text-fashion-black dark:text-fashion-white mt-2">
                {selectedShift.label}
              </div>
            </div>

            {/* Time Display & Edit */}
            <div className="w-full">
              {isAdmin ? (
                <div className="bg-fashion-gray/10 dark:bg-fashion-white/5 p-4 space-y-4 w-full border border-fashion-black/10 dark:border-fashion-white/10">
                  {/* Shift Type Selector */}
                  <div>
                    <div className="text-[9px] uppercase tracking-widest font-bold opacity-60 mb-3 text-center">Set Shift Type</div>
                    <div className="flex gap-2">
                      {/* Normal Shift Button */}
                      <button
                        onClick={() => handleSetShiftType('Normal')}
                        className={`flex-1 py-3 border text-[9px] uppercase tracking-widest font-bold transition-all flex flex-col items-center gap-1.5 ${selectedShift.shiftType === 'Normal' && !selectedShift.isDayOff
                          ? 'bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black border-fashion-black dark:border-fashion-white'
                          : 'border-fashion-black/40 dark:border-fashion-white/40 hover:bg-fashion-black/10 dark:hover:bg-fashion-white/10'
                          }`}
                      >
                        <span className="w-3 h-3 rounded-full bg-current"></span>
                        <span>Normal</span>
                      </button>

                      {/* Half Shift Button */}
                      <button
                        onClick={() => handleSetShiftType('Half')}
                        className={`flex-1 py-3 border text-[9px] uppercase tracking-widest font-bold transition-all flex flex-col items-center gap-1.5 ${selectedShift.shiftType === 'Half' && !selectedShift.isDayOff
                          ? 'bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black border-fashion-black dark:border-fashion-white'
                          : 'border-fashion-black/40 dark:border-fashion-white/40 hover:bg-fashion-black/10 dark:hover:bg-fashion-white/10'
                          }`}
                      >
                        <span className="w-3 h-3 rounded-full border-2 border-current"></span>
                        <span>Half</span>
                      </button>

                      {/* Day Off Button */}
                      <button
                        onClick={() => handleSetShiftType('Off')}
                        className={`flex-1 py-3 border text-[9px] uppercase tracking-widest font-bold transition-all flex flex-col items-center gap-1.5 ${selectedShift.isDayOff
                          ? 'bg-fashion-accent text-white border-fashion-accent'
                          : 'border-fashion-black/40 dark:border-fashion-white/40 hover:bg-fashion-accent/10'
                          }`}
                      >
                        <span className="w-4 h-0.5 bg-current"></span>
                        <span>Day Off</span>
                      </button>
                    </div>
                  </div>

                  {/* Restore Pattern Button */}
                  {(selectedShift.label.includes('Manual') || selectedShift.isDayOff) && (
                    <button
                      onClick={handleToggleDayOff}
                      className="w-full py-2 text-[9px] uppercase tracking-widest font-bold transition-colors border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                      ↺ Restore to Pattern
                    </button>
                  )}

                  {/* Time Edit (only for working shifts) */}
                  {!selectedShift.isDayOff && (
                    <>
                      <div className="flex items-center justify-center gap-2 mt-2 mb-2 border-t border-fashion-black/10 dark:border-fashion-white/10 pt-4">
                        <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">Custom Hours</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <input
                          type="time"
                          value={editStart}
                          onChange={(e) => setEditStart(e.target.value)}
                          className="bg-transparent border-b border-fashion-black dark:border-fashion-white text-center font-serif text-lg w-20 focus:outline-none focus:border-fashion-accent text-fashion-black dark:text-fashion-white"
                        />
                        <span className="opacity-50 font-serif text-fashion-black dark:text-fashion-white">–</span>
                        <input
                          type="time"
                          value={editEnd}
                          onChange={(e) => setEditEnd(e.target.value)}
                          className="bg-transparent border-b border-fashion-black dark:border-fashion-white text-center font-serif text-lg w-20 focus:outline-none focus:border-fashion-accent text-fashion-black dark:text-fashion-white"
                        />
                      </div>
                      <button
                        onClick={handleSaveTime}
                        className="w-full mt-3 bg-fashion-black dark:bg-fashion-white text-fashion-white dark:text-fashion-black py-2 text-[9px] uppercase tracking-widest hover:opacity-90 font-bold transition-opacity"
                      >
                        Update Hours
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <div className="py-4 border-t border-b border-fashion-black/10 dark:border-fashion-white/10 w-full mt-2">
                  <div className="text-[9px] uppercase tracking-widest opacity-50 mb-1 font-bold text-fashion-black dark:text-fashion-white">Shift Time</div>
                  <div className="font-serif text-3xl text-fashion-black dark:text-fashion-white">
                    {formatTimeDisplay(selectedShift.start)} – {formatTimeDisplay(selectedShift.end)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};