import {configureStore}  from "@reduxjs/toolkit";
import reducer from "../features/auth/authSlice";
import logger from 'redux-logger'
const store = configureStore({
    reducer:{
        auth:reducer
    },
    middleware:(getDefaultMiddleware=> getDefaultMiddleware({serializableCheck: false}).concat(logger))
})

export default store