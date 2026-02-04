
import React, { useState } from 'react';
import PortalPreview from './components/PortalPreview';
import CodeExporter from './components/CodeExporter';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">S</div>
          <h1 className="text-lg font-bold text-gray-800">Starlink Admin Dashboard</h1>
        </div>
        <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          <button 
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'preview' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Live Preview
          </button>
          <button 
            onClick={() => setActiveTab('code')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'code' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            Get MikroTik Files
          </button>
        </nav>
      </header>

      <main className="flex-grow overflow-auto bg-gray-50">
        {activeTab === 'preview' ? <PortalPreview /> : <CodeExporter />}
      </main>

      <footer className="bg-white border-t border-gray-200 py-3 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Jadan Tech Solutions Nigeria Ltd. Portal Version 1.0.4
      </footer>
    </div>
  );
};

export default App;
