export enum Tab {
  WELCOME = 'welcome',
  HOOKS = 'hooks',
  HACKS = 'hacks'
}

export interface HookItem {
  id: number;
  text: string;
  category?: 'original' | 'mix';
}

export interface HackItem {
  id: number;
  title: string;
  content: string;
}