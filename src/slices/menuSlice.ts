import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  visibleSubmenu: string | null;
  isForgotPasswordModalOpen: boolean;
}

const initialState: MenuState = {
  visibleSubmenu: null,
  isForgotPasswordModalOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    showSubmenu: (state, action: PayloadAction<string>) => {
      state.visibleSubmenu = action.payload;
    },
    hideSubmenu: (state) => {
      state.visibleSubmenu = null;
    },
    toggleForgotPasswordModal: (state) => {
      state.isForgotPasswordModalOpen = !state.isForgotPasswordModalOpen;
    },
  },
});

export const { showSubmenu, hideSubmenu, toggleForgotPasswordModal } = menuSlice.actions;
export default menuSlice.reducer;
