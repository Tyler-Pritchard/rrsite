// userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../axiosConfig';

// Define the initial state structure
interface UserState {
  loading: boolean;
  userInfo: any | null; // Replace `any` with a specific user type if available
  error: string | null;
  totalUsers: number;
  isLoggedIn: boolean;
  success?: boolean;
  resetEmail: string;
}

const initialState: UserState = {
  loading: false,
  userInfo: null,
  error: null,
  totalUsers: 0,
  isLoggedIn: false,
  resetEmail: '',
};

interface ForgotPasswordPayload {
  email: string;
  captchaToken: string;
}

// Create async thunks for handling asynchronous operations
export const getUserCount = createAsyncThunk(
  'user/getUserCount',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/auth/users/count`); // Update the endpoint
      return data.totalUsers;
    } catch (error) {
      return rejectWithValue('Error fetching user count');
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData: any, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post('/users/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue('Error registering user');
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (loginData: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/login', loginData);
      return { token: response.data.token };
    } catch (error) {
      return rejectWithValue('Error logging in');
    }
  }
);

export const forgotPassword = createAsyncThunk<any, ForgotPasswordPayload, { rejectValue: string }>(
  'user/forgotPassword',
  async ({ email, captchaToken }: ForgotPasswordPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/password/forgot-password', { email, captchaToken });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data || 'Unknown error occurred');
    }
  }
);

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async ({ token, newPassword }: { token: string; newPassword: string }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post('/password/reset-password', {
        headers: {
          'Content-Type': 'application/json',
          'Reset-Token': `${token}`,
        },
        data: { newPassword },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue('Error resetting password');
    }
  }
);

// Create the user slice using createSlice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
      state.error = null;
      localStorage.removeItem('userInfo');
    },
    setResetEmail: (state, action: PayloadAction<string>) => {
      state.resetEmail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCount.fulfilled, (state, action: PayloadAction<number>) => {
        state.totalUsers = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userInfo = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Export the actions generated by createSlice
export const { logoutUser, setResetEmail } = userSlice.actions;

// Export the reducer to be used in the store configuration
export default userSlice.reducer;
