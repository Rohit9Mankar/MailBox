import { createSlice } from "@reduxjs/toolkit";

const initialInboxState = {
    inboxArray: []
};

const inboxSlice = createSlice({
    name: 'inbox',
    initialState: initialInboxState,
    reducers: {
        addToInBox(state, action) {
            state.inboxArray = action.payload;
        }
    }

})

export const InboxActions = inboxSlice.actions;

export default inboxSlice.reducer;