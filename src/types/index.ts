// ─── Theme System Types ───
export type ThemeMode = 'light' | 'cyberpunk' | 'nord' | 'matrix' | 'accessible';

export interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

// ─── Collaboration Board Types ───
export interface CollabCard {
  id: string;
  title: string;
  description: string;
  column: string;
  order: number;
  assignee?: string;
  color?: string;
}

export interface CursorPosition {
  userId: string;
  username: string;
  x: number;
  y: number;
  color: string;
}

export interface CollabState {
  cards: CollabCard[];
  cursors: CursorPosition[];
  connected: boolean;
}

export type CollabAction =
  | { type: 'MOVE_CARD'; payload: { cardId: string; toColumn: string; toIndex: number } }
  | { type: 'ADD_CARD'; payload: CollabCard }
  | { type: 'DELETE_CARD'; payload: { cardId: string } }
  | { type: 'UPDATE_CURSORS'; payload: CursorPosition[] }
  | { type: 'SET_CONNECTED'; payload: boolean }
  | { type: 'ROLLBACK'; payload: CollabCard[] };

// ─── Dashboard Types ───
export interface LogEntry {
  id: string;
  timestamp: number;
  level: 'info' | 'warn' | 'error' | 'debug';
  message: string;
  category: string;
  source: string;
  responseTime: number;
}

export interface DashboardFilters {
  search: string;
  levels: string[];
  categories: string[];
  dateRange: [number, number] | null;
}

export interface ChartDataPoint {
  time: string;
  info: number;
  warn: number;
  error: number;
  avgResponseTime: number;
}

// ─── Canvas Tool Types ───
export interface CanvasLayer {
  id: string;
  type: 'image' | 'text';
  x: number;
  y: number;
  width: number;
  height: number;
  content: string;
  fontSize?: number;
  fontColor?: string;
  rotation?: number;
}

export interface CanvasFilters {
  brightness: number;
  contrast: number;
  saturation: number;
  grayscale: number;
}

// ─── Stats Center Types ───
export interface GitHubStats {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  repositories: number;
  pullRequests: number;
  weeklyData: { day: string; count: number }[];
}

export interface SpotifyTrack {
  title: string;
  artist: string;
  album: string;
  albumArt: string;
  progress: number;
  duration: number;
  isPlaying: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  views: number;
  tags: string[];
}

export type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

// ─── Project Types ───
export interface Project {
  id: number;
  icon: string;
  name: string;
  period: string;
  type: string;
  description: string;
  stack: string[];
  github: string;
  live: string | null;
  featured: boolean;
}
