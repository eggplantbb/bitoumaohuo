
import React, { useState, useEffect, useRef } from 'react';
import { CoupletData } from '../types';
import { FONT_OPTIONS, TEMPLATE_OPTIONS } from '../constants';

interface ResultViewProps {
  data: CoupletData;
  onBack: () => void;
  onRefresh: () => void;
  currentFont: typeof FONT_OPTIONS[0];
  setCurrentFont: (font: typeof FONT_OPTIONS[0]) => void;
  currentTemplate: typeof TEMPLATE_OPTIONS[0];
  setCurrentTemplate: (tpl: typeof TEMPLATE_OPTIONS[0]) => void;
}

const ResultView: React.FC<ResultViewProps> = ({ 
    data, 
    onBack, 
    onRefresh,
    currentFont,
    setCurrentFont,
    currentTemplate,
    setCurrentTemplate
}) => {
  const [isWriting, setIsWriting] = useState(true);
  const [shareTip, setShareTip] = useState(false);

  useEffect(() => {
    setIsWriting(true);
    const timer = setTimeout(() => setIsWriting(false), 800);
    return () => clearTimeout(timer);
  }, [data]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '笔头冒火 - 我的专属春联',
          text: `我生成了一副姓名藏头联：${data.upper}，${data.lower}。快来定制你的吧！`,
          url: window.location.href,
        });
      } catch (err) {
        setShareTip(true);
        setTimeout(() => setShareTip(false), 3000);
      }
    } else {
      // 降级方案：复制链接或显示截图提示
      navigator.clipboard.writeText(window.location.href);
      setShareTip(true);
      setTimeout(() => setShareTip(false), 3000);
    }
  };

  const WritingText = ({ text, vertical = true }: { text: string, vertical?: boolean }) => {
    return (
      <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} items-center justify-center gap-1.5`}>
        {text.split('').map((char, i) => (
          <div key={i} className="relative flex items-center justify-center">
            <span
              className={`${currentFont.className} ink-text relative z-10 transition-all duration-700 ${
                isWriting ? 'opacity-0 translate-y-4 blur-sm' : 'opacity-100 translate-y-0 blur-0'
              }`}
              style={{ 
                  fontSize: vertical ? (data.upper.length > 5 ? '1.8rem' : '2.4rem') : '1.5rem',
                  lineHeight: vertical ? '1.1' : '1.2',
                  color: currentTemplate.text,
                  transitionDelay: `${i * 120}ms`,
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
    return (
      <div 
        className="relative flex items-center justify-center transition-all duration-500 shadow-xl"
        style={{
          width: type === 'horizontal' ? '80%' : '24%',
          padding: type === 'vertical' ? '1.5rem 0' : '0.6rem 0',
          backgroundImage: `url(${currentTemplate.image})`,
          backgroundSize: '100% 100%',
          borderRadius: '2px'
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col bg-[#FFF8E7] overflow-hidden pt-[env(safe-area-inset-top)]">
      {/* 顶部导航 */}
      <header className="flex justify-between items-center px-6 py-4 shrink-0">
        <button onClick={onBack} className="text-[#A61B1E] text-xs font-bold px-4 py-2 bg-white/50 rounded-full border border-[#A61B1E]/10">
          返回重写
        </button>
        <div className="text-center">
            <h2 className="text-[#A61B1E] font-xingshu text-2xl tracking-tighter">笔头冒火</h2>
            <p className="text-[8px] text-[#A61B1E]/40 tracking-widest -mt-1 font-bold">BY AI BRUSH</p>
        </div>
        <button onClick={onRefresh} className="text-[#A61B1E] text-xs font-bold px-4 py-2 bg-white/50 rounded-full border border-[#A61B1E]/10">
          换一换
        </button>
      </header>

      {/* 主展示区 */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-32">
        <div className="w-full max-w-sm mx-auto space-y-8 mt-4">
            {/* 寓意 */}
            <div className="bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-[#A61B1E]/5 shadow-sm text-center">
                <span className="text-[#A61B1E] text-[10px] font-black tracking-widest block mb-2">【 意 蕴 】</span>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">{data.interpretation}</p>
            </div>

            {/* 对联视觉实体 */}
            <div className="flex flex-col items-center gap-4">
                <CoupletPaper type="horizontal">
                    <WritingText text={data.horizontal} vertical={false} />
                </CoupletPaper>
                <div className="w-full flex justify-between px-2 items-start">
                    <CoupletPaper type="vertical">
                        <WritingText text={data.upper} />
                    </CoupletPaper>
                    <div className="flex flex-col items-center pt-24 opacity-10">
                        <div className="w-[1px] h-32 bg-[#A61B1E]"></div>
                        <span className="text-[#A61B1E] font-xingshu text-xl py-4">乙巳</span>
                        <div className="w-[1px] h-32 bg-[#A61B1E]"></div>
                    </div>
                    <CoupletPaper type="vertical">
                        <WritingText text={data.lower} />
                    </CoupletPaper>
                </div>
            </div>
        </div>
      </div>

      {/* 底部悬浮控制台 */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#FFF8E7] via-[#FFF8E7] to-transparent pt-12 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl p-5 border border-white/50">
          <div className="flex gap-4 mb-5">
            <div className="flex-1 space-y-2">
                <p className="text-[9px] text-gray-400 font-bold text-center uppercase tracking-widest">字体</p>
                <div className="flex gap-1.5">
                    {FONT_OPTIONS.map(f => (
                        <button key={f.id} onClick={() => setCurrentFont(f)} className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${currentFont.id === f.id ? 'bg-[#A61B1E] text-[#E6B422]' : 'bg-gray-50 text-gray-400'}`}>
                            <span className={f.className}>{f.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex-1 space-y-2">
                <p className="text-[9px] text-gray-400 font-bold text-center uppercase tracking-widest">纸张</p>
                <div className="flex gap-1.5">
                    {TEMPLATE_OPTIONS.map(t => (
                        <button key={t.id} onClick={() => setCurrentTemplate(t)} className={`flex-1 py-2 rounded-lg text-[11px] font-bold transition-all ${currentTemplate.id === t.id ? 'bg-[#A61B1E] text-[#E6B422]' : 'bg-gray-50 text-gray-400'}`}>
                            {t.name}
                        </button>
                    ))}
                </div>
            </div>
          </div>
          
          <button 
            onClick={handleShare}
            className="w-full py-4 bg-[#A61B1E] text-[#E6B422] rounded-2xl font-bold shadow-lg shadow-[#A61B1E]/20 active:scale-95 transition-all"
          >
            分享链接 / 保存海报
          </button>
        </div>
      </div>

      {/* 分享提示弹窗 */}
      {shareTip && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-6 py-4 rounded-2xl z-50 text-sm font-bold whitespace-nowrap animate-bounce">
            {navigator.share ? "请点击浏览器菜单分享" : "链接已复制，截图分享更佳！"}
        </div>
      )}
    </div>
  );
};

export default ResultView;
