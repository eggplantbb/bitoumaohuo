
export enum AppStep {
  HOME = 'HOME',
  LOADING = 'LOADING',
  RESULT = 'RESULT'
}

export interface CoupletData {
  upper: string;
  lower: string;
  horizontal: string;
  interpretation: string;
  seal_text: string;
}

export type CoupletStyle = '大吉大利' | '事业腾飞' | '互联网版' | '暴富锦鲤';
export type CoupletLength = 5 | 7;

export interface AppState {
  userName: string;
  length: CoupletLength;
  style: CoupletStyle;
  couplet: CoupletData | null;
}
