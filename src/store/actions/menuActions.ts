export const SHOW_SUBMENU = 'SHOW_SUBMENU';
export const HIDE_SUBMENU = 'HIDE_SUBMENU';
export const TOGGLE_FORGOT_PASSWORD_MODAL = 'TOGGLE_FORGOT_PASSWORD_MODAL';
export const SET_RESET_EMAIL = 'SET_RESET_EMAIL';
export const SEND_PASSWORD_RESET = 'SEND_PASSWORD_RESET';

interface SetResetEmailAction {
  type: typeof SET_RESET_EMAIL;
  payload: string;
}

interface SendPasswordResetAction {
  type: typeof SEND_PASSWORD_RESET;
  payload: string;
}

// Combine all action types in a union
export type MenuActionTypes =
  | { type: typeof SHOW_SUBMENU; payload: string }
  | { type: typeof HIDE_SUBMENU }
  | { type: typeof TOGGLE_FORGOT_PASSWORD_MODAL }
  | SetResetEmailAction
  | SendPasswordResetAction;


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

export const sendPasswordReset = (email: string) => ({
  type: SEND_PASSWORD_RESET,
  payload: email,
});

export const setResetEmail = (email: string): MenuActionTypes => ({
  type: SET_RESET_EMAIL,
  payload: email,
});
