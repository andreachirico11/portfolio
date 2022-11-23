import { RefObject } from 'react';

export type RefType = RefObject<HTMLElement>;

export type SetType = { ref: RefType; animationType: AnimationType };

export enum AnimationType {
  down = 'down',
  left = 'left',
  right = 'right',
}

export type ShowAnimationContextType = {
  subscribe: (ref: RefType, type: AnimationType) => void;
  onScroll: () => void;
} | null;
