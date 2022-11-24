import { ISection } from './ISection';
import { RefType } from './ShowAnimationContext';

export type ActiveLinkContextType = {
  subscribe: (ref: RefType) => void;
  onScroll: () => void;
  sections: () => ISection[];
  activeSection: () => ISection;
  registerToSectionUpdate: (onUpdate: () => void) => void;
} | null;
