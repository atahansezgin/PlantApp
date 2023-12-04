import { createSlice } from "@reduxjs/toolkit";

export interface IAuthStore {
    isLoggedIn: boolean,
}
const initialState: IAuthStore = {
    isLoggedIn: false,
}
const authReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = initialState.isLoggedIn
        },
    }
})

export const { login, logout } = authReducer.actions
export default authReducer.reducer