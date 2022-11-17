import { ModalConfig } from './ModalConfig';

export interface ModalProps {
  onClose: () => void;
  config: ModalConfig;
}
