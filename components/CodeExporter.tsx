
import React, { useState } from 'react';

const CodeExporter: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<'login' | 'status'>('login');

  const sharedHead = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
        :root { --primary: #2563eb; --bg: #f8fafc; --card: #ffffff; --text: #0f172a; --border: #e2e8f0; }
        .dark { --bg: #020617; --card: #0f172a; --text: #f8fafc; --border: #1e293b; }
        body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); transition: background 0.3s; }
        .isp-card { background: var(--card); border: 1px solid var(--border); border-radius: 2rem; }
        .input-field { background: rgba(0,0,0,0.03); border: 2px solid transparent; border-radius: 1rem; transition: all 0.2s; }
        .dark .input-field { background: rgba(255,255,255,0.05); color: #fff; }
        .input-field:focus { border-color: var(--primary); background: #fff; outline: none; }
        .dark .input-field:focus { background: #000; }
        .loading-spinner { border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid #fff; border-radius: 50%; width: 20px; height: 20px; animation: spin 1s linear infinite; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>
    <script>
        function applyTheme() {
            if (localStorage.getItem('theme') === 'dark') document.documentElement.classList.add('dark');
        }
        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        }
        applyTheme();
    </script>
  `;

  const themeToggleBtn = `
    <button onclick="toggleTheme()" class="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-xl border border-gray-100 dark:border-slate-700 flex items-center justify-center transition-transform active:scale-90">
        <i class="fa-solid fa-circle-half-stroke text-blue-600"></i>
    </button>
  `;

  const footerHtml = `
    <footer class="mt-12 py-8 text-center">
        <p class="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-slate-600">
            Developed by Jadan Tech Solutions Nigeria Ltd
        </p>
    </footer>
  `;

  const pricingSection = `
    <div class="mt-8 pt-8 border-t border-gray-100 dark:border-slate-800">
        <h3 class="text-[10px] font-black text-gray-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4 text-center">Ticket Pricing (Kudin Tikiti)</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="bg-gray-50 dark:bg-slate-800 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 text-center shadow-sm">
                <p class="text-[8px] font-black text-blue-500 uppercase mb-1">24 Hours</p>
                <p class="text-sm font-black text-gray-800 dark:text-white">₦200</p>
            </div>
            <div class="bg-gray-50 dark:bg-slate-800 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 text-center shadow-sm">
                <p class="text-[8px] font-black text-blue-500 uppercase mb-1">48 Hours</p>
                <p class="text-sm font-black text-gray-800 dark:text-white">₦300</p>
            </div>
            <div class="bg-gray-50 dark:bg-slate-800 p-4 rounded-2xl border border-gray-100 dark:border-slate-700 text-center shadow-sm">
                <p class="text-[8px] font-black text-blue-500 uppercase mb-1">Weekly</p>
                <p class="text-sm font-black text-gray-800 dark:text-white">₦1,000</p>
            </div>
        </div>
    </div>
  `;

  const loginCode = `<!DOCTYPE html>
<html>
<head>
    <title>Login | Starlink Ticket Portal</title>
    ${sharedHead}
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
    ${themeToggleBtn}

    <!-- MikroTik Login Redirection Form -->
    <form name="sendin" action="$(link-login-only)" method="post" style="display:none">
        <input type="hidden" name="username" />
        <input type="hidden" name="password" />
        <input type="hidden" name="dst" value="$(link-orig)" />
        <input type="hidden" name="popup" value="true" />
    </form>

    <div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <!-- Left Column: Login Form -->
        <div class="isp-card p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div class="mb-10">
                <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                    <i class="fa-solid fa-satellite-dish text-2xl"></i>
                </div>
                <h1 class="text-3xl font-black tracking-tighter uppercase dark:text-white">Starlink Access</h1>
                <p class="text-blue-600 text-sm font-bold mt-1">Shigar da username da password da aka baka.</p>
            </div>

            <form name="login" action="$(link-login-only)" method="post" onSubmit="return doLogin()" class="space-y-6">
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Ticket Username</label>
                    <div class="relative">
                        <i class="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input name="username" type="text" value="$(username)" class="w-full pl-12 pr-4 py-4 input-field font-bold" placeholder="Enter Ticket ID" required>
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 ml-1">Voucher Secret</label>
                    <div class="relative">
                        <i class="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input id="password" name="password" type="password" class="w-full pl-12 pr-12 py-4 input-field font-bold" placeholder="Enter Password" required>
                        <button type="button" onclick="togglePass()" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                            <i id="eye-icon" class="fa-solid fa-eye"></i>
                        </button>
                    </div>
                </div>

                <button id="login-btn" type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 transition-all transform active:scale-[0.98] flex items-center justify-center uppercase tracking-widest">
                    <span>Connect Now</span>
                </button>
            </form>

            <div id="error-box" class="mt-6 hidden">
                <div class="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 p-4 rounded-xl flex items-start">
                    <i class="fa-solid fa-circle-exclamation text-red-600 mr-3 mt-1"></i>
                    <div>
                        <p id="error-text" class="text-xs font-bold text-red-600 uppercase tracking-tight"></p>
                        <p class="text-[10px] text-red-500 italic mt-1">Sake duba bayanan ka.</p>
                    </div>
                </div>
            </div>

            ${pricingSection}
        </div>

        <!-- Right Column: Status Panel -->
        <div class="isp-card bg-slate-900 border-slate-800 p-8 md:p-12 text-white flex flex-col justify-between shadow-2xl">
            <div>
                <div class="flex items-center justify-between mb-10">
                    <h3 class="font-black text-xs uppercase tracking-[0.3em] text-slate-500">Network Intelligence</h3>
                    <span class="flex items-center text-[10px] font-black bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
                        <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span> LIVE
                    </span>
                </div>

                <div class="space-y-8">
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-5 border border-white/10">
                            <i class="fa-solid fa-wifi text-blue-500"></i>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Connection</p>
                            <p class="font-black text-lg">Starlink Optimal</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-5 border border-white/10">
                            <i class="fa-solid fa-location-dot text-red-500"></i>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Point of Presence</p>
                            <p class="font-black text-lg">Nigeria Gateway</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-5 border border-white/10">
                            <i class="fa-solid fa-shield-halved text-green-500"></i>
                        </div>
                        <div>
                            <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest">SLA Reliability</p>
                            <p class="font-black text-lg">99.9% Uptime</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Notice</p>
                <p class="text-xs text-slate-300 leading-relaxed font-medium">
                    This portal uses SpaceX Starlink technology to provide low-latency internet. Authentication is required to maintain quality of service.
                </p>
            </div>
        </div>
    </div>

    ${footerHtml}

    <!-- MikroTik CHAP Script -->
    <script type="text/javascript" src="/md5.js"></script>
    <script type="text/javascript">
        function togglePass() {
            var pass = document.getElementById('password');
            var icon = document.getElementById('eye-icon');
            if (pass.type === 'password') {
                pass.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                pass.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        }

        function doLogin() {
            var user = document.login.username.value;
            var pass = document.login.password.value;
            
            document.sendin.username.value = user;
            document.sendin.password.value = hexMD5('$(chap-id)' + pass + '$(chap-challenge)');
            
            var btn = document.getElementById('login-btn');
            btn.innerHTML = '<div class="loading-spinner mr-3"></div> AUTHENTICATING...';
            btn.disabled = true;
            
            document.sendin.submit();
            return false;
        }

        window.onload = function() {
            var error = "$(error)";
            if (error && error !== "$(error)") {
                document.getElementById('error-box').classList.remove('hidden');
                document.getElementById('error-text').innerText = error;
            }
        };
    </script>
</body>
</html>`;

  const statusCode = `<!DOCTYPE html>
<html>
<head>
    <title>Active Session | Starlink Portal</title>
    ${sharedHead}
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4">
    ${themeToggleBtn}

    <div class="w-full max-w-lg isp-card shadow-2xl overflow-hidden">
        <div class="bg-blue-600 p-10 text-white relative overflow-hidden">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div class="relative z-10 flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 border-4 border-white/20">
                    <i class="fa-solid fa-check text-3xl"></i>
                </div>
                <h1 class="text-3xl font-black uppercase tracking-tight">Access Active</h1>
                <p class="text-blue-100 font-bold text-xs uppercase tracking-widest mt-2">Connected to Space Station</p>
            </div>
        </div>

        <div class="p-8 md:p-12 space-y-8">
            <div class="grid grid-cols-2 gap-4">
                <div class="p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
                    <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">User ID</p>
                    <p class="font-black text-gray-800 dark:text-white truncate">$(username)</p>
                </div>
                <div class="p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700">
                    <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Uptime</p>
                    <p class="font-black text-gray-800 dark:text-white">$(uptime)</p>
                </div>
            </div>

            <div class="space-y-4">
                <div class="flex items-center justify-between p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                    <div>
                        <p class="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1">Time Remaining</p>
                        <p class="text-3xl font-black text-blue-600 font-mono tracking-tighter">$(session-time-left)</p>
                    </div>
                    <i class="fa-solid fa-clock-rotate-left text-blue-600/20 text-4xl"></i>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div class="p-5 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-800">
                        <i class="fa-solid fa-cloud-arrow-down text-green-500 mb-2"></i>
                        <p class="text-[9px] font-black text-green-600 uppercase mb-1">Downloaded</p>
                        <p class="font-black text-gray-800 dark:text-white">$(bytes-out-nice)</p>
                    </div>
                    <div class="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                        <i class="fa-solid fa-cloud-arrow-up text-blue-500 mb-2"></i>
                        <p class="text-[9px] font-black text-blue-600 uppercase mb-1">Uploaded</p>
                        <p class="font-black text-gray-800 dark:text-white">$(bytes-in-nice)</p>
                    </div>
                </div>
            </div>

            ${pricingSection}

            <div class="pt-6 space-y-4">
                <a href="https://www.google.com" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-center flex items-center justify-center transition-all shadow-lg active:scale-95 uppercase tracking-widest">
                    Start Browsing
                </a>
                
                <form action="$(link-logout)" method="post">
                    <button type="submit" class="w-full bg-white dark:bg-slate-800 text-red-600 py-4 rounded-2xl font-black border-2 border-red-50 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all uppercase tracking-widest text-xs">
                        Disconnect Session
                    </button>
                </form>
            </div>
        </div>
    </div>

    ${footerHtml}
</body>
</html>`;

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Code copied! This file is ready to be uploaded to your MikroTik hotspot folder.');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-12 border-b border-gray-50 text-left">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">RouterOS Templates</h2>
            <p className="text-gray-500 mt-2 font-medium max-w-md">100% compatible with MikroTik Hotspot. Simply copy and paste these into your router's HTML folder.</p>
          </div>
          <div className="flex gap-2 p-1.5 bg-gray-100 rounded-2xl shrink-0">
            <button 
              onClick={() => setSelectedFile('login')}
              className={`px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${selectedFile === 'login' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              login.html
            </button>
            <button 
              onClick={() => setSelectedFile('status')}
              className={`px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${selectedFile === 'status' ? 'bg-white text-blue-600 shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              status.html
            </button>
          </div>
        </div>

        <div className="relative group text-left">
          <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={() => copy(selectedFile === 'login' ? loginCode : statusCode)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center shadow-2xl active:scale-95"
            >
              <i className="fa-solid fa-copy mr-3"></i> Copy to Clipboard
            </button>
          </div>
          <div className="bg-slate-950 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl">
            <div className="px-8 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <span className="text-slate-500 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center">
                <i className="fa-solid fa-file-code mr-3 text-blue-500"></i>
                {selectedFile}.html
              </span>
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
              </div>
            </div>
            <pre className="p-10 text-blue-300 font-mono text-[12px] overflow-auto max-h-[600px] leading-relaxed custom-scrollbar">
              <code>{selectedFile === 'login' ? loginCode : statusCode}</code>
            </pre>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
           <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100">
              <i className="fa-solid fa-bolt text-blue-600 text-2xl mb-4"></i>
              <h4 className="font-black text-gray-900 mb-2 uppercase text-xs tracking-widest">Optimized Assets</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Uses CDNs for Tailwind and FontAwesome to keep file size minimal for RouterOS memory limits.</p>
           </div>
           <div className="p-8 bg-green-50/50 rounded-3xl border border-green-100">
              <i className="fa-solid fa-shield-check text-green-600 text-2xl mb-4"></i>
              <h4 className="font-black text-gray-900 mb-2 uppercase text-xs tracking-widest">CHAP Secure</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Fully implements the MD5 CHAP authentication required for MikroTik Hotspot security.</p>
           </div>
           <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
              <i className="fa-solid fa-mobile-screen text-blue-400 text-2xl mb-4"></i>
              <h4 className="font-black text-white mb-2 uppercase text-xs tracking-widest">Adaptive UI</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Designed for low-resolution mobile phones common in rural ticket vending sites.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CodeExporter;
