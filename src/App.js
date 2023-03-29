import SignUpForm from './SignUpPage/SignUpPage';
import { Route, Switch } from 'react-router-dom';
import Compose from './ComposeMail/ComposeMail';
import Inbox from './components/Inbox/Inbox';
import Navigation from './components/Navigaton';
import InboxViewMail from './components/Inbox/InboxViewMail';


function App() {
  return (

    <Switch>
      <Route path='/' exact>
        <SignUpForm />
      </Route>
      <Route path='/main'exact>
        <Navigation />
      </Route>
      <Route path='/main/compose'>
        <Compose />
      </Route>
      <Route path='/main/inbox'>
        <Inbox />
        
      </Route>
      <Route path='/viewMail' exact>
        <InboxViewMail />
      </Route>


    </Switch>





  );
}

export default App;
