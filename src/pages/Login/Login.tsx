import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';



export default function Login() {
  const { signInMicrosoft, signed } = useContext(AuthContext)
  
  if(!signed){
    return (
      <>
        <button onClick={async () => await signInMicrosoft()}>Logar com Microsoft</button>
      </>
    )
  } else {
    return <Navigate to="/home" />;
   
  }
  
  
  
}
