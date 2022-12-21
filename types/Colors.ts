import { AvailableColors, Sections } from '../enums';

export type SectionColors = {
  color: AvailableColors;
  activeColor: AvailableColors;
};

const SECTION_COLORS: {
  [key in Sections]: SectionColors;
} = {
  intro: { color: AvailableColors.gray, activeColor: AvailableColors.gray },
  works: { color: AvailableColors.goodGreen, activeColor: AvailableColors.gray },
  about: { color: AvailableColors.white, activeColor: AvailableColors.gray },
  contacts: { color: AvailableColors.white, activeColor: AvailableColors.goodGreen },
};

export default function getSectionColorCombination(sectionId: Sections) {
  return SECTION_COLORS[sectionId];
}
