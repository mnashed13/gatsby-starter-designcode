// // import React from 'react'
// // import PropTypes from 'prop-types'
// // import Helmet from 'react-helmet'
// // import { Auth0Provider } from '@auth0/auth0-react'
// // import {
// //   BrowserRouter, withRouter
// // } from "react-router";

// // // import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
// // import './index.css'

// // const Layout = ({ children, data }) => (
// //   // <Auth0ProviderWithHistory>
// //   <BrowserRouter>
// //     <Auth0Provider
// //       domain="dev-5is3kac4.au.auth0.com"
// //       clientId="nzPOJu9oRZiDf78aUrrMf4GCYxwC4mQQ"
// //       // Development Link 
// //       redirectUri="http://localhost:8000"
// //     //Live Server link
// //     // redirectUri="https://peaceful-kare-3e6f76.netlify.app/"
// //     >
// //       <Helmet
// //         title={data.site.siteMetadata.title}
// //         meta={[
// //           { name: 'description', content: 'Sample' },
// //           { name: 'keywords', content: 'sample, something' },
// //         ]}
// //       />
// //       {children()}
// //     </Auth0Provider>
// //   </BrowserRouter>

// // )
// // Layout.propTypes = {
// //   children: PropTypes.func,
// // }
// // export default withRouter(Layout)
// // // export const query = graphql`
// // //   query SiteTitleQuery {
// // //     site {
// // //       siteMetadata {
// // //         title
// // //       }
// // //     }
// // //   }
// // // `




// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import Header from '../components/header'
// import Auth0Provider from '@auth0/auth0-react'
// import '../layouts/index.css'
// // import { compose, graphql } from 'react-apollo'
// const Layout = ({ children, data }) => (
//   <Auth0Provider
//     domain="dev-5is3kac4.au.auth0.com"
//     clientId="nzPOJu9oRZiDf78aUrrMf4GCYxwC4mQQ"
//     redirectUri='http://localhost:8000'
//   >
//     {children()}
//   </Auth0Provider>
// )

// Layout.propTypes = {
//   children: PropTypes.func,
// }

// export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `