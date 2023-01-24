import { getAuth, OAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { IUserLogged } from "../../@Types/user";
import { app } from "../../services/firebase/firebaseConfig";
//import { getMicrosoftProfile } from "../../services/microsoftProfile/microsoftProfile";
import { AuthContext } from "./AuthContext";

const provider = new OAuthProvider('microsoft.com')

const auth = getAuth(app)

export const AuthProvider = ({ children }: { children: JSX.Element}) => {

  const [ userLogged, setUserLogged ] = useState<IUserLogged>(null!)


  function signInMicrosoft() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result)!
        const accessToken = credential.accessToken!
        const user = result.user

        setUserLogged({
          accessToken: accessToken,
          displayName: user.displayName!,
          email: user.email!
        })

        sessionStorage.setItem("@authFirebase:user", JSON.stringify(user))
        sessionStorage.setItem("@authFirebase:token", accessToken)
        
        // getMicrosoftProfile(accessToken!, idToken!)
        
      })
      .catch((error) => {
        console.log(error)
      })

      return userLogged
  }

  function signOut() {
    sessionStorage.clear();

    setUserLogged(null!)

    return <Navigate to="/" />
  }

  useEffect(() => {

    const loadStoreAuth = () => {
      let  sessionUser = sessionStorage.getItem("@authFirebase:user")
      const  sessionToken = sessionStorage.getItem("@authFirebase:token")

      if (sessionUser && sessionToken) {
        const { displayName, email } = JSON.parse(sessionUser)
        setUserLogged({
          ... userLogged,
          accessToken: sessionToken,
          displayName: displayName,
          email: email
        })
      }
    }

    loadStoreAuth()
  
  }, [])
  

  return (
    <AuthContext.Provider value={{signInMicrosoft, signed: !!userLogged, userLogged, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}