import { FormState, Subscriber } from '../types';
import { useCallback, useRef } from 'react';

export default function useFormState(formState: FormState) {
  const state = useRef({ ...formState });
  const getWholeState = (): FormState => ({ ...state.current });
  const getState = (key: string) => getWholeState()[key];
  const updateState = (fieldName: string, newValue: any) => {
    state.current = { ...state.current, [fieldName]: newValue };
  };
  const subscribers = useRef(new Map<string, Subscriber>([]));
  const addSub = (fieldName: string, sub: Subscriber) => subscribers.current.set(fieldName, sub);
  const removeSub = (fieldName: string) => subscribers.current.delete(fieldName);
  const subscribe = (fieldName: string, sub: Subscriber) => {
    addSub(fieldName, sub);
    return () => {
      removeSub(fieldName);
    };
  };
  const triggerSub = (fieldName: string) => {
    const subscriber = subscribers.current.get(fieldName);
    if (subscriber) {
      subscriber();
    }
  };
  const set = (fieldName: string, newValue: any) => {
    updateState(fieldName, newValue);
    triggerSub(fieldName);
  };
  return {
    get: useCallback(getState, []),
    getWhole: useCallback(getWholeState, []),
    set: useCallback(set, []),
    subscribe: useCallback(subscribe, []),
  };
}
