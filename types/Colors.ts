import { AvailableColors, Sections } from '../enums';

const tailwindCfg = require('../tailwind.config');

export type SectionColors = {
  color: AvailableColors;
  activeColor: AvailableColors;
  background: AvailableColors;
  curve: AvailableColors;
};

const SECTION_COLORS: {
  [key in Sections]: SectionColors;
} = {
  intro: {
    color: AvailableColors.gray,
    activeColor: AvailableColors.white,
    background: AvailableColors.goodGreen,
    curve: AvailableColors.white,
  },
  works: {
    color: AvailableColors.goodGreen,
    activeColor: AvailableColors.gray,
    background: AvailableColors.white,
    curve: AvailableColors.goodGreen,
  },
  about: {
    color: AvailableColors.white,
    activeColor: AvailableColors.gray,
    background: AvailableColors.goodGreen,
    curve: AvailableColors.gray,
  },
  contacts: {
    color: AvailableColors.white,
    activeColor: AvailableColors.goodGreen,
    background: AvailableColors.gray,
    curve: AvailableColors.goodGreen,
  },
};

export function getSectionColorCombination(sectionId: Sections) {
  return SECTION_COLORS[sectionId];
}

export function getColorValue(color: AvailableColors) {
  return tailwindCfg.theme.extend.colors[color] as string;
}
