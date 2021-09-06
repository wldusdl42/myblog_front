import { toast } from 'react-toastify';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export function receiveRegister() {
    return {
        type: REGISTER_SUCCESS,
    };
}

export function registerError(payload) {
    return {
        type: REGISTER_FAILURE,
        payload,
    };
}

export function registerUser(payload) {
    return (dispatch) => {
        if (payload.creds.email.length > 0 && payload.creds.password.length > 0) {
            toast.success("로그인 성공");
            payload.history.push('/login');
        } else {
            dispatch(registerError("로그인 에러"));
        }
    }
}