import { StaffMember, DayStatus, ShiftType } from '../types';

/**
 * Generates an array of the next 60 days starting from today.
 */
export const generateDateRange = (startDate: Date, days: number = 60): DayStatus[] => {
  const dates: DayStatus[] = [];

  for (let i = 0; i < days; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);

    dates.push({
      date: d,
      // Create a purely cosmetic "WorkDay" placeholder here, 
      // actual logic happens per staff member
      isWorkDay: false,
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
      dayNumber: d.getDate(),
      fullDateStr: d.toISOString().split('T')[0],
    });
  }
  return dates;
};

/**
 * Determines if a specific staff member is working on a specific date
 * based on their start date and their ON/OFF pattern.
 */
export const isStaffWorking = (staff: StaffMember, targetDateStr: string): boolean => {
  const cycleStart = new Date(staff.cycleStartDate);
  const target = new Date(targetDateStr);

  // Reset hours to ensure pure date comparison
  cycleStart.setHours(0, 0, 0, 0);
  target.setHours(0, 0, 0, 0);

  // Time difference in milliseconds
  const diffTime = target.getTime() - cycleStart.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const totalCycleLength = staff.patternOn + staff.patternOff;

  // Mathematical modulo that handles negative numbers correctly (if cycle start is in future)
  const dayInCycle = ((diffDays % totalCycleLength) + totalCycleLength) % totalCycleLength;

  // If the remainder is less than the number of ON days, they are working
  return dayInCycle < staff.patternOn;
};

export const SHIFT_LOGIC_DESCRIPTION = "Automated (Sat = Half)";

export interface ShiftState {
  isWorking: boolean;
  shiftType: ShiftType | 'Off';
  visualType: 'Solid' | 'Hollow' | 'None' | 'Dash';
  label: string;
}

/**
 * Centralized logic for determining shift type and visual representation.
 * Rules:
 * - If marked day off (manual override) -> Off / Dash
 * - If manual shiftType override exists -> use that type
 * - If Saturday -> Half / Hollow
 * - Otherwise -> Normal / Solid
 */
export const calculateShiftState = (staff: StaffMember, day: DayStatus): ShiftState => {
  // 1. Check for manual override first
  const override = staff.overrides?.find(o => o.date === day.fullDateStr);

  // 1a. Day off override
  if (override?.isDayOff) {
    return {
      isWorking: false,
      shiftType: 'Off',
      visualType: 'Dash',
      label: 'Day Off (Manual)'
    };
  }

  const working = isStaffWorking(staff, day.fullDateStr);

  if (!working) {
    return {
      isWorking: false,
      shiftType: 'Off',
      visualType: 'Dash',
      label: 'Off'
    };
  }

  // 2. Check for manual shift type override (Half or Normal)
  if (override?.shiftType) {
    if (override.shiftType === 'Half') {
      return {
        isWorking: true,
        shiftType: 'Half',
        visualType: 'Hollow',
        label: 'Half Shift (Manual)'
      };
    }
    // Explicit Normal shift (overrides Saturday rule)
    return {
      isWorking: true,
      shiftType: 'Normal',
      visualType: 'Solid',
      label: 'Normal Shift (Manual)'
    };
  }

  // 3. Saturday Rule: Saturdays are automatically Half shifts
  const isSaturday = day.dayName === 'SAT';

  if (isSaturday) {
    return {
      isWorking: true,
      shiftType: 'Half',
      visualType: 'Hollow',
      label: 'Half Shift'
    };
  }

  return {
    isWorking: true,
    shiftType: 'Normal',
    visualType: 'Solid',
    label: 'Normal Shift'
  };
};

/**
 * Returns formatted start and end times for a specific staff member on a specific day.
 * Checks for manual overrides first, then falls back to defaults.
 */
export const getShiftTimes = (staff: StaffMember, dateStr: string, shiftType: ShiftType): { start: string; end: string } => {
  // 1. Check for overrides
  const override = staff.overrides?.find(o => o.date === dateStr);
  if (override) {
    return { start: override.startTime, end: override.endTime };
  }

  // 2. Defaults based on Shift Type
  if (shiftType === 'Half') {
    return { start: '08:00', end: '13:00' };
  }

  // Default Normal
  return { start: '08:00', end: '17:00' };
};