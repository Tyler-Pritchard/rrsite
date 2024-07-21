import { SHOW_SUBMENU, HIDE_SUBMENU } from '../actions/menuActions';

const initialState = {
  visibleSubmenu: null,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SUBMENU:
      return {
        ...state,
        visibleSubmenu: action.payload,
      };
    case HIDE_SUBMENU:
      return {
        ...state,
        visibleSubmenu: null,
      };
    default:
      return state;
  }
};

export default menuReducer;
