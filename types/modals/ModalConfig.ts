import { ModalConfigChoice } from "./ModalConfigChoice";

export interface ModalConfig {
  title?: string;
  content?: string;
  list?: string[];
  choices?: ModalConfigChoice[];
  onSelectedChoice?: (selected: ModalConfigChoice) => void;
}
