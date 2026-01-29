
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

export type CoupletLength = 5 | 7;

export interface AppState {
  userName: string;
  length: CoupletLength;
  couplet: CoupletData | null;
}
