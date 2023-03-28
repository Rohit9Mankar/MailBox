import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice';
import inboxReducer from './InboxSlice';


const store = configureStore({
    reducer: { auth: authReducer, inbox: inboxReducer }
});

export default store;