import AccountProvider from './context/AccountProveder';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const clientId = "532397629424-gasgbflc3tnqpmtlkelsr1be5uc590u8.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App
