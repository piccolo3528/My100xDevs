import { atom } from 'recoil';

// Atom to hold the list of todos
export const todoListState = atom({
  key: 'todoListState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
