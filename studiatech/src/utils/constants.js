export const HOST = process.env.SERVER_URL;
export const API_URL = `${HOST}/api`;
export const IMAGES_URL = `${HOST}/uploads`;

export const AUTH_ROUTES = `${API_URL}/auth`;

export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;

export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;

export const GET_USER_INFO = `${AUTH_ROUTES}/get-user-info`;

