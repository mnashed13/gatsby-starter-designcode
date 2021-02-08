import React from "react"
// import "./index.css"
// import Auth0Provider from '@auth0/auth0-react'     
// import { BrowserRouter as Router } from "react-router-dom";
// import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";



function Layout({ children }) {
  return (
    // <Auth0Provider
    //   domain="dev-5is3kac4.au.auth0.com"
    //   clientId="nzPOJu9oRZiDf78aUrrMf4GCYxwC4mQQ"
    //   redirectUri={window.location.origin}
    // >

    <>

      {/* <Auth0Provider> */}
      <main>{children}</main>
      {/* </Auth0Provider> */}

    </>
    // </Auth0Provider>
  )
}

export default Layout
