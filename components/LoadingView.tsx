
import React from 'react';

const LoadingView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8E7] relative overflow-hidden">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Ink splash animation simulation */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full ink-splash" style={{ animationDelay: '0s' }}></div>
            <div className="w-4 h-4 bg-black rounded-full ink-splash" style={{ animationDelay: '0.4s' }}></div>
            <div className="w-12 h-12 bg-black rounded-full ink-splash" style={{ animationDelay: '0.8s' }}></div>
        </div>
        
        <div className="z-10 text-center">
          <p className="text-[#A61B1E] text-2xl font-bold brush-font animate-pulse">墨水晕染中...</p>
          <p className="text-gray-400 text-sm mt-4">正在为您构思绝妙春联</p>
        </div>
      </div>
      
      {/* Decorative paper scroll unfolding effect placeholder */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#A61B1E]/20 rounded-full overflow-hidden">
        <div className="h-full bg-[#A61B1E] animate-[loading-bar_3s_ease-in-out_infinite]"></div>
      </div>

      <style>{`
        @keyframes loading-bar {
          0% { width: 0; left: 0; }
          50% { width: 100%; left: 0; }
          100% { width: 0; left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingView;
