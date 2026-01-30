
import React from 'react';
import { CoupletLength } from '../types';

interface HomeViewProps {
  userName: string;
  setUserName: (val: string) => void;
  length: CoupletLength;
  setLength: (val: CoupletLength) => void;
  onGenerate: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({
  userName,
  setUserName,
  length,
  setLength,
  onGenerate,
}) => {
  return (
    <div className="h-screen flex flex-col items-center justify-between p-8 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] overflow-hidden">
      {/* 顶部装饰 */}
      <div className="w-full flex justify-between opacity-20 mt-4 px-2">
        <div className="w-12 h-12 border-l border-t border-[#A61B1E]"></div>
        <div className="w-12 h-12 border-r border-t border-[#A61B1E]"></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-black text-[#A61B1E] font-xingshu tracking-widest animate-pulse">笔头冒火</h1>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-[10px] tracking-[0.5em] font-bold uppercase">
             <span>乙巳蛇年</span>
             <span className="w-1.5 h-1.5 rounded-full bg-[#E6B422]"></span>
             <span>AI 挥毫</span>
          </div>
        </div>

        <div className="w-full space-y-10 bg-white/40 backdrop-blur-xl p-8 rounded-[3rem] border border-[#A61B1E]/5 shadow-2xl">
          <div className="space-y-4">
             <p className="text-[10px] text-center text-[#A61B1E]/40 font-bold tracking-[0.4em] uppercase">入墨姓名</p>
             <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              maxLength={2}
              placeholder="二字"
              className="w-full bg-transparent border-b border-[#A61B1E]/10 focus:border-[#A61B1E] outline-none text-6xl text-center py-4 font-xingshu transition-all placeholder:text-gray-100 text-[#333]"
            />
          </div>

          <div className="space-y-4">
             <p className="text-[10px] text-center text-[#A61B1E]/40 font-bold tracking-[0.4em] uppercase">对联篇幅</p>
             <div className="flex gap-4">
                {[5, 7].map(l => (
                    <button 
                        key={l} 
                        onClick={() => setLength(l as CoupletLength)}
                        className={`flex-1 py-3 rounded-2xl font-bold text-sm border-2 transition-all ${length === l ? 'bg-[#A61B1E] text-[#E6B422] border-[#A61B1E] shadow-lg scale-105' : 'bg-white/50 text-[#A61B1E] border-transparent'}`}
                    >
                        {l}言
                    </button>
                ))}
             </div>
          </div>

          <button
            onClick={onGenerate}
            disabled={userName.length < 2}
            className={`w-full py-5 rounded-[2rem] font-bold text-xl transition-all shadow-xl active:scale-95 ${
              userName.length < 2
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                : 'bg-[#A61B1E] text-[#E6B422] hover:brightness-110'
            }`}
          >
            落笔生辉
          </button>
        </div>
      </div>

      {/* 底部装饰 */}
      <div className="w-full flex justify-between opacity-20 mb-4 px-2">
        <div className="w-12 h-12 border-l border-b border-[#A61B1E]"></div>
        <div className="w-12 h-12 border-r border-b border-[#A61B1E]"></div>
      </div>
      
      <p className="fixed bottom-6 text-[8px] text-gray-300 tracking-[0.6em] uppercase font-bold">Traditional Wisdom x Modern AI</p>
    </div>
  );
};

export default HomeView;
