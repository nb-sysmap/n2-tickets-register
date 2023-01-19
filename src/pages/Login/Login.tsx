import { OAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../../services/auth-firebase-provider/firebaseConfig'

const provider = new OAuthProvider('microsoft.com')

export default function Login() {
  const auth = getAuth(app)
  function signInMicrosoft() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result)!
        const accessToken = credential.accessToken
        const idToken = credential.idToken
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return <button onClick={signInMicrosoft}>Logar com Microsoft</button>
}
