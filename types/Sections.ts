import { Sections } from '../enums';

export interface ISection {
  id: Sections;
  label: string;
  active: boolean;
}
