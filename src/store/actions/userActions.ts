import axios from 'axios';
import { Dispatch } from 'redux';

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
export const registerUser = (userData: any) => async (dispatch: Dispatch<UserActionTypes>): Promise<void> => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post('/api/register', userData, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response?.data?.msg || error.message || 'Registration failed',
    });
    throw error; // Re-throw the error to handle it in the component
  }
};
