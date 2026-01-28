
import React, { useState, useEffect, useRef } from 'react';
import { CoupletData } from '../types';
import { FONT_OPTIONS, TEMPLATE_OPTIONS } from '../constants';

interface ResultViewProps {
  data: CoupletData;
  onBack: () => void;
  onRefresh: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ data, onBack, onRefresh }) => {
  const [currentFont, setCurrentFont] = useState(FONT_OPTIONS[0]);
  const [currentTemplate, setCurrentTemplate] = useState(TEMPLATE_OPTIONS[0]);
  const [isWriting, setIsWriting] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsWriting(true);
    const timer = setTimeout(() => setIsWriting(false), 800);
    return () => clearTimeout(timer);
  }, [data, currentFont, currentTemplate]);

  const handleShare = () => {
    alert("正在保存高清海报到相册...");
  };

  const WritingText = ({ text, vertical = true }: { text: string, vertical?: boolean }) => {
    const textColor = currentTemplate.variant === 'cut' ? '#A61B1E' : currentTemplate.text;
    
    return (
      <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} items-center justify-center gap-1.5`}>
        {text.split('').map((char, i) => (
          <div key={i} className="relative flex items-center justify-center">
            {/* Background Decorative Circle */}
            <div 
              className={`absolute w-full h-full rounded-full border opacity-5 scale-125 transition-all duration-700 ${isWriting ? 'scale-50 opacity-0' : ''}`}
              style={{ borderColor: textColor }}
            ></div>
            
            <span
              className={`${currentFont.className} relative z-10 transition-all duration-700 ${
                isWriting ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100 translate-y-0 blur-0'
              }`}
              style={{ 
                  fontSize: vertical ? (data.upper.length > 5 ? '2.1rem' : '2.8rem') : '1.7rem',
                  lineHeight: '1.2',
                  color: textColor,
                  transitionDelay: `${i * 120}ms`,
                  textShadow: currentTemplate.variant === 'modern' ? `1px 1px 0px rgba(0,0,0,0.15)` : 'none'
              }}
            >
              {char}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const CoupletPaper = ({ children, type }: { children?: React.ReactNode, type: 'horizontal' | 'vertical' }) => {
    const { variant } = currentTemplate;
    
    let className = "relative transition-all duration-700 overflow-hidden flex flex-col items-center justify-center ";
    let style: React.CSSProperties = {
        width: type === 'horizontal' ? '85%' : '26%',
        paddingTop: type === 'vertical' ? '1.8rem' : '0.8rem',
        paddingBottom: type === 'vertical' ? '1.8rem' : '0.8rem',
        minHeight: type === 'horizontal' ? '70px' : 'auto'
    };

    switch(variant) {
        case 'palace':
            className += "bg-wan-nian-hong";
            break;
        case 'gold':
            className += "bg-sa-jin";
            break;
        case 'cut':
            className += "paper-cut-element";
            style.borderRadius = '4px';
            break;
        case 'modern':
            className += "bg-guo-chao";
            break;
        default:
            style.backgroundColor = currentTemplate.bg;
    }

    return (
      <div className={className} style={style}>
        {variant === 'cut' && <div className="paper-cut-inner-border"></div>}
        {variant === 'palace' && <div className="absolute inset-0 pointer-events-none opacity-20 xuan-filter"></div>}
        
        <div className="relative z-10 w-full flex items-center justify-center px-1">
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] flex flex-col items-center py-6 px-4 overflow-y-auto" ref={containerRef}>
      {/* Header */}
      <header className="w-full max-w-lg flex justify-between items-center mb-6 px-2">
        <button onClick={onBack} className="text-[#A61B1E] text-xs font-bold flex items-center bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm hover:bg-white transition-all active:scale-95">
            <span className="mr-1">←</span> 返回
        </button>
        <div className="flex flex-col items-center">
            <h2 className="text-[#A61B1E] font-xingshu text-3xl tracking-tight leading-none">笔头冒火</h2>
            <span className="text-[8px] text-[#A61B1E]/40 uppercase tracking-[0.3em] mt-1 font-bold">乙巳年制</span>
        </div>
        <button onClick={onRefresh} className="text-[#A61B1E] text-xs font-bold bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm hover:bg-white transition-all active:scale-95">
            换一组
        </button>
      </header>

      {/* 寓意置顶 */}
      <div className="w-full max-w-sm mb-8 bg-white/50 backdrop-blur-lg p-5 rounded-[1.5rem] border border-[#A61B1E]/10 shadow-sm">
        <p className="text-[12px] text-gray-600 leading-relaxed text-center font-medium">
          <span className="text-[#A61B1E] font-bold mr-2">【 寓意 】</span>
          {data.interpretation}
        </p>
      </div>

      {/* Couplet Display Area */}
      <div className="w-full max-w-[360px] flex flex-col items-center gap-8 mb-10 transform transition-all duration-500">
        {/* Horizontal Piece */}
        <CoupletPaper type="horizontal">
          <WritingText text={data.horizontal} vertical={false} />
        </CoupletPaper>

        {/* Vertical Pieces */}
        <div className="w-full flex justify-around items-start px-2">
          <CoupletPaper type="vertical">
            <WritingText text={data.upper} />
          </CoupletPaper>
          
          <CoupletPaper type="vertical">
            <WritingText text={data.lower} />
          </CoupletPaper>
        </div>
      </div>

      {/* Control Panel */}
      <div className="w-full max-w-sm bg-white/80 backdrop-blur-3xl p-6 rounded-[2.5rem] border border-[#E6B422]/20 shadow-2xl space-y-6">
        
        <div className="space-y-5">
          {/* 书法字体 */}
          <div>
            <label className="text-[10px] text-gray-400 block mb-3 font-bold uppercase tracking-[0.3em] text-center">书法字体</label>
            <div className="flex gap-2">
              {FONT_OPTIONS.map(font => (
                <button
                  key={font.id}
                  onClick={() => setCurrentFont(font)}
                  className={`flex-1 py-2.5 rounded-xl border text-sm transition-all duration-500 font-bold h-[44px] flex items-center justify-center ${
                    currentFont.id === font.id ? 'bg-[#A61B1E] text-[#E6B422] border-[#A61B1E] shadow-lg scale-[1.05]' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'
                  }`}
                >
                  <span className={font.className}>{font.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 纸张模版 - 单行排列 */}
          <div>
            <label className="text-[10px] text-gray-400 block mb-3 font-bold uppercase tracking-[0.3em] text-center">纸张模版</label>
            <div className="flex gap-2">
              {TEMPLATE_OPTIONS.map(tpl => (
                <button
                  key={tpl.id}
                  onClick={() => setCurrentTemplate(tpl)}
                  className={`flex-1 rounded-xl border text-[11px] transition-all duration-500 font-bold h-[44px] flex items-center justify-center px-1 ${
                    currentTemplate.id === tpl.id ? 'bg-[#A61B1E] text-[#E6B422] border-[#A61B1E] shadow-lg scale-[1.05]' : 'bg-white border-gray-100 text-gray-400'
                  }`}
                >
                  <span className="truncate">{tpl.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button 
            onClick={handleShare}
            className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 ${
              isWriting ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-[#A61B1E] text-[#E6B422] border border-[#E6B422]/30 hover:brightness-110'
            }`}
        >
            {isWriting ? (
                <>
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
                    正在挥毫...
                </>
            ) : '保存到相册'}
        </button>
      </div>
    </div>
  );
};

export default ResultView;
