import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../action/authAction";
import GoogleButton from "react-google-button";

export const Oauth = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const login = useGoogleLogin({
    //     onSuccess: async (tokenResponse) => {
    //         await userLogin(tokenResponse.access_token, navigate, dispatch);
    //     }
    // });
    return <GoogleButton onClick={() => (navigate("/Home"))} />;
}