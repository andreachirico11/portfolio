import { ControlState, FormState, Subscriber } from '../types';
import { useCallback, useRef } from 'react';

export default function useFormState(formState: FormState) {
  const state = useRef({ ...formState });
  const isFormInvalidState = useRef(true);
  const getWholeState = (): FormState => ({ ...state.current });
  const getState = (key: string) => getWholeState()[key];
  const updateState = (fieldName: string, newValue: ControlState) => {
    state.current = { ...state.current, [fieldName]: newValue };
  };
  const removeControlState = (fieldName: string) => {
    const copiedState = { ...state.current };
    delete copiedState[fieldName];
    state.current = { ...copiedState };
  };
  const isFormInvalid = () => isFormInvalidState.current;
  const subscribers = useRef(new Map<string, Subscriber>([]));
  const invaliditySubscriber = useRef(() => {});
  const addSub = (fieldName: string, sub: Subscriber) => subscribers.current.set(fieldName, sub);
  const removeSub = (fieldName: string) => subscribers.current.delete(fieldName);
  const subscribe = (fieldName: string, initialState: ControlState, sub: Subscriber) => {
    updateState(fieldName, initialState);
    addSub(fieldName, sub);
    return () => {
      removeSub(fieldName);
      removeControlState(fieldName);
    };
  };
  const subscribeToInvalidity = (sub: Subscriber) => {
    invaliditySubscriber.current = sub;
    return () => {
      invaliditySubscriber.current = () => {};
    };
  };
  const triggerSub = (fieldName: string) => {
    const subscriber = subscribers.current.get(fieldName);
    if (subscriber) {
      subscriber();
    }
  };
  const updateInvalidity = () => {
    const isFormActuallyInvalid = Object.keys(state.current).some(
      (k) => state.current[k].isOnError
    );
    if (isFormActuallyInvalid !== isFormInvalidState.current) {
      isFormInvalidState.current = isFormActuallyInvalid;
    }
    invaliditySubscriber.current();
  };
  const set = (fieldName: string, newValue: ControlState) => {
    updateState(fieldName, newValue);
    triggerSub(fieldName);
    updateInvalidity();
  };
  return {
    get: useCallback(getState, []),
    getWhole: useCallback(getWholeState, []),
    set: useCallback(set, []),
    subscribe: useCallback(subscribe, []),
    isFormInvalid: useCallback(isFormInvalid, []),
    subscribeToInvalidity: useCallback(subscribeToInvalidity, []),
  };
}
