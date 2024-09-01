// src/store/userReducer.ts

import {
    UserActionTypes,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from '../actions/userActions';

interface UserState {
    loading: boolean;
    userInfo: any | null; // Replace `any` with a specific user type if available
    error: string | null;
}

const initialState: UserState = {
    loading: false,
    userInfo: null,
    error: null,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
        return { ...state, loading: true, error: null };
        case USER_REGISTER_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
        return { ...state, loading: false, error: action.payload };
        default:
        return state;
    }
};

export default userReducer;
  