import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode'; // Correct import
import { createAxiosInstance } from '../axiosConfig';

const authAPI = createAxiosInstance('auth');
console.log('Axios Base URL:', authAPI.defaults.baseURL);

// Define the initial state structure
interface UserState {
  loading: boolean;
  userInfo: any | null;
  error: string | null;
  totalUsers: number;
  isLoggedIn: boolean;
  success?: boolean;
  resetEmail: string;
}

const initialState: UserState = {
  loading: false,
  userInfo: JSON.parse(localStorage.getItem('userInfo') || 'null'), // Load from localStorage
  error: null,
  totalUsers: 0,
  isLoggedIn: !!localStorage.getItem('userInfo'), // Check if userInfo exists
  resetEmail: '',
};

interface ForgotPasswordPayload {
  email: string;
  captchaToken: string;
}

// Helper function to save user info to localStorage
const saveUserInfo = (userInfo: any) => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

// Async thunks
export const getUserCount = createAsyncThunk(
  'user/getUserCount',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authAPI.get('users/count');
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
      const res = await authAPI.post('users/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      saveUserInfo(res.data); // Save user info
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
      const response = await authAPI.post('auth/login', loginData);
      const decodedToken = jwtDecode<{ id: string; email: string }>(response.data.token);
      const userInfo = { token: response.data.token, ...decodedToken };
      saveUserInfo(userInfo); // Save user info
      return userInfo;
    } catch (error) {
      console.error('Failed to decode JWT:', error); // Use `error`
      return rejectWithValue('Error logging in');
    }
  }
);

export const forgotPassword = createAsyncThunk<any, ForgotPasswordPayload, { rejectValue: string }>(
  'user/forgotPassword',
  async ({ email, captchaToken }: ForgotPasswordPayload, { rejectWithValue }) => {
    try {
      const response = await authAPI.post('auth/password/forgot-password', { email, captchaToken });
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
      const res = await authAPI.post('auth/password/reset-password', {
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

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
      state.error = null;
      localStorage.removeItem('userInfo'); // Clear user info from storage
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

export const { logoutUser, setResetEmail } = userSlice.actions;
export default userSlice.reducer;
