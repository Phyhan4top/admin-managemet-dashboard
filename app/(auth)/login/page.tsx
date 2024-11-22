
import LoginContextProvider from './_context/loginContext';
import LoginForm from './_form/loginForm';


export default function LoginPage() {
  return (
    <LoginContextProvider>
      <LoginForm/>
    </LoginContextProvider>
  );
}
