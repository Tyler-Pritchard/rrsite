import {
    UserActionTypes,
    GET_USER_COUNT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../actions/userActions';

interface UserState {
    loading: boolean;
    userInfo: any | null; // Replace `any` with a specific user type if available
    error: string | null;
    totalUsers: number;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    loading: false,
    userInfo: null,
    error: null,
    totalUsers: 0,
    isLoggedIn: false,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case GET_USER_COUNT:
        return { ...state, totalUsers: action.payload,};
        case USER_REGISTER_REQUEST:
        return { ...state, loading: true, error: null };
        case USER_REGISTER_SUCCESS:
        return { ...state, loading: false, isLoggedIn: true, userInfo: action.payload };
        case USER_REGISTER_FAIL:
        return { ...state, loading: false, error: action.payload };
        case USER_LOGIN_SUCCESS:
        return { ...state, loading: false, isLoggedIn: true, userInfo: action.payload };
        case USER_LOGIN_FAIL:
        return { ...state, loading: false, error: action.payload };
        case USER_LOGOUT:
        return { ...state, loading: false, userInfo: null, isLoggedIn: false, error: null};
    default:
        return state;
    }
};

export default userReducer;
  