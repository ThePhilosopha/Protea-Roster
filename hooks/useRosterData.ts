import { useState, useEffect, useCallback } from 'react';
import Papa from 'papaparse';
import { StaffMember, CsvRow, ShiftType, EmploymentStatus } from '../types';

// Updated fallback data: Nigel K is now Permanent to remove specific highlighting
const FALLBACK_STAFF: StaffMember[] = [
  { id: '1', name: 'Miranda P.', role: 'Editor', cycleStartDate: '2024-01-01', patternOn: 5, patternOff: 2, shiftType: 'Normal', status: 'Permanent' },
  { id: '2', name: 'Andy S.', role: 'Assistant', cycleStartDate: '2024-01-02', patternOn: 4, patternOff: 2, shiftType: 'Half', status: 'Permanent' },
  { id: '3', name: 'Emily C.', role: 'Senior', cycleStartDate: '2024-01-03', patternOn: 5, patternOff: 2, shiftType: 'Normal', status: 'Permanent' },
  { id: '4', name: 'Nigel K.', role: 'Creative', cycleStartDate: '2024-01-01', patternOn: 3, patternOff: 4, shiftType: 'Normal', status: 'Permanent' },
  { id: '5', name: 'Serena V.', role: 'Fashion', cycleStartDate: '2024-01-05', patternOn: 4, patternOff: 4, shiftType: 'Half', status: 'Permanent' },
];

export const DEMO_CSV_URL = ''; 

export const useRosterData = (csvUrl: string = DEMO_CSV_URL) => {
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingLocalData, setIsUsingLocalData] = useState(false);

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