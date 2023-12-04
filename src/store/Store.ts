import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from "./reducers/authReducer";
import thunk from 'redux-thunk';

// * Örnek persist ayarı

// import AsyncStorage from "@react-native-async-storage/async-storage";

// const authPersistConfig = {
//     key: '@auth',
//     storage: AsyncStorage,
// }

//const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const Store = configureStore({
    reducer: {
        // auth: authPersistedReducer
        auth: authReducer,
    },
    middleware: [thunk]
})

export const persistor = persistStore(Store)