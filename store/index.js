import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favorite";
import viewedReducer from "./slices/viewed";

const store = configureStore({
    reducer:{
        favorite:favoriteReducer,
        viewed:viewedReducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store
