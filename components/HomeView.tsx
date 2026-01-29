
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
  const getOptionClass = (active: boolean) => {
    return `flex-1 py-3 rounded-2xl border-2 text-sm transition-all duration-300 font-bold flex items-center justify-center ${
      active
        ? 'bg-[#A61B1E] text-[#E6B422] border-[#A61B1E] shadow-lg scale-[1.05]'
        : 'bg-white/80 border-[#A61B1E]/10 text-[#A61B1E] hover:border-[#A61B1E]/30'
    }`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 relative">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 100 100" className="text-[#A61B1E] fill-current">
          <path d="M50 5 L95 50 L50 95 L5 50 Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none scale-x-[-1]">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#A61B1E] fill-current">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M30 50 L70 50 M50 30 L50 70" />
        </svg>
      </div>

      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black mb-3 tracking-[0.2em] text-[#A61B1E] font-xingshu">笔头冒火</h1>
        <div className="h-0.5 w-16 bg-[#A61B1E] mx-auto mb-3 opacity-30"></div>
        <p className="text-gray-500 text-xs tracking-[0.4em] font-medium uppercase">乙巳蛇年 · AI 挥毫</p>
      </div>

      <div className="w-full max-w-[340px] space-y-10 bg-white/50 p-8 rounded-[3rem] backdrop-blur-2xl border border-[#E6B422]/20 shadow-2xl">
        {/* 姓名输入 */}
        <div className="space-y-4 text-center">
          <label className="block text-[10px] font-bold text-[#A61B1E] uppercase tracking-[0.4em] opacity-40">
            请输入您的姓名
          </label>
          <div className="relative inline-block w-full">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              maxLength={2}
              placeholder="姓名"
              className="w-full bg-transparent border-b-2 border-[#A61B1E]/10 focus:border-[#A61B1E] outline-none text-5xl text-center py-4 font-xingshu transition-all placeholder:text-gray-200 placeholder:text-3xl text-[#333333]"
            />
          </div>
        </div>

        {/* 字数选择 */}
        <div className="space-y-4">
          <label className="block text-[10px] font-bold text-[#A61B1E] uppercase tracking-[0.4em] text-center opacity-40">
            选择对联篇幅
          </label>
          <div className="flex gap-4">
            {[5, 7].map((l) => (
              <button
                key={l}
                onClick={() => setLength(l as CoupletLength)}
                className={getOptionClass(length === l)}
              >
                {l}言对联
              </button>
            ))}
          </div>
        </div>

        {/* 生成按钮 */}
        <div className="pt-4">
          <button
            onClick={onGenerate}
            disabled={userName.length < 2}
            className={`w-full py-5 rounded-[2rem] font-bold text-xl shadow-xl transform transition-all active:scale-95 ${
              userName.length < 2
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                : 'bg-[#A61B1E] text-[#E6B422] border border-[#E6B422]/20 hover:brightness-110'
            }`}
          >
            生成我的对联
          </button>
        </div>
      </div>
      
      <div className="mt-12 text-gray-300 text-[9px] text-center tracking-widest font-bold">
        <p>乙巳年制 · 笔头冒火</p>
        <p className="mt-1 opacity-50">TRADITIONAL WISDOM MEETS AI</p>
      </div>
    </div>
  );
};

export default HomeView;
