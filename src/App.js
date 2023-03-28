import SignUpForm from './SignUpPage/SignUpPage';
import { Route, Switch } from 'react-router-dom';
import Compose from './ComposeMail/ComposeMail';
import Inbox from './components/Inbox/Inbox';
import Navigation from './components/Navigaton';


function App() {
  return (

    <Switch>
      <Route path='/' exact>
        <SignUpForm />
      </Route>
      <Route path='/main'>
        <Navigation />
      </Route>
      <Route path='/compose'>
        <Compose />
      </Route>
      <Route path='/inbox'>
        <Inbox />
      </Route>


    </Switch>





  );
}

export default App;
