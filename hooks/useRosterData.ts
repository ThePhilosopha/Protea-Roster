import { useState, useEffect, useCallback } from 'react';
import Papa from 'papaparse';
import { StaffMember, CsvRow, ShiftType, EmploymentStatus } from '../types';

// Default staff roster
const FALLBACK_STAFF: StaffMember[] = [
  { id: '1', name: 'Shane', role: 'Manager', cycleStartDate: '2024-01-01', patternOn: 5, patternOff: 2, shiftType: 'Normal', status: 'Permanent' },
  { id: '2', name: 'Phil', role: 'Staff', cycleStartDate: '2024-01-01', patternOn: 5, patternOff: 2, shiftType: 'Normal', status: 'Permanent' },
  { id: '3', name: 'Tiku', role: 'Staff', cycleStartDate: '2024-01-01', patternOn: 5, patternOff: 2, shiftType: 'Normal', status: 'Permanent' },
  { id: '4', name: 'Kyra', role: 'Staff', cycleStartDate: '2024-01-01', patternOn: 5, patternOff: 2, shiftType: 'Normal', status: 'Permanent' },
  { id: '5', name: 'Angie', role: 'Staff', cycleStartDate: '2024-01-01', patternOn: 5, patternOff: 2, shiftType: 'Normal', status: 'Permanent' },
  { id: '6', name: 'Selinah', role: 'Staff', cycleStartDate: '2024-01-01', patternOn: 5, patternOff: 2, shiftType: 'Normal', status: 'Permanent' },
  { id: '7', name: 'Thembi', role: 'Staff', cycleStartDate: '2024-01-01', patternOn: 5, patternOff: 2, shiftType: 'Normal', status: 'Permanent' },
  { id: '8', name: 'Marble', role: 'Staff', cycleStartDate: '2024-01-01', patternOn: 5, patternOff: 2, shiftType: 'Normal', status: 'Permanent' },
];

export const DEMO_CSV_URL = '';

export const useRosterData = (csvUrl: string = DEMO_CSV_URL, initialData?: StaffMember[]) => {
  const [staff, setStaff] = useState<StaffMember[]>(initialData || []);
  const [loading, setLoading] = useState<boolean>(!initialData);
  const [error, setError] = useState<string | null>(null);
  const [isUsingLocalData, setIsUsingLocalData] = useState(false);

  // Sync with initialData if it changes (e.g. Wix property update)
  useEffect(() => {
    if (initialData && initialData.length > 0) {
      setStaff(initialData);
      setLoading(false);
    }
  }, [initialData]);

  // Load data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);

      // 1. Check for Local Overrides
      const localData = localStorage.getItem('protea_staff_data');
      if (localData) {
        try {
          const parsedLocal = JSON.parse(localData);
          if (Array.isArray(parsedLocal) && parsedLocal.length > 0) {
            setStaff(parsedLocal);
            setIsUsingLocalData(true);
            setLoading(false);
            return;
          }
        } catch (e) {
          console.error("Failed to parse local staff data", e);
        }
      }

      // 2. Fetch CSV if no local data
      setIsUsingLocalData(false);

      if (!csvUrl) {
        // No URL provided, use fallback immediately without error
        setStaff(FALLBACK_STAFF);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(csvUrl);

        // Handle 404 or other network errors gracefully by using fallback
        if (!response.ok) {
          console.warn(`CSV Fetch failed (${response.status}), using fallback data.`);
          setStaff(FALLBACK_STAFF);
          setLoading(false);
          return;
        }

        const csvText = await response.text();

        Papa.parse<CsvRow>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            if (results.data && results.data.length > 0) {
              const parsedStaff: StaffMember[] = results.data
                .filter(row => row.Name && row.Name.trim().length > 0)
                .map((row, index) => ({
                  id: `staff-${index}`,
                  name: row.Name || 'Unknown',
                  role: row.Role || 'Staff',
                  cycleStartDate: row.CycleStartDate || new Date().toISOString().split('T')[0],
                  patternOn: parseInt(row.PatternOn || '4', 10),
                  patternOff: parseInt(row.PatternOff || '2', 10),
                  shiftType: (row.ShiftType === 'Half' ? 'Half' : 'Normal') as ShiftType,
                  status: (row.Status === 'Casual' ? 'Casual' : 'Permanent') as EmploymentStatus,
                }));
              setStaff(parsedStaff);
            } else {
              setStaff(FALLBACK_STAFF);
            }
            setLoading(false);
          },
          error: (err) => {
            console.error(err);
            setStaff(FALLBACK_STAFF);
            setLoading(false);
          }
        });
      } catch (err: any) {
        console.error("Fetch Error:", err.message);
        // Do not set visible error state for 404s/Fetch errors, just fallback
        setStaff(FALLBACK_STAFF);
        setLoading(false);
      }
    };

    loadData();
  }, [csvUrl]);

  // Update function exposed to Admin
  const updateStaffData = useCallback((newStaff: StaffMember[]) => {
    setStaff(newStaff);
    localStorage.setItem('protea_staff_data', JSON.stringify(newStaff));
    setIsUsingLocalData(true);
  }, []);

  const resetToCsv = useCallback(() => {
    localStorage.removeItem('protea_staff_data');
    window.location.reload(); // Simple reload to re-fetch CSV
  }, []);

  return { staff, loading, error, isUsingLocalData, updateStaffData, resetToCsv };
};