
import React from 'react';

const LoadingView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8E7] relative">
      {/* 极简呼吸灯效果 */}
      <div className="relative flex items-center justify-center">
        {/* 外层金色光晕 */}
        <div className="absolute w-14 h-14 bg-[#E6B422]/10 rounded-full animate-ping"></div>
        {/* 中层红色核心 */}
        <div className="relative w-16 h-16 bg-[#A61B1E] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
        </div>
      </div>

      {/* 提示文字 */}
      <div className="mt-12 text-center space-y-3">
        <h3 className="text-[#A61B1E] text-xl font-bold tracking-[0.3em] font-xingshu">
          灵感挥毫中
        </h3>
        <p className="text-gray-400 text-xs tracking-[0.2em] font-medium opacity-60">
          正在为您构思绝妙春联...
        </p>
      </div>

      {/* 简约线性进度 */}
      <div className="absolute bottom-24 w-32 h-[1px] bg-gray-200 overflow-hidden">
        <div className="h-full bg-[#A61B1E] animate-loading-line"></div>
      </div>

      <style>{`
        @keyframes loading-line {
          0% { transform: translateX(-100%); width: 30%; }
          50% { width: 60%; }
          100% { transform: translateX(200%); width: 30%; }
        }
        .animate-loading-line {
          animation: loading-line 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LoadingView;
