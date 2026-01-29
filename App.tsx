
import React, { useState, useCallback } from 'react';
import { AppStep, CoupletData, CoupletLength } from './types';
import HomeView from './components/HomeView';
import LoadingView from './components/LoadingView';
import ResultView from './components/ResultView';
import { generateCouplet } from './services/geminiService';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.HOME);
  const [userName, setUserName] = useState<string>('');
  const [length, setLength] = useState<CoupletLength>(7);
  const [couplet, setCouplet] = useState<CoupletData | null>(null);

  const handleGenerate = useCallback(async () => {
    if (userName.length < 2) return;
    
    setStep(AppStep.LOADING);
    try {
      const result = await generateCouplet(userName, length);
      setCouplet(result);
      setStep(AppStep.RESULT);
    } catch (error) {
      console.error(error);
      alert("AI 创作遇到了点瓶颈，请稍后再试。");
      setStep(AppStep.HOME);
    }
  }, [userName, length]);

  const handleBack = () => {
    setStep(AppStep.HOME);
  };

  const handleRefresh = async () => {
    setStep(AppStep.LOADING);
    try {
        const result = await generateCouplet(userName, length);
        setCouplet(result);
        setStep(AppStep.RESULT);
    } catch (error) {
        alert("重新生成失败");
        setStep(AppStep.RESULT);
    }
  };

  return (
    <div className="min-h-screen xuanzhi-texture select-none touch-manipulation">
      {step === AppStep.HOME && (
        <HomeView
          userName={userName}
          setUserName={setUserName}
          length={length}
          setLength={setLength}
          onGenerate={handleGenerate}
        />
      )}

      {step === AppStep.LOADING && (
        <LoadingView />
      )}

      {step === AppStep.RESULT && couplet && (
        <ResultView 
            data={couplet} 
            onBack={handleBack} 
            onRefresh={handleRefresh}
        />
      )}
    </div>
  );
};

export default App;
