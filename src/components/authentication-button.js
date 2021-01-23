import React from "react";

import LoginButton from './loginButton'
// import LogoutButton from './LogoutButton'

import { useAuth0 } from "@auth0/auth0-react";
import AuthModal from "./Modal";

const AuthenticationButton = () => {
    const { isAuthenticated } = useAuth0();
    return isAuthenticated ? <AuthModal /> : <LoginButton />;
};

export default AuthenticationButton;