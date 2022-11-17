import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ModalConfig } from '../types';
import { ModalTypes } from '../types/modals/Modals';

type Subscriber = (config: ModalConfig) => void;

interface IModalContext {
  openModal: (type: ModalTypes, config: ModalConfig) => void;
  subscribeModal: (modalName: ModalTypes, sub: Subscriber) => void;
}

const ModalContext = createContext<IModalContext>({
  openModal: (t: ModalTypes, c: ModalConfig) => {},
  subscribeModal: (modalName: ModalTypes, sub: Subscriber) => {},
});

const ModalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const subscribers = useRef(new Map<ModalTypes, Subscriber>([]));
  const openModal = (type: ModalTypes, config: ModalConfig) => {
    subscribers.current.get(type)!(config);
  };
  const addSub = (modalName: ModalTypes, sub: Subscriber) =>
    subscribers.current.set(modalName, sub);
  const removeSub = (modalName: ModalTypes) => subscribers.current.delete(modalName);
  const subscribeModal = (type: ModalTypes, sub: Subscriber) => {
    addSub(type, sub);
    return () => {
      removeSub(type);
    };
  };
  return (
    <ModalContext.Provider
      value={{
        openModal: useCallback(openModal, []),
        subscribeModal: useCallback(subscribeModal, []),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = (type: ModalTypes) => {
  const { subscribeModal } = useContext(ModalContext);
  const [config, setConfig] = useState<ModalConfig>({});
  const openSubscriber = (config: ModalConfig) => {
    setConfig(config);
  };
  const close = () => {
    setConfig({});
  };
  const assingShow = () => !!Object.keys(config).length;
  useEffect(() => {
    return subscribeModal(type, openSubscriber);
  }, []);
  return { show: assingShow(), close, config };
};

export { ModalContext, ModalContextProvider, useModalContext };
