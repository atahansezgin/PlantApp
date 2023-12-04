import {Store} from "../Store";

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;