import { Reducer } from 'redux';
import {
  SHOW_SUBMENU,
  HIDE_SUBMENU,
  TOGGLE_FORGOT_PASSWORD_MODAL,
  SET_RESET_EMAIL,
  MenuActionTypes,
} from '../actions/menuActions';

export interface MenuState {
  visibleSubmenu: string | null;
  isForgotPasswordModalOpen: boolean;
  resetEmail: string;
}

const initialState: MenuState = {
  visibleSubmenu: null,
  isForgotPasswordModalOpen: false,
  resetEmail: '',
};

const menuReducer: Reducer<MenuState, MenuActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SHOW_SUBMENU:
      return {
        ...state,
        visibleSubmenu: action.payload, // Ensure this is of type `string`
      };
    case HIDE_SUBMENU:
      return {
        ...state,
        visibleSubmenu: null,
      };
    case TOGGLE_FORGOT_PASSWORD_MODAL:
      return {
        ...state,
        isForgotPasswordModalOpen: !state.isForgotPasswordModalOpen,
      };
    case SET_RESET_EMAIL:
      return {
        ...state,
        resetEmail: action.payload, // Ensure this is of type `string`
      };
    default:
      return state;
  }
};

export default menuReducer;
