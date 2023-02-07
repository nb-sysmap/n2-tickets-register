import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from '.'
import Sidebar from '../components/Sidebar/Sidebar'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import { NewTicket } from '../pages/NewTicket/NewTicket'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<PrivateRoutes />}>
            <Route path='/home' element={<Sidebar children={<Home />} />} />
          </Route>
          <Route path='/newticket' element={<PrivateRoutes />}>
            <Route path='/newticket' element={<Sidebar children={<NewTicket />} />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

// import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";

// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // User is signed in.
//     // IdP data available in result.additionalUserInfo.profile.

//     // Get the OAuth access token and ID Token
//     const credential = OAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;
//     const idToken = credential.idToken;
//   })
//   .catch((error) => {
//     // Handle error.
//   });
