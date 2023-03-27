import { createSlice } from "@reduxjs/toolkit";

const initialAuthState={
    token:localStorage.getItem("token"),
    isLoggedIn: false
};

const authSlice=createSlice({
    name: 'auth',
    initialState:initialAuthState,
    reducers:{
        login(state,action){
            state.isLoggedIn=true;
            localStorage.setItem("token",action.payload.token);
            let newEmail=action.payload.email.split('').filter((item)=>{
                return item!=='@' && item!=='.'
            }).join("");
            localStorage.setItem("email",newEmail);
            state.token=action.payload.token;
            
        },
        logout(state){
            localStorage.clear();
            state.token=null;
            state.isLoggedIn=false;
        }
    }

})

export const AuthActions=authSlice.actions;

export default authSlice.reducer;