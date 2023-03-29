import { createSlice } from "@reduxjs/toolkit";

const initialuiState = {
    viewMail: {},
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialuiState,
    reducers: {
        changeViewMail(state, action) {
            state.viewMail = action.payload;
        },
      
    }

});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;