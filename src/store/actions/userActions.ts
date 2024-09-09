import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import axiosInstance from '../../axiosConfig';
import { AppDispatch } from '../store_index';

// Action type constants
export const GET_USER_COUNT = 'GET_USER_COUNT';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_FORGOT_PASSWORD_REQUEST = 'USER_FORGOT_PASSWORD_REQUEST';
export const USER_FORGOT_PASSWORD_SUCCESS = 'USER_FORGOT_PASSWORD_SUCCESS';
export const USER_FORGOT_PASSWORD_FAIL = 'USER_FORGOT_PASSWORD_FAIL';

// TypeScript interfaces for each action
interface GetUserCountAction {
  type: typeof GET_USER_COUNT;
  payload: number;
}

interface UserRegisterRequestAction {
  type: typeof USER_REGISTER_REQUEST;
}

interface UserRegisterSuccessAction {
  type: typeof USER_REGISTER_SUCCESS;
  payload: any; // Replace `any` with a specific user type if available
}

interface UserRegisterFailAction {
  type: typeof USER_REGISTER_FAIL;
  payload: string;
}

interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  payload: any; // Replace `any` with the appropriate type for user info
}

interface UserLoginFailAction {
  type: typeof USER_LOGIN_FAIL;
  payload: string;
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

interface UserForgotPasswordRequestAction {
  type: typeof USER_FORGOT_PASSWORD_REQUEST;
}

interface UserForgotPasswordSuccessAction {
  type: typeof USER_FORGOT_PASSWORD_SUCCESS;
  payload: any; // Replace `any` with a specific user type if available
}

interface UserForgotPasswordFailAction {
  type: typeof USER_FORGOT_PASSWORD_FAIL;
  payload: string;
}

// Union of all action types
export type UserActionTypes =
  GetUserCountAction
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserLogoutAction
  | UserForgotPasswordRequestAction
  | UserForgotPasswordSuccessAction
  | UserForgotPasswordFailAction;

// Action for getting user count
export const getUserCount = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axiosInstance.get(`/users/count`);
    dispatch({ type: 'GET_USER_COUNT', payload: data.totalUsers });
  } catch (error) {
    console.error("Error fetching user count: ", error);
  }
};

// Action creator for registering a user
export const registerUser = (userData: any) => async (dispatch: Dispatch<UserActionTypes>) => {
  
  try {
    axiosInstance.defaults.withCredentials = true;
    const res = await axiosInstance.post('/users/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // console.log('Response from backend:', res.data);  // Log the successful response

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const err = error as any;  // Assert the type of error as any

    console.error('Error from backend:', err.response?.data || err.message);  // Log the error response

    dispatch({
      type: USER_REGISTER_FAIL,
      payload: err.response?.data || err.message,
    });

    throw err; // Re-throw the error to handle it in the component if needed
  }
};

export const loginUser = (loginData: any) => async (dispatch: AppDispatch) => {
  try {
    const response = await axiosInstance.post('/users/login', loginData);
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });

    return response.data;  // Return the full response object
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      // If error is an AxiosError and has a response property, use it
      dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data });
    } else {
      // Otherwise, use the error message
      dispatch({ type: 'USER_LOGIN_FAIL', payload: (error as Error).message });
    }
    throw error;
  }
};

export const logoutUser = (): UserLogoutAction => ({
  type: USER_LOGOUT,
});

export const forgotPassword = (email: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: 'USER_FORGOT_PASSWORD_REQUEST' });

    const { data } = await axiosInstance.post('/users/forgot-password', { email });

    dispatch({ type: 'USER_FORGOT_PASSWORD_SUCCESS', payload: data });

  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      // If error is an AxiosError and has a response property, use it
      dispatch({ type: 'USER_FORGOT_PASSWORD_FAIL', payload: error.response.data });
    } else {
      // Otherwise, use the error message
      dispatch({ type: 'USER_FORGOT_PASSWORD_FAIL', payload: (error as Error).message });
    }
    throw error;
  }
};