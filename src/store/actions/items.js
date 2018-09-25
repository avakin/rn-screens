import {
  ADD_ITEM,
  REMOVE_ITEM,
  SELECT_ITEM,
  DESELECT_ITEM,
  CHANGE_PLACEHOLDER,
  SAVE_USER
} from "./actionsType.js";

export const addItem = () => {
  return {
    type: ADD_ITEM
  };
};
export const removeItem = key => {
  return {
    type: REMOVE_ITEM,
    itemKey: key
  };
};
export const selectItem = key => {
  return {
    type: SELECT_ITEM,
    itemKey: key
  };
};
export const deselectItem = () => {
  return {
    type: DESELECT_ITEM
  };
};
export const changePlaceholder = value => {
  return {
    type: CHANGE_PLACEHOLDER,
    text: value
  };
};
export const savingUser = value => {
  return {
    type: SAVE_USER,
    user: value
  };
};
