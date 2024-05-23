import React from "react";
import { Greeting } from "../components/greeting/greeting";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Oauth } from "../components/oAuth/oAuth";

function Login() {
    return (
        <div>
            <div>
                <h1><Greeting /></h1>
            </div>
            <div>
                <h3>Login Please!!!</h3>
                <GoogleOAuthProvider clientId="1027406254238-306kc4jqn1890jendl603k73snkt97bq.apps.googleusercontent.com">
                    <Oauth />
                </GoogleOAuthProvider>
            </div>
        </div>
    );
}

export default Login;