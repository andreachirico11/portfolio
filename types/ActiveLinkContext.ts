import { Sections } from '../enums';
import { ISection } from './Sections';
import { RefType } from './ShowAnimationContext';

export type SectionsContextType = {
  subscribe: (ref: RefType) => void;
  onScroll: () => void;
  sections: () => ISection[];
  sectionById: (id: Sections) => ISection;
  registerToSectionUpdate: (onUpdate: () => void) => void;
} | null;
