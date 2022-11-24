import { createContext, ReactNode, useRef, FC, useContext, useEffect } from 'react';
import { ActiveLinkContextType, RefType, ISection } from '../types';
import { getIsVisible } from '../utils';

const ActiveLinkContext = createContext<ActiveLinkContextType>(null);

const ActiveLinkContextProvider: FC<{
  children: ReactNode;
  actualSections: ISection[];
  heightToShowElement?: number;
}> = ({ children, heightToShowElement = 300, actualSections }) => {
  const subscribers = new Set<RefType>([]);
  const _sections = useRef<ISection[]>([...actualSections]);
  const sections = () => _sections.current!.map((s) => ({ ...s })) as ISection[];
  const activeSection = () => _sections.current!.find((s) => s.active)!;
  const setActiveSection = (toActivateId: string) => {
    _sections.current = _sections.current!.map((s) => ({ ...s, active: toActivateId === s.id }));
  };
  let sectionUpdate: (() => void) | null = null;

  const onScroll = () => {
    const actualVisibleId = checkForActiveSection(subscribers, heightToShowElement);
    if (activeSection().id !== actualVisibleId) {
      setActiveSection(actualVisibleId);
      if (sectionUpdate) {
        sectionUpdate();
      }
    }
  };

  const subscribe = (ref: RefType) => {
    subscribers.add(ref);
  };

  const registerToSectionUpdate = (onUpdate: () => void) => {
    sectionUpdate = onUpdate;
    return () => {
      sectionUpdate = null;
    };
  };

  return (
    <ActiveLinkContext.Provider
      value={{ subscribe, onScroll, sections, activeSection, registerToSectionUpdate }}
    >
      {children}
    </ActiveLinkContext.Provider>
  );
};

function checkForActiveSection(elements: Set<RefType>, heightToShowElement: number) {
  const isVisible = getIsVisible(heightToShowElement);
  let outputId: string = '';
  elements.forEach(({ current }) => {
    if (!!current && isVisible(current)) {
      outputId = current.id;
    }
  });
  return outputId;
}

function useActiveLinkContext<T>() {
  const newRef = useRef<T & HTMLElement>(null);
  const { subscribe } = useContext(ActiveLinkContext)!;
  useEffect(() => {
    if (newRef) {
      subscribe(newRef);
    }
  }, [newRef]);
  return newRef;
}

export { ActiveLinkContextProvider, ActiveLinkContext, useActiveLinkContext };
