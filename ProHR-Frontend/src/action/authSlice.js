import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userInfo: [],
  accessToken: null,
  refreshToken: null,
  message:'',
  component: false,
};


const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      console.log(action.payload);
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setComponent:(state,action)=>{
      state.component = action.payload
      return state
    }
  },
});
export const { setAccessToken, setRefreshToken,setComponent,setMessage } = authSlice.actions;
export default authSlice.reducer;
