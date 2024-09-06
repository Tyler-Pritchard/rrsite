import { Dispatch } from 'redux';
import axiosInstance from '../../axiosConfig';
import { AppDispatch } from '../store_index';

// Action type constants
export const GET_USER_COUNT = 'GET_USER_COUNT';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

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

// Union of all action types
export type UserActionTypes =
  GetUserCountAction
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction;

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
    const res = await axiosInstance.post('/users/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: false,
    });

    console.log('Response from backend:', res.data);  // Log the successful response

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