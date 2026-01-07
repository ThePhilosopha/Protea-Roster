import React, { useState, useEffect } from 'react';
import { StaffMember, ShiftType, EmploymentStatus, DisplayMode } from '../types';
import { SHIFT_LOGIC_DESCRIPTION } from '../utils/rosterLogic';

// Admin credentials
const ADMIN_USERNAME = 'Shane';
const ADMIN_PASSWORD = 'admin123';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  onLogout: () => void;
  isLoggedIn: boolean;
  currentDays?: number;
  displayMode?: DisplayMode;
  onSaveSettings?: (days: number, displayMode: DisplayMode) => void;
  staffData?: StaffMember[];
  onUpdateStaff?: (newStaff: StaffMember[]) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  onLogout,
  isLoggedIn,
  currentDays = 45,
  displayMode = 'dots',
  onSaveSettings,
  staffData = [],
  onUpdateStaff,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'settings' | 'staff'>('settings');

  // Settings State
  const [daysInput, setDaysInput] = useState(currentDays);
  const [displayModeInput, setDisplayModeInput] = useState<DisplayMode>(displayMode);
  const [saveMessage, setSaveMessage] = useState('');

  // Staff Edit State
  const [localStaff, setLocalStaff] = useState<StaffMember[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<StaffMember>>({});
  const [isAddingNew, setIsAddingNew] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDaysInput(currentDays);
      setDisplayModeInput(displayMode);
      setLocalStaff(staffData);
      setSaveMessage('');
      setUsername('');
      setPassword('');
      setError('');
      setActiveTab('settings');
      setIsAddingNew(false);
      setEditingId(null);
    }
  }, [isOpen, currentDays, displayMode, staffData]);

  if (!isOpen) return null;

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.toLowerCase() === ADMIN_USERNAME.toLowerCase() && password === ADMIN_PASSWORD) {
      onLogin();
      setError('');
      setUsername('');
      setPassword('');
    } else if (username.toLowerCase() !== ADMIN_USERNAME.toLowerCase()) {
      setError('Invalid username');
    } else {
      setError('Invalid password');
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSaveSettings) {
      onSaveSettings(daysInput, displayModeInput);
      setSaveMessage('Settings Saved');
      setTimeout(() => setSaveMessage(''), 2000);
    }
  };



  // Staff Management Handlers
  const handleEditClick = (person: StaffMember) => {
    setEditingId(person.id);
    setEditForm({ ...person });
    setIsAddingNew(false);
  };

  const handleAddNewClick = () => {
    setEditingId('new');
    setEditForm({
      id: `staff-local-${Date.now()}`,
      name: '',
      role: '',
      cycleStartDate: new Date().toISOString().split('T')[0],
      patternOn: 5,
      patternOff: 2,
      shiftType: 'Normal', // Default to normal
      status: 'Permanent'
    });
    setIsAddingNew(true);
  };

  const handleSaveStaff = () => {
    if (!editForm.name || !editForm.role) return;

    let newStaffList = [...localStaff];

    if (isAddingNew) {
      newStaffList.push(editForm as StaffMember);
    } else {
      newStaffList = newStaffList.map(s => s.id === editingId ? (editForm as StaffMember) : s);
    }

    setLocalStaff(newStaffList);
    if (onUpdateStaff) onUpdateStaff(newStaffList);

    setEditingId(null);
    setIsAddingNew(false);
  };

  const handleDeleteStaff = (id: string) => {
    if (window.confirm('Are you sure you want to remove this staff member?')) {
      const newStaffList = localStaff.filter(s => s.id !== id);
      setLocalStaff(newStaffList);
      if (onUpdateStaff) onUpdateStaff(newStaffList);
    }
  };

  const renderEditForm = () => (
    <div className={`space-y-6 p-5 border transition-all duration-300 animate-fade-in ${isAddingNew
      ? 'bg-fashion-black/5 dark:bg-fashion-white/10 border-fashion-black dark:border-fashion-white shadow-md mb-6'
      : 'bg-fashion-white dark:bg-fashion-dark-brown border-fashion-accent/60 border-2 shadow-xl relative z-10 -mx-2 my-4'
      }`}>
      <div className="flex items-center justify-between border-b border-fashion-black/10 dark:border-fashion-white/10 pb-3">
        <h3 className={`text-xs uppercase tracking-widest font-bold flex items-center gap-2 ${isAddingNew ? 'text-fashion-black dark:text-fashion-white' : 'text-fashion-accent'}`}>
          {isAddingNew ? (
            <>
              <span className="text-lg font-serif">+</span>
              <span>New Staff Entry</span>
            </>
          ) : (
            <>
              <span className="text-lg font-serif">✎</span>
              <span>Editing: <span className="font-serif text-sm ml-1 text-fashion-black dark:text-fashion-white">{localStaff.find(s => s.id === editingId)?.name || 'Personnel'}</span></span>
            </>
          )}
        </h3>
        {isAddingNew && <span className="text-[9px] uppercase font-bold bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black px-2 py-1">Draft</span>}
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="text-[9px] uppercase opacity-80 font-bold block mb-1">Name</label>
          <input
            autoFocus
            className="w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm font-serif focus:outline-none focus:border-fashion-accent focus:border-b-2"
            value={editForm.name || ''}
            onChange={e => setEditForm({ ...editForm, name: e.target.value })}
            placeholder="e.g. Miranda P."
          />
        </div>
        <div>
          <label className="text-[9px] uppercase opacity-80 font-bold block mb-1">Role</label>
          <input
            className="w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm font-sans focus:outline-none focus:border-fashion-accent focus:border-b-2"
            value={editForm.role || ''}
            onChange={e => setEditForm({ ...editForm, role: e.target.value })}
            placeholder="e.g. Editor"
          />
        </div>
        <div>
          <label className="text-[9px] uppercase opacity-80 font-bold block mb-1">Status</label>
          <select
            className="w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm focus:outline-none focus:border-fashion-accent text-fashion-black dark:text-fashion-white"
            value={editForm.status}
            onChange={e => setEditForm({ ...editForm, status: e.target.value as EmploymentStatus })}
          >
            <option value="Permanent" className="bg-fashion-white dark:bg-fashion-dark-brown">Permanent</option>
            <option value="Casual" className="bg-fashion-white dark:bg-fashion-dark-brown">Casual</option>
          </select>
        </div>
        <div>
          <label className="text-[9px] uppercase opacity-60 font-medium block mb-1">Shift Type</label>
          <div className="w-full py-1 text-sm border-b border-fashion-black/30 dark:border-fashion-white/30 opacity-50 cursor-not-allowed italic">
            {SHIFT_LOGIC_DESCRIPTION}
          </div>
        </div>
        <div>
          <label className="text-[9px] uppercase opacity-80 font-bold block mb-1">Days On</label>
          <input
            type="number"
            className="w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm focus:outline-none focus:border-fashion-accent focus:border-b-2"
            value={editForm.patternOn}
            onChange={e => setEditForm({ ...editForm, patternOn: parseInt(e.target.value) })}
          />
        </div>
        <div>
          <label className="text-[9px] uppercase opacity-80 font-bold block mb-1">Days Off</label>
          <input
            type="number"
            className="w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm focus:outline-none focus:border-fashion-accent focus:border-b-2"
            value={editForm.patternOff}
            onChange={e => setEditForm({ ...editForm, patternOff: parseInt(e.target.value) })}
          />
        </div>
        <div className="col-span-2">
          <label className="text-[9px] uppercase opacity-80 font-bold block mb-1">Cycle Start Date</label>
          <input
            type="date"
            className="w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm focus:outline-none focus:border-fashion-accent focus:border-b-2"
            value={editForm.cycleStartDate}
            onChange={e => setEditForm({ ...editForm, cycleStartDate: e.target.value })}
          />
        </div>
      </div>

      <div className="flex gap-2 pt-4 border-t border-fashion-black/10 dark:border-fashion-white/10">
        <button onClick={handleSaveStaff} className="flex-1 bg-fashion-black dark:bg-fashion-white text-fashion-white dark:text-fashion-black py-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-90">Save Changes</button>
        <button onClick={() => { setEditingId(null); setIsAddingNew(false); }} className="flex-1 border border-fashion-black dark:border-fashion-white py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-fashion-black/5 dark:hover:bg-fashion-white/10 transition-colors">Cancel</button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-fashion-white/95 dark:bg-fashion-dark-brown/95 backdrop-blur-md transition-opacity animate-fade-in">
      <div className="bg-fashion-white dark:bg-fashion-dark-brown border border-fashion-black dark:border-fashion-white p-6 md:p-8 max-w-2xl w-full h-[80vh] flex flex-col shadow-2xl relative animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-xs uppercase tracking-widest hover:opacity-50 z-10 text-fashion-black dark:text-fashion-white font-bold">Close</button>

        <h2 className="font-serif text-3xl mb-2 flex-shrink-0 text-fashion-black dark:text-fashion-white">Admin Portal</h2>

        {!isLoggedIn ? (
          <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full animate-slide-in">
            <p className="font-sans text-[10px] tracking-widest uppercase mb-8 opacity-80 font-bold text-center text-fashion-black dark:text-fashion-white">Authorized Personnel Only</p>
            <form onSubmit={handleSubmitLogin} className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold text-fashion-black dark:text-fashion-white">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-fashion-black dark:border-fashion-white py-2 focus:outline-none focus:border-fashion-accent font-serif text-lg text-fashion-black dark:text-fashion-white"
                  placeholder="Enter username"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest mb-2 font-bold text-fashion-black dark:text-fashion-white">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-fashion-black dark:border-fashion-white py-2 focus:outline-none focus:border-fashion-accent font-serif text-lg text-fashion-black dark:text-fashion-white"
                  placeholder="••••••••"
                />
                {error && <p className="text-fashion-accent text-xs mt-2 font-bold">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-fashion-black dark:bg-fashion-white text-fashion-white dark:text-fashion-black py-4 text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform font-bold"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden text-fashion-black dark:text-fashion-white animate-slide-in">
            {/* Tabs */}
            <div className="flex border-b border-fashion-black/20 dark:border-fashion-white/20 mb-6 flex-shrink-0">
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex-1 py-3 text-xs uppercase tracking-widest transition-colors ${activeTab === 'settings' ? 'border-b-2 border-fashion-accent font-bold' : 'opacity-60 hover:opacity-100 font-medium'}`}
              >
                Settings
              </button>
              <button
                onClick={() => setActiveTab('staff')}
                className={`flex-1 py-3 text-xs uppercase tracking-widest transition-colors ${activeTab === 'staff' ? 'border-b-2 border-fashion-accent font-bold' : 'opacity-60 hover:opacity-100 font-medium'}`}
              >
                Manage Staff
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pb-4">

              {/* SETTINGS TAB */}
              {activeTab === 'settings' && (
                <form onSubmit={handleSaveSettings} className="space-y-6 animate-fade-in">
                  {/* Display Mode Toggle */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-3 opacity-80 font-bold">Shift Display Style</label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setDisplayModeInput('dots')}
                        className={`flex-1 py-3 border text-[10px] uppercase tracking-widest font-bold transition-colors ${displayModeInput === 'dots'
                          ? 'bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black border-fashion-black dark:border-fashion-white'
                          : 'border-fashion-black/40 dark:border-fashion-white/40 hover:bg-fashion-gray/20 dark:hover:bg-fashion-white/10'
                          }`}
                      >
                        ● Dots
                      </button>
                      <button
                        type="button"
                        onClick={() => setDisplayModeInput('colors')}
                        className={`flex-1 py-3 border text-[10px] uppercase tracking-widest font-bold transition-colors ${displayModeInput === 'colors'
                          ? 'bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black border-fashion-black dark:border-fashion-white'
                          : 'border-fashion-black/40 dark:border-fashion-white/40 hover:bg-fashion-gray/20 dark:hover:bg-fashion-white/10'
                          }`}
                      >
                        ◼ Colors
                      </button>
                    </div>
                    <p className="text-[9px] opacity-60 mt-2">Colors: Green = Working, Grey = Off</p>
                  </div>

                  {/* Forecast Duration */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest mb-2 opacity-80 font-bold">Forecast Duration (Days)</label>
                    <select
                      value={daysInput}
                      onChange={(e) => setDaysInput(Number(e.target.value))}
                      className="w-full bg-transparent border-b border-fashion-black dark:border-fashion-white py-2 text-sm font-serif focus:outline-none focus:border-fashion-accent text-fashion-black dark:text-fashion-white"
                    >
                      <option value={30} className="bg-fashion-white dark:bg-fashion-dark-brown">30 Days</option>
                      <option value={45} className="bg-fashion-white dark:bg-fashion-dark-brown">45 Days</option>
                      <option value={60} className="bg-fashion-white dark:bg-fashion-dark-brown">60 Days</option>
                      <option value={90} className="bg-fashion-white dark:bg-fashion-dark-brown">90 Days</option>
                      <option value={180} className="bg-fashion-white dark:bg-fashion-dark-brown">6 Months (180 Days)</option>
                      <option value={365} className="bg-fashion-white dark:bg-fashion-dark-brown">Full Year (365 Days)</option>
                    </select>
                  </div>

                  <div className="pt-4 flex flex-col gap-4">
                    <button type="submit" className="w-full bg-fashion-black dark:bg-fashion-white text-fashion-white dark:text-fashion-black py-4 text-xs uppercase tracking-widest hover:opacity-90 font-bold">
                      Save Settings
                    </button>

                    <button
                      type="button"
                      onClick={onLogout}
                      className="w-full border border-fashion-accent text-fashion-accent py-3 text-[10px] uppercase tracking-widest hover:bg-fashion-accent hover:text-white transition-colors font-bold"
                    >
                      Logout
                    </button>
                  </div>
                  {saveMessage && <div className="text-center text-[10px] uppercase tracking-widest text-green-600 dark:text-green-400 font-bold">{saveMessage}</div>}
                </form>
              )}

              {/* STAFF TAB */}
              {activeTab === 'staff' && (
                <div className="space-y-4 animate-fade-in pb-10">

                  {/* Add New Button */}
                  {!editingId && (
                    <button
                      onClick={handleAddNewClick}
                      className="w-full py-4 border border-dashed border-fashion-black dark:border-fashion-white text-[10px] uppercase tracking-widest hover:bg-fashion-black hover:text-fashion-white dark:hover:bg-fashion-white dark:hover:text-fashion-black transition-colors mb-4 font-bold flex items-center justify-center gap-2"
                    >
                      <span className="text-lg leading-none">+</span> Add Personnel
                    </button>
                  )}

                  {/* Add New Form */}
                  {isAddingNew && renderEditForm()}

                  {/* Staff List */}
                  <div className="space-y-2">
                    {localStaff.map(person => {
                      const isEditingThis = editingId === person.id;
                      const isBlurred = editingId !== null && !isEditingThis;

                      if (isEditingThis) {
                        return <div key={person.id}>{renderEditForm()}</div>;
                      }

                      return (
                        <div
                          key={person.id}
                          className={`flex justify-between items-center p-3 border transition-all duration-300 ${isBlurred
                            ? 'opacity-30 pointer-events-none border-transparent'
                            : 'border-fashion-black/10 dark:border-fashion-white/10 bg-fashion-gray/20 dark:bg-fashion-white/5 hover:border-fashion-black dark:hover:border-fashion-white group'
                            }`}
                        >
                          <div>
                            <div className="font-serif text-sm font-medium">{person.name}</div>
                            <div className="text-[9px] uppercase opacity-60 font-bold">{person.role}</div>
                          </div>
                          <div className={`flex gap-2 transition-opacity ${isBlurred ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                            <button onClick={() => handleEditClick(person)} className="text-[9px] underline uppercase tracking-widest hover:text-fashion-accent font-bold">Edit</button>
                            <button onClick={() => handleDeleteStaff(person.id)} className="text-[9px] underline uppercase tracking-widest text-fashion-accent hover:text-red-600 font-bold">Remove</button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};