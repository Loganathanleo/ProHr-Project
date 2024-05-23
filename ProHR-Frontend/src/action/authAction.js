import axios from "axios";
import {
  setAccessToken,
  setComponent,
  setRefreshToken,
} from "./authSlice";

export const userLogin = async (Token, navigate, dispatch) => {
  console.log(Token,"====");
  try {
    const response = await axios.post("", Token, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.data;
    console.log(data,"{}{}{}");
    if (data.message === "User Not Found") {
      dispatch(setComponent(true));
    }
    else{
    dispatch(setAccessToken(data.data.accessToken));
    dispatch(setRefreshToken(data.data.refreshToken));
    navigate("/Home");
    }
  } catch (err) {
    console.log(err);
  }
};