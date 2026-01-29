
import React from 'react';

const LoadingView: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF8E7] relative overflow-hidden">
      <div className="relative w-80 h-64 flex items-center justify-center">
        
        {/* Calligraphy Brush Animation Container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Ink Path (SVG) */}
            <svg className="absolute w-full h-full" viewBox="0 0 200 100">
                <path 
                    d="M40,50 Q100,20 160,50 Q100,80 40,50" 
                    fill="none" 
                    stroke="#333333" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="animate-draw-path"
                    style={{ strokeDasharray: 400, strokeDashoffset: 400 }}
                />
            </svg>
            
            {/* The Brush */}
            <div className="absolute animate-brush-move">
                {/* Brush Handle */}
                <div className="w-2 h-20 bg-[#3d2b1f] rounded-t-full shadow-md relative">
                    {/* Brush Head/Tip */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-8 bg-[#333333] rounded-full origin-top transform rotate-3 scale-y-110" 
                         style={{ clipPath: 'polygon(50% 100%, 0% 0%, 100% 0%)' }}>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="z-10 text-center mt-32">
          <p className="text-[#A61B1E] text-2xl font-bold font-xingshu animate-pulse tracking-widest">挥毫落纸中...</p>
          <p className="text-gray-400 text-sm mt-3 tracking-widest font-medium opacity-60">正在为您构思绝妙春联</p>
        </div>
      </div>
      
      {/* Decorative progress bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#A61B1E]/10 rounded-full overflow-hidden">
        <div className="h-full bg-[#A61B1E] animate-loading-bar opacity-40"></div>
      </div>

      <style>{`
        @keyframes draw-path {
          0% { stroke-dashoffset: 400; opacity: 0; }
          10% { opacity: 0.8; }
          50% { stroke-dashoffset: 0; opacity: 0.8; }
          90% { opacity: 0; }
          100% { stroke-dashoffset: 400; opacity: 0; }
        }
        .animate-draw-path {
          animation: draw-path 3s ease-in-out infinite;
        }
        
        @keyframes brush-move {
          0% { transform: translate(-80px, 0) rotate(-15deg); }
          50% { transform: translate(80px, 10px) rotate(15deg); }
          100% { transform: translate(-80px, 0) rotate(-15deg); }
        }
        .animate-brush-move {
          animation: brush-move 3s ease-in-out infinite;
        }

        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingView;
