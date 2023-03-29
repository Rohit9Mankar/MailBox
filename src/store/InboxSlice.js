import { createSlice } from "@reduxjs/toolkit";

const initialInboxState = {
    inboxArray: [],
    viewMail: {},
    unreadCount: 0
};

const inboxSlice = createSlice({
    name: 'inbox',
    initialState: initialInboxState,
    reducers: {
        addToInBox(state, action) {
            state.inboxArray = action.payload;
        },

        changeViewMail(state, action) {
            state.viewMail = action.payload;
        },

        changeBlueDot(state, action) {
            const index = state.inboxArray.findIndex((item) => {
                return item.id === action.payload;
            });
            const indexItem = state.inboxArray[index];
            const updatedItem = { ...indexItem, read: true };
            state.inboxArray[index] = updatedItem;
        },

        assignUnreadCount(state, action) {
            state.unreadCount = action.payload;
        },
        
        changeUnreadCount(state) {
            state.unreadCount--;
        }
    }

})

export const InboxActions = inboxSlice.actions;

export default inboxSlice.reducer;