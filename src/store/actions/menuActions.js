export const SHOW_SUBMENU = 'SHOW_SUBMENU';
export const HIDE_SUBMENU = 'HIDE_SUBMENU';

export const showSubmenu = (menu) => ({
  type: SHOW_SUBMENU,
  payload: menu,
});

export const hideSubmenu = () => ({
  type: HIDE_SUBMENU,
});
