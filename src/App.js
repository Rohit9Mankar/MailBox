import SignUpForm from './SignUpPage/SignUpPage';
import { Route, Switch } from 'react-router-dom';
import Compose from './ComposeMail/ComposeMail';


function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <SignUpForm />
      </Route>
      <Route path='/main' exact>
        <h2>Welcome to mail Box client</h2>
      </Route>
      <Route path='/mail'>
        <Compose />
      </Route>
    </Switch>



  );
}

export default App;
