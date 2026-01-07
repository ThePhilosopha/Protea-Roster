export type ShiftType = 'Normal' | 'Half';
export type EmploymentStatus = 'Permanent' | 'Casual';
export type DisplayMode = 'dots' | 'colors';

export interface ShiftOverride {
  date: string; // YYYY-MM-DD
  startTime?: string; // "08:00" - optional when marking day off
  endTime?: string; // "17:00" - optional when marking day off
  isDayOff?: boolean; // true = force day off regardless of pattern
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  cycleStartDate: string; // YYYY-MM-DD
  patternOn: number;
  patternOff: number;
  shiftType: ShiftType;
  status: EmploymentStatus;
  overrides?: ShiftOverride[]; // Optional array of specific time overrides
}

export interface DayStatus {
  date: Date;
  isWorkDay: boolean;
  dayName: string; // Mon, Tue, etc.
  dayNumber: number; // 1-31
  fullDateStr: string; // YYYY-MM-DD
}

export interface CsvRow {
  Name: string;
  Role: string;
  CycleStartDate: string;
  PatternOn?: string;
  PatternOff?: string;
  ShiftType?: string; // "Normal" or "Half"
  Status?: string; // "Permanent" or "Casual"
}