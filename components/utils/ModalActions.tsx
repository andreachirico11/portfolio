import { FC } from 'react';
import { Button } from './Button';
import { ModalConfigChoice } from '../../types/modals/ModalConfigChoice';



const ModalButton: FC<{action: () => void, label: string, className?: string}> = ({action, label, className = ''}) => {
  return <Button onclick={action} 
  className={`text-white border-white !bg-gray ${className}`}>
    {label}
  </Button>
};


interface Props {
  onClose: () => void;
  choices?: ModalConfigChoice[];
  onSelectedChoice?: (selected: ModalConfigChoice) => void;
}

export const ModalActions: FC<Props> = ({ onClose, choices, onSelectedChoice }) => {
  const select = (choice: ModalConfigChoice) => {
    onSelectedChoice!(choice);
    onClose();
  };

  const multipleChoicesMode = choices && choices.length && !!onSelectedChoice;

  const getMultipleChoicesLayout = () => 
  choices!.map((choice, i) => <ModalButton key={i} label={choice.label} action={() => select(choice)}  />);
  
  return <>
    {multipleChoicesMode ? (
      <div className='grid grid-cols-2 gap-4 mt-4'>{ getMultipleChoicesLayout()}</div>
      )
     : (<ModalButton action={onClose} label='Close' className='w-1/2'/>)
    }
  </>
};
