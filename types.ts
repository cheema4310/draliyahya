import { LucideIcon } from 'lucide-react';

export interface Venture {
  title: string;
  role?: string;
  description?: string;
  vision?: string;
  mission?: string;
  stats?: string[];
  focus?: string;
  programs?: string;
  offices?: string;
  quote?: string;
  icon: LucideIcon;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FocusArea {
  title: string;
  icon: LucideIcon;
}