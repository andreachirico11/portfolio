import { RefObject } from 'react';
import { AnimationType } from '../enums';

export type RefType = RefObject<HTMLElement>;

export type SetType = { ref: RefType; animationType: AnimationType };

export type ShowAnimationContextType = {
  subscribe: (ref: RefType, type: AnimationType) => void;
  onScroll: () => void;
} | null;
