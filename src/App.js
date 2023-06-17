import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Router from './router/Router';

function App() {

  return (
    <GoogleOAuthProvider clientId='620656876914-b8otjdbu1l3013j1rr6ur21v29cr9752.apps.googleusercontent.com'>
      <Router />
    </GoogleOAuthProvider>
  )

}

export default App;
