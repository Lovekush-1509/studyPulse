import { createSlice } from "@reduxjs/toolkit";

let parsedToken = null;
try{
  const storedToken = localStorage.getItem("token");
  parsedToken = storedToken?JSON.parse(storedToken):null;
}catch(e){
  parsedToken = null;
}

const initialState = {
  signupData: null,
  loading: false,
  token: parsedToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
