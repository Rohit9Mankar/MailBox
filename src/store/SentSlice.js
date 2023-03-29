import { createSlice } from "@reduxjs/toolkit";

const initialSentboxState = {
    sentArray: [],
    viewMail: {},
};

const sentboxSlice = createSlice({
    name: 'sentbox',
    initialState: initialSentboxState,
    reducers: {
        addToSentbox(state, action) {
            state.sentArray = action.payload;
        },

        changeViewMail(state, action) {
            state.viewMail = action.payload;
        },
      
    }

});

export const SentboxActions = sentboxSlice.actions;

export default sentboxSlice.reducer;