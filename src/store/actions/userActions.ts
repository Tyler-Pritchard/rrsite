// import axios from 'axios';
import { Dispatch } from 'redux';

import axios from '../../axiosConfig';

// 1. Define action type constants
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

// 2. Create TypeScript interfaces for each action
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

// 3. Union of all action types
export type UserActionTypes =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailAction;

// 4. Thunk action creator for registering a user
export const registerUser = (userData: any) => async (dispatch: Dispatch<UserActionTypes>) => {
  try {
    const res = await axios.post('/users/register', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
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