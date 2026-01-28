
import React from 'react';
import { COLORS, STYLES } from '../constants';
import { CoupletLength, CoupletStyle } from '../types';

interface HomeViewProps {
  userName: string;
  setUserName: (val: string) => void;
  length: CoupletLength;
  setLength: (val: CoupletLength) => void;
  style: CoupletStyle;
  setStyle: (val: CoupletStyle) => void;
  onGenerate: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({
  userName,
  setUserName,
  length,
  setLength,
  style,
  setStyle,
  onGenerate,
}) => {
  // 统一的选项按钮样式
  const getOptionClass = (active: boolean) => {
    return `px-5 py-1.5 rounded-full border-2 text-sm transition-all duration-300 font-bold ${
      active
        ? 'bg-[#A61B1E] text-[#E6B422] border-[#A61B1E] shadow-sm'
        : 'bg-white/80 border-[#A61B1E]/10 text-[#A61B1E] hover:border-[#A61B1E]/30'
    }`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-black mb-1 tracking-widest text-[#A61B1E] brush-font">笔头冒火</h1>
        <p className="text-gray-500 text-sm tracking-widest font-medium italic">用AI做你的专属春联</p>
      </div>

      <div className="w-full max-w-[320px] space-y-6 bg-white/40 p-6 rounded-[2rem] backdrop-blur-md border border-[#E6B422]/20 shadow-xl">
        {/* 姓名输入 - 修复中文 IME 问题 */}
        <div className="relative group text-center">
          <label className="block text-[10px] font-bold text-[#A61B1E] mb-1 uppercase tracking-widest opacity-60">
            您的姓名
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            maxLength={2}
            placeholder="两个字"
            className="w-full bg-transparent border-b-2 border-[#A61B1E]/20 focus:border-[#A61B1E] outline-none text-4xl text-center py-1 brush-font transition-all placeholder:text-gray-300 placeholder:text-xl"
          />
        </div>

        {/* 字数选择 - 统一药丸样式 */}
        <div className="space-y-3">
          <label className="block text-[10px] font-bold text-[#A61B1E] uppercase tracking-widest text-center opacity-60">
            春联字数
          </label>
          <div className="flex justify-center gap-3">
            {[5, 7].map((l) => (
              <button
                key={l}
                onClick={() => setLength(l as CoupletLength)}
                className={getOptionClass(length === l)}
              >
                {l}言
              </button>
            ))}
          </div>
        </div>

        {/* 风格选择 - 统一药丸样式 */}
        <div className="space-y-3">
          <label className="block text-[10px] font-bold text-[#A61B1E] uppercase tracking-widest text-center opacity-60">
            对联氛围
          </label>
          <div className="grid grid-cols-2 gap-2">
            {STYLES.map((s) => (
              <button
                key={s.value}
                onClick={() => setStyle(s.value)}
                className={getOptionClass(style === s.value)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* 生成按钮 - 移除流光动画 */}
        <button
          onClick={onGenerate}
          disabled={userName.length < 2}
          className={`w-full py-4 mt-2 rounded-xl font-bold text-lg shadow-md transform transition-all active:scale-95 ${
            userName.length < 2
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#A61B1E] text-[#E6B422] border border-[#E6B422]/20 hover:brightness-105'
          }`}
        >
          一键生成
        </button>
      </div>
      
      <div className="mt-8 text-gray-400 text-[10px] text-center opacity-40">
        <span>© 2024 笔头冒火 · 乙巳年制</span>
      </div>
    </div>
  );
};

export default HomeView;
