import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LogoutBtn.css'

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <div className="Button">
            <button
                onClick={() =>
                    logout({
                        returnTo: window.location.origin,
                    })
                }
            >
                Log Out
        </button>

        </div>
    );
};

export default LogoutButton;