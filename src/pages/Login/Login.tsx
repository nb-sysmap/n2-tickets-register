import { OAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../../services/firebase/firebaseConfig'
import { getMicrosoftProfile } from '../../services/microsoftProfile/microsoftProfile';

const provider = new OAuthProvider('microsoft.com')

export default function Login() {
  let profileImg = '';
  
  const auth = getAuth(app)
  function signInMicrosoft() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = OAuthProvider.credentialFromResult(result)!
        const accessToken = credential.accessToken //credential.accessToken
        const user = result.user
        const idToken = user.providerData[0].uid
        console.log(idToken)

        getMicrosoftProfile(accessToken!, idToken!)
        
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <button onClick={signInMicrosoft}>Logar com Microsoft</button>
      <div>
        <img src={profileImg} alt="" />
      </div>
    </>
  )
  
  
}
