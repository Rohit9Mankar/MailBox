import { configureStore } from "@reduxjs/toolkit";
import authReducer from './AuthSlice';
import inboxReducer from './InboxSlice';
import sentboxReducer from './SentSlice';
import uiReducer from './ui-Slice';

const store = configureStore({
    reducer: { auth: authReducer, inbox: inboxReducer, sentbox: sentboxReducer, ui:uiReducer}
});

export default store;