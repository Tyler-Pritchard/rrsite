// menuReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for the menu
interface MenuState {
  visibleSubmenu: string | null;
  isForgotPasswordModalOpen: boolean;
}

const initialState: MenuState = {
  visibleSubmenu: null,
  isForgotPasswordModalOpen: false,
};

// Create a slice for menu state management
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

// Export the action creators generated by createSlice
export const { showSubmenu, hideSubmenu, toggleForgotPasswordModal } = menuSlice.actions;

// Export the reducer to be used in the store configuration
export default menuSlice.reducer;
