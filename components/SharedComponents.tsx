
import React from 'react';

export const NetworkStatusPanel: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = false }) => {
  return (
    <div className={`rounded-[2rem] shadow-xl border overflow-hidden h-full transition-colors duration-500 ${isDarkMode ? 'bg-slate-900 border-slate-800 shadow-none' : 'bg-white border-gray-100 shadow-xl'}`}>
      <div className={`${isDarkMode ? 'bg-blue-950' : 'bg-blue-900'} p-5 md:p-6 text-white flex items-center justify-between`}>
        <h3 className="font-black text-xs uppercase tracking-[0.2em]">Network Intelligence</h3>
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </div>
      
      <div className="p-6 md:p-8 space-y-6">
        <div className={`flex items-center p-4 rounded-2xl border transform transition-transform hover:scale-[1.02] ${isDarkMode ? 'bg-slate-800/40 border-slate-700' : 'bg-green-50 border-green-100'}`}>
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white mr-4 shadow-lg shrink-0">
            <i className="fa-solid fa-satellite"></i>
          </div>
          <div>
            <p className={`text-[10px] font-black uppercase tracking-wider ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Uplink Status</p>
            <p className={`font-black text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Internet Optimal</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100'}`}>
            <p className={`text-[10px] font-black uppercase mb-1 tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>Provider</p>
            <p className={`text-sm font-black ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>SpaceX Starlink</p>
          </div>
          <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100'}`}>
            <p className={`text-[10px] font-black uppercase mb-1 tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>Region</p>
            <p className={`text-sm font-black ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Nigeria</p>
          </div>
        </div>

        <div className={`p-5 rounded-2xl border-2 border-dashed ${isDarkMode ? 'border-slate-800' : 'border-gray-100'}`}>
           <div className="flex justify-between items-center mb-3">
             <span className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>Reliability Score</span>
             <span className="text-xs font-black text-blue-600">99.9%</span>
           </div>
           <div className={`w-full rounded-full h-2 overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
             <div className="bg-blue-600 h-full w-[99.9%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
           </div>
        </div>

        <div className="space-y-4 pt-2">
          {[
            { label: 'Access Point', val: 'Node-Lagos-Star-01', color: isDarkMode ? 'text-slate-300' : 'text-gray-800' },
            { label: 'Latency', val: '24ms (Ultra Low)', color: 'text-green-500' },
            { label: 'Encryption', val: 'Active', color: 'text-blue-500', icon: 'fa-shield-check' },
          ].map((row, i) => (
            <div key={i} className={`flex justify-between items-center text-xs py-3 border-b ${isDarkMode ? 'border-slate-800' : 'border-gray-50'} last:border-0`}>
              <span className={`font-bold uppercase tracking-tighter ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>{row.label}</span>
              <span className={`${row.color} font-black flex items-center`}>
                {row.icon && <i className={`fa-solid ${row.icon} mr-1.5 text-[10px]`}></i>}
                {row.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={`p-5 text-center border-t transition-colors duration-500 ${isDarkMode ? 'bg-slate-800/50 border-slate-800' : 'bg-gray-50 border-gray-100'}`}>
        <p className={`text-[10px] font-bold uppercase tracking-widest leading-relaxed ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>
          Secured access for Starlink Gateway. 
          <br/>Nigeria-Wide Coverage.
        </p>
      </div>
    </div>
  );
};
