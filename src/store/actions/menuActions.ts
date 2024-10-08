export const SHOW_SUBMENU = 'SHOW_SUBMENU';
export const HIDE_SUBMENU = 'HIDE_SUBMENU';
export const TOGGLE_FORGOT_PASSWORD_MODAL = 'TOGGLE_FORGOT_PASSWORD_MODAL';

// Combine all action types in a union
export type MenuActionTypes =
  | { type: typeof SHOW_SUBMENU; payload: string }
  | { type: typeof HIDE_SUBMENU }
  | { type: typeof TOGGLE_FORGOT_PASSWORD_MODAL }


export const showSubmenu = (submenu: string) => ({
  type: SHOW_SUBMENU,
  payload: submenu,
});

export const hideSubmenu = () => ({
  type: HIDE_SUBMENU,
});

export const toggleForgotPasswordModal = () => ({
  type: TOGGLE_FORGOT_PASSWORD_MODAL,
});