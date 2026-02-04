
import React, { useState, useEffect } from 'react';
import { NetworkStatusPanel } from './SharedComponents';

const PortalPreview: React.FC = () => {
  const [view, setView] = useState<'login' | 'status'>('login');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ en: string; ha: string; icon: string } | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [remainingSeconds, setRemainingSeconds] = useState(82800);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (username.toLowerCase() === 'starlink' && password === 'test') {
        setView('status');
      } else {
        setError({
          en: "Invalid Ticket Credentials",
          ha: "Lambar tikiti ba daidai ba.",
          icon: "fa-ban"
        });
      }
    }, 1200);
  };

  const containerClasses = `w-full min-h-full py-12 px-4 transition-colors duration-500 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-gray-900'}`;

  const themeToggle = (
    <button 
      onClick={toggleTheme}
      className={`fixed top-24 right-6 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-90 ${isDarkMode ? 'bg-slate-800 text-yellow-400 border border-slate-700' : 'bg-white text-slate-800 border border-gray-200'}`}
    >
      <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
    </button>
  );

  const pricingSection = (
    <div className={`mt-8 pt-8 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
      <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-center ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>Ticket Pricing (Kudin Tikiti)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className={`p-4 rounded-2xl border text-center shadow-sm ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
          <p className="text-[8px] font-black text-blue-500 uppercase mb-1">24 Hours</p>
          <p className={`text-sm font-black ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>₦200</p>
        </div>
        <div className={`p-4 rounded-2xl border text-center shadow-sm ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
          <p className="text-[8px] font-black text-blue-500 uppercase mb-1">48 Hours</p>
          <p className={`text-sm font-black ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>₦300</p>
        </div>
        <div className={`p-4 rounded-2xl border text-center shadow-sm ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
          <p className="text-[8px] font-black text-blue-500 uppercase mb-1">Weekly</p>
          <p className={`text-sm font-black ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>₦1,000</p>
        </div>
      </div>
    </div>
  );

  if (view === 'status') {
    return (
      <div className={containerClasses}>
        {themeToggle}
        <div className="w-full max-w-lg mx-auto rounded-[2.5rem] shadow-2xl border overflow-hidden text-left bg-white dark:bg-slate-900 border-gray-100 dark:border-slate-800">
          <div className="bg-blue-600 p-10 text-white relative text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/20">
              <i className="fa-solid fa-check text-3xl"></i>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight">Access Active</h1>
            <p className="text-blue-100 font-bold text-xs uppercase mt-2">ID: {username || 'demo-user'}</p>
          </div>

          <div className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Uptime</p>
                <p className="font-black text-gray-800 dark:text-white">00:45:12</p>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Downloads</p>
                <p className="font-black text-gray-800 dark:text-white">12.5 MiB</p>
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 text-center">
              <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-2">Remaining Time</p>
              <p className="text-4xl font-black text-blue-600 font-mono">23:59:59</p>
            </div>

            {pricingSection}

            <button onClick={() => setView('login')} className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest transition-all">
              Disconnect
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      {themeToggle}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className={`lg:col-span-7 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border text-left relative overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-slate-900 border-slate-800 shadow-none' : 'bg-white border-gray-100 shadow-2xl'}`}>
          <div className="mb-10">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                <i className="fa-solid fa-satellite-dish text-2xl"></i>
            </div>
            <h2 className={`text-3xl font-black mb-1 uppercase tracking-tighter ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Ticket Gate</h2>
            <p className="text-blue-600 text-sm font-bold tracking-tight uppercase">Shigar da username da password da aka baka.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-2 ml-1 ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>Username</label>
              <div className="relative">
                <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ticket ID" 
                  className={`block w-full pl-12 pr-4 py-4 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 transition-all outline-none font-bold ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-50 text-gray-900'}`}
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-2 ml-1 ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>Password</label>
              <div className="relative">
                <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Secret Code" 
                  className={`block w-full pl-12 pr-12 py-4 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-500 transition-all outline-none font-bold ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-50 text-gray-900'}`}
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-800 flex items-center">
                <i className="fa-solid fa-circle-exclamation text-red-600 mr-3"></i>
                <p className="text-xs font-bold text-red-600 uppercase">{error.en}</p>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center uppercase tracking-widest"
            >
              {isLoading ? 'Connecting...' : 'Connect to Starlink'}
            </button>
          </form>

          {pricingSection}

          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-slate-800 text-center">
            <p className="text-[10px] font-black text-gray-400 dark:text-slate-600 uppercase tracking-widest">Powered by SpaceX Infrastructure</p>
          </div>
        </div>

        <div className="lg:col-span-5 h-full">
          <NetworkStatusPanel isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default PortalPreview;
